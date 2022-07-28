
import React, { useState } from 'react'

export default function Textform(props) {
    // coorect way to update-  setText("new");
    let styleop ={
        position : 'relative',
        right : '1120px'
    }
    const upclick = () => {
        console.log("hello");
        setText("Great click");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted To Uppercase","success")
    }
    const lowclick = () => {
        console.log("hello");
        setText("Great click");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted To Lowercase","success")
    }
    const clearclick = () => {
        let newtext = '';
        setText(newtext);
        props.showalert("Textarea Cleared","success")
    }
    const handlecopy = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard","success")

    }
    const handlespaces = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showalert("Extra Spaces Removed","success")
    }
    const upchange = (event) => {
        console.log("omchangge");
        setText(event.target.value)
    }
    const [text, setText] = useState('Case Converter APP');
    return (
        <>

            <div className='container'  style={{color : props.mode ==='light'?'black':'white'}}  >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label for=" mybox" className="form-label">Analyse </label>
                    <textarea className="form-control" value={text} onChange={upchange} id="mybox" rows="13"></textarea>
                </div>
                <button className="btn btn-primary  mx-2 my-2" onClick={upclick} >Convert To uppercase</button>

                <button className="btn btn-warning mx-2 my-2" onClick={lowclick} >Convert To lowercase</button>
                <button className="btn btn-success  mx-2 my-2" onClick={clearclick} > Reset Textarea </button>
                <button className="btn btn-success mx-2 my-2" onClick={handlecopy} > Copy Textarea </button>
                <button className="btn btn-success mx-2 my-2" onClick={handlespaces} > Remove Extra Spaces</button>
            </div>
            <br/>
            
            <div className="container my-3" style={{color : props.mode ==='light'?'black':'white'}}  >
                <h3> Characters Typed </h3>
                <p><b>{text.trim().length === 0 ? 0 : text.trim().split(" ").length}</b> words <b>{text.trim().length}</b> Characters</p>
                <p><b>{0.008 * text.trim().length === 0 ? 0 : text.trim().split(" ").length}</b> Mintues to read the paragraph</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    )
}
