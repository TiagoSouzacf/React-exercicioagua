import { useState } from 'react'
import './App.css'

function App() {

  const [totalCopos, setTotalCopos] = useState(0)
  const [foto, setFoto] = useState("")
  const [copoMl, setCopoMl] = useState("")
  const [totalMl, setTotalMl] = useState(0)
  const [mensagem, setMensagem] = useState("")
  const meta = 2000
  const [msgDiario, setMsgDiario] = useState("Copo")


  function beber() {
    setTotalCopos(totalCopos + 1)
    setFoto(foto + "🍻")
    setTotalMl(copoMl * (totalCopos + 1))
    setMsgDiario(msgDiario)
    if ((copoMl * (totalCopos + 1) >= meta)) {
      setMensagem(`Parabéns, você bateu sua meta diária de consumo!`)
    }

  }

  function resetar() {
    setTotalCopos(0)
    setFoto("")
    setTotalMl(0)
    setMensagem("")
  }

  return (
    <>
      <div className='topo'>
        <h1>Controle de quantidade de água</h1>

      </div>

      <div className='meiuca'>
        <p>Total de copos: {totalCopos}</p>
        <p>Tamanho do copo: {copoMl}ml</p>
        <p>Total de água consumida: {totalMl} ml</p>
        <p>{mensagem}</p>
        <p>Meta diária: {meta} ml</p>

        <label>Digite a quantidade de ml por copo:
          <input type="number"
            placeholder='Digite a quantidade'
            onChange={(copo) => setCopoMl(copo.target.value)}
            value={copoMl}
          />
        </label>

        <button onClick={beber}>Adicionar copo</button>
        <button onClick={resetar}>Zerar contagem</button>
        <h2>{foto}</h2>

        <h3>Diário de água</h3>
      </div>



    </>
  )
}

export default App
