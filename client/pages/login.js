import axios from "axios";
import Authforms from "../components/forms/Authforms";
import Link from "next/link";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email,
          password,
        }
      );
      //saving the data in the context
      setState({ user: data.user, token: data.token });

      //local storage
      window.localStorage.setItem("auth", JSON.stringify(data));
      router.push("/");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 text-light" style={{ backgroundColor: "black" }}>
        <div className="col text-center">
          <h1
            className="display-3"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Login
          </h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <Authforms
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Dont have an account?{" "}
            <Link href="/register">
              <a> Register</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
