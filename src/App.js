import React, { useState } from 'react'
import SingleColor from './SingleColor'
import colorNameToHex from './colorsToHex';
import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#ff0000').all(10));
  const [inputColor,setinputColor]=useState('');
  const handleSubmit = (e)=>{
    let hexcode=colorNameToHex(inputColor);
    e.preventDefault();

    try{
      let colors = new Values(hexcode).all(10);
      setList(colors);
    }catch(error){
      setError(true);
      console.log(error);
    }
    
  }
  
  
  return (
  <>
  <section className='container'>
    <h3>Color Generator</h3>
    <form onSubmit={handleSubmit}>

      <input type='text' 
      value={inputColor} 
      onChange={(e) => setinputColor(e.target.value)}
      className={`${error?'error' : null}`}/>

      <button className='btn' type='submit'>Generate</button>
    </form>
  </section>

  <section className='colors'>
    {list.map((color,index)=>{
      return <SingleColor 
      key={index} 
      {...color} 
      index={index}  />
    })}
  </section>
  </>
)}

export default App
