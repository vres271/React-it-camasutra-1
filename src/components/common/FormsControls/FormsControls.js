import css from './FormsControls.module.css';
import {Field} from 'redux-form';

const FormControl = ({input, meta: {touched,error}, element, ...props}=props)=>{
    let hasError = error&&touched;
    return (
        <div className={css.form_control + (hasError?(' '+css.error):'')}>
            <div>
                {props.children}
            </div>
            {hasError?<span>{error}</span>:''}
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

export const createField = (placeholder, name, validators, component, attr={},text='')=>{
    return  <div><Field 
        name={name} 
        validate={validators} 
        component={component}  
        placeholder={placeholder} 
        {...attr}
    />{text}</div>
}