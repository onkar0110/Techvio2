import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case","success")
  }
  const handleLoClick=()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case","success")
  }

  const clearText=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleared","success")
  }
  
  const handleOnChange =(event)=>{
    console.log("OnChange")
    setText(event.target.value)
  }
  const [text, setText] = useState(" ");
  
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    </div>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='light'?'white':'#5c2a2a'
        ,color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="7"></textarea>
  
   
    <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-3 my-3" onClick={clearText}>CLear text</button>
  </div>
  <div className="container my-3 "style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length } Miuntes for reading</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text above to preview it here"}</p>
  </div>
  </>


  )
}

