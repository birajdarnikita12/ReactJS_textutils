import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("uppercase is clicled "+ text);
        let newText = text.toUpperCase();                                                               
        setText(newText);
    }
    const handleLoClick = () =>{
      let newText = text.toLowerCase();                                                               
      setText(newText);
    }
    const handleClearText = () =>{
      let newText = '';                                                               
      setText(newText);
    }
    const handleOnchange = (event) =>{
        // console.log("onchange");
        setText(event.target.value);
    }
    const handleCopy = () =>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpacces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnchange} value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white': 'black'}}  rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary' onClick={handleExtraSpacces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> 
      <h2>Your text summary</h2>
      
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
