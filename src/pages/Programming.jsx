import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/newsSlice";
import NewsCard from "../components/NewsCard";
import StatusIndicator from "../components/StatusIndicator";

const Programming = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(
      fetchNews({ query: "programming", fq: 'section_name:("Technology")' })
    ); // Berita global
  }, [dispatch]);
  // const limitedArticles = articles.slice(0, 10);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  if (loading || error) {
    return <StatusIndicator loading={loading} error={error} />;
  }

  return (
    <div className="container">
      <h1 className="text-center">Programming</h1>
      <hr />
      <div className="d-flex flex-row">
        <article style={{ width: "100%" }}>
          {articles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </article>
      </div>
    </div>
  );
};

export default Programming;
