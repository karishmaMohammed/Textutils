import React, {useState} from 'react'

/*
text = 'hai how are you '//wrong way of changing the state

setText('hai how are you') //correct way of changing state


*/
function TextForm(props) {
    const [text, setText] = useState('');

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const handleLowClick = () => {
    let newtext1 = text.toLowerCase();
    setText(newtext1)
  }

  const clear = () => {
    setText(' ')
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Change to Uppercase</button>

<button className="btn btn-primary mx-2" onClick={handleLowClick}>Change to Lowercase</button>

<button className="btn btn-primary mx-2" onClick={clear}>Clear All</button>
    </div>

    <div className="container">
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Time Required to read</p>
      <h3> Preview </h3>
      <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
