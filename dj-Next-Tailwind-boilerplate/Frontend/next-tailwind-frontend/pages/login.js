import React from 'react'

export default function login() {
  const handleFormSubmit = (e) => {
    e.preventDefault()

    let email = e.target.elements.email?.value
    let password = e.target.elements.password?.value

    console.log(email, password)
  }
  return (
    <div className="flex h-screen">
      <div className="mx-auto mb-auto mt-32 w-full max-w-md rounded-lg border bg-white py-10 px-16">
        <h1 className="text-end mt-4 mb-12 text-3xl font-medium">Sign in</h1>

        <form onSubmit={handleFormSubmit}>
          <div className="pb-2">
            <div>
              <input
                type="email"
                className={`mt-1 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm `}
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="pt-2">
              <input
                type="password"
                autoComplete="email"
                className={`mt-1 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm `}
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center pb-4">
            <input
              type="checkbox"
              className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
              id="checkbox"
            />
            <label

              className={`ml-2 block text-sm text-gray-900`}
            >
              Show Password
            </label>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-800"
            >
              Sign in
            </button>
          </div>

          <div className="text-sm mt-2">
            <a
              href="#"
              className="flex justify-center font-medium text-cyan-900 hover:text-grey6"
            >
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}