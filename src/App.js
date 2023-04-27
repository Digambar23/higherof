
import './App.css';

const arr =["play cricket","play vidioe game","play chess"]
function App() {
  console.log("Hello World")
  return (
    <div className="App">
      <ul>
        {
          arr.map((el)=>
          {
            return
            <li>{el}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
