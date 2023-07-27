import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => (
  <HelmetProvider>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </HelmetProvider>
);

export default Login;
