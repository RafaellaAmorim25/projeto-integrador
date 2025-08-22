import EmailField from './EmailField';
import PasswordField from './PasswordField';
import LoginButton from './LoginButton';
import './LoginForm.css';
 
function LoginForm() {
  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <EmailField />
      <PasswordField />
      <LoginButton />
    </div>
  );
}
export default LoginForm;