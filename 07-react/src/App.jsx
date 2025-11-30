import Notes from "./components/Notes"

const App = () => {
  localStorage.setItem('user','Hamza') // setItem()
  const value = localStorage.getItem('user') // getItem()
  console.log(value);
  localStorage.setItem('age','20')
  localStorage.removeItem('user') // removeItem()

  const obj = {
    name:"umer",
    age:21,
    role:'designer'
  }
  localStorage.setItem('data',JSON.stringify(obj)) // JSON.stringify()
  const getData = JSON.parse(localStorage.getItem('data')) // JSON.parse()
  console.log(getData)

  // localStorage.clear() // clear all items

  return (
    <div>
      <Notes/>
    </div>
  )
}

export default App
