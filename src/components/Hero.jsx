import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero({ scrollToSection }) {
  return (
    <section className="h-screen bg-black text-white flex overflow-hidden relative">
      {/* LEFT COLUMN */}
      <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 w-full lg:w-3/5 z-10">
        <motion.p
          className="font-outfit text-xs tracking-[0.3em] uppercase text-white/50 mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Majelis Perwakilan Kelas
        </motion.p>

        <motion.h1
          className="font-quantico text-5xl md:text-6xl xl:text-7xl font-bold leading-none tracking-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          MPK
        </motion.h1>

        <motion.h2
          className="font-quantico text-3xl md:text-4xl xl:text-5xl font-bold leading-none tracking-tight mt-1"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          SMAN 1 GRABAG
        </motion.h2>

        <motion.div
          className="divider-white mt-6 mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        />

        <motion.p
          className="font-outfit text-base md:text-lg text-white/70 max-w-md leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Wadah aspirasi siswa yang demokratis, transparan, dan berintegritas
          demi kemajuan bersama.
        </motion.p>

        <motion.p
          className="font-quantico text-sm md:text-base text-white/40 italic mt-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          "Suara Siswa, Jiwa Sekolah"
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <button
            onClick={() => scrollToSection('profile')}
            className="font-outfit px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors"
          >
            Tentang Kami
          </button>
          <button
            onClick={() => scrollToSection('program')}
            className="font-outfit px-6 py-3 border border-white/40 text-white text-sm font-semibold tracking-wide hover:border-white hover:bg-white/5 transition-colors"
          >
            Program Kerja
          </button>
        </motion.div>
      </div>

      {/* RIGHT COLUMN  large logo */}
      <div className="hidden lg:flex items-center justify-center w-2/5 relative">
        <motion.img
          src="/mpk.svg"
          alt="Logo MPK"
          className="w-4/5 max-w-sm object-contain select-none"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.15 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.img
          src="/mpk.svg"
          alt=""
          aria-hidden="true"
          className="absolute w-3/4 max-w-xs object-contain select-none pointer-events-none"
          style={{ filter: 'brightness(0) invert(1)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('profile')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-outfit text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}