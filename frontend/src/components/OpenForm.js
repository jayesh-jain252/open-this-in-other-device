import React, { useState } from "react";
import axios from "axios";

const OpenForm = () => {
  const [newCode, setNewCode] = useState("");
  const [newLink, setNewLink] = useState("");

  const handleCodeChange = (event) => {
    setNewCode(event.target.value);
  };

  const sendCode = (event) => {
    event.preventDefault();
    const secretCodeObject = {
      secretCode: newCode,
    };

    axios.post("/api/open", secretCodeObject).then((response) => {
      setNewLink(response.data.generatedLink);
      setNewCode("");
    });
  };
  return (
    <div className="mt-5 max-w-[800px] mx-auto">
      <form onSubmit={sendCode}>
        <div className="mb-6">
          <label
            htmlFor="code"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enter Secret Code
          </label>
          <input
            value={newCode}
            onChange={handleCodeChange}
            type="text"
            id="code"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ABCD12"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="mt-4 h-[30px] bg-gray-200">{`Link ${newLink}`}</div>
    </div>
  );
};

export default OpenForm;
