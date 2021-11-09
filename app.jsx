const Fruit = ({ fruit }) => {

    const [ val, setVal ] = React.useState("")
    const [ shouldShowInput, setShouldShowInput ] = React.useState(false)

    const toggle = () => setShouldShowInput(!shouldShowInput)

    return (
        <div className="card">
            {
                <h4>
                    {
                        shouldShowInput ?
                        <input type="text" value={val} onChange={event => setVal(event.target.value)}/> :
                        <span>{ fruit.name }</span>
                    }
                    - (color: { fruit.color })
                </h4>
            }
            <button onClick={toggle}>{ shouldShowInput ? "Cancel" : "Edit" }</button>
        </div>
    )
}

const App = () => {

    const [ val, setVal ] = React.useState("")

    const [ fruits, setFruits ] = React.useState([
        { name: "alma", color: "red" },
        { name: "körte", color: "yellow" },
        { name: "szilva", color: "purple" }
    ])

    const clickHandler = () => {
        setFruits([ ...fruits, { name: val, color: "unknown" } ])
        setVal("")
    }

    return (
        <div id="app-container">
            <input type="text" value={val} onChange={(event) => setVal(event.target.value)}/>

            <button onClick={clickHandler}>Click me</button>

            { fruits.map(fruit => <Fruit fruit={fruit}/> ) }
        </div>
    )
}