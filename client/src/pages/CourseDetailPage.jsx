import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseDetailPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // Fetch course details
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/course/${id}`) // Fetch the course by ID
      .then((response) => {
        setCourse(response.data); // Set course data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError("Error fetching course details. Please try again later.");
        setLoading(false); // Stop loading on error
      });
  }, [id]);

  const handleEnroll = () => {
    alert(`Enrolled in ${course.title}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="container">
      <button className="btn btn-secondary" onClick={() => navigate("/main")}>Back to Courses</button>
      <div className="card mt-4">
        <img
          src={`https://picsum.photos/200/100?random=${course.id}`}
          alt="Course"
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.fullDescription}</p>
          <p className="card-text"><strong>Price:</strong> {course.price}</p>
          <p className="card-text"><strong>Author:</strong> {course.author}</p>
          <button className="btn btn-success" onClick={handleEnroll}>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
