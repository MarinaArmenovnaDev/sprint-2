import type {ReactNode} from "react";

type Props = {
    children: ReactNode,
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
}

export const Button = ({children, className, onClick, disabled}: Props) => {
    return (
        <button onClick={onClick} className={className} disabled={disabled}>{children}</button>
    )
}
