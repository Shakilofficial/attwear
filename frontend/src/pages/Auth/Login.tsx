import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Handle email change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Handle password change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="text-sm">Enter your credentials to log in.</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 mt-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 rounded-md py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 before:transition hover:before:translate-y-0 before:duration-300 hover:text-white  before:w-full before:h-full before:bg-primary before:top-0 before:left-0"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="text-center text-sm text-accent-300 my-2">
          <p>
            Don't have an account?{" "}
            <a href="register" className="text-rose-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
