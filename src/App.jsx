import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./JobDummyData";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      <div className="mt-8"> {/* Add margin-top here */}
        {jobData.map((job) => (
          <JobCard 
            key={job.id} 
            title={job.title}
            company={job.company}
            type={job.type}
            experience={job.experience}
            location={job.location}
            skills={job.skills}
            postedOn={job.postedOn}
            job_link={job.job_link} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
