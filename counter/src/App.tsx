import {useState} from 'react'

import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";

function App() {
    const [count, setCount] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(5)
    const [settingsChanged, setSettingsChanged] = useState(false)
    const currentMax = max<=min
    const currentMin = min < 0 || min>=max

    return (
        <div className={"main-container"}>
            <Settings
                setCount={setCount}
                currentMax={currentMax}
                currentMin={currentMin}
                min={min}
                setMin={setMin}
                max={max}
                setMax={setMax}
                setSettingsChanged={setSettingsChanged}
            />
            <Counter
                isSettingsChanged={settingsChanged}
                currentMax={currentMax}
                currentMin={currentMin}
                count={count}
                     setCount={setCount}
                     min={min}
                     max={max}/>

        </div>
    )
}

export default App
