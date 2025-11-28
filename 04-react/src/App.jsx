function App() {

  const handleClick = () => {
    console.log("clicked!");
  };

  const handleDoubleClick = () => {
    console.log("Button is Clicked");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Hello Guys!</h1>

      <button onClick={handleClick}>Click Here</button>
      
      <button onDoubleClick={handleDoubleClick}>Clicked Please</button>

      <input 
        type="text" 
        placeholder="Type...." 
        onChange={handleChange} 
      />
    </div>
  );
}

export default App;

