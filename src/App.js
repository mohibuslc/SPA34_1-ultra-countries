  import logo from './logo.svg';
  import './App.css';
  import {useState , useEffect} from 'react';


  function App() {


  const [countries , setCountries] = useState([]);

  useEffect(()=>{


fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data =>{ 
  
setCountries(data);
console.log(data);
const name = data.map(ct => ct.name)
console.log(name);

})

    
  },[])
    return (
      <div className="App">

        


        <h1> Country Loaded : {countries.length}</h1>

        <ul>


          {

              countries.map( ct => <li>{ct.name}</li>)

          }
        </ul>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  export default App;
