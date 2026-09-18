import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Mail, Phone, Github, Copy, Check, Send, Globe } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageForm, setMessageForm] = useState({ name: '', email: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageForm.name || !messageForm.message) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setMessageForm({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="rounded-3xl bg-zinc-900 border border-zinc-700 max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto relative text-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-5 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono text-emerald-400 font-medium">Available for Opportunities</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-helvetica-neue">
            Get In Touch
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1">
            Let's discuss full-stack leadership roles, high-scale web platforms, or WebXR spatial projects.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Email */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Mail className="w-4 h-4 text-zinc-400" />
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="text-zinc-500 hover:text-white transition-colors text-xs"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="text-[10px] uppercase font-mono text-zinc-500">Email</div>
              <div className="text-xs font-mono text-white truncate font-medium mt-0.5">
                {PERSONAL_INFO.email}
              </div>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-3 block text-center py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
            >
              Send Email
            </a>
          </div>

          {/* WhatsApp / Phone */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="text-zinc-500 hover:text-white transition-colors text-xs"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="text-[10px] uppercase font-mono text-zinc-500">Phone & WhatsApp</div>
              <div className="text-xs font-mono text-white truncate font-medium mt-0.5">
                {PERSONAL_INFO.phone}
              </div>
            </div>
            <a
              href="https://wa.me/917302854849"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/60 text-emerald-300 text-xs font-medium transition-colors"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* External Profile Links */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
          </a>
          <a
            href={PERSONAL_INFO.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Live Portfolio</span>
          </a>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSendMessage} className="space-y-3 font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] text-zinc-400 mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                required
                value={messageForm.name}
                onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                placeholder="Alex"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-zinc-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] text-zinc-400 mb-1 font-medium">
                Your Email
              </label>
              <input
                type="email"
                required
                value={messageForm.email}
                onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-zinc-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-zinc-400 mb-1 font-medium">
              Message
            </label>
            <textarea
              required
              rows={3}
              value={messageForm.message}
              onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
              placeholder="Hi Sunny, let's discuss an engineering role / collaboration..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-zinc-600 focus:border-zinc-500 outline-none resize-none"
            />
          </div>

          {sentSuccess ? (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center text-xs font-mono text-emerald-400">
              Message sent! Sunny will respond shortly.
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
