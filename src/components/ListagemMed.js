import  Modal from "react-modal"
import { useState } from "react"
export default function(){
    const [remedies, setRemedies] = useState(JSON.parse(localStorage.getItem('remedios')))
    console.log("lista",remedies)

    function OpenModal(id){
        const newRemedies = remedies.map(remedio => {
            return remedio.id === id ? {...remedio, open:!remedio.open} : remedio
        })
        setRemedies(newRemedies);
    }
    function CloseModal(id){
        const newRemedies = remedies.map(remedio => {
            return remedio.id === id ? {...remedio, open:false} : remedio
        })
        setRemedies(newRemedies);
    }
    console.log("lista", remedies)
        if (localStorage.remedios){
            return(
                <div className="bodylista">
                    <input type="email" 
                    className="form-control d-inline" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder='Pesquise um remédio...'/>
                    <div className="cards">
                        {remedies.map((remedio)=> (
                            <div className="container">
                                <h2>{remedio.nome}</h2>
                                <img className="fotoremedio" src="https://la61tzqb21.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg" 
                                alt="Imagem de uma caixa de medicamento genérica"></img>
                                <button onClick={() => OpenModal(remedio.id)}>Ver mais detalhes...</button>
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