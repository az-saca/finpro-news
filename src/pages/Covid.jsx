import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/newsSlice";
import NewsCard from "../components/NewsCard";
import StatusIndicator from "../components/StatusIndicator";

const Covid = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ query: "covid", fq: "" })); // Berita global
  }, [dispatch]);
  if (loading || error) {
    return <StatusIndicator loading={loading} error={error} />;
  }

  return (
    <div className="container">
      <h1 className="text-center">Covid</h1>
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

export default Covid;
