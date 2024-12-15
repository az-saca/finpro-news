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
        <article style={{ width: "70%" }}>
          {articles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </article>
        <aside style={{ width: "30%" }}>
          <h2>Aside</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quod, doloremque voluptatum quidem quia nemo
            temporibus quibusdam officia quos. Quisquam voluptates, quae, quod,
            doloremque voluptatum quidem quia nemo temporibus quibusdam officia
            quos.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Programming;
