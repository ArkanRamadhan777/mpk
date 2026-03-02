import { motion } from 'framer-motion'
import { BookOpen, Mic2, Vote, Handshake, GraduationCap, Newspaper } from 'lucide-react'

const sectionVariant = {
  hidden: { opacity: 0 },
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const programs = [
  {
    icon: Vote,
    title: 'Sidang Umum MPK',
    desc: 'Forum demokrasi tertinggi dalam penetapan kebijakan dan program organisasi melalui sidang pleno perwakilan kelas.',
    tag: 'Legislasi',
  },
  {
    icon: Mic2,
    title: 'Forum Aspirasi',
    desc: 'Wadah terstruktur bagi siswa menyampaikan aspirasi kepada sekolah secara resmi dan terdokumentasi.',
    tag: 'Partisipasi',
  },
  {
    icon: BookOpen,
    title: 'Pengawasan OSIS',
    desc: 'Monitoring dan evaluasi berkala terhadap seluruh program kerja OSIS demi akuntabilitas dan relevansi.',
    tag: 'Pengawasan',
  },
  {
    icon: GraduationCap,
    title: 'Pendidikan Demokrasi',
    desc: 'Pembekalan wawasan demokrasi dan kepemimpinan bagi seluruh anggota perwakilan kelas.',
    tag: 'Pendidikan',
  },
  {
    icon: Handshake,
    title: 'Mediasi & Advokasi',
    desc: 'Penyelesaian konflik secara adil dan advokasi hak-hak siswa dalam lingkungan sekolah.',
    tag: 'Advokasi',
  },
  {
    icon: Newspaper,
    title: 'Laporan Transparansi',
    desc: 'Publikasi laporan kerja berkala sebagai bentuk akuntabilitas organisasi kepada warga sekolah.',
    tag: 'Transparansi',
  },
]

export default function Program() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0a', paddingTop: '64px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 90% 20%, rgba(255,255,255,0.02) 0%, transparent 60%)',
        }}
      />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10"
      >
        <motion.div variants={fadeUp} className="text-center mb-8">
          <span
            className="font-outfit text-xs font-medium tracking-[0.3em] uppercase mb-2 block"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Agenda & Kegiatan
          </span>
          <h2
            className="font-quantico text-3xl md:text-5xl font-bold text-white mb-3"
            style={{ letterSpacing: '0.06em' }}
          >
            Program Kerja
          </h2>
          <div className="divider-white w-28 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={fadeUp}
              className="card-dark rounded-lg p-5 flex flex-col gap-3 cursor-default"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <prog.icon size={16} style={{ color: 'rgba(255,255,255,0.7)' }} strokeWidth={1.5} />
                </div>
                <span
                  className="font-outfit text-xs px-2 py-0.5 rounded"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.08em',
                    fontSize: '10px',
                  }}
                >
                  {prog.tag}
                </span>
              </div>
              <h3 className="font-quantico text-sm font-bold text-white" style={{ lineHeight: 1.4 }}>
                {prog.title}
              </h3>
              <p className="font-outfit text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

