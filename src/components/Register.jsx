import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="container mt-5">
      <Navbar />
      <h1 className="text-white text-center">REGISTER FOR AMRITA CTF</h1>
      <p className="text-center text-grey">
        Join the community and be part of the future of the information security industry.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <RegisterForm />
          <small className="mt-3 d-block text-center">
            Already Registered? <a href="/login">Login here</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
