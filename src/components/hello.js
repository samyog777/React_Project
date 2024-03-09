import React from "react";

const Hello = (props) => {
    console.log(props.name);
    return <div>
        <h1>Hello {props.name} a.k.a {props.superheroName}</h1>
        {props.children}
        h1
    </div>
    // return React.createElement("div", null, React.createElement("h1", null, "Hello World"));

    // return React.createElement(
    //     "div",
    //     null,
    //     React.createElement(
    //         "div",
    //         { id: "Hello", className: "Hey" },
    //         React.createElement("h1", null, "hello world"),
    //         React.createElement("h2", null, "WOW"),
    //         React.createElement("p", null, "hahaha")
    //     )
    // );
};

export default Hello;
