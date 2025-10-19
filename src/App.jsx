import { useEffect, useState } from 'react';
import './styles.css';
import { fetchUsers, createUser } from './services/api.js';
import Users from './components/Users.jsx';
import Form from './components/Form.jsx';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleCreateUser(formData) {
    setError('');
    try {
      const newUser = await createUser({ ...formData, age: Number(formData.age) });
      setUsers(prev => [newUser, ...prev]); // al inicio
      return true;
    } catch (e) {
      setError(e.message);
      return false;
    }
  }

  return (
    <div className="container">
      <h1>Sistema de Perfiles de Usuario</h1>
      <section className="grid">
        <div className="left">
          <h2>Crear nuevo usuario</h2>
          <Form onCreate={handleCreateUser} />
        </div>
        <div className="right">
          <h2>Listado</h2>
          {loading && <p>Cargando...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && <Users users={users} />}
        </div>
      </section>
    </div>
  );
}
