import React, { useEffect, useState } from 'react'
import axios from 'axios';

// const Msg = () => {
//   const [msgs, setMsgs] = useState([]);
//
//   useEffect(() => {
//     axios.get('http://localhost:8080/')
//       .then(response => {
//         setMsgs(response.data);
//       })
//       .catch(error => {
//         console.error('Erro: ', error);
//       });
//   }, []);
// }

function App() {
  const [msgs, setMsgs] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/message')
      .then(response => {
        setMsgs(response.data);
      })
      .catch(error => {
        console.error('Erro: ', error);
      });
  }, []);
  return (
    <div className="App">
      <h1>{msgs}</h1>
    </div>
  );
}

export default App;
