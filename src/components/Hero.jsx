import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalInfo, typingSequence, floatingTechIcons } from '../data/data';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['rgba(139,92,246,', 'rgba(59,130,246,', 'rgba(6,182,212,'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}

const floatPositions = [
  { top: '15%', left: '8%' },
  { top: '70%', left: '5%' },
  { top: '20%', right: '6%' },
  { top: '60%', right: '4%' },
  { top: '40%', left: '3%' },
  { top: '80%', right: '8%' },
  { top: '10%', left: '30%' },
  { top: '85%', left: '50%' },
];

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-base"
    >
      <ParticleCanvas />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/8 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[120px]" />
      </div>

      {floatingTechIcons.map((tech, i) => (
        <motion.div
          key={tech.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl glass border dark:border-white/10 border-black/8 text-xs font-medium dark:text-slate-300 text-slate-600 z-10"
          style={floatPositions[i]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            y: [0, -12, 0],
            scale: [0.95, 1.02, 0.95],
          }}
          transition={{
            duration: 4 + i * 0.7,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <tech.icon size={14} style={{ color: tech.color }} />
          <span>{tech.label}</span>
        </motion.div>
      ))}

      <div className="relative z-10 container-max px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/30 text-sm text-violet-500 dark:text-violet-300 font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-500 blur-xl opacity-40 animate-pulse-slow" />
          <div className="relative w-32 h-32 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-500">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src="/logo.png" alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black dark:text-white text-slate-900 mb-4 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-bold mb-6 h-10"
        >
          <span className="gradient-text">
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button onClick={scrollToProjects} className="btn-primary text-base">
            View Projects <FiArrowRight />
          </button>
          <a href={personalInfo.resumeUrl} download className="btn-secondary text-base">
            <FiDownload /> Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-4"
        >
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
              className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center
                         dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs dark:text-slate-600 text-slate-400 tracking-widest uppercase font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-violet-500/60 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
