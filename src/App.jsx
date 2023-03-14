import { useState } from 'react';
import './App.css'

const buttonsClasses = 'btn btn-primary w-75 mt-2';
//valores que nunca van a varias
function App() {
//valores que si van a variar
//usestate va validar el variable del estado
   const [screen, setScreen] = useState('0');
   const handelButtonClick = () => {
    if (screen === '0') {
      setScreen('9');
    } else{
      setScreen(`${screen}9`);
    }
   }
  return (
     <div className='app'>
    <h1>Calculator</h1>
    <h1 />
    <table style={{
       widh: '400px',
       margin: 'auto'
  }}>
    <tr>
    <td colSpan={4} style={{
      border: '1px solid black',
      texAlign: 'end'
    }}>
     <h2>{screen}</h2>
    </td>
    </tr>

    <tr>
      <td><button type='button'
      className={buttonsClasses}> C </button></td>
      <td><button type='button'
      className= {buttonsClasses}> / </button></td>
      <td><button type='button'
      className={buttonsClasses}> * </button></td>
      <td><button type='button'
      className={buttonsClasses}> - </button></td>
    </tr>

    <tr>
    <td><button type='button'
      className={buttonsClasses}> 7 </button></td>
      <td><button type='button'
      className={buttonsClasses}> 8 </button></td>
      <td><button type='button'
      onClick={handelButtonClick}
      className={buttonsClasses}> 9 </button></td>
      <td rowSpan={2}><button type='button'
      className={buttonsClasses} style={{height:"85px"}}> + </button></td>
      
  
    </tr>

    <tr>
      <td><button type='button'
      className={buttonsClasses}> 4 </button></td>
      <td><button type='button'
      className={buttonsClasses}> 5 </button></td>
      <td><button type='button'
      className={buttonsClasses}> 6 </button></td>
    </tr>

    <tr>
    <td><button type='button'
      className={buttonsClasses}> 1 </button></td>
      <td><button type='button'
      className={buttonsClasses}> 2 </button></td>
      <td><button type='button'
      className={buttonsClasses}> 3 </button></td>
      <td rowSpan={2}><button type='button'
      className={buttonsClasses} style={{height:"85px"}}> = </button></td>
    </tr>
      <tr>
    
    <td>
      <button 
         type='button'
         className={buttonsClasses}
         > DEL </button>
    </td>
    
    <td ><button type='button'
      className=  {buttonsClasses}
      > 0 </button></td>
    <td>
    <button type='button'
    className={buttonsClasses}> . </button>
    </td>
    </tr>

    </table>
  </div>
    )

  }
  
export default App;


//se usara una tbla como base y se va a construir la calculadora
//se hara una de componentes 
