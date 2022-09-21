import  Modal from "react-modal"
import { useState } from "react"
import { useEffect } from "react"
export default function(){
    Modal.setAppElement("#root")
    const [remedies, setRemedies] = useState(JSON.parse(localStorage.getItem('remedios')))
    if(remedies === null){
        setRemedies([])
    }
    
    const [pesquisa, setPesquisa] = useState("")

    const [remediosfiltered, setRemediosFiltrados] = useState(remedies)

    function OpenModal(id){
        const newRemedies = remediosfiltered.map(remedio => {
            return remedio.id === id ? {...remedio, open:!remedio.open} : remedio
        })
        setRemediosFiltrados(newRemedies);
    }
    function CloseModal(id){
        const newRemedies = remediosfiltered.map(remedio => {
            return remedio.id === id ? {...remedio, open:false} : remedio
        })
        setRemediosFiltrados(newRemedies);
    }
    useEffect(() => {
        setRemediosFiltrados(
            
            remedies.filter(item => {
                if (
                    (item.nome.toLocaleLowerCase()).indexOf(pesquisa.toLocaleLowerCase()) !== -1 ) {
                    return item;
                }
            })
        )
    }, [pesquisa])
        if (localStorage.remedios){
            return(
                <div className="bodylista">
                    <input type="text" 
                    className="form-control d-inline" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder='Pesquise um remédio...'
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}/>
                    <div className="cards">
                        {remediosfiltered.map((remedio)=> (
                            <div className="container">
                                <h2>{remedio.nome}</h2>
                                <img className="fotoremedio" src="https://cdn-icons-png.flaticon.com/512/1810/1810119.png" 
                                alt="Imagem de uma caixa de medicamento genérica"></img>
                                <button className="btndetalhes" onClick={() => OpenModal(remedio.id)}>Mais detalhes...</button>
                                <Modal
                                isOpen={remedio.open}
                                onRequestClose={CloseModal}
                                contentLabel="example modal"
                                overlayClassName="modal-overlay"
                                className="modal-content">
                                    <h1>{remedio.nome}</h1>
                                    <hr/>
                                    <p><b>Laboratório: </b>{remedio.nomeLab}</p>
                                    <p><b>Dosagem: </b>{remedio.dosagem}</p>
                                    <p><b>Preço:</b> R${remedio.preco}</p>
                                    <p><b>Tipo:</b> {remedio.tipo}</p>
                                    <h4>Descrição</h4>
                                    <p>{remedio.descricao}</p>
                                    <button className="botaoCloseModal" onClick={() => CloseModal(remedio.id)}>Fechar</button>
                                </Modal>
                            </div>
                        ))}
                    </div>
                </div>
            )
            
        }
}