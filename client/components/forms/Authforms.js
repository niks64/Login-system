import { SyncOutlined } from "@ant-design/icons";

function Authforms({
  handleSubmit,
  name,
  setEmail,
  setName,
  email,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {page !== "login" && (
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Your name: </label>
          </small>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
      )}

      <div className="form-group p-2">
        <small>
          <label className="text-muted">Email: </label>
        </small>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group p-2">
        <small>
          <label className="text-muted">Passsword: </label>
        </small>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      {page !== "login" && (
        <>
          <div className="form-group p-2">
            <small>
              <label className="text-muted"> Pick a question</label>
            </small>
            <select className="form-control">
              <option>What is your favourite animal?</option>
              <option>What is your best friend's name?</option>
              <option>What is your favourite color?</option>
            </select>
          </div>
          <div className="form-group p-2">
            <input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Write your answer here"
            />
          </div>
        </>
      )}

      <div className="form-group p-2">
        <button
          disabled={
            page !== "login"
              ? !name || !email || !password || !secret
              : !email || !password
          }
          className="btn btn-primary col-12"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default Authforms;
