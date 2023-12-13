"use client";
import React from "react";
import { Form, Formik } from "formik";

export const BillingInfo = () => {
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
                  Name On Card *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Opara Linus Ahmed"
                  className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                />
              </div>
              <div className="w-full mb-8">
                <label htmlFor="card" className="block font-bold text-base">
                  Card Type *
                </label>
                <div class="relative inline-flex items-center w-full">
                  <select class="appearance-none bg-white border rounded-lg border-gray-300 px-4 py-3 pr-8 dleading-tight focus:outline-none focus:border-blue-500 w-full">
                    <option value="option1">Visa</option>
                    <option value="option2">Master</option>
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

              <div className="flex md:flex-row flex-col gap-10 mb-8">
                <div className="md:w-[60%] w-full">
                  <label
                    htmlFor="details"
                    className="block font-bold text-base"
                  >
                    Card details *
                  </label>
                  <input
                    type="number"
                    id="details"
                    name="details"
                    placeholder="44960  44960  44960  44960"
                    className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                  />
                </div>

                <div className="md:w-[15%] w-full">
                  <label htmlFor="date" className="block font-bold text-base">
                    Expiry date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="04  /  23"
                    className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                  />
                </div>

                <div className="md:w-[15%] w-full">
                  <label htmlFor="cvv" className="block font-bold text-base">
                    CVV *
                  </label>
                  <input
                    type="number"
                    id="cvv"
                    name="cvv"
                    placeholder="04  /  23"
                    className="placeholder-italic mt-1 p-3 border-2 border-solid bg-white-1 outline-none rounded-lg w-full"
                  />
                </div>
              </div>

              <div className="flex items-center md:gap-20 gap-6 mb-10">
                <div>
                  <button className="text-white bg-[#f2a44b] text-base font-medium rounded-lg h-10 w-32 md:w-52">
                    Next
                  </button>
                </div>
                <div>
                  <h2 className="text-lg font-semibold cursor-pointer text-[#4e598c]">
                    Cancel Payment
                  </h2>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
