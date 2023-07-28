import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from 'components/RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const registerElements = {
      name: form.elements.username.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(registerElements));
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.formEl} onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="username"
            placeholder="username"
            className={css.inputEl}
          />
        </label>
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
          Sign up
        </button>
        <p>
          Do you have an account? Log in
          <a href="/login" className={css.link}>
            {' '}
            here
          </a>
        </p>
      </form>
    </div>
  );
};
