import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider"; // Import the Slider component from Material-UI
import "./JobSearch.css";

const jobs = [
  {
    title: "Apple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vCOGbSxOES4ol-sz6p9uWrkInrPtguzTJQ&s",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Flipkart",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-flipkart-round-logo-icon-transparent-png-701751694966204grvmunpzzf.png?v=2024120701",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Amazon",
    image:
      "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const savedJobs = [
  {
    title: "Apple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vCOGbSxOES4ol-sz6p9uWrkInrPtguzTJQ&s",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Flipkart",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-flipkart-round-logo-icon-transparent-png-701751694966204grvmunpzzf.png?v=2024120701",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Amazon",
    image:
      "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export default function JobSearch() {
  const [salaryRange, setSalaryRange] = useState([30000, 100000]); // State to manage salary range

  const handleSalaryChange = (event, newValue) => {
    setSalaryRange(newValue); // Update state when the slider value changes
  };

  return (
    <div className="jobSearch">
      <center>
        <div className="searchContainer">
          <TextField
            className="searchBar"
            label="Job title, Keywords or Company Name"
            variant="outlined"
          />
          <button className="searchButton">Search</button>
        </div>
      </center>
      <div className="jobSearchContent">
        <div className="filter">
          <center>
            <h3>Filter</h3>
          </center>

          <p>Job Type</p>
          <div className="jobType">
            <label>
              <input type="checkbox" name="jobType" value="Full-Time" />
              Full-Time
            </label>
            <label>
              <input type="checkbox" name="jobType" value="Part-Time" />
              Part-Time
            </label>
            <label>
              <input type="checkbox" name="jobType" value="Internship" />
              Internship
            </label>
            <label>
              <input type="checkbox" name="jobType" value="Contract" />
              Contract
            </label>
            <label>
              <input type="checkbox" name="jobType" value="Volunteer" />
              Volunteer
            </label>
          </div>
          <p>Location</p>
          <TextField label="Enter your Location" />
          <p className="exp_level">Experience Level</p>
          <select name="experience" id="experience">
            <option value="fresher">Fresher</option>
            <option value="intermediate">Intermediate</option>
            <option value="internship">Internship</option>
            <option value="apprenticeship">Apprenticeship</option>
            <option value="freelancing">Freelancing</option>
            <option value="other">Other</option>
          </select>
          <p>Salary Range</p>
          {/* Salary Range Slider */}
          <Slider
            value={salaryRange}
            onChange={handleSalaryChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value.toLocaleString()}`}
            min={20000}
            max={200000}
            step={5000}
            marks
          />
          <div className="salaryRangeDisplay">
            <h4>From: ${salaryRange[0].toLocaleString()}</h4>
            <h4 className="rangedisplay">
              To: ${salaryRange[1].toLocaleString()}
            </h4>
          </div>
          <p>Currency</p>
          <select name="currency" id="currency">
            <option value="dollar">Dollar($)</option>
            <option value="euro">Euro</option>
            <option value="japanese yen">Japanese Yen</option>
            <option value="gbp">GBP</option>
          </select>
          <center>
            <p>
              <button>Reset all Filter</button>
            </p>
          </center>
        </div>
        <div className="jobs">
          <div className="jobs_section">
            {jobs.map((job, index) => (
              <div className="applied_jobs" key={index}>
                <div className="job_card">
                  {/* Render the logo */}
                  {job.image && (
                    <img
                      className="job_logo"
                      src={job.image}
                      alt={`${job.title} logo`}
                    />
                  )}
                  {/* Render the title */}
                  <h3 className="job_title">{job.title}</h3>
                </div>
                <div className="job_details">
                  <p>Remote</p>
                  <p>Full-Time</p>
                  <p>$200-$1000</p>
                </div>
                <p className="job_description">{job.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="savedJobs">
          <center><h3>Saved Jobs</h3></center>
            {savedJobs.map((savedJobs, index) => (
              <div className="saved_applied_jobs" key={index}>
                <div className="savedJobs_card">
                  {savedJobs.image && (
                    <img
                      className="savedJobs_logo"
                      src={savedJobs.image}
                      alt={`${savedJobs.title} logo`}
                    />
                  )}
                  {/* Render the title */}
                  <h3 className="savedJobs_title">{savedJobs.title}</h3>
                </div>
                <div className="savedJobs_details">
                  <p>Remote</p>
                  <p>Full-Time</p>
                  <p>$200-$1000</p>
                </div>
                <p className="savedJobs_description">{savedJobs.message}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
