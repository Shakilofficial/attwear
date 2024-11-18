import { useState } from "react";

const Register = () => {
  const [avatar, setAvatar] = useState<File | null>(null);

  // Handle file input for avatar
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAvatar(event.target.files[0]);
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl font-semibold ">Create Account</h2>
          <p className="text-sm">
            Fill in the details to create a new account.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-3 mt-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
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
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Avatar Upload */}
          <div>
            <label htmlFor="avatar" className="block text-sm font-medium">
              Avatar (Optional)
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            {avatar && (
              <div className="mt-3 text-sm text-gray-600">
                <p>Selected Avatar: {avatar.name}</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 rounded-md py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 before:transition hover:before:translate-y-0 before:duration-300 hover:text-white  before:w-full before:h-full before:bg-primary before:top-0 before:left-0"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="text-center text-sm text-accent-300 my-2">
          <p>
            Already have an account?{" "}
            <a href="login" className="text-rose-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
