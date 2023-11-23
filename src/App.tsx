import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Swal from 'sweetalert2'

function App() {

  function ApiCall() {
      const URL = import.meta.env.VITE_API_URL;
      axios.get(URL).then( res => {
        console.log(res.data);
      }).catch( () => {
        Swal.fire({
          title: "Error",
          text: "Uhh... It looks like the api aren't responding :(",
          icon: "error",
          confirmButtonText: "Okay... i guess?"
        })
      });
      
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => ApiCall()}>
          Api call
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
