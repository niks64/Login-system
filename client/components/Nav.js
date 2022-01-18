import Link from "next/link";
import { UserContext } from "../context";
import { useContext } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav
      className="nav d-flex justify-content-end"
      style={{
        backgroundColor: "black",
        color: "white",
        textShadow: "inherit",
        fontWeight: "bold",
      }}
    >
      <Link href="/">
        <a className="nav-link text-light">Home</a>
      </Link>

      {state !== null ? (
        <>
          <a onClick={logout} className="nav-link text-light">
            Logout
          </a>
        </>
      ) : (
        <>
          {" "}
          <Link href="/login">
            <a className="nav-link text-light"> Login</a>
          </Link>
          <Link href="/register">
            <a className="nav-link text-light">Register</a>
          </Link>{" "}
        </>
      )}
    </nav>
  );
};

export default Nav;
