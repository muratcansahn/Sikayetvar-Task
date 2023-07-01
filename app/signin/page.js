import styles from "../../styles/signin.module.scss";

const SignInPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headingBlock}>
          <div className={styles.heading}>
            <div></div>
            <span>MANAGE COURSES</span>
          </div>
          <div className={styles.signin}>
            <div>SIGN IN</div>
            <p>Enter your credentials to access your account</p>
          </div>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.formSection}>
            <p>Email</p>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formSection}>
            <p>Password</p>
            <input type="password" placeholder="Enter your password" />
          </div>
        </form>
        <div className={styles.buttonContainer}>
          <button>SIGN IN</button>
          <div>
            Forgot your password?<span> Reset Password</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
