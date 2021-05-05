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

        <div className="w-1/2 flex items-center">
          <div class="flex flex-col flex items-center ">
            <div>
              <div class="flex flex-col w-full bg-white rounded shadow-lg h-full p-6 m-40 bg-gray-400 ">
                <div>
                  <div class="field-group mb-4 md:w-full">
                    <input
                      class="field border-blue-50"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <div class="field-group mb-6 md:w-full">
                    <input
                      class="field"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
                <div>
                  <button class="btn btn-teal mx-auto" type="submit">
                    Login
                  </button>
                </div>
                <div>
                  <a class="link link-grey w-full text-center" href="/login">
                    Forgotten password?
                  </a>
                </div>
                <div>
                  <div>
                    <button class="btn btn-teal mx-auto" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p>Create a Page for a celebrity, band or business.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
