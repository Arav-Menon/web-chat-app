
interface inputText {
    variants? : 'sm' | 'md' | 'lg',
    placeholder : string,
    type : string,
    onChange? : () => void,
    className? : string
}

const variants = {
    sm : 'border border-red-500 text-blue-500 p-3 ',
}

export function InputText( props : inputText) {
    return(
        <>
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}  className={props.className}/>
        </>
    )
}