import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-emerald-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-emerald-500"
        />

        <button className="mb-4 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600">
          Sign In
        </button>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link to="/" className="text-emerald-400 hover:underline">
            Continue Browsing
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;