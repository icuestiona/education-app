import React, { useContext } from "react";
import "./CSS/TutorCategory.css";
import { TutorContext } from "../Context/TutorContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const TutorCategory = (props) => {
  const { all_tutors } = useContext(TutorContext);

  const filteredTutors = all_tutors.filter(
    (tutor) => tutor.category === props.category
  );

  return (
    <div className="tutor-category">
      <div>
        <h2>Volunteer Tutors, Changing Lives, Brightening Futures</h2>
      </div>
      <div className="tutorcategory-indexSort">
        <p>
          <span>Showing {filteredTutors.length}</span> out of{" "}
          {all_tutors.length} tutors
        </p>
        <div className="tutorcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="tutorcategory-tutors">
        {all_tutors.map((tutor) => (
          <Item
            key={tutor.id}
            name={tutor.name}
            subject={tutor.subject}
            availability={tutor.availability}
            schedule={tutor.schedule}
            image={tutor.image}
          />
        ))}
      </div>
      <div className="loadmore">Explore More</div>
    </div>
  );
};

export default TutorCategory;
