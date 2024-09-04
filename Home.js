import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [companyInfo, setCompanyInfo] = useState(false);

  useEffect(() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setMovies(response.data); // Adjust based on the actual response structure
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const toggleCompanyInfo = () => {
    setCompanyInfo(!companyInfo);
  };

  return (
    <div className="container">
      <h2>Movies List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li> // Adjust based on actual response structure
        ))}
      </ul>
      <button onClick={toggleCompanyInfo}>
        {companyInfo ? "Hide Company Info" : "Company Info"}
      </button>
      {companyInfo && (
        <div className="company-info">
          <h3>Company Info</h3>
          <p>Company: Geeksynergy Technologies Pvt Ltd</p>
          <p>Address: Sanjayanagar, Bengaluru-56</p>
          <p>Phone: XXXXXXXXX09</p>
          <p>Email: XXXXXX@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default Home;
