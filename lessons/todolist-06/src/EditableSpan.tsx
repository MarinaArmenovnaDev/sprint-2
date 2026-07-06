import {type ChangeEvent, useState} from "react";

type Props = {
    value: string
    onChange: (title: string) => void
}

export const EditableSpan = ({value, onChange}: Props) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [title, setTitle] = useState(value)

    const turnOnEditMode = () => {
        setIsEditMode(true)
    }

    const turnOffEditMode = () => {
        setIsEditMode(false)
        onChange(title)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <>
            {isEditMode ?
                <input value={title} onBlur={turnOffEditMode} onChange={changeTitle}  autoFocus/>
                : <span onDoubleClick={turnOnEditMode}>{value}</span>
            }
        </>

    )
}
