import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h2>Title of react</h2>
);
const num = 10;
const HeadingComponent = () => (
    <div>
        <Title/>
        <p>{num}</p>
        <h1>Namaste js from functional component</h1>
    </div>
);

const jsx = <h1>Hello from jsx</h1>
console.log(jsx);
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(<HeadingComponent/>);
root2.render(<Title/>);