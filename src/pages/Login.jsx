import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/FakeAuthContext";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // my habd
  const { isAuthenticated, login, user } = useAuth();
  const credentials = {
    email: "jack@example.com",
    password: "qwerty",
  };
  const navigate = useNavigate();

  useEffect(
    function (email, password) {
      login(email, password);
      if (isAuthenticated) {
        navigate("/app");
      } else {
        alert("there is an error in the email or the password");
      }
    },
    [isAuthenticated, login, navigate]
  );

  ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              login(email, password);
            }}
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
