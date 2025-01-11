import React from "react";
import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const age = ageRef.current.value;

    console.log("Name: ", name);
    console.log("Age: ", age);

    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <form
          className="w-60 h-52 items-center p-4 border border-zinc-400"
          action=""
          onSubmit={handleSubmit}
        >
          <input
            className="m-2 border border-zinc-400"
            type="text"
            placeholder="Name"
            ref={nameRef}
          />
          <input
            className="m-2 border border-zinc-400"
            type="text"
            placeholder="Age"
            ref={ageRef}
          />
          <div>
            <input
              type="submit"
              className="m-2 px-3 py-2 rounded-md text-sm bg-zinc-400"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
