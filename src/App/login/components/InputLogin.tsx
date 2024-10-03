import React from 'react'

interface IInuputLoginProps {
    type?: string;
    label: string;
    value: string;


    onChange: (newValue: string) => void;
    onPressEnter?: () => void
}
export const InputLogin = React.forwardRef<HTMLInputElement, IInuputLoginProps>((props, ref) => {
    return (
        <label>
            <span>{props.label}</span>
            <input
                ref={ref}
                type={props.type}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ?
                    props.onPressEnter && props.onPressEnter()
                    : undefined
                }
                className='form-label form-control' />
        </label>

    )
}
)