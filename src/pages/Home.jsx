import React from 'react'
import Navbar from '../coponents/navbar/Navbar'
import Banner from '../coponents/banner/Banner'
import JobList from '../coponents/joblist/JobList'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <JobList></JobList>
    </div>
  )
}
