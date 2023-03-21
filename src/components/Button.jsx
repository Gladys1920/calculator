const Button = ({Classes,handleClick,rows,style,value}) =>{
  return (
  <td rowSpan={rows}>
  <button 
      type='button'
      className={Classes}
      style={style}
      value={value}
      onClick={(e) => handleClick(e)}>{value}</button>
      </td>
  
  )
  
  }
  
  export default Button;
