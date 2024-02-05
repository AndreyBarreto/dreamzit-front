import useTableDream from "../hooks/useTableDream";
import IconEye from "../images/icon/icon-eye";
import IconTrash from "../images/icon/icon-trash";
import { Dream } from "../types/dreams";
import { dateFormatter } from "../utils/dataFormatter";
import { Modal } from "./ModalSettings";

const TableThree = () => {

  const { dreams, isOpen, setIsOpen } = useTableDream()


  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Título
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Data
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Tipo
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {dreams.map((dream: Dream) => {
              return (<tr>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {dream.title}
                  </h5>
                  {/* <p className="text-sm">$0.00</p> */}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{dateFormatter(dream.created_at)}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                    {dream.category}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary"
                      onClick={() => setIsOpen(true)}
                    >
                      <IconEye></IconEye>
                    </button>
                    <button className="hover:text-primary">
                      <IconTrash></IconTrash>
                    </button>

                  </div>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
