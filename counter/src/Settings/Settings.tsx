import {Button} from "../common/components/Button/Button";
import style from "../common/components/Button/Button.module.css";
import s from "./Settings.module.css"
import type {ChangeEvent} from "react";

type Props = {
    setCount: (count: number) => void;
    currentMax: boolean
    currentMin: boolean
    min: number
    setMin: (min: number) => void
    max: number
    setMax: (max: number) => void
    setSettingsChanged: (settingsChanged: boolean) => void
}

export const Settings = ({setCount, setSettingsChanged, currentMin, currentMax, setMax, max, setMin, min}: Props) => {


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMax = Number(e.currentTarget.value)
        setMax(newMax)
        setSettingsChanged(true)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newMin = Number(e.currentTarget.value)
        setMin(newMin)
        setSettingsChanged(true)
    }
    const saveSettings = () => {
        localStorage.setItem("max", JSON.stringify(max))
        localStorage.setItem("min", JSON.stringify(min))
        setCount(min)
        setSettingsChanged(false)

    }

    return (
        <div className={"container"}>
            <div className={"box"}>
                <div className={s.settingValue}>
                    <span>max value:</span>
                    <input type="number" className={currentMax ? `${s.input} ${s.error}` : s.input} value={max}
                           onChange={changeMaxValue}/>
                </div>
                <div className={s.settingValue}>
                    <span>min value: </span>
                    <input type="number" className={currentMin ? `${s.input} ${s.error}` : s.input} value={min}
                           onChange={changeMinValue}/>
                </div>


            </div>
            <div className={style.buttonsContainer}>
                <Button className={style.button} onClick={saveSettings}
                        disabled={ currentMin || currentMax}>set</Button>
            </div>
        </div>
    )
}
