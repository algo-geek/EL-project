import { useState } from "react";
import Link from "next/link";
import axios from 'axios';
import Alert from "../components/Alert";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [typealert, setTypeAlert] = useState("");
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const [cookieName, setCookieName, removeCookieName] = useCookies(["username"]);


  var cookieExpiry = new Date();
  cookieExpiry.setDate(cookieExpiry.getDate()+60);
  const router = useRouter();

  const handleFormSubmit = () => {
    // e.preventDefault()

    // let email = e.target.elements.email?.value
    // let password = e.target.elements.password?.value

    console.log(username, email, password);
    if (username == "") {
      setTypeAlert("error");
      setAlert("Please enter your username");
    }
    else if (email == "") {
      setTypeAlert("error");
      setAlert("Please enter your email");
    }
    else if (password == "") {
      setTypeAlert("error");
      setAlert("Please enter your password");
    }
    else {
    axios
        .post("http://127.0.0.1:8000/api/register/", {
          username: username,
          email: email,
          password: password
        })
        .then(res => {
          console.log(res);
          setAlert("Signed up successfully");
          setTypeAlert("success");
          setCookie("token", res.data.token, {expires: cookieExpiry});
          setCookieName("username", res.data.username, {expires: cookieExpiry});
          router.push("/");

        })
        .catch(err => {
          console.log(err);
          setAlert("Register Failed");
          setTypeAlert("error");
        });
      }
  }
  return (
    <>
    {alert && <Alert typeAlert={typealert} message={alert} />}
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
        <form 
        // onSubmit={handleFormSubmit}
        >
          <div className="pb-2">
            <div className="pb-2">
              <input
                type="text"
                value={username} onChange={e => setUsername(e.target.value)} 
                className={`mt-1 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm `}
                id="name"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                value={email} onChange={e => setEmail(e.target.value)}
                className={`mt-1 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow1 sm:text-sm `}
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="pt-2">
              <input
                type="password"
                value={password} onChange={e => setPassword(e.target.value)}
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
              onClick={handleFormSubmit}
            >
              Get Started
            </button>
          </div>


        </form>
      </div>
    </div>
    </>
  )
}