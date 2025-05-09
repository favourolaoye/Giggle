import { useState } from "react"
import { jobs } from "../data/jobs";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
export default function Listing() {
    const [job, setJob] = useState(jobs);
    const [filter, setFIlter] = useState(false);

    const handleFilter = () => {
        setFIlter(true);
    }
    return (
    <div className="relative">
        <div className="bg-white w-full flex justify-center p-4">
            <div className="flex w-[90%]  flex-col">
                <div className="flex p-4 gap-2">
                    <input className="w-[90%] border border-gray-400 p-4 outline-blue-500" type="text" placeholder="Search using job title, keyword, company" />
                    <div className="">
                        <button className="bg-gray-300 text-black font-semibold p-4 w-[150px] rounded-lg" onClick={handleFilter}>Filters</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 p-4">
                    {
                        job.map((item) => (
                            <div className="bg-white border border-gray-200 rounded-xl p-4 leading-[30px]" key={item.id}>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-xl">
                                      <Link to="/jobs/jobId">{item.jobTitle}</Link> 
                                    </h3>
                                    <div className="flex gap-3 items-center w-full">
                                        <span className="bg-green-100 text-green-500 font-semibold p-1.5 rounded-sm text-xs">{item.employmentType}</span> <p>Salary: {item.salary}</p>
                                    </div>
                                </div>
                                <div className="flex mt-2.5 gap-4 items-center">
                                    <img src={item.logo} alt=""  className="object-cover w-[40px] h-[40px]"/>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">{item.company}</h3>
                                        <p className="flex items-center"><MdLocationPin size={"25px"}/>{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        {
            filter && (
                <div className="fixed inset-0 overflow-hidden z-50">
                {/* Backdrop */}
                <div 
                  className="absolute inset-0 bg-black opacity-70  blur-none transition-opacity"
                  aria-hidden="true"
                ></div>
                
                {/* Sidebar */}
                <div className="fixed inset-y-0 left-0 max-w-full flex transition duration-700 ease-in-out">
                  <div className="relative w-screen max-w-xs">
                    <div className="h-full bg-white shadow-xl overflow-y-auto">
                      <div className="flex items-center p-4 border-b border-gray-200 justify-between">
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                        <button onClick={() => {setFIlter(false)}}>close</button>
                      </div>
                      <div className="p-4">
                        {/* Filter content goes here */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">Category</h3>
                            {/* Filter options */}
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
                            {/* Filter options */}
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                        <button className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        }
    </div>
        
    )
}