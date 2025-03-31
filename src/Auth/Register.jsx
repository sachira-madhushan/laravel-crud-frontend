export function Register() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
            <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded" />
            <button className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account? 
            <a href="/login" className="text-blue-500 hover:underline ml-1">Login</a>
          </p>
        </div>
      </div>
    );
  }