// src/pages/AdminPage.jsx
import React, { useEffect, useState } from 'react';

const GOLD = '#D4AF37';    // yellowish gold
const GOLD_DARK = '#b58f2a';
const BG = '#ffffff';

function AdminHeader({ user, onSignOut }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
      <h1 style={{ margin: 0, color: '#222' }}>Surveys — Admin</h1>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ padding: '6px 10px', background: GOLD, borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
          <strong style={{ color: '#fff' }}>{user}</strong>
        </div>
        <button onClick={onSignOut} style={{
          border: '1px solid #eee', background: 'transparent', padding: '6px 10px', borderRadius: 8, cursor: 'pointer'
        }}>Sign out</button>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [auth, setAuth] = useState(() => {
    const saved = sessionStorage.getItem('adminAuth');
    return saved ? JSON.parse(saved) : null;
  });
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (auth) fetchList();
    // eslint-disable-next-line
  }, [auth, page]);

  function saveAuth({ user, pass }) {
    const token = btoa(`${user}:${pass}`);
    const a = { user, pass, token };
    sessionStorage.setItem('adminAuth', JSON.stringify(a));
    setAuth(a);
  }
  function clearAuth() {
    sessionStorage.removeItem('adminAuth');
    setAuth(null);
    setItems([]);
  }

  async function fetchList() {
    setLoading(true);
    setError(null);
    try {
      const qs = new URLSearchParams({ page, limit, search });
      const res = await fetch(`https://api-backend.mexuri.com.ng/api/admin/surveys?${qs.toString()}`, {
        headers: { Authorization: `Basic ${auth.token}`, Accept: 'application/json' },
      });
      if (res.status === 401) { clearAuth(); setError('Unauthorized — sign in again'); return; }
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      setItems(json.items || []);
      setTotal(json.total || 0);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load');
    } finally { setLoading(false); }
  }

  async function fetchDetail(id) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api-backend.mexuri.com.ng/api/admin/surveys/${id}`, {
        headers: { Authorization: `Basic ${auth.token}`, Accept: 'application/json' },
      });
      if (res.status === 401) { clearAuth(); setError('Unauthorized — sign in again'); return; }
      if (!res.ok) throw new Error(await res.text());
      setSelected(await res.json());
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load detail');
    } finally { setLoading(false); }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this survey? This cannot be undone.')) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api-backend.mexuri.com.ng/api/admin/surveys/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Basic ${auth.token}`, Accept: 'application/json' },
      });
      if (res.status === 401) { clearAuth(); setError('Unauthorized — sign in again'); return; }
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      // refresh list
      fetchList();
      setSelected(null);
      alert(`Deleted ${json.deletedId}`);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to delete');
    } finally { setLoading(false); }
  }

  if (!auth) {
    // show small auth form
    return (
      <div style={{ padding: 18, background: BG }}>
        <h2>Admin sign in</h2>
        <AuthForm onSubmit={saveAuth} />
      </div>
    );
  }

  return (
    <div style={{ padding: 18, background: BG }}>
      <AdminHeader user={auth.user} onSignOut={clearAuth} />

      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <input
          placeholder="Search brand / service / description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #eee' }}
        />
        <button onClick={() => { setPage(1); fetchList(); }} style={goldBtn}>Search</button>
      </div>

      {error && <div style={{ color: 'crimson', marginBottom: 8 }}>{error}</div>}
      {loading && <div style={{ marginBottom: 8 }}>Loading...</div>}

      <div style={{ background: '#fff', borderRadius: 12, padding: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.06)' }}>
        <div style={{ marginBottom: 8, color: '#666' }}>Showing {items.length} of {total} — page {page}</div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ padding: 12 }}>Brand</th>
              <th style={{ padding: 12 }}>Service / Short</th>
              <th style={{ padding: 12 }}>Submitted</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(it => (
              <tr key={it.id} style={{ borderTop: '1px solid #f4f4f4' }}>
                <td style={{ padding: 12 }}>{it.brand_name || '(no brand)'}</td>
                <td style={{ padding: 12 }}>{(it.brand_service || it.description || '').slice(0, 100)}</td>
                <td style={{ padding: 12 }}>{it.is_submitted ? new Date(it.submitted_at).toLocaleString() : 'Draft'}</td>
                <td style={{ padding: 12 }}>
                  <button onClick={() => fetchDetail(it.id)} style={{ marginRight: 8 }}>View</button>
                  <button onClick={() => handleDelete(it.id)} style={{ color: 'white', background: 'red', padding: '6px 8px', borderRadius: 6, border: 'none' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{ marginRight: 8 }}>Prev</button>
            <span>Page {page}</span>
            <button onClick={() => setPage(p => p + 1)} disabled={page * limit >= total} style={{ marginLeft: 8 }}>Next</button>
          </div>
        </div>
      </div>

      {selected && (
        <DetailModal item={selected} onClose={() => setSelected(null)} onDelete={() => handleDelete(selected.id)} />
      )}
    </div>
  );
}

function AuthForm({ onSubmit }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit({ user, pass }); }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input placeholder="Admin username" value={user} onChange={e => setUser(e.target.value)} style={{ padding: 8, borderRadius: 8 }} />
        <input placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} style={{ padding: 8, borderRadius: 8 }} />
        <button type="submit" style={goldBtn}>Sign in</button>
      </div>
    </form>
  );
}

function DetailModal({ item, onClose, onDelete }) {
  return (
    <div style={{
      position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
      background: 'rgba(0,0,0,0.45)'
    }}>
      <div style={{ width: '80%', maxWidth: 900, background: '#fff', borderRadius: 12, padding: 18, maxHeight: '85vh', overflow: 'auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 12 }}>
          <h3 style={{ margin:0 }}>{item.brand_name || 'No brand'}</h3>
          <div>
            <button onClick={onClose} style={{ marginRight: 8 }}>Close</button>
            <button onClick={onDelete} style={{ background:'red', color:'#fff', border:'none', padding:'8px 10px', borderRadius:8 }}>Delete</button>
          </div>
        </div>

        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <tbody>
            {Object.entries(item).map(([k, v]) => (
              <tr key={k} style={{ borderTop: '1px solid #f3f3f3' }}>
                <td style={{ padding: 10, fontWeight: 700, width: 220 }}>{k}</td>
                <td style={{ padding: 10 }}>{Array.isArray(v) ? v.join(', ') : (v === null ? '—' : String(v))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const goldBtn = {
  background: GOLD,
  color: '#fff',
  padding: '8px 12px',
  borderRadius: 8,
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
};
