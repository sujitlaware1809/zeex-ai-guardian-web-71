import React, { useState, useRef } from 'react';

// ... existing code ...
const GEMINI_API_KEY = 'AIzaSyBvMkgKKqP6CYaP7XOVhSfaQ4fEQe5xpYI';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=' + GEMINI_API_KEY;
// ... existing code ...

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, open, loading]);

  React.useEffect(() => {
    if (open && showWelcome && messages.length === 0) {
      setMessages([
        { sender: 'bot', text: '👋 Hi! I am Zeexia Chatbot. How can I help you today?' },
      ]);
      setShowWelcome(false);
    }
  }, [open, showWelcome, messages.length]);

  const fetchZzexiaData = async (query: string) => {
    try {
      const response = await fetch('https://zeex-website-backend-1.onrender.com/api/data?q=' + encodeURIComponent(query));
      if (!response.ok) return null;
      const data = await response.json();
      return JSON.stringify(data);
    } catch (e) {
      return null;
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://zeex-website-backend-1.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botText = data?.response || 'Sorry, I could not get a response.';
      setMessages((msgs) => [...msgs, { sender: 'bot', text: botText }]);
    } catch (e: any) {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Error contacting backend.' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
            borderRadius: '50%',
            width: 56,
            height: 56,
            background: '#2563eb',
            color: 'white',
            fontSize: 28,
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
          }}
          aria-label="Open chatbot"
        >
          💬
        </button>
      )}
      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 350,
            maxHeight: 500,
            background: 'white',
            borderRadius: 12,
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: 12, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>Zeexia Chatbot</span>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>×</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 12, background: '#f9fafb' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ marginBottom: 10, display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', alignItems: 'flex-end' }}>
                {msg.sender === 'bot' && (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, fontSize: 18 }}>
                    🤖
                  </div>
                )}
                <div
                  style={{
                    display: 'inline-block',
                    background: msg.sender === 'user' ? '#2563eb' : '#e5e7eb',
                    color: msg.sender === 'user' ? 'white' : '#111',
                    borderRadius: 16,
                    padding: '8px 14px',
                    maxWidth: '80%',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 8, fontSize: 18, color: 'white' }}>
                    🧑
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, fontSize: 18 }}>
                  🤖
                </div>
                <div style={{ background: '#e5e7eb', color: '#111', borderRadius: 16, padding: '8px 14px', fontStyle: 'italic' }}>
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ padding: 12, borderTop: '1px solid #eee', display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              style={{ flex: 1, borderRadius: 8, border: '1px solid #ddd', padding: 8 }}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '0 16px',
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 