import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo, navLinks } from '../data/data';

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative dark:bg-[#07070c] bg-slate-100 dark:border-t dark:border-white/5 border-t border-black/8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/5 to-transparent pointer-events-none" />

      <div className="container-max relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-violet-600 to-blue-600">
                <img src="/logo.png" alt={personalInfo.initials} className="w-full h-full object-cover" />
              </div>
              <span className="font-bold dark:text-white text-slate-900">{personalInfo.name}</span>
            </div>
            <p className="text-sm dark:text-slate-500 text-slate-500 leading-relaxed max-w-xs">
              Full Stack Engineer crafting high-performance web applications with a passion for clean architecture and immersive UX.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold dark:text-white text-slate-900 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm dark:text-slate-500 text-slate-500 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold dark:text-white text-slate-900 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center
                             dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs dark:text-slate-600 text-slate-400">
              {personalInfo.location}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent dark:via-white/10 via-black/10 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs dark:text-slate-600 text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart size={11} className="text-red-400 fill-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
