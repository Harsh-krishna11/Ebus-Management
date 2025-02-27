import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const firebase = useFirebase();
  const { signupUserWithEmailAndPassword } = useFirebase();
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.authStateListener((user) => {
      if (user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [firebase, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await signupUserWithEmailAndPassword(
        name,
        email,
        password,
        "users"
      );
      alert("User registered successfully!");
      setState("Login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.loginUserWithEmailAndPassword(email, password, "users");
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative">
      <form
        onSubmit={state === "Sign Up" ? handleSignUp : handleLogin}
        className="flex flex-col gap-3 p-8 border rounded-xl shadow-lg min-w-[340px] sm:min-w-96"
      >
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>Please {state === "Sign Up" ? "sign up" : "log in"} to continue.</p>

        {state === "Sign Up" && (
          <div>
            <p>Full Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              required
            />
          </div>
        )}
        <div>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-black py-2 w-full rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 shadow-md hover:shadow-lg"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="text-center mt-2">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-primary underline cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-primary underline cursor-pointer"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>

      {/* Sideways Login for Admin/Driver */}
      <button
        onClick={() => navigate("/adlogin")}
        className="absolute top-1/2 right-[-70px] transform -translate-y-1/2 rotate-90 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
      >
        Login as Admin/Driver
      </button>
    </div>
  );
};

export default Login;
