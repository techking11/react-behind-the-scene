function Element(props) {
    return ( <p>{props.content}</p> )
}

ReactDOM.render(
    <Element content="A React Component" />,
    document.getElementById("app")
)
