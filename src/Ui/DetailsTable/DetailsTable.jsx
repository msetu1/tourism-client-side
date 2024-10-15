import { GrGroup } from "react-icons/gr";
import {
  MdElderlyWoman,
  MdOutlineTour,
  MdOutlineWatchLater,
} from "react-icons/md";
const DetailsTable = ({card}) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3 justify-center">
                <MdOutlineWatchLater className="text-3xl text-[#22d3ee]" />
                <div>
                  <h2 className="text-xl font-bold">Duration</h2>
                  <p className="text-gray-500">{card.travel_time} days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MdOutlineTour className="text-3xl text-[#22d3ee]" />
                <div>
                  <h2 className="text-xl font-bold">Tour Type</h2>
                  <p className="text-gray-500">Daily Tour</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <GrGroup className="text-3xl text-[#22d3ee]" />
                <div>
                  <h2 className="text-xl font-bold">Group Size</h2>
                  <p className="text-gray-500">20 People</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MdElderlyWoman className="text-3xl text-[#22d3ee]" />
                <div>
                  <h2 className="text-xl font-bold">Tour Guide</h2>
                  <p className="text-gray-500">5 Guide</p>
                </div>
              </div>
            </div>
            <table
              className="w-full text-left border border-separate rounded border-slate-200"
              cellspacing="0"
            >
              <tbody>
                <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none ">
                  <td
                    data-th="Name"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  py-4"
                  >
                    Destination
                  </td>
                  <td
                    data-th="Title"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  "
                  >
                    {card.tourists_spot_name}
                  </td>
                </tr>
                <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                  <td
                    data-th="Name"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  py-4"
                  >
                    Country
                  </td>
                  <td
                    data-th="Title"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  "
                  >
                    {card.country}
                  </td>
                </tr>
                <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                  <td
                    data-th="Name"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  py-4"
                  >
                    Average Cost
                  </td>
                  <td
                    data-th="Title"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  "
                  >
                    $ {card.average_cost}
                  </td>
                </tr>
                <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                  <td
                    data-th="Name"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  py-4"
                  >
                    Visitors Per Year
                  </td>
                  <td
                    data-th="Title"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  "
                  >
                    {card.totalVisitorsPerYear}
                  </td>
                </tr>
                <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                  <td
                    data-th="Name"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  py-4"
                  >
                    Season
                  </td>
                  <td
                    data-th="Title"
                    className="before:w-24 before:inline-block before:font-medium  before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-lg font-semibold transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500  "
                  >
                    {card.seasonality}
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
};

export default DetailsTable;