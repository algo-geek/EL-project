import React from 'react'
import Link from "next/link";

export default function register() {
  const handleFormSubmit = (e) => {
    e.preventDefault()

    let email = e.target.elements.email?.value
    let password = e.target.elements.password?.value

    console.log(email, password)
  }
  return (
    <div className="flex h-screen">
      <div className="mx-auto mt-20 mb-auto w-full max-w-md rounded-lg border bg-white py-12 px-12">
        <h1 className="text-end mt-4 text-3xl font-medium">
          Sign Up With Your Email
        </h1>
        <div className="flex pt-2">
          <h2 className="text-end mb-10 text-gray-600">
            Already have an account?
          </h2>
          &nbsp;
          <Link href="/login">
          <h3 className="text-grey6 font-semibold cursor-pointer">Sign in</h3>
          </Link>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="pb-2">
            <div className="pb-2">
              <input
                type="text"
                className={`mt-1 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm `}
                id="name"
                placeholder="Name"
              />
            </div>
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
              Get Started
            </button>
          </div>


        </form>
      </div>
    </div>
  )
}