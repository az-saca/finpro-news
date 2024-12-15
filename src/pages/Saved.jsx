import { useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";

const Saved = () => {
  const savedArticles = useSelector((state) => state.saved);

  if (savedArticles.length === 0) {
    return <p>Tidak ada berita yang disimpan.</p>;
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
