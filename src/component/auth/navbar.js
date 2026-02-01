import Loop from '../../assets/imgs/Group 1000003466.png';
import Button from '../utils/button';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={Loop} alt="Loop Logo" />
        <div className="display">
          <Button className="login-b" label="Login" />
          <Button className="sign-b" label="Sign Up" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
