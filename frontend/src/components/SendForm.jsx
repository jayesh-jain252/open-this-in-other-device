import React, { useState } from "react";
import axios from "axios";

const SendForm = () => {
  const [newLink, setNewLink] = useState("");
  const [newCode, setNewCode] = useState("");

  const handleLinkChange = (event) => {
    setNewLink(event.target.value);
  };

  const sendLink = (event) => {
    event.preventDefault();
    const linkObject = {
      link: newLink,
    };

    axios
      .post("http://localhost:5000/api/send", linkObject)
      .then((response) => {
        setNewCode(response.data.generatedCode);
        setNewLink("");
      });
  };
  return (
    <div className="mt-5 max-w-[800px] mx-auto">
      <form onSubmit={sendLink}>
        <div className="mb-6">
          <label
            htmlFor="sendlink"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Paste Link Here
          </label>
          <input
            value={newLink}
            onChange={handleLinkChange}
            type="text"
            id="sendlink"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://www.google.com/"
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
      <div className="mt-4 h-[30px] bg-gray-200">{`Generated Code ${newCode}`}</div>
    </div>
  );
};

export default SendForm;
