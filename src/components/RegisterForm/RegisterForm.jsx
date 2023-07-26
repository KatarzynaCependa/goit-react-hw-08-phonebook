import css from 'components/RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.formEl} onSubmit={handleSubmit}>
        <label>
          <input
            type="name"
            name="name"
            placeholder="name"
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
