import { useDispatch, useSelector } from "react-redux";
import { addToSaved, removeFromSaved } from "../redux/savedSlice";

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
    <div className="" style={{ display: "inline-block", margin: "10px" }}>
      <div
        className="card"
        style={{
          width: "18rem",
          height: "25rem",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
        {/* <img
          src={article.multimedia[0].url}
          className="card-img-top"
          alt={article.headline.main}
        /> */}
        <div
          className="card-body"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <h5 className="card-title">{article.headline.main}</h5>
          <p className="card-text">{article.abstract}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "auto",
            }}>
            <a
              href={article.web_url}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "50%" }}>
              View News
            </a>
            <button
              onClick={handleSaveToggle}
              className="btn btn-danger"
              style={{
                backgroundColor: isSaved ? "red" : "green",
                width: "40%",
              }}>
              {isSaved ? "Un-Save" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
