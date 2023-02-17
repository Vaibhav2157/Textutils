import React, { useState } from "react";

export default function TextForms(props) {
  const handleupclick = () => {
    console.log("onclick has been clicked");
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert(" Converted to uppercase!","success ")

  };

  const handleloclick = () => {
    console.log("onclick has been clicked");
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert(" Converted to lowecase!","success ")
  };

  const handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  const handleonclear =()=> {
    let newtext = '';
    setText(newtext)
    props.showalert(" Cleared Text Successfully!","success ")
  }

  const [text, setText] = useState('');

  let vab = <strong>Enter something in above box to Preview</strong>

  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            style={{backgroundColor:props.mode==='dark'?'#12223b':'white',color:props.mode==='dark'?'white':'black'}}
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonchange}

          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='dark'?'dark':'light'} `} onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'light'} mx-2`} onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'light'} mx-2`} onClick={handleonclear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : vab}</p>
      </div>
    </>
  );
}
