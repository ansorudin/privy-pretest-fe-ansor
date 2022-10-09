import React from "react";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="bg-slate-50 h-screen">
      <div className="container mx-auto flex h-full border items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8 bg-primary-white p-10 border border-primary-black rounded-lg drop-shadow-lg">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
