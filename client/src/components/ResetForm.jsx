
import { Link } from "react-router-dom"; 
const ResetForm =()=>
    {
        return (<>
        
        

        
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <form className="row g-3">
          <div className="col-auto">
            <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
            <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="Enter valid email address" />
          </div>
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
            <input type="password" className="form-control" id="inputPassword2" placeholder="Valid email" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Send Reset Link</button>
          </div>
        </form>
      </div>

      <p className="text-center">
        <Link to="/" className="text-decoration-none">
          Return to Login
        </Link>
      </p>
    </>
        
        )
    }
    export default ResetForm;