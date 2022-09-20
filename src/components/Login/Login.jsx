import {reduxForm,Field} from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
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


const LoginForm = (props)=>{
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" validate={[required]} component={Input} type="text" placeholder="email"/>
            </div>
            <div>
                <Field name="password" validate={[required]} component={Input} type="password" placeholder="Password"/>
            </div>
            <div>
                <Field name="rememberMe" id='rememberMe' component="input" type="checkbox" /><label htmlFor="rememberMe"> Remember me</label>
            </div>
            {props.error&&<div className={css.form_summary_error}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    ;
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);


export default connect(state=>({isAuth: state.auth.isAuth}), {login})(Login);