import React, { useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "./CSS/TutorCategory.css";
import { TutorContext } from "../Context/TutorContext";
import Item from "../Components/Item/Item";

const TutorCategory = (props) => {
  const { all_tutors } = useContext(TutorContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const subjectFilter = searchParams.get("subject") || "";
  const availabilityFilter = searchParams.get("availability") || "";

  const filteredTutors = useMemo(() => {
    return all_tutors.filter((tutor) => {
      const matchesSubject = !subjectFilter || tutor.subject.toLowerCase() === subjectFilter.toLowerCase();
      const matchesAvailability = !availabilityFilter || tutor.availability.toLowerCase() === availabilityFilter.toLowerCase();
      return matchesSubject && matchesAvailability;
    });
  }, [all_tutors, subjectFilter, availabilityFilter]);

  const subjectOptions = [...new Set(all_tutors.map((tutor) => tutor.subject).filter(Boolean))];
  const availabilityOptions = [...new Set(all_tutors.map((tutor) => tutor.availability).filter(Boolean))];

  const handleFilterChange = (key, value) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    setSearchParams(nextParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="tutor-category">
      <div className="tutor-category-header">
        <h1>Find Your Perfect Tutor</h1>
        <p className="header-subtitle">Connect with experienced volunteer tutors in your area</p>
      </div>

      <div className="filter-panel">
        <div className="filter-label">Filter by</div>
        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="subject-select" className="filter-field-label">Subject</label>
            <select 
              id="subject-select"
              value={subjectFilter} 
              onChange={(event) => handleFilterChange("subject", event.target.value)}
              className="filter-select"
            >
              <option value="">All subjects</option>
              {subjectOptions.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="availability-select" className="filter-field-label">Availability</label>
            <select 
              id="availability-select"
              value={availabilityFilter} 
              onChange={(event) => handleFilterChange("availability", event.target.value)}
              className="filter-select"
            >
              <option value="">All days</option>
              {availabilityOptions.map((availability) => (
                <option key={availability} value={availability}>
                  {availability}
                </option>
              ))}
            </select>
          </div>
        </div>

        {(subjectFilter || availabilityFilter) && (
          <button type="button" className="clear-btn" onClick={clearFilters}>Clear filters</button>
        )}
      </div>

      <div className="tutorcategory-info">
        <p className="result-count">
          Showing <span className="count-highlight">{filteredTutors.length}</span> of <span>{all_tutors.length}</span> tutors
        </p>
      </div>

      <div className="tutorcategory-tutors">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor) => (
            <Item
              key={tutor.id}
              id={tutor.id}
              name={tutor.name}
              subject={tutor.subject}
              availability={tutor.availability}
              schedule={tutor.schedule}
              image={tutor.image}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No tutors found matching your filters.</p>
            <button className="reset-btn" onClick={clearFilters}>Reset filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorCategory;
