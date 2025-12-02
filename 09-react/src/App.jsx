import { useEffect, useState } from "react"

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChange() {
    console.log('A ki value change hogai')
  }
  function bChange() {
    console.log('B ki value change hogai')
  }

  // On Mount
  useEffect(() => {
    console.log('Component load ho gaya, sirf ek dafa chalega')
  }, [])

  // When a changes
  useEffect(() => {
    aChange()
  }, [a])

  // When b changes
  useEffect(() => {
    bChange()
  }, [b])

  return (
    <>
      <h1>On Mount run at least once</h1>
      <h2>State Change per Chalna</h2>
      <h2>Num a: {a}</h2>
      <h2>Num b: {b}</h2>
      <button onClick={() => setA(a + 1)}>Change a</button>
      <button onClick={() => setB(b + 1)}>Change b</button>
    </>
  )
}

export default App
