import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="flex min-h-screen bg-gray-200">
        <div class="flex items-center min-h-screen w-1/2">
          <div className="ml-48 mb-24">
            <h1 class="text-6xl text-blue-600 font-bold">facebook</h1>
            <h3 class="text-2xl font-normal mt-3">
              Facebook helps you connect and share with the people in your life.
            </h3>
          </div>
        </div>

        <div className="w-1/2 min-h-screen flex flex-col items-center justify-center">
          <div className="shadow-lg rounded-md w-7/12 h-auto mb-5 bg-white">
            <div className="flex flex-col m-5 h-full space-y-4">
              <input
                type="text"
                placeholder="Email address or phone number"
                class="focus:outline-none focus:ring focus:border-blue-500 border p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Password"
                class="focus:outline-none focus:ring focus:border-blue-500 border p-3 rounded-md"
              />
              <a
                href=""
                className="text-white bg-blue-600 p-2 rounded-md text-center text-2xl font-semibold hover:bg-blue-700"
              >
                Log in
              </a>
              <div class="divide-y divide-fuchsia-300">
                <div className="cursor-pointer text-blue-600 text-center hover:underline mb-3">
                  Forgotten password?
                </div>
                <div></div>
                <div className="cursor-pointer text-white bg-pink-500 w-1/2 p-3 ml-24 rounded-md text-center text-1xl font-semibold hover:bg-pink-600 mt-4">
                  Create New Account
                </div>
              </div>
            </div>
          </div>
          <p>
            <span className="font-semibold cursor-pointer hover:underline">
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
