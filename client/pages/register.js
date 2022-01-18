import axios from "axios";
import Link from "next/link";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useState } from "react";
import Authforms from "../components/forms/Authforms";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name,
          email,
          password,
          secret,
        }
      );
      setName("");
      setEmail("");
      setPassword("");
      setSecret("");
      setOk(data.ok);
      setLoading(false);
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
            Register
          </h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <Authforms
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>
      <div className="div">
        <div className="col">
          <Modal
            title="Congratulations!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>You have successfully registered for the website!</p>
            <Link href="/login">
              <a className="btn btn-primary btn-sm"> Login</a>
            </Link>
          </Modal>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Already registered?{" "}
            <Link href="/login">
              <a> Login</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
