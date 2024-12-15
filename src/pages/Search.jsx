import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/newsSlice";
import NewsCard from "../components/NewsCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  const handleKeyUp = (e) => {
    if (e.key === "Enter" || query.trim()) {
      dispatch(fetchNews({ query, fq: "" }));
    }
  };
  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchNews({ query, fq: "" })); // Pencarian global
    }
  };
  const limitedArticles = articles.slice(0, 10);
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-4 text-center">Cari Berita</h1>

      <div className="input-group mb-4 w-75">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Masukkan kata kunci..."
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Cari Berita
        </button>
      </div>

      {loading && <p className="text-secondary">Loading...</p>}
      {!loading && error && error !== "Request failed with status code 429" && (
        <p className="text-danger">{error}</p>
      )}

      <div className="row w-100">
        {limitedArticles.length > 0 ? (
          limitedArticles.map((article) => (
            <div className="col-md-4 mb-3" key={article._id}>
              <NewsCard article={article} />
            </div>
          ))
        ) : (
          <p className="text-center text-muted">Tidak ada berita ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
