import { useState } from "react"
import { jobs } from "../data/jobs";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
export default function Listing() {
    const [job, setJob] = useState(jobs);
    return (
        <div className="bg-white w-full flex justify-center p-4">
            <div className="flex w-[90%] bg-black flex-col">
                <div className="flex">
                    <input className="w-full bg-blue-500" type="text" placeholder="Search using job title, keyword, company" />
                    <div className="filters">
                        filter
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 p-4">
                    {
                        job.map((item) => (
                            <div className="bg-white border-b rounded-xl p-4 leading-[30px]" key={item.id}>
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
    )
}