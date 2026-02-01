import Navbar from './navbar';
import './auth.scss';
import Loop from '../../assets/imgs/Loop.png';
import log_const from './constant/login';
import CustomInput from '../utils/input';

function Login() {
  return (
    <div className="login">
      <div>
        <Navbar />
        <div className="logo">
          <img src={Loop} />
        </div>
        <div>{log_const.Greeting}</div>
        <div>{log_const.Discription}</div>
        <div>
          <CustomInput
            label={log_const.UserLabel}
            placeholder="Enter your username or email"
            type="text"
          />
          <CustomInput
            label={log_const.PassLabel}
            placeholder="Enter your password"
            type="password"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
