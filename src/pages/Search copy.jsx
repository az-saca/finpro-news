import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/newsSlice";
import NewsCard from "../components/NewsCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  const handleKeyUp = () => {
    if (query.trim()) {
      dispatch(fetchNews({ query, fq: "" }));
    }
  };
  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchNews({ query, fq: "" })); // Pencarian global
    }
  };

  return (
    <div className="container">
      <h1>Cari Berita</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Masukkan kata kunci..."
        />
        <button onClick={handleSearch}>Cari Berita</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {articles.map((article) => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default Search;
