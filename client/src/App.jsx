import { useState } from 'react'
import ChatBox from './pages/ChatBox';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  const [logged, setLogin] = useState(true);

  return (
    <div className="App">
      {
        !logged 
        ?
        <Login />
        :
        <ChatBox />
      }
    </div>
  )
}

export default App
