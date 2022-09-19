import css from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}=props)=>{

    let hasError = meta.error&&meta.touched;
    return (
        <div className={css.form_control + (hasError?(' '+css.error):'')}>
            <div>
                <textarea {...input} {...props} />   
            </div>
            {hasError?<span>{meta.error}</span>:''}
        </div>
    );
}