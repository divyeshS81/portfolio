import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/data';
import SectionTitle from './common/SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-bg-base relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[80px] pointer-events-none" />

      <div className="container-max relative">
        <SectionTitle title="Work Experience" subtitle="My Journey" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative z-10 mt-1.5">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} blur-sm opacity-60`} />
                    <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                      <FiBriefcase size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-grow pb-2">
                  <div className="card group relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color}`} />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold dark:text-white text-slate-900">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.company}
                          </span>
                          {exp.current && (
                            <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                        <span className="text-sm font-mono dark:text-slate-400 text-slate-600 dark:bg-white/5 bg-black/5 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs dark:text-slate-500 text-slate-500">
                          <FiMapPin size={11} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.15 + bi * 0.05 }}
                          className="flex items-start gap-3 text-sm dark:text-slate-400 text-slate-600 leading-relaxed"
                        >
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0`} />
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
