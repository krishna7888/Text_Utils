import React, { useState } from 'react';

export default function Texttaker(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase()); // Update state with uppercase text
  };
  const handleDownClick=()=>{
    setText(text.toLowerCase());
  };
  const handleClearClick=()=>{
    setText("");
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div>
          <textarea id="text" value={text} onChange={handleChange} placeholder="Enter the text Here"> </textarea>
        </div>
        <div className='button-group'>
        <button className='btn' onClick={handleUpClick} >Convert into upper case</button>
        <button className='btn' style={{ marginLeft: '2vh' }} onClick={handleDownClick}> Convert into lower case</button>
        <button className='btn' style={{ marginLeft: '2vh' }} onClick={handleClearClick}> Clear the text</button>
        </div>
      </div>
      <div>
        <h1 style={{color:'black'}}>
          <summary>This is the summary of my text</summary>
        </h1>
        <p style={{color:'black'}}> <strong  >Our text has:</strong>{text.split(" ").length-1} <strong>words </strong> and {text.length} <strong>Charcters</strong></p>
        <p style={{color:'black'}}><strong>Preview of text is:</strong>{text}</p>
      </div>
    </>
  );
}
