import { motion } from 'framer-motion';
import { skillCategories } from '../data/data';
import SectionTitle from './common/SectionTitle';

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-bg-base relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="container-max relative">
        <SectionTitle title="Skills & Technologies" subtitle="My Stack" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="card group relative overflow-hidden"
            >
              {/* Card glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 relative">
                <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="font-semibold dark:text-white text-slate-900">{cat.category}</h3>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2 relative">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                               dark:bg-white/[0.04] bg-black/[0.04]
                               dark:border-white/[0.07] border-black/[0.07] border
                               dark:hover:bg-white/[0.08] hover:bg-black/[0.08]
                               dark:hover:border-white/20 hover:border-black/20
                               transition-all duration-200 cursor-default group/skill"
                  >
                    <skill.icon
                      size={14}
                      style={{ color: skill.color }}
                      className="flex-shrink-0"
                    />
                    <span className="text-xs font-medium dark:text-slate-300 text-slate-600 dark:group-hover/skill:text-white group-hover/skill:text-slate-900 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
