import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import DataCard from "../components/DataCard";

function Blog() {
  const { search } = useLocation();

  const params = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Blog</p>
          <p className="subtitle">Some news about the company</p>
          <p className="subtitle">Salary: ${params.get('salary') || 0}</p>
        </div>
      </section>
      <div className="container">
        <DataCard />
      </div>
    </>
  );
}

export default Blog;
