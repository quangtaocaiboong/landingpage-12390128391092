import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center w-screen h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Không tìm thấy trang bạn yêu cầu
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">Vui lòng thử lại sau</p>
          <NavLink
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold rounded hover:underline dark:bg-violet-400 dark:text-gray-900"
          >
        Quay về trang chủ
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
