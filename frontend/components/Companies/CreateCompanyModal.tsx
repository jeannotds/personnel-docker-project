"use client";

import { createCompanyHttp } from "@/app/api/company.api";
import { CreateCompany } from "@/app/interfaces/interface";
import { Plus } from "lucide-react";
import { useState } from "react";

const CreateCompanyModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const createCompany = async () => {
    setLoading(true);
    try {
      const response = await createCompanyHttp({ name });
      if (response.status === "success") {
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      console.error(err);
    }
  };

  return (
    <>
      {/* Bouton */}
      <button
        onClick={() => setOpen(true)}
        className=" bg-primery04 flex flex-row gap-2 items-center justify-center rounded-xl px-3 text-sm font-semibold text-white01"
      >
        <Plus width={20} height={20} /> Nouvelle entreprise
      </button>

      {/* Modal */}
      {open && (
        <div
          id="authentication-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div className="relative w-full max-w-md p-4">
            <div className="relative rounded-lg bg-white p-4 shadow md:p-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b pb-4 md:pb-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Entreprise
                </h3>

                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>

                  {/* <span className="sr-only">Close modal</span> */}
                </button>
              </div>

              {/* Body */}
              <form className="pt-4 md:pt-6" onSubmit={createCompany}>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Nom entreprise
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-teal-600 focus:ring-teal-600"
                    placeholder="Empreprise"
                    required
                  />
                </div>

                {loading ? (
                  <div
                    className={`mb-3 w-full text-center rounded-lg cursor-not-allowed bg-primeryO1 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300`}
                  >
                    Creating...
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="mb-3 w-full  rounded-lg bg-primeryO1 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300"
                  >
                    Ajouter
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateCompanyModal;
