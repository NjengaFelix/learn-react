//Javascript XML which was created by React
//HTML in Javascript

const navbar = (
    <nav>
        <h1>My Brand</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// ReactDOM.render(navbar,document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(nav)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)