import { useState } from 'react';
import './App.css'

const buttonsClasses ='btn btn-primary w-75 mt-2';

function App() {
   const [screen, setScreen] = useState('0');

   const handleButtonClick = (e) => {
    const value = e.target.value;
    if (value === '.'){
      if (screen.indexOf('.') !== -1) return;
    }
    
    if(value ==='C') {
      setScreen('0');
      return;
    }
    if (screen === '0' && value !== '.'){
      setScreen(value);

    }else{
      setScreen(`${screen}${value}`);
    }
};

const handleDelButtonClick = () => {
  if (screen.length === 1) {
    setScreen('0');
    return;
 }
 setScreen(screen.slice(0, -1));
}

  return (
    <div className='app'>
  <h1>Calculator</h1>
  <h1 />
  <table style={{
     width: '400px',
     margin:'auto'
     }}>
   <tr > 
   <td colSpan={4} style={{
    border: '1px solid black',
    textAlign: 'end'
   }}>
    <h2>{screen}</h2> 
   </td>
   </tr>
   <tr>
   <td><button type='button'
   className={buttonsClasses}
   value='C' 
   onClick={(e) => handleButtonClick(e)} 
   > C </button></td>
   <td><button type='button'
   className={buttonsClasses}> / </button></td>
   <td><button type='button'
   className={buttonsClasses}> * </button></td>
   <td><button type='button'
   className={buttonsClasses}> - </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className={buttonsClasses}
   value='7' 
   onClick={(e) => handleButtonClick(e)} 
   > 7 </button></td>
   <td><button type='button'
   className={buttonsClasses}
   value='8' 
   onClick={(e) => handleButtonClick(e)} 
   > 8 </button></td>
   <td><button type='button'
   className={buttonsClasses}
   value='9'
   onClick={(e) => handleButtonClick(e)}
   > 9 </button></td>
   <td rowSpan={2}><button type='button'
   className={buttonsClasses} style={{height: "85px"}}> + </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className={buttonsClasses}
   value='4' 
   onClick={(e) => handleButtonClick(e)} 
   > 4 </button></td>
   <td><button type='button'
   className={buttonsClasses}
   value='5' 
   onClick={(e) => handleButtonClick(e)} 
   > 5 </button></td>
   <td><button type='button'
   className={buttonsClasses}
   value='6' 
   onClick={(e) => handleButtonClick(e)} 
   > 6 </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className={buttonsClasses}
   value='1' 
   onClick={(e) => handleButtonClick(e)} 
   > 1 </button></td>
   <td><button type='button'
   className={buttonsClasses}
   value='2' 
   onClick={(e) => handleButtonClick(e)} 
   > 2 </button></td>
   <td><button type='button'
   className={buttonsClasses}
   value='3' 
   onClick={(e) => handleButtonClick(e)} 
   > 3 </button></td>
   <td rowSpan={2}><button type='button'
   className={buttonsClasses} style={{height: "85px"}} > = </button></td>
   </tr>
   <tr>
   <td><button type='button'
   className={buttonsClasses}
   onClick={handleDelButtonClick}
   > DEL </button></td>
   <td><button type='button'
   className={buttonsClasses}
   value='0' 
   onClick={(e) => handleButtonClick(e)} 
   > 0 </button></td>
   <td>
   <button type='button'
   className={buttonsClasses}
   value='.'
   onClick={(e) => handleButtonClick(e)}
   > . </button>
   </td>
   </tr>
   
  </table>
</div>
  )
}  

export default App;

//se usara una tbla como base y se va a construir la calculadora
//se hara una de componentes 
