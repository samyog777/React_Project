import React, { useState } from 'react'

export default function Input(props) {
    const onClickUpButton = () => {
        console.log("The upper case button was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onClickDownButton = () => {
        console.log("The lower case button was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onClickClearButton = () => {
        console.log("Clear text button clicked");
        let newText = "";
        setText(newText);
    }
    const onClickRedButton = () => {
        console.log("Color Red Changed");
        let newColor = ("red");
        setTextColor(newColor);
    }
    const onClickBlackButton = () => {
        console.log("Blue button clicked");
        let newColor = "blue";
        setTextColor(newColor);
    }

    const modeClick = () => {
        console.log("Mode Clicked");
        if (Mode.color === "white") {
            let MyStyle = {
                color: "black",
                backgroundColor: "white"
            };
            setMode(MyStyle);
            setBtn("Enable Dark Mode")
        } else {
            let MyStyle = {
                color: "white",
                backgroundColor: "black"
            };
            setMode(MyStyle);
            setBtn("Enable Light Mode")
        }
    }

    const handelOnChange = (event) => {
        console.log("The change happen in text field !!");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter a text"); // Text 
    const [textColor, setTextColor] = useState("blue"); // Text Color
    // const [Mode, setMode] = useState(MyStyle);
    const [Mode, setMode] = useState({
        color: "black",
        backgroundColor: "White"
    });
    const [btn, setBtn] = useState("Enable Dark Mode");
    // setText("HEllo");
    // setText("NewText");
    return (
        <div id="INPUT" style={Mode} className='my-5'>
            <div className="mb-3">
                <button onClick={modeClick} className="btn btn-primary my-3">{btn}</button>
                <h1>{props.title}</h1>
                <textarea style={{ ...Mode, color: textColor }} className="form-control" id="INPUT" value={text} onChange={handelOnChange} rows="10"></textarea>
            </div>
            <div id='BTNS'>
                <button className="btn btn-primary mx-4" onClick={onClickUpButton}>Upper Case</button>
                <button className="btn btn-primary mx-4" onClick={onClickDownButton}>Lower Case</button>
                <button className="btn btn-primary mx-4" onClick={onClickRedButton}>Red Color</button>
                <button className="btn btn-primary mx-4" onClick={onClickBlackButton}>Blue Color</button>
                <button className="btn btn-primary mx-4" onClick={onClickClearButton}>Clear Text</button>
            </div>
            <div className="About my-3">
                <h1>About Your Text</h1>
                <p>--{text.split(" ").length} words and {text.length} characters</p>
                <p>--The average time to read this will be: {0.008 * text.split(" ").length} minutes</p>
            </div>
            <div className="pre">
                <h2 id='pre1'>Preview</h2>
                <p id='pre2' style={{ color: textColor }}>{text}</p>
            </div>
        </div>
    );
}
