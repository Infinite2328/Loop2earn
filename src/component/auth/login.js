import Navbar from './navbar';
import './auth.scss';
import Loop from '../../assets/imgs/Loop.png';
import log_const from './constant/login';
import CustomInput from '../utils/input';
import Button from '../utils/button';
import { FaGoogle, FaTwitter } from 'react-icons/fa6';
import firefox from '../../assets/imgs/metamask-icon logo.png';
import { useEffect, useState } from 'react';
// import smallLogo from '../../../images/logo/logo2.png';
import vector from '../../assets/imgs/Vector.png';

function Login() {
  const [degrees, setDeg] = useState([]);
  useEffect(() => {
    var array = [];
    for (let i = -75; i < 0; i += 3) {
      array.push(i);
    }
    setDeg(array);
  }, []);
  return (
    <div className="login">
      <div>
        <Navbar />
        <div className="logo">
          {degrees.map((degree, idx) => (
            <img
              src={vector}
              alt="vector"
              key={idx}
              style={{
                transform: `rotateX(${degree}deg) rotateY(${degree - 10}deg)`,
                opacity: `${-degree / 75}`
              }}
            />
          ))}
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
          <div className="utils-sites">
            <img src={firefox} />
          </div>
          <div className="utils-sites">
            <FaTwitter size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
