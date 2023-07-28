import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from 'components/LoginForm/LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const loginElements = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(loginElements));
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.formEl} onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className={css.inputEl}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className={css.inputEl}
          />
        </label>
        <button type="submit" className={css.button}>
          Log in
        </button>
        <p>
          Don't have an account? Sign up
          <a href="/register" className={css.link}>
            {' '}
            here
          </a>
        </p>
      </form>
    </div>
  );
};
