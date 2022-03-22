import { useContext } from "react";
import { UserContext } from "../contexts";

function DataCard() {

    const { user } = useContext(UserContext);

    return (
        <div className="card">
          <div className="card-content">
            <div className="content">
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Age: {user.age}</p>
            </div>
          </div>
        </div>
    );
}

export default DataCard;