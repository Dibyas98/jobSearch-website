import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobList } from "../redux/joblistslice";


export const Data = createContext();

export default function AllFunc({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://job-search-api-oet6.onrender.com/api/v1/job/"
        );
        dispatch(getJobList(res.data.result))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // Add dispatch to dependency array to avoid eslint warning

  return <Data.Provider value={{}}>{children}</Data.Provider>;
}
