import React, { useState } from "react";
import dataJSON from '../../public/data.json';
import { Dream } from "../types/dreams";


interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: Dream | undefined;
}

export const Modal = ({ isOpen, setIsOpen, data }: IModal) => {


  const handleChange = (e) => {
    // setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsOpen(false)

    // if (!validateForm()) return;

    // onSubmit(formState);

    // closeModal();
  };

  const closeModal = () => {
    setIsOpen(false)
  }

  return (<>
    {isOpen ? <div
      className="z-50 fixed w-3/4 max-w-300"
    // onClick={(e) => {
    //   if (e.target.className === "modal-container") setIsOpen(false);
    // }}
    >

      <div className="modal rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-auto ">
        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
          <div className="w-full flex justify-end">
            <strong className="text-xl align-center cursor-pointer "
              onClick={closeModal}
            >&times;</strong>
          </div>
          <form>
            <div className="grid grid-cols-3 gap-5 justify-normal">
              <div className="form-group w-full col-span-3">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="id">Título</label>
                <input className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  name="id" disabled
                  value={data?.title}
                />
              </div>
              <div className="form-group w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="value">Tipo de sonho</label>
                <input className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  name="value" disabled value={data?.category} />
              </div>
              <div className="form-group w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="value">Sentimentos</label>
                <input className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  name="value" disabled />
              </div>
            </div>
            <div className="form-group w-full mt-3">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="value">Descrição</label>
              <textarea className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                name="value" disabled value={data?.description} />
            </div>

            <br></br>
            <button className="btn flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
              type="submit" onClick={handleSubmit}>
              Fechar
            </button>
          </form>
        </div>
      </div>
    </div> : ""}
  </>

  );
};