import {reduxForm,Field} from 'redux-form';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import css from '../common/FormsControls/FormsControls.module.css';

const Login = (props)=>{
    const onSubmit = (formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) return <Navigate replace  to={'/profile'} />;
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>;
}


const LoginForm = ({handleSubmit,error})=>{
    return <form onSubmit={handleSubmit}>
            {createField("email","email",[required],Input,{type:'text'})}
            {createField("Password","password",[required],Input,{type:'password'})}
            {createField("","rememberMe",[],Input,{type:'checkbox'},'Remember me')}
            {error&&<div className={css.form_summary_error}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    ;
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);


export default connect(state=>({isAuth: state.auth.isAuth}), {login})(Login);