import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setbackendData] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setbackendData(data))
  }, [])

  return (
    <div>
    {(!backendData || !backendData.users) ? (
      <p>Loading...</p>
    ) : (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )}
  </div>

  )}

export default App