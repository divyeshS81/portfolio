import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { projects } from '../data/data';
import SectionTitle from './common/SectionTitle';

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card glow */}
      <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur transition-all duration-500`} />

      <div className="relative card h-full flex flex-col gap-5 overflow-hidden">
        {/* Top gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`} />

        {/* Project header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.featured && (
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-2 font-mono">
                Featured Project
              </span>
            )}
            <h3 className="text-xl font-bold dark:text-white text-slate-900 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-colors"
                aria-label={`${project.title} GitHub`}
              >
                <FiGithub size={16} />
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-colors"
                aria-label={`${project.title} Live`}
              >
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed flex-grow">{project.description}</p>

        {/* Highlights (expandable) */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="space-y-2 pt-1">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm dark:text-slate-400 text-slate-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-violet-500 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors w-fit"
        >
          {expanded ? (
            <>Hide details <FiChevronUp size={14} /></>
          ) : (
            <>View highlights <FiChevronDown size={14} /></>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-bg-alt relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[80px] pointer-events-none" />

      <div className="container-max relative">
        <SectionTitle title="Featured Projects" subtitle="My Work" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/divyeshS81"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex"
          >
            <FiGithub /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
