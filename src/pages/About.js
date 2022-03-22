import { useNavigate, useParams } from "react-router-dom";
import DataCard from "../components/DataCard";

function About() {

    const { userId } = useParams();

    const navigate = useNavigate();

  return (
    <>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">About</p>
          <p className="subtitle">Want to learn about this page?</p>
          <p className="subtitle">{userId ? `You are user: ${userId}` : 'There is no user'}</p>

          <button 
          onClick={() => {
            navigate(-1);
          }}
          className="button is-warning">Go back!</button>
        </div>
      </section>

      <div className="container">
        <DataCard />
      </div>
    </>
  );
}

export default About;
