'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ChevronDown, ArrowRight, Heart, BookOpen, Users } from 'lucide-react'

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-charcoal">

      {/* ═══════════════════════════════════════ HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://player.vimeo.com/video/824804225?autoplay=1&loop=1&muted=1&background=1&quality=1080p"
            className="absolute w-full h-full object-cover scale-110"
            style={{ border: 'none', top: '-5%', left: '-5%', width: '110%', height: '110%' }}
            allow="autoplay; fullscreen"
          />
          {/* Fallback gradient if video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-charcoal"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay z-10"></div>

        {/* Gold particle decorations */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold-light rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-gold rounded-full animate-ping opacity-50" style={{animationDelay: '2s'}}></div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase">Welcome to</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
          </div>

          {/* Main Title */}
          <h1 className="font-cinzel font-bold text-5xl md:text-7xl lg:text-8xl text-ivory leading-tight mb-4 animate-fade-up">
            Covenant Grace
            <span className="block gold-text">Chapel</span>
          </h1>

          {/* Scripture */}
          <p className="font-cormorant text-xl md:text-2xl italic text-ivory/70 mt-6 mb-10 leading-relaxed animate-fade-up" style={{animationDelay: '0.3s'}}>
            "The Word of God is living and active, sharper than any two-edged sword"
            <span className="block text-gold/70 text-base mt-2 not-italic font-cinzel tracking-widest">— Hebrews 4:12</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{animationDelay: '0.5s'}}>
            <Link href="/visit" className="btn-gold px-10 py-4 rounded-sm text-sm uppercase tracking-widest flex items-center gap-2">
              Plan Your Visit <ArrowRight size={16} />
            </Link>
            <Link href="/live" className="btn-outline px-10 py-4 rounded-sm text-sm uppercase tracking-widest flex items-center gap-2">
              <Play size={16} /> Watch Live
            </Link>
          </div>

          {/* Service Info */}
          <div className="mt-14 flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <p className="font-cinzel text-gold text-xs tracking-widest uppercase mb-1">Sunday Service</p>
              <p className="font-dm text-ivory/70 text-sm">9:00 AM & 11:00 AM</p>
            </div>
            <div className="w-px h-8 bg-gold/30 hidden sm:block"></div>
            <div className="text-center">
              <p className="font-cinzel text-gold text-xs tracking-widest uppercase mb-1">Midweek</p>
              <p className="font-dm text-ivory/70 text-sm">Wednesday 6:00 PM</p>
            </div>
            <div className="w-px h-8 bg-gold/30 hidden sm:block"></div>
            <div className="text-center">
              <p className="font-cinzel text-gold text-xs tracking-widest uppercase mb-1">Location</p>
              <p className="font-dm text-ivory/70 text-sm">Ghana</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown size={24} className="text-gold/60" />
        </div>
      </section>

      {/* ═══════════════════════════════════════ THREE PILLARS */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-navy/20 to-charcoal"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">Our Foundation</p>
            <h2 className="font-cinzel text-4xl md:text-5xl text-ivory font-bold">Built On Three Pillars</h2>
            <div className="gold-line mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={32} className="text-gold" />,
                title: 'The Word',
                verse: 'John 1:1',
                desc: 'Scripture is our foundation, our guide, and our authority. Every message, every decision rooted in the living Word of God.',
              },
              {
                icon: <Heart size={32} className="text-gold" />,
                title: 'The Grace',
                verse: 'Ephesians 2:8',
                desc: "God's unmerited favour transforms lives. We are a people shaped by grace — extending it freely to everyone who walks through our doors.",
              },
              {
                icon: <Users size={32} className="text-gold" />,
                title: 'The Covenant',
                verse: 'Hebrews 8:6',
                desc: 'We are a covenant people — committed to God, to one another, and to our community. Family is not a metaphor here. It is reality.',
              },
            ].map((pillar, i) => (
              <div
                key={pillar.title}
                className="glass-card rounded-sm p-8 text-center reveal group hover:border-gold/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="font-cinzel text-xl text-ivory font-semibold mb-2">{pillar.title}</h3>
                <p className="font-cinzel text-gold/60 text-xs tracking-widest mb-4">{pillar.verse}</p>
                <p className="font-dm text-ivory/60 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ PASTOR'S WELCOME */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-navy/40 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="reveal relative">
              <div className="relative h-[600px] rounded-sm overflow-hidden">
                <Image
                  src="/images/pastors/pastor-alex-owusu-2.webp"
                  alt="Rev. Dr. Alex Owusu"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              </div>
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-gold/20 rounded-sm -z-10"></div>
              <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border border-gold/10 rounded-sm -z-10"></div>
            </div>

            {/* Text */}
            <div className="reveal">
              <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">A Word From Our Pastor</p>
              <h2 className="font-cinzel text-4xl md:text-5xl text-ivory font-bold mb-6 leading-tight">
                Welcome to<br />
                <span className="gold-text">God's Family</span>
              </h2>
              <div className="divider-gold mb-8" style={{width: '80px'}}></div>
              <p className="font-cormorant text-xl italic text-ivory/70 leading-relaxed mb-6">
                "At Covenant Grace Chapel, we believe that the Word of God is not just ancient text — it is living, breathing truth that transforms every area of your life."
              </p>
              <p className="font-dm text-ivory/60 text-sm leading-relaxed mb-8">
                We are a community built on the unshakeable foundation of Scripture, bound together by the covenant of grace. Whether you are searching for truth, seeking community, or hungry to grow deeper in your faith — you have found your home.
              </p>
              <div className="mb-8">
                <p className="font-cinzel text-gold text-lg font-semibold">Rev. Dr. Alex Owusu</p>
                <p className="font-dm text-ivory/50 text-sm tracking-wider mt-1">Senior Pastor & Founder, CGC</p>
              </div>
              <Link href="/about" className="btn-outline px-8 py-3 rounded-sm text-sm uppercase tracking-widest inline-flex items-center gap-2">
                Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ LATEST SERMON */}
      <section className="py-24 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">The Word Preached</p>
            <h2 className="font-cinzel text-4xl md:text-5xl text-ivory font-bold">Latest Sermon</h2>
            <div className="gold-line mx-auto mt-6"></div>
          </div>

          <div className="glass-card rounded-sm overflow-hidden reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Sermon Video Placeholder */}
              <div className="relative h-64 lg:h-auto bg-navy-light flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-charcoal"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-gold/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
                    <Play size={32} className="text-gold ml-1" />
                  </div>
                  <p className="font-cinzel text-ivory/60 text-sm tracking-widest uppercase">Watch Sermon</p>
                </div>
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Sermon Info */}
              <div className="p-10">
                <p className="font-cinzel text-gold text-xs tracking-widest uppercase mb-4">Current Series</p>
                <h3 className="font-cinzel text-2xl md:text-3xl text-ivory font-bold mb-4 leading-tight">
                  Fruitfulness: Living in the Abundance of God's Word
                </h3>
                <p className="font-cormorant text-lg italic text-gold/70 mb-6">"I am the vine; you are the branches" — John 15:5</p>
                <p className="font-dm text-ivory/60 text-sm leading-relaxed mb-8">
                  In this powerful series, Rev. Dr. Alex Owusu unpacks the covenant principles that unlock supernatural fruitfulness in every believer's life. Scripture-deep, Spirit-led, and life-transforming.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/sermons" className="btn-gold px-6 py-3 rounded-sm text-sm uppercase tracking-widest flex items-center gap-2">
                    All Sermons <ArrowRight size={14} />
                  </Link>
                  <button className="btn-outline px-6 py-3 rounded-sm text-sm uppercase tracking-widest flex items-center gap-2">
                    <Play size={14} /> Audio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ COMMUNITY GALLERY */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">Life Together</p>
            <h2 className="font-cinzel text-4xl md:text-5xl text-ivory font-bold">CGC Community</h2>
            <div className="gold-line mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
            {[
              { src: '/images/community/community-2.jpg', span: 'col-span-1 row-span-2' },
              { src: '/images/community/community-4.jpg', span: '' },
              { src: '/images/community/community-5.jpg', span: '' },
              { src: '/images/community/community-6.jpg', span: '' },
              { src: '/images/community/community-11.jpg', span: '' },
              { src: '/images/community/community-12.jpg', span: '' },
            ].map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-sm group ${img.span}`} style={{height: img.span.includes('row-span-2') ? '420px' : '200px'}}>
                <Image
                  src={img.src}
                  alt={`CGC Community ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/about" className="btn-outline px-10 py-3 rounded-sm text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Meet Our Family <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ PLAN YOUR VISIT CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/community/community-9.jpg"
            alt="Community"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl reveal">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-6">First Time?</p>
            <h2 className="font-cinzel text-4xl md:text-6xl text-ivory font-bold mb-6 leading-tight">
              You Are Welcome<br />
              <span className="gold-text">To God's Family</span>
            </h2>
            <p className="font-dm text-ivory/60 text-base leading-relaxed mb-10">
              No matter where you are in your faith journey, there is a place for you at CGC. Come as you are — we believe God has prepared something just for you.
            </p>
            <Link href="/visit" className="btn-gold px-12 py-4 rounded-sm text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Plan Your Visit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ GIVE BANNER */}
      <section className="py-16 px-6 bg-navy/50 border-y border-gold/10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="font-cormorant text-2xl italic text-ivory/70 mb-4">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion"
          </p>
          <p className="font-cinzel text-gold/60 text-xs tracking-widest mb-8">— 2 Corinthians 9:7</p>
          <Link href="/give" className="btn-gold px-10 py-4 rounded-sm text-sm uppercase tracking-widest inline-flex items-center gap-2 mx-auto">
            <Heart size={16} /> Give Online
          </Link>
        </div>
      </section>

    </div>
  )
}
