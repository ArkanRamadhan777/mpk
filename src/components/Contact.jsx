import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const contactInfo = [
  { icon: MapPin, label: 'Alamat', value: 'SMAN 1 GRABAG, Magelang, Jawa Tengah' },
  { icon: Phone, label: 'Telepon', value: '+62 293 xxx xxxx' },
  { icon: Mail, label: 'Email', value: 'mpk@smansagrabag.sch.id' },
]

export default function Contact() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0a', paddingTop: '64px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)',
        }}
      />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-10">
          <span
            className="font-outfit text-xs font-medium tracking-[0.3em] uppercase mb-2 block"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Hubungi Kami
          </span>
          <h2
            className="font-quantico text-3xl md:text-5xl font-bold text-white mb-3"
            style={{ letterSpacing: '0.06em' }}
          >
            Sampaikan Aspirasi
          </h2>
          <div className="divider-white w-28 mx-auto mb-4" />
          <p
            className="font-outfit text-sm font-light max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}
          >
            Suara Anda adalah landasan kerja kami. MPK SMAN 1 GRABAG hadir untuk
            mendengar dan mewujudkan aspirasi setiap siswa dengan penuh tanggung jawab.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Contact Info */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <div
              className="rounded-lg p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/mpk.svg"
                  alt="Logo MPK"
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div>
                  <div className="font-quantico text-sm font-bold text-white">MPK SMAN 1 GRABAG</div>
                  <div className="font-outfit text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Majelis Perwakilan Kelas
                  </div>
                </div>
              </div>
              <div className="divider-subtle mb-4" />
              <div className="flex flex-col gap-3">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <info.icon
                      size={13}
                      style={{ color: 'rgba(255,255,255,0.4)', marginTop: '3px', flexShrink: 0 }}
                      strokeWidth={1.5}
                    />
                    <div>
                      <div
                        className="font-outfit text-xs mb-0.5"
                        style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}
                      >
                        {info.label}
                      </div>
                      <div className="font-outfit text-sm text-white">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motto */}
            <div
              className="rounded-lg p-5 flex items-center gap-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  width: '3px',
                  height: '44px',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  className="font-quantico text-base italic mb-1 text-white"
                >
                  Pratistha Satya Nawasena
                </div>
                <div className="font-outfit text-xs" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                  Motto MPK SMAN 1 GRABAG
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: WhatsApp CTA */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <div
              className="rounded-lg p-8 flex flex-col items-center justify-center text-center flex-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(37,211,102,0.07)',
                  border: '1px solid rgba(37,211,102,0.2)',
                }}
              >
                <MessageCircle size={26} style={{ color: '#25D366' }} strokeWidth={1.5} />
              </div>
              <h3 className="font-quantico text-base font-bold text-white mb-2">
                WhatsApp Resmi
              </h3>
              <p
                className="font-outfit text-xs mb-6 leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Hubungi perwakilan MPK langsung melalui WhatsApp resmi untuk
                penyampaian aspirasi dan pertanyaan.
              </p>
              <a
                href="https://wa.me/6282xxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded font-outfit text-sm font-semibold tracking-wide transition-all duration-300"
                style={{
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.3)',
                  color: '#25D366',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.18)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(37,211,102,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                Hubungi via WhatsApp
                <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={fadeUp} className="mt-8 text-center">
          <div className="divider-subtle max-w-xs mx-auto mb-4" />
          <p className="font-outfit text-xs" style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '0.12em' }}>
            &copy; {new Date().getFullYear()} MPK SMAN 1 GRABAG &mdash; Majelis Perwakilan Kelas
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

