import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center dark:bg-[#0a0a0f] bg-white"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Initials with animated ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-500 blur-lg opacity-60 animate-pulse-slow" />
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-violet-600 to-blue-600">
            <img src="/logo.png" alt="DS" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm font-mono tracking-widest uppercase mb-1">Loading Portfolio</p>
          <p className="text-2xl font-bold gradient-text">Divyesh Sarvaiya</p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64">
          <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full loading-bar rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-slate-600 font-mono">{progress}%</span>
            <span className="text-xs text-slate-600 font-mono">Full Stack Engineer</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
