import PropTypes from 'prop-types';

export default function User({ user }) {
  const { name, phone, email, address, age, photoUrl } = user;
  return (
    <article className="card">
      <img src={photoUrl} alt={name} className="avatar" />
      <div className="info">
        <h3>{name}</h3>
        <p><strong>Edad:</strong> {age}</p>
        <p><strong>Tel:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Dirección:</strong> {address}</p>
      </div>
    </article>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    photoUrl: PropTypes.string.isRequired
  }).isRequired
};
