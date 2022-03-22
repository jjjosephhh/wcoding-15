import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataCard from "../components/DataCard";
import { UserContext } from "../contexts";

function Home() {
  const navigate = useNavigate();
  //window.location.href = '/about';

  const { user, setUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: name === "age" ? parseInt(value || 0, 10) : value,
      };
    });
  };

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Home</p>
          <p className="subtitle">Welcome home person</p>

          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about/JO889988">Go to Jo's profile page</Link>
              </li>
              <li>
                <Link to="/about">Blog with $5400</Link>
              </li>
              <li>
                <a
                  style={{
                    color: "red",
                  }}
                  href="/about"
                >
                  BAD ABOUT LINK
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => {
              setTimeout(() => {
                navigate("/about");
              }, 2000);
            }}
            className="button is-success"
          >
            Go to about with a delay!
          </button>

        </div>
      </section>

      <div className="container">
        <DataCard />

        <br />
        <br />

        <div className="card">
          <div className="card-content">
            <div className="content">
              <input
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="input is-primary"
                type="text"
                placeholder="First name goes here"
              />
              <br />
              <br />
              <input
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="input is-link"
                type="text"
                placeholder="Last name goes here"
              />
              <br />
              <br />
              <input
                name="age"
                value={user.age}
                onChange={handleChange}
                className="input is-info"
                type="number"
                placeholder="Age goes here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
