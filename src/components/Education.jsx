import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { PiGraduationCap } from 'react-icons/pi';
import { education } from '../data/data';
import SectionTitle from './common/SectionTitle';

export default function Education() {
  return (
    <section id="education" className="section-padding section-bg-alt relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-cyan-600/5 blur-[80px] pointer-events-none" />

      <div className="container-max relative">
        <SectionTitle title="Education" subtitle="Academic Background" />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

              <div className="relative card flex flex-col sm:flex-row gap-6 items-start sm:items-center overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500" />

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 blur-md opacity-40" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-700 flex items-center justify-center shadow-lg">
                      <PiGraduationCap size={28} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-1">{edu.degree}</h3>
                  <p className="text-violet-500 dark:text-violet-300 font-semibold mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm dark:text-slate-400 text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={13} className="text-violet-500 dark:text-violet-400" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={13} className="text-blue-500 dark:text-blue-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <div className="flex-shrink-0">
                  <span className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 shadow-md shadow-violet-500/20">
                    Diploma
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Self-learning note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card text-center"
          >
            <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
              Beyond formal education, I'm a self-driven learner — continuously expanding expertise through{' '}
              <span className="text-violet-500 dark:text-violet-300 font-medium">hands-on projects</span>,{' '}
              <span className="text-blue-500 dark:text-blue-300 font-medium">open-source contributions</span>, and{' '}
              <span className="text-cyan-500 dark:text-cyan-300 font-medium">real-world engineering challenges</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
