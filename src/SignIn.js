import React, {useState} from 'react'
import "./Login.css";


function SignIn(login, error) {
      const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
      });

      const submitHandler = (e) => {
        e.preventDefault();
        login(details);
      };
  return (
    <div>
      <div className="login_container">
        <h1>Sign-In.</h1>

        <form onSubmit={submitHandler}>
          {error != "" ? <div className="">{error}</div> : ""}
          <h5>UserName:</h5>
          <input
            type="text"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
          <h5>Email:</h5>
          <input
            type="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <h5>Password:</h5>
          <input
            type="password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
          <button type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn