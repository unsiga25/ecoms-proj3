import "bootstrap/dist/css/bootstrap.min.css";
const Register = () => {
  return (
    <div>
      <div className="container">
      <form className="form-horizontal" role="form">
        <h2>Registration</h2>
        <div className="form-group mb-2">
          <label htmlFor="firstName" className="col-sm-3 control-label">
            <span>First Name</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="form-control"
              autofocus
            />
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="lastName" className="col-sm-3 control-label">
            <span>Last Name</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="form-control"
              autofocus
            />
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email" className="col-sm-3 control-label">
            <span>Email</span>
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control"
              name="email"
            />
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password" className="col-sm-3 control-label">
            <span>Password</span>
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password" className="col-sm-3 control-label">
            <span>Confirm</span>
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phoneNumber" className="col-sm-3 control-label">
            <span>Phone number</span>
          </label>
          <div className="col-sm-9">
            <input
              type="phoneNumber"
              id="phoneNumber"
              placeholder="Phone number"
              className="form-control"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          <span>Register</span>
        </button>
      </form>
    </div>
    </div>
  )
}

export default Register
