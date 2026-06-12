import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import SectionTitle from './common/SectionTitle';

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/divyeshS81',
    href: 'https://github.com/divyeshS81',
    color: 'hover:border-slate-400/40 dark:hover:text-slate-300 hover:text-slate-700',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/divyesh-sarvaiya-72184015a',
    href: 'https://www.linkedin.com/in/divyesh-sarvaiya-72184015a',
    color: 'hover:border-blue-400/40 dark:hover:text-blue-300 hover:text-blue-600',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'hover:border-violet-400/40 dark:hover:text-violet-300 hover:text-violet-600',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: 'hover:border-cyan-400/40 dark:hover:text-cyan-300 hover:text-cyan-600',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: 'hover:border-emerald-400/40 dark:hover:text-emerald-300 hover:text-emerald-600',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding section-bg-base relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-violet-600/5 blur-[80px] pointer-events-none" />

      <div className="container-max relative">
        <SectionTitle title="Get In Touch" subtitle="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-3">
                Let's build something{' '}
                <span className="gradient-text">amazing</span>
              </h3>
              <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                Whether you have a project in mind, a job opportunity, or just want to say hello —
                my inbox is always open. I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl glass border dark:border-white/5 border-black/5 transition-all duration-200 group ${color}`}
                    >
                      <div className="w-10 h-10 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center dark:text-slate-400 text-slate-500 group-hover:text-inherit transition-colors">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs dark:text-slate-500 text-slate-500 font-medium">{label}</p>
                        <p className="text-sm dark:text-slate-300 text-slate-700">{value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className={`flex items-center gap-4 p-4 rounded-xl glass border dark:border-white/5 border-black/5 transition-all duration-200 group ${color}`}>
                      <div className="w-10 h-10 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center dark:text-slate-400 text-slate-500">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs dark:text-slate-500 text-slate-500 font-medium">{label}</p>
                        <p className="text-sm dark:text-slate-300 text-slate-700">{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card space-y-5">
              <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-2">Send a message</h3>

              <div className="space-y-1">
                <label className="text-xs font-medium dark:text-slate-400 text-slate-500 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="theme-input"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium dark:text-slate-400 text-slate-500 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="theme-input"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium dark:text-slate-400 text-slate-500 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="theme-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 shadow-green-500/20'
                    : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-violet-500/20'
                } shadow-lg`}
              >
                {status === 'idle' && <><FiSend size={16} /> Send Message</>}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'sent' && <><FiCheck size={16} /> Message Sent!</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
