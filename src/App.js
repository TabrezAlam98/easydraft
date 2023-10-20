import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Button from '@mui/material/Button';

function TextItem(props){

  return (
    <div>
      <p>
        Name: {props.names[props.index]}
      </p>
      <p>
        Age: {props.ages[props.index]}
      </p>
      <Button onClick={()=>props.updateDetails(props.names[props.index], props.age, props.index)}>Reset Details</Button>
    </div>
  )
}


function App() {
  const [names, setNames] = useState(["Hello"])
  const [ages, setAges] = useState([23])

  const [details,setDetails]=useState(names,ages)



  function addItem(){

    const payload={
      names:names,
      ages:ages
    }
    names.push(Math.random().toString(36).substring(2,7))
    ages.push(Math.floor(Math.random() * 100))
   
    setDetails([...details,payload])
  }
console.log(details)
  function updateDetails(name, age, index){
    // Remove current name and replace with blank
    let currentName = names[index]
    let currentAge = ages[index]
    let namearray = names.filter(item=>item!=name)
    let agearray = ages.filter(item=>item!==age)
    setNames("")
    namearray.push("")
    agearray.push("")
    
    
  }

  //Whenever name is updated, print it
  // console.log(names)
  useEffect(()=>{
    console.log(details)
  },[addItem])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to the EazyDraft test application.
        </p>
        <div onClick={addItem}>Click to add a field</div>
        {
          details.map((name, index)=><TextItem names={names} ages={ages} index={index} updateDetails={updateDetails}/>)
        }
      </header>
    </div>
  );
}

export default App;
