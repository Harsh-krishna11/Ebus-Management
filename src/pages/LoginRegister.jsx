import { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginRole, setLoginRole] = useState("admin"); // Default to admin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { loginUserWithEmailAndPassword } = useFirebase();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (loginRole === "admin") {
        await loginUserWithEmailAndPassword(email, password,"admin");
        navigate("/admin-dashboard");
      } else {
        const driver = await loginUserWithEmailAndPassword(email, password,"driver");
        if (driver) {
          navigate("/driver-dashboard");
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-lg rounded-lg">
        {/* Tabs for Admin & Driver Login */}
        <div className="flex justify-center space-x-4 border-b pb-2">
          {["admin", "driver"].map((type) => (
            <button
              key={type}
              onClick={() => setLoginRole(type)}
              className={`text-black px-4 py-2 ${
                loginRole === type ? "font-bold border-b-2 border-black" : ""
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Login
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-md"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
