import { BsPerson } from 'react-icons/bs';
import { MdLockOutline } from 'react-icons/md';

export default function CustomInput(props) {
  const { label, placeholder, type, className } = props;
  return (
    <div className={className}>
      <div className="icon">
        {type === 'password' ? (
          <MdLockOutline size={24} />
        ) : (
          <BsPerson size={24} />
        )}
      </div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
