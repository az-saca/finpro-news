/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addToSaved, removeFromSaved } from "../redux/savedSlice";
import "../components/NewsCard.css";

const NewsCard = ({ article }) => {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved);
  const isSaved = saved.some((item) => item._id === article._id);

  const handleSaveToggle = () => {
    if (isSaved) {
      dispatch(removeFromSaved(article));
    } else {
      dispatch(addToSaved(article));
    }
  };

  return (
    <div
      className="card border-bottom mb-3"
      style={{
        border: "none",
        display: "flex",
        flexDirection: "column",
        gap: "10%",
        paddingRight: "10px",
      }}>
      <div
        className="card-body"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className="card-title">{article.headline.main}</h5>
          <i
            onClick={handleSaveToggle}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: isSaved ? "#007bff" : "#6c757d",
            }}
            className={`bi bi-${isSaved ? "bookmark-fill" : "bookmark"}`}></i>
        </div>
        <p className="card-text" style={{ marginTop: "15px" }}>
          {article.abstract}
        </p>

        <a href={article.web_url} target="_blank" rel="noopener noreferrer">
          Read more &gt;
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
