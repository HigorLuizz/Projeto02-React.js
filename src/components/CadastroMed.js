import { useState, useEffect  } from "react"
import ItemFormulario from "./ItemFormulario"
export default function CadastroMedicamentos(){
    const [remedy, setRemedy] = useState({
        nome:'',
        nomeLab:'',
        dosagem:'',
        descricao:'',
        preco:'',
        tipo:''
    })
    const [remedies, setRemedies] = useState(JSON.parse(localStorage.getItem('remedios')))
    if(remedies === null){
        setRemedies([{
            nome:'Ibuprofeno - Medicamento Pré-Cadastrado',
            nomeLab:'LabJoinville',
            dosagem:'100mg',
            descricao:'Esse remédio é usado para inflamações',
            preco:'R$20',
            tipo:'Medicamento Comum'
        }])
    }
    useEffect(() => {
        if(remedies.length>=1){
            localStorage.setItem('remedios', JSON.stringify(remedies))
        }
    }, [remedies])
    function CadastrarMed(){
        const remedioComID = {...remedy, id: Math.random()}
        setRemedies([...remedies, remedioComID]);
        alert('Medicamento cadastrado com sucesso!')
    }
    function LimparForm(){
        setRemedy({
            nome:'',
            nomeLab:'',
            dosagem:'',
            descricao:'',
            preco:'',
            tipo:''
        })
    }
    console.log(remedies)
    return(
        <>
            <h1>Cadastro de Novo Remédio</h1>
            <div className="row">
                <ItemFormulario
                label={"Medicamento"}
                placeholder="Digite o nome do medicamento"
                value={remedy.nome}
                name="nome"
                setInfo={setRemedy}
                colnumber="col-6"
                />
                <ItemFormulario
                label={"Laboratório"}
                placeholder="Digite o nome do laboratório"
                value={remedy.nomeLab}
                name="nomeLab"
                setInfo={setRemedy}
                colnumber="col-6"
                />
            </div>
            <div className="row">
                <ItemFormulario
                label={"Dosagem"}
                placeholder="Digite a dosagem"
                value={remedy.dosagem}
                name="dosagem"
                setInfo={setRemedy}
                colnumber="col-4"
                />
                <div className="col-4">
                    <label className="form-label">Tipo do Medicamento</label>
                    <select className="form-select" id="autoSizingSelect"
                    value={remedy.tipo}
                    onChange={(e) => setRemedy({ ...remedy, tipo: e.target.value })}>
                        <option selected >Tipo do Medicamento...</option>
                        <option value="Controlado">Medicamento controlado</option>
                        <option value="Comum">Medicamento comum</option>
                    </select>
                </div>
                <ItemFormulario
                label={"Preço Unitário"}
                placeholder="Digite o preço unitário"
                value={remedy.preco}
                name="preco"
                setInfo={setRemedy}
                colnumber="col-4"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Descrição do Medicamento</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"
                value={remedy.descricao}
                onChange={(e) => setRemedy({ ...remedy, descricao: e.target.value })}></textarea>
            </div>
            <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary" onClick={LimparForm}>
              Limpar Formulário
            </button>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={CadastrarMed}
            >
              Cadastrar
            </button>
          </div>
        </div>
            {console.log(remedy)}
        </>
    )
}