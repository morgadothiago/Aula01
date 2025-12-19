import { useState } from 'react'

import './App.css'

// Aqui Aprendemos a usar o useState do React

export  function Aula1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ola Mundo</h1>

      <p style={
        {
          fontSize:32
        }
      }>Valor do meu {count}</p>
    

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 20
      }}>
        <button onClick={() => setCount(count + 1)}> {/* Atualiza o estado com o count + 1 */}
        Incrementar
      </button>

      <button onClick={() => setCount(count - 1)}> {/* Atualiza o estado com o count - 1 */}
        Decrementar
      </button>
      </div>
    </>
  )
}

