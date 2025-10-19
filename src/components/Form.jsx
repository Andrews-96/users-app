import { useState } from 'react';
import PropTypes from 'prop-types';

const initial = { name:'', phone:'', email:'', address:'', age:'', photoUrl:'' };

export default function Form({ onCreate }) {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setMsg('');
    const ok = await onCreate(form);
    if (ok) { setForm(initial); setMsg('Usuario creado con éxito'); }
    setSubmitting(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Nombre
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>Teléfono
        <input name="phone" value={form.phone} onChange={handleChange} required />
      </label>
      <label>Email
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>Dirección
        <input name="address" value={form.address} onChange={handleChange} required />
      </label>
      <label>Edad
        <input type="number" name="age" value={form.age} onChange={handleChange} required />
      </label>
      <label>Foto (URL)
        <input name="photoUrl" value={form.photoUrl} onChange={handleChange} placeholder="https://..." required />
      </label>
      <button disabled={submitting}>{submitting ? 'Creando...' : 'Crear usuario'}</button>
      {msg && <p className="ok">{msg}</p>}
    </form>
  );
}

Form.propTypes = { onCreate: PropTypes.func.isRequired };
