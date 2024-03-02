import React from "react";
import { MapPin, Building2,Banknote  } from "lucide-react";

export default function JobCard() {
  return (
    <div className=" px-2 flex border-b-2 rounded-xl">
      <div className=" w-9/12 flex flex-col gap-2 px-4">
        <h1>Company Post name</h1>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <Building2></Building2> <p>name</p>
          </div>
          <div className="flex gap-1">
            <MapPin></MapPin><p>Bangalore</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="">Type</p>
        <div className="flex gap-1"><Banknote></Banknote> <p>salary</p></div>
        <p>Active</p>
      </div>
    </div>
  );
}
