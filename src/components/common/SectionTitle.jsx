import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`inline-flex items-center gap-2 mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
        <span className="text-sm font-mono text-violet-400 uppercase tracking-widest">{subtitle}</span>
        <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold gradient-text">{title}</h2>
    </motion.div>
  );
}
