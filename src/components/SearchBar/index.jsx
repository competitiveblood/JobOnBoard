import React from 'react'

function SearchBar() {
  return (
    <div className="flex gap-4 mt-10 justify-center">
        <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Type</option>
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Contract">Contract</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
            <option value="" disabled hidden selected>Location</option>
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>            <option value="Frontend Developer">On-site</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc font-semibold rounded-md'>
            <option value="" disabled hidden selected>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid-Levelr">Mid-Level</option>
            <option value="Senior-Level">Senior-Level</option>
        </select>
        <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
      
    </div>
  )
}

export default SearchBar
