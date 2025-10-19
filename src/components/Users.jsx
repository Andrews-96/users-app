import PropTypes from 'prop-types';
import User from './User.jsx';

export default function Users({ users }) {
  if (!users.length) return <p>No hay usuarios todavía.</p>;
  return (
    <div className="users">
      {users.map(u => <User key={u.id} user={u} />)}
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};
