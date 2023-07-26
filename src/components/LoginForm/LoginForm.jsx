import css from 'components/LoginForm/LoginForm.module.css';

export const LoginForm = () => {
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
      </form>
    </div>
  );
};
