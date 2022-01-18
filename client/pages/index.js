import { UserContext } from "../context";
import { useContext } from "react";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(/images/default.jpg)`,
        backgroundColor: "grey",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
        right: 0,
        left: 0,
      }}
    >
      <div className="row">
        <div className="col">
          <h1
            className="display-1"
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "25vh",
              height: "100vh",
            }}
          >
            {state === null ? (
              <>
                Welcome Guest!
                <br /> Login To Gain Access To The Website{" "}
              </>
            ) : (
              <>
                Welcome {state.user.name} <br /> <br /> You have successfully
                entered the website!
              </>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
