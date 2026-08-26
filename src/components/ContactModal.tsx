import React, { useState } from 'react';
import { PERSONAL_INFO, PORTFOLIO_IMAGES } from '../data/portfolioData';
import { X, Mail, Phone, Github, Copy, Check, Send, Terminal } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'CLI: Sunny Jadaun Terminal Link Active.',
    'Status: Available for Full-Time / Lead / Senior Roles.',
    'Type "help" to see quick commands or use the direct form below.',
  ]);
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

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, `> ${terminalInput}`];

    switch (cmd) {
      case 'help':
        newLogs.push('Commands: email, phone, github, projects, skills, exp, clear, status');
        break;
      case 'email':
        newLogs.push(`Email: ${PERSONAL_INFO.email}`);
        break;
      case 'phone':
        newLogs.push(`Phone: ${PERSONAL_INFO.phone}`);
        break;
      case 'github':
        newLogs.push(`GitHub: ${PERSONAL_INFO.github}`);
        break;
      case 'projects':
        newLogs.push('Projects: DigiWholesale ERP, DigiWPPConnect, Immarsify AR, Liiqwise, Royal Canin');
        break;
      case 'skills':
        newLogs.push('Core: React.js, Node.js, Express.js, Three.js, MindAR, WhatsApp API, MongoDB');
        break;
      case 'exp':
        newLogs.push('4+ Years Experience: DigiBySR (Lead), I-Pangram (Squad Lead), Codefeast, Forelskets');
        break;
      case 'status':
        newLogs.push('Status: Open to Full-Stack, Lead, and Senior Software Engineering roles.');
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push(`Command not found: "${cmd}". Type "help" for a list of commands.`);
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel border border-red-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto relative animate-ken-burns">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Profile Header */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-red-500 shrink-0">
            <img
              src={PORTFOLIO_IMAGES.contactPortrait}
              alt="Sunny Jadaun"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-helvetica-neue">
                {PERSONAL_INFO.name}
              </h3>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <p className="text-xs text-red-400 font-mono">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.specialization}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 mb-6 max-w-xl">
          Feel free to reach out directly for full-stack opportunities, engineering leadership roles, enterprise ERP consulting, or WebXR collaborations.
        </p>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Email */}
          <div className="bg-black/50 p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Mail className="w-5 h-5 text-red-400" />
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-[10px] uppercase font-mono text-gray-500 font-bold">EMAIL ADDRESS</div>
              <div className="text-xs font-mono font-bold text-white truncate mt-0.5">
                {PERSONAL_INFO.email}
              </div>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-3 block text-center py-1.5 rounded-lg bg-red-600/20 border border-red-500/30 text-red-300 hover:bg-red-600/30 text-[11px] font-mono font-semibold"
            >
              SEND EMAIL ↗
            </a>
          </div>

          {/* Phone / WhatsApp */}
          <div className="bg-black/50 p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Phone className="w-5 h-5 text-green-400" />
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-[10px] uppercase font-mono text-gray-500 font-bold">PHONE & WHATSAPP</div>
              <div className="text-xs font-mono font-bold text-white truncate mt-0.5">
                {PERSONAL_INFO.phone}
              </div>
            </div>
            <a
              href="https://wa.me/917302854849"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center py-1.5 rounded-lg bg-green-600/20 border border-green-500/30 text-green-300 hover:bg-green-600/30 text-[11px] font-mono font-semibold"
            >
              WHATSAPP CHAT ↗
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-black/50 p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Github className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-[10px] uppercase font-mono text-gray-500 font-bold">GITHUB PROFILE</div>
              <div className="text-xs font-mono font-bold text-white truncate mt-0.5">
                sunnyjadaun63
              </div>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600/30 text-[11px] font-mono font-semibold"
            >
              VIEW GITHUB ↗
            </a>
          </div>
        </div>

        {/* Developer Quick Terminal */}
        <div className="bg-black/70 rounded-2xl p-4 border border-white/15 mb-6 font-mono text-xs">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-3 text-[10px] text-gray-400">
            <Terminal className="w-3.5 h-3.5 text-red-400" />
            <span>DEVELOPER CLI (Try typing &quot;help&quot;, &quot;skills&quot;, &quot;exp&quot;)</span>
          </div>

          <div className="max-h-28 overflow-y-auto space-y-1 text-gray-300 mb-3">
            {terminalLogs.map((log, i) => (
              <div key={i} className={log.startsWith('>') ? 'text-red-400 font-bold' : 'text-gray-300'}>
                {log}
              </div>
            ))}
          </div>

          <form onSubmit={handleTerminalSubmit} className="flex gap-2">
            <span className="text-red-500 font-bold">&gt;</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder='Type "help", "projects", "email", or "status"...'
              className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-600"
            />
          </form>
        </div>

        {/* Direct Message Form */}
        <form onSubmit={handleSendMessage} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                YOUR NAME / COMPANY
              </label>
              <input
                type="text"
                required
                value={messageForm.name}
                onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                placeholder="e.g. Alex (Engineering Recruiter / Founder)"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 focus:border-red-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                YOUR EMAIL
              </label>
              <input
                type="email"
                required
                value={messageForm.email}
                onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 focus:border-red-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
              MESSAGE / PROJECT INQUIRY
            </label>
            <textarea
              required
              rows={3}
              value={messageForm.message}
              onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
              placeholder="Hi Sunny, we'd like to discuss a Full-Stack / Lead Developer role..."
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 focus:border-red-500 outline-none resize-none"
            />
          </div>

          {sentSuccess ? (
            <div className="p-3 bg-green-950/40 border border-green-500/40 rounded-xl text-center text-xs font-mono text-green-400">
              MESSAGE SENT SUCCESSFULLY! SUNNY WILL GET BACK TO YOU SOON.
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wider transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>SEND MESSAGE</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
