import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const galleryItems = [
  { title: 'Sidang Umum MPK', desc: 'Rapat pleno perwakilan kelas', bg: '#141414' },
  { title: 'Forum Aspirasi', desc: 'Dialog terbuka dengan siswa', bg: '#0e0e0e' },
  { title: 'Pelantikan Pengurus', desc: 'Seremoni resmi pelantikan', bg: '#161616' },
  { title: 'Rapat Evaluasi', desc: 'Evaluasi program semester', bg: '#121212' },
  { title: 'Kegiatan Sosial', desc: 'Pengabdian kepada masyarakat', bg: '#101010' },
  { title: 'Dokumentasi Resmi', desc: 'Foto resmi organisasi', bg: '#131313' },
]

export default function Gallery() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#111111', paddingTop: '64px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 60%)',
        }}
      />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <span
            className="font-outfit text-xs font-medium tracking-[0.3em] uppercase mb-2 block"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Dokumentasi
          </span>
          <h2
            className="font-quantico text-3xl md:text-5xl font-bold text-white mb-3"
            style={{ letterSpacing: '0.06em' }}
          >
            Galeri Kegiatan
          </h2>
          <div className="divider-white w-28 mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              style={{
                height: '148px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: it.bg,
              }}
            >
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Icon placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-0 transition-opacity duration-300">
                <ImageIcon size={28} style={{ color: 'rgba(255,255,255,0.6)' }} strokeWidth={1} />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
              >
                <div className="divider-white w-10 mb-3" />
                <h3 className="font-quantico text-sm font-bold text-white text-center px-4 mb-1">
                  {it.title}
                </h3>
                <p className="font-outfit text-xs text-center px-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {it.desc}
                </p>
              </div>

              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2 group-hover:opacity-0 transition-opacity duration-200"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
              >
                <p className="font-outfit text-xs font-medium text-white" style={{ letterSpacing: '0.05em' }}>
                  {it.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          className="font-outfit text-center mt-5 text-xs"
          style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}
        >
          Dokumentasi kegiatan resmi MPK SMAN 1 GRABAG
        </motion.p>
      </motion.div>
    </section>
  )
}
