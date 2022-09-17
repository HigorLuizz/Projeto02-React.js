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
                <>
                    {remedies.map((remedio)=> (
                        <div className="container">
                            <button onClick={() => OpenModal(remedio.id)}>{remedio.nome}</button>
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
                </>
            )
            
        }
}