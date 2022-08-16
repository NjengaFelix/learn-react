/*
Imparative
How should it be done?
Describes every step on how something should be done 
Vanilla JS is imparative (i.e.,)
const h1 = document.createElement(h1);
h1.className = "header";
h1.textContent = "Vanilla JS is imparative";
document.getElementById("root").append(h1);
console.log(h1);
*/
/*
Declarative
What should be done?
React simply requires the programmer to define what should be done
as shown below
*/

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
            <a className="navbar-brand" href="#">Navbar</a>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <h1>I'm Learning React</h1>
    ) 
}
//Adding two reactComponents to the root div
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)