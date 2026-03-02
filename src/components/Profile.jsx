import { motion } from 'framer-motion'
import { Scale, FileText, Target, Eye } from 'lucide-react'

const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const cards = [
  {
    icon: Eye,
    label: 'Visi',
    content:
      'Menjadi lembaga perwakilan siswa yang demokratis, berintegritas, dan berwibawa demi kemajuan SMAN 1 GRABAG yang bermartabat.',
  },
  {
    icon: Target,
    label: 'Misi',
    content:
      'Menampung aspirasi siswa secara adil dan transparan. Menjembatani komunikasi antara siswa dengan pihak sekolah. Mendorong partisipasi aktif.',
  },
  {
    icon: Scale,
    label: 'Tugas',
    content:
      'Mengawasi pelaksanaan program OSIS, menampung aspirasi warga kelas, dan memastikan kebijakan sekolah sesuai kepentingan siswa.',
  },
  {
    icon: FileText,
    label: 'Fungsi',
    content:
      'Badan legislatif internal sekolah yang menetapkan program kerja, mengesahkan anggaran, dan mengevaluasi kinerja organisasi.',
  },
]

export default function Profile() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#111111', paddingTop: '64px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 10% 80%, rgba(255,255,255,0.02) 0%, transparent 60%)',
        }}
      />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <span
            className="font-outfit text-xs font-medium tracking-[0.3em] uppercase mb-2 block"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Tentang Kami
          </span>
          <h2
            className="font-quantico text-3xl md:text-5xl font-bold text-white mb-3"
            style={{ letterSpacing: '0.06em' }}
          >
            Profil Organisasi
          </h2>
          <div className="divider-white w-28 mx-auto mb-3" />
          <p
            className="font-outfit text-sm font-light max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            MPK SMAN 1 GRABAG adalah badan legislatif siswa yang menjunjung tinggi
            keadilan, integritas, dan demokrasi dalam setiap langkah pengabdian.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={fadeUp}
              className="card-dark rounded-lg p-5 flex flex-col gap-3"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <card.icon size={16} style={{ color: 'rgba(255,255,255,0.7)' }} strokeWidth={1.5} />
              </div>
              <h3
                className="font-quantico text-xs font-bold tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}
              >
                {card.label}
              </h3>
              <p className="font-outfit text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat row */}
        <motion.div
          variants={fadeUp}
          className="mt-8 grid grid-cols-3 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: '36', label: 'Perwakilan Kelas' },
            { value: '5+', label: 'Program Kerja' },
            { value: '100%', label: 'Aspirasi Siswa' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-quantico text-2xl md:text-3xl font-bold mb-1 text-white"
              >
                {s.value}
              </div>
              <div className="font-outfit text-xs" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
