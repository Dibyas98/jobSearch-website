import React from "react";
import { MapPin, Building2,Banknote  } from "lucide-react";

export default function JobCard({job}) {
  console.log(job);
  return (
    <div className=" px-5 py-3 flex justify-between border-b-2 rounded-xl ">
      <div className=" w-9/12 flex flex-col gap-2 px-4">
        <h1 className="font-semibold text-lg">{job.title}</h1>
        <p>{job.description}</p>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <Building2 className=" text-orange-700"></Building2> <p>{job.company}</p>
          </div>
          <div className="flex gap-1">
            <MapPin className=" text-cyan-600"></MapPin><p>{job.location}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between py-3">
        <p className="">Remote</p>
        <div className="flex gap-1"><Banknote className=" text-blue-500"></Banknote> <p>₹ {job.salary}</p></div>
        <p>{job.active?'Hiring':'Expired'}</p>
      </div>
    </div>
  );
}
