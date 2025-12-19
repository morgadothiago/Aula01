import { useState } from 'react'
import './HomeStyle.css'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)


  function handleOpenGetStarted() {
    setModalOpen(true)
  }

  return (
    <div className="container">
     <div className="content">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React application.</p>

      <button className="primary-button" onClick={handleOpenGetStarted
      }>Get Started</button>
     </div>
    
      {
        modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Modal Title</h2>
              <p>This is a modal window.</p>
              <button onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div>
        )
      }
    </div>


  )
}