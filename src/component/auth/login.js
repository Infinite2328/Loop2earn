import Navbar from './navbar';
import './auth.scss';
import Loop from '../../assets/imgs/Loop.png';
import log_const from './constant/login';
import CustomInput from '../utils/input';
import Button from '../utils/button';
import { FaGoogle, FaTwitter } from 'react-icons/fa6';

function Login() {
  return (
    <div className="login">
      <div>
        <Navbar />
        <div className="logo">
          <img src={Loop} />
        </div>
        <div className="greeting">{log_const.Greeting}</div>
        <div className="description">{log_const.Discription}</div>
        <div className="submitgroup">
          <div className="input-section">
            <CustomInput
              label={log_const.UserLabel}
              placeholder="Username"
              type="text"
              className="username-input"
            />
            <CustomInput
              label={log_const.PassLabel}
              placeholder="Password"
              type="password"
              className="password-input"
            />
          </div>
          <Button className="login-b" label={log_const.Login} />
          <Button className="forgot-pass-b" label={log_const.ForgotPass} />
        </div>
        <div className="utils-link">
          <div className="utils-sites">
            <FaGoogle size={35} />
          </div>
          <div className="utils-sites"></div>
          <div className="utils-sites">
            <FaTwitter size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
