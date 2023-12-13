"use client";
import React from "react";
import { Form, Formik } from "formik";

export const PersonalInfo = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   actions.setSubmitting(false);
            // }, 1000);
          }}
        >
          {() => (
            <Form>
              <div className="mb-8">
                <label htmlFor="name" className="block font-bold text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Opara Linus Ahmed"
                  className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block font-bold text-base">
                  Email Address *
                </label>
                <p className="text-sm font-medium text-[#817e9e]">
                  The Purchase receipt would be sent to this address
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="OparaLinusAhmed@devmail.com"
                  className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="address1" className="block font-bold text-base">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  placeholder="The address of the user goes here"
                  className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="address2" className="block font-bold text-base">
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  placeholder="and here"
                  className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                />
              </div>

              <div className="flex md:flex-row flex-col gap-10 items-center mb-10">
                <div className="md:w-[60%] w-full">
                  <label
                    htmlFor="address2"
                    className="block font-bold text-base"
                  >
                    Local Government
                  </label>
                  <input
                    type="text"
                    id="local"
                    name="local"
                    placeholder="Surulere"
                    className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                  />
                </div>

                <div className="md:w-[35%] w-full">
                  <label
                    htmlFor="state"
                    className="block font-bold text-base"
                  >
                    State
                  </label>
                  <div class="relative inline-flex items-center w-full">
                    <select class="appearance-none bg-white border rounded-lg border-gray-300 px-4 py-3 pr-8 dleading-tight focus:outline-none focus:border-blue-500 w-full">
                      <option value="option1">Lagos</option>
                      <option value="option2">OYO</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12l-6-6-1.4 1.4L10 14.8l7.4-7.4L16 6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center md:gap-20 gap-6 mb-10">
                <div>
                  <button className="text-white bg-[#f2a44b] text-base font-medium rounded-lg h-10 w-32 md:w-52">Next</button>
                </div>
                <div>
                  <h2 className="text-lg font-semibold cursor-pointer text-[#4e598c]">Cancel Payment</h2>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
