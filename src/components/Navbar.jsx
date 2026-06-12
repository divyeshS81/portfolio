import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { navLinks, personalInfo } from '../data/data';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../App';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const sectionIds = navLinks.map((l) => l.href);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 dark:bg-[#0a0a0f]/80 bg-white/80 backdrop-blur-xl dark:border-b dark:border-white/5 border-b border-black/8 shadow-lg dark:shadow-black/20 shadow-slate-200/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="relative group">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-violet-600 to-blue-600">
              <img src="/logo.png" alt={personalInfo.initials} className="w-full h-full object-cover" />
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href
                    ? 'dark:text-white text-slate-900'
                    : 'dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900'
                }`}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/30"
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <a
              href={personalInfo.resumeUrl}
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                         bg-gradient-to-r from-violet-600 to-blue-600 text-white
                         hover:from-violet-500 hover:to-blue-500 transition-all duration-200"
            >
              Resume
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center dark:text-white text-slate-800"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl glass border dark:border-white/10 border-black/8 p-4 shadow-2xl dark:shadow-black/40 shadow-slate-200 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? 'bg-violet-600/20 text-violet-600 dark:text-violet-300 border border-violet-500/30'
                    : 'dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-slate-900 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
