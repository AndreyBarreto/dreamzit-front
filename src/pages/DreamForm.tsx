import Breadcrumb from '../components/Breadcrumb';
import { DefaultStepper } from '../components/Stepper';
import useCreateDreamHandler from '../hooks/useCreateDreamHandler';

const OrderForm = () => {
  const {
    title,
    description,
    setTitle,
    setDescription,
    register } = useCreateDreamHandler();

  return (
    <>
      <Breadcrumb pageName="Registrar sonho" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">

        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Registrar
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-2 xl:flex-row">
                  <div className="w-full xl:w-5/5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Título
                    </label>
                    <input
                      value={title}
                      onChange={(e) => { setTitle(e.target.value) }}
                      maxLength={8}
                      type="text"
                      placeholder="Insira um título"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Descrição
                  </label>
                  <textarea
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={title}

                    rows={6}
                    placeholder="Escreva oque aconteceu no seu sonho"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  onClick={() => register()}>
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default OrderForm;
