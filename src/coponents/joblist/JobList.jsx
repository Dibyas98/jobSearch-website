import React from "react";
import JobCard from "../job-card/JobCard";
import { useSelector } from "react-redux";
import SpinLoad from "../spinner/SpinLoad";

export default function JobList() {
  const JobListData = useSelector((store) => store.joblist.jobList);
  console.log(JobListData);
  return (
    <div className="w-full  flex justify-center py-10">
      <div className="w-10/12  xl:w-5/12">
        <h1 className="font-bold text-3xl">Job Listing</h1>
        
        <div className=" pt-6 flex flex-col gap-3 h-10">
          {
            JobListData.length>0? JobListData.map((ele)=>{
              return <JobCard key={ele._id} job={ele}></JobCard>
            }):<div className="flex justify-center"><SpinLoad></SpinLoad></div>
          }
        </div>
      </div>
    </div>
  );
}
