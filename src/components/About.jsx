import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiExternalLink } from 'react-icons/fi';
import { personalInfo, stats } from '../data/data';
import SectionTitle from './common/SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding section-bg-alt relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-max relative">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Avatar + contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar card */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-600 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-64 h-64 rounded-3xl overflow-hidden glass border dark:border-white/10 border-black/8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-blue-900/40" />
                <div className="relative flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500 to-blue-600">
                    <img src="/logo.png" alt={personalInfo.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold dark:text-white text-slate-900">{personalInfo.name}</p>
                    <p className="text-sm text-violet-500 dark:text-violet-300">{personalInfo.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="w-full space-y-3">
              {[
                { icon: FiMapPin, text: personalInfo.location, color: 'text-violet-500 dark:text-violet-400' },
                { icon: FiMail, text: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-blue-500 dark:text-blue-400' },
                { icon: FiPhone, text: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-cyan-500 dark:text-cyan-400' },
                { icon: FiExternalLink, text: 'sdivyesh.netlify.app', href: personalInfo.website, color: 'text-emerald-500 dark:text-emerald-400' },
              ].map(({ icon: Icon, text, href, color }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg glass flex items-center justify-center ${color}`}>
                    <Icon size={15} />
                  </div>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="dark:text-slate-300 text-slate-700 hover:text-violet-600 dark:hover:text-white text-sm transition-colors">
                      {text}
                    </a>
                  ) : (
                    <span className="dark:text-slate-300 text-slate-700 text-sm">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + stats */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold dark:text-white text-slate-900 mb-4">
                Hi there! I'm{' '}
                <span className="gradient-text">{personalInfo.name}</span>
              </h3>
              <p className="dark:text-slate-400 text-slate-600 leading-relaxed text-base">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 2}
                  variants={fadeUp}
                  className="card group"
                >
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm dark:text-slate-400 text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={6}
              variants={fadeUp}
              className="card"
            >
              <p className="text-sm dark:text-slate-500 text-slate-500 mb-3 font-medium uppercase tracking-wider">Languages</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: 'Gujarati', level: 'Native', color: 'from-violet-500 to-purple-600' },
                  { lang: 'Hindi', level: 'Proficient', color: 'from-blue-500 to-cyan-600' },
                  { lang: 'English', level: 'Advanced', color: 'from-cyan-500 to-teal-600' },
                ].map(({ lang, level, color }) => (
                  <div key={lang} className="flex flex-col items-center gap-1">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${color}`}>
                      {lang}
                    </span>
                    <span className="text-[11px] dark:text-slate-500 text-slate-500">{level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
