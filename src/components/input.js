import React, { useState } from "react";

export default function Input(props) {
    const onClickUpButton = () => {
        console.log("The upper case button was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("info", ": Text Changed to Upper Case");
    };
    const onClickDownButton = () => {
        console.log("The lower case button was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("info", ": Text Changed to Lower Case");
    };
    const onClickClearButton = () => {
        console.log("Clear text button clicked");
        let newText = "";
        setText(newText);
        props.ShowAlert("danger", ": Cleared Text Form");
    };
    const onClickRedButton = () => {
        console.log("Color Red Changed");
        let newColor = "red";
        setColor(newColor);
        props.ShowAlert("info", ": Text Color Changed to Red");
    };
    const onClickBlackButton = () => {
        console.log("Black button clicked");
        let newColor = "black";
        setColor(newColor);
        props.ShowAlert("info", ": Text Color Changed to Black");
    };
    const onClickWhiteButton = () => {
        console.log("White button Clicked");
        let newColor = "white";
        setColor(newColor);
        props.ShowAlert("info", ": Text Color Changed to WHite");
    }
    const HandelCopy = () => {
        let text = document.querySelector("#Text");
        text.select(); // to show what you selected
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("info", ": Text Copied");
    };
    const RemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.ShowAlert("info", ": Extra Spaces Removed");
    }
    const modeClick = () => {
        console.log("Mode Clicked");
        if (Mode.color === "white") {
            let MyStyle = {
                color: "black",
                backgroundColor: "white",
            };
            let inputStyle = ({
                backgroundColor: "#F9EFDB",
                color: "black"
            });
            setMode(MyStyle);
            setInputMode(inputStyle);
            setBtn("Enable Dark Mode");
            props.ShowAlert("success", ": Mini-Light Mode has been enables");

            setColor("black");
        } else {
            let MyStyle = {
                color: "white",
                backgroundColor: "black",
            };
            let inputDarkStyle = ({
                backgroundColor: "#31363F",
                color: "white"
            });
            setInputMode(inputDarkStyle);
            setMode(MyStyle);
            setBtn("Enable Light Mode");
            props.ShowAlert("success", ": Mini-Dark Mode has been enables");
            setColor("white");
        }
    };

    const handelOnChange = (event) => {
        console.log("The change happen in text field !!");
        setText(event.target.value);
    };
    const [text, setText] = useState("Enter a text"); // Text
    // const [textColor, setTextColor] = useState("black"); // Text Color
    // const [Mode, setMode] = useState(MyStyle);
    const [Mode, setMode] = useState({
        color: "black",
        backgroundColor: "White",
    });
    const [InputMode, setInputMode] = useState({
        color: "black",
        backgroundColor: "#F9EFDB",
    });
    const [btn, setBtn] = useState("Enable Dark Mode");
    const [Color, setColor] = useState("black");
    // setText("HEllo");
    // setText("NewText");
    return (
        <div id="INPUT" style={Mode} className="my-5">
            <div className="mb-3">
                <button onClick={modeClick} className="btn btn-primary my-3">
                    {btn}
                </button>
                <h1>{props.title}</h1>
                <textarea
                    style={{ ...InputMode, color: Color }}
                    className="form-control"
                    id="Text"
                    value={text}
                    onChange={handelOnChange}
                    rows="10"
                ></textarea>
            </div>
            <div id="BTNS">
                <button className="btn btn-primary mx-4" onClick={onClickUpButton}>
                    Upper Case
                </button>
                <button className="btn btn-primary mx-4" onClick={onClickDownButton}>
                    Lower Case
                </button>
                <button className="btn btn-primary mx-4" onClick={onClickRedButton}>
                    Red Color
                </button>
                <button className="btn btn-primary mx-4" onClick={onClickBlackButton}>
                    Black Color
                </button>
                <button className="btn btn-primary mx-4" onClick={onClickWhiteButton}>
                    White Color
                </button>
                <button className="btn btn-primary mx-4" onClick={RemoveSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-primary mx-4" onClick={HandelCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-4" onClick={onClickClearButton}>
                    Clear Text
                </button>
            </div>
            <div className="About my-3">
                <h1>About Your Text</h1>
                <p>
                    --{text.split(" ").length} words and {text.length} characters
                </p>
                <p>
                    --The average time to read this will be:{" "}
                    {0.008 * text.split(" ").length} minutes
                </p>
            </div>
            <div className="pre">
                <h2 id="pre1">Preview</h2>
                <p id="pre2" style={{ color: Color }}>
                    {text}
                </p>
            </div>
        </div>
    );
}
