import React from "react";
import JobCard from "../job-card/JobCard";

export default function JobList() {
  return (
    <div className="w-full  flex justify-center py-10">
      <div className="w-10/12  xl:w-5/12">
        <h1 className="font-bold text-3xl">Job Listing</h1>
        <div className=" pt-6 flex flex-col gap-3">
          {
            <>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            </>
          }
        </div>
      </div>
    </div>
  );
}
