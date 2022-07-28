import React from "react"; //  should always be imported in all files(modules)
import ReactDOM from "react-dom";
import data from "../data/recipes.json"; // gotten JSON
import Menu from "./components/Menu";

// rendering
ReactDOM.render(<Menu recipes={data} />, document.getElementById("root"));
