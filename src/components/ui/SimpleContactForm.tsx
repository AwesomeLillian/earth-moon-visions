import { useState } from 'react';

export default function SimpleContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully! ✅');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('Failed: ' + (data.error || 'try again'));
      }
    } catch {
      setStatus('Failed to send, try again');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="w-full border p-3 rounded" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <textarea className="w-full border p-3 rounded h-32" placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} required />
        <button type="submit" className="w-full bg-black text-white p-3 rounded">Send Message</button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
}
