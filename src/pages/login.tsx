import React, { FC } from 'react';
import { User_login } from '../utils/user_structure';
import { fields_login } from '../utils/field';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { backgroundURL } from '../assets/Images';
import { LoginSession } from '../fetch/LoginFetch';

const Login: FC = () => {
  const navigate = useNavigate();
  const { loginUser, success } = LoginSession();

  const handleLogin = (user: User_login) => {
    console.log(user);
    loginUser(user);
    if (success) {
      navigate('/home');
    }
  }

  const handleRedirectCreateAccount = () => {
    navigate('/register');
  }

  const handleRedirectPassword = () => {
    navigate('/forgot_password');
  }

  return (
    <div className='flex items-center justify-center fullscreen-background' style={{ backgroundImage: `url(${backgroundURL})` }}>
      <Form<User_login>
        title='Login'
        fields={fields_login}
        onSubmit={handleLogin}
        textSubmit='Submit'
        redirect={true}
        onRedirectCreateAccount={handleRedirectCreateAccount}
        onRedirectPassword={handleRedirectPassword}
        sendCode={false}
      />
    </div>
  );
};

export default Login;
