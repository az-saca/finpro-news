import { useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";

const Saved = () => {
  const savedArticles = useSelector((state) => state.saved);

  if (savedArticles.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center text-center mt-5">
        <p className="text-muted fs-4">Tidak ada berita yang disimpan.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center">Berita yang Disimpan</h1>
      <hr />
      <div className="d-flex flex-row">
        <article style={{ width: "100%" }}>
          {savedArticles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </article>
      </div>
    </div>
  );
};

export default Saved;
