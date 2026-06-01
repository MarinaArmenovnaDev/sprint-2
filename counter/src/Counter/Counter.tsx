import s from "./Counter.module.css"
import {Button} from "../common/components/Button/Button.tsx";
import style from "./../common/components/Button/Button.module.css"

type Props = {
    currentMax: boolean
    currentMin: boolean
    count: number
    setCount: (count: number) => void
    min: number
    max: number
    isSettingsChanged: boolean
}

export const Counter = ({isSettingsChanged,currentMax, currentMin, count, setCount, min, max}: Props) => {

    const inc = () => {
        if (count < max) setCount(count + 1)

    }
    const reset = () => {
        setCount(min)
    }

    const showMessage = currentMin || currentMax || isSettingsChanged
    const isError = currentMin || currentMax

    return (
        <div className={"container"}>
            <div className={"box"}>
                {showMessage ? (
                    <span className={isError ? s.errorMessage : s.message}>
                        {isError ? "Invalid values!" : "Enter values and press 'set'"}
                    </span>
                ) : (
                    <span className={count === max ? `${s.count} ${s.maxCount}` : s.count}>
                        {count}
                    </span>
                )}

            </div>
            <div className={style.buttonsContainer}>
                <Button className={style.button} onClick={inc} disabled={count === max}>inc</Button>
                <Button className={style.button} onClick={reset}>reset</Button>
            </div>
        </div>
    )
}
