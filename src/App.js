import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="flex min-h-screen">
        <div class="flex items-center min-h-screen w-1/2">
          <div className="ml-48 mb-24">
            <h1 class="text-6xl text-blue-500 font-bold">facebook</h1>
            <h3 class="text-2xl font-normal">
              Facebook helps you connect and share with the people in your life.
            </h3>
          </div>
        </div>

        <div className="w-1/2 min-h-screen flex flex-col items-center justify-center">
          <div className="shadow-lg rounded-md w-7/12 mb-5 bg-white">
            <div className="flex flex-col mx-5 space-y-4">
              <input
                type="text"
                placeholder="Email address or phone number"
                class="focus:outline-none focus:ring focus:border-blue-500 border p-3 rounded-md mt-5"
              />
              <input
                type="Password"
                placeholder="Password"
                class="focus:outline-none focus:ring focus:border-blue-500 border p-3 rounded-md"
              />
              <a
                href=""
                className="text-blue-600 p-2 rounded-md text-center text-2xl font-semibold border border-blue-600 transition duration-500 ease-in-out bg-white hover:bg-blue-700 hover:text-white"
              >
                Log in
              </a>
              <div class="divide-y divide-fuchsia-300">
                <div className="cursor-pointer text-blue-600 text-center hover:underline mb-3">
                  Forgotten password?
                </div>
                <div></div>
                <div className="cursor-pointer text-white w-1/2 p-3 ml-24 mb-5 rounded-md text-center text-1xl font-semibold mt-4 border transition duration-500 ease-in-out bg-green-500 hover:bg-green-700">
                  Create New Account
                </div>
              </div>
            </div>
          </div>
          <p className="text-black">
            <span className="font-semibold text-gray-900 cursor-pointer transition duration-500 ease-in-out transform hover:underline hover:-translate-y-1 hover:scale-110">
              Create a Page
            </span>{" "}
            for a celebrity, band or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
