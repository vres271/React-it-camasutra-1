import css from './FormsControls.module.css';

const FormControl = ({input, meta, element, ...props}=props)=>{
    let hasError = meta.error&&meta.touched;
    return (
        <div className={css.form_control + (hasError?(' '+css.error):'')}>
            <div>
                {props.children}
            </div>
            {hasError?<span>{meta.error}</span>:''}
        </div>
    );
}

export const Textarea = (props)=>{
    const {input,meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props)=>{
    const {input,meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}