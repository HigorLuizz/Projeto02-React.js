import  Modal from "react-modal"
import { useState } from "react"
export default function(){
    const [remedies, setRemedies] = useState(JSON.parse(localStorage.getItem('remedios')))
    console.log("lista",remedies)
    const [modalIsOpen, setIsOpen] = useState(false)

    function OpenModal(){
        setIsOpen(true)
    }
    function CloseModal(){
        setIsOpen(false)
    }
    return(
        <>
            {/* {remedies.map((remedio)=> (
                <div className="container">
                    <button onClick={OpenModal}>{remedio.nome}</button>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={CloseModal}
                    contentLabel="example modal"
                    overlayClassName="modal-overlay"
                    className="modal-content">
                        <h1>{remedio.nome}</h1>
                        <hr/>
                        <p>Teste de descricao</p>
                        <button className="botaoCloseModal" onClick={CloseModal}>Fechar</button>
                    </Modal>
                </div>
            ))} */}
        </>
    )
}