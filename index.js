//React Global variable
//Render(What to render,Where to render it)
// ReactDOM.render(<h1>Hello Everyone</h1>,document.getElementById("root"))

//QuerySelector includes # for the id
// ReactDOM.render(<h1>New chapter</h1>,document.querySelector("#root"))

ReactDOM.render(
    <ul>
        <li>Ford</li>
        <li>Pagani</li>
    </ul>,
    document.getElementById("root")
)