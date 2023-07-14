import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to upper case", "success");
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to lower case", "success");
  }
  const handleclearClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newtext='';
    setText(newtext)
    props.showAlert("Text cleared", "success");
  }
  const handleExtraSpace = () =>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra spaces removed", "success");
  }
  const handleCopy = () =>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard", "success");
  }

  const handleonChange = (event) =>{
    setText(event.target.value);
  }
  const [text, setText]= useState('')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1 >{props.heading}</h1>
        <div className="mb-3" >  
          <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>
    </div>
    
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minites to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>  
    </>
  )
}
