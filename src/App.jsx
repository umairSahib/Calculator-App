import { React, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  console.log("🚀 ~ App ~ value:", value);
  return (
    <>
      <div className="bg-orange-200 h-screen flex justify-center items-center">
        <div className="bg-orange-400 px-12 py-14 rounded-xl">
          <div>
            <form>
              <input
                value={value}
                type="text"
                className="py-3 bg-gray-600 text-white rounded-xl px-10"
              />
              <div className="flex gap-3 items-center mt-8">
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="AC"
                  onClick={(e) => setValue("")}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="DE"
                  onClick={(e) => setValue(value.slice(0, -1))}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="."
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="/"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-3 items-center mt-2">
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="7"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="8"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="9"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="*"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-3 items-center mt-2">
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="4"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="5"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="6"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="+"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-3 items-center mt-2">
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="1"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="2"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="3"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="-"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-3 items-center mt-2">
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="00"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-14 h-14 rounded-xl"
                  value="3"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  className="bg-orange-700 text-white font-semibold w-32 h-14 rounded-xl"
                  value="="
                  onClick={(e) => setValue(eval(value))}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
