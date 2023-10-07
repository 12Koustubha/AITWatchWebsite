import React from "react";

const Checkbox = () => {
  return (
    <div>
      <ul className="w-48 text-sm font-medium text-gray-900   rounded-lg ">
        <li className="w-full  rounded-t-lg ">
          <div class="flex items-center pl-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              value=""
              class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="vue-checkbox"
              class="w-full py-3 ml-2 text-md font-bold text-gray-500 "
            >
              2 Accounts
            </label>
          </div>
        </li>
        <li className="w-full">
          <div class="flex items-center pl-3">
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="react-checkbox"
              class="w-full py-3 ml-2 text-md font-bold text-gray-500 "
            >
              Upto 5gb space
            </label>
          </div>
        </li>
        <li className="w-full">
          <div class="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="angular-checkbox"
              class="w-full py-3 ml-2 text-md font-bold text-gray-500  "
            >
              Angular
            </label>
          </div>
        </li>
        <li className="w-full">
          <div class="flex items-center pl-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox"
              class="w-full py-3 ml-2 text-md font-bold text-gray-500  "
            >
              Laravel
            </label>
          </div>
        </li>
      </ul>
      <button
        type="button"
        onclick=""
        className="w-full flex justify-center text-white bg-blue-600 py-2 px-6 font-bold rounded-md mt-4"
      >
        GET STARTED
      </button>
    </div>
  );
};

export default Checkbox;
