import './App.css'
import UseRef from './components/UseRef'
import { BrowserRouter } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <UseRef/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
