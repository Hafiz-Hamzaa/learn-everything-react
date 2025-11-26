import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="card-row">
        <Card src = "https://plus.unsplash.com/premium_photo-1670090780560-bcb7ee7da281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D" user = "Hafiz Hamza" desc = "This is Hamza" btn = "View Profile"/>
        <Card src = "https://images.unsplash.com/photo-1559893088-c0787ebfc084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D" user = "Zaid Ali" desc = "This is Zaid" btn = "View Portfolio"/>
        <Card src = "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww" user = "Umer Irfan" desc = "This is Umer" btn = "View Website"/>
      </div>
    </>
  );
}

export default App;
