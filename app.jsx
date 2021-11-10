const Fruit = ({ fruit, onSave }) => {

    const [ val, setVal ] = React.useState(fruit.name)
    const [ shouldShowInput, setShouldShowInput ] = React.useState(false)

    const toggle = () => setShouldShowInput(!shouldShowInput)

    const save = () => {
        onSave(fruit.id, val)
        setShouldShowInput(false)
    }

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

            { shouldShowInput && <button onClick={save}>Save</button> }
            { shouldShowInput && <button onClick={() => setVal(fruit.name)}>Reset</button> }
        </div>
    )
}

const App = () => {

    const [ val, setVal ] = React.useState("")

    const [ fruits, setFruits ] = React.useState([
        { id: getId(), name: "alma", color: "red" },
        { id: getId(), name: "körte", color: "yellow" },
        { id: getId(), name: "szilva", color: "purple" }
    ])

    const clickHandler = () => {
        setFruits([ ...fruits, { id: getId(), name: val, color: "unknown" } ])
        setVal("")
    }

    const updateFruit = (id, newName) => {
        setFruits(fruits.map(fruit => fruit.id === id ? { ...fruit, name: newName } : fruit))
    }

    return (
        <div id="app-container">
            <input type="text" value={val} onChange={(event) => setVal(event.target.value)}/>

            <button onClick={clickHandler}>Add</button>

            { fruits.map(fruit => <Fruit key={fruit.id} fruit={fruit} onSave={updateFruit}/> ) }
        </div>
    )
}