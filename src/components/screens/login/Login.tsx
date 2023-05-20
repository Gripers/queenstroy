import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.left}>
        <h4>Kirish</h4>
        <form>
          <label htmlFor="email">
            Foydalanuvchi nomi yoki elektron pochta manzili *
            <input type="email" id="email" required />
          </label>
          <label htmlFor="password">
            Parol *
            <input type="password" id="password" required />
          </label>
          <button type="submit">Kirish</button>
        </form>
      </div>
      <div className={styles.border}></div>
      <div className={styles.right}>
        <h4>Ro&apos;yxatdan o&apos;tish</h4>
        <form>
          <label htmlFor="email_reg">
            Foydalanuvchi nomi yoki elektron pochta manzili *
            <input type="email" id="email_reg" required />
          </label>
          <label htmlFor="password_reg">
            Parol *
            <input type="password" id="password_reg" required />
          </label>
          <button type="submit">Ro&apos;yxatdan o&apos;tish</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
