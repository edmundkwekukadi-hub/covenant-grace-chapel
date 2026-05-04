'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const pastors = [
  {
    name: 'Rev. Dr. Alex Owusu',
    title: 'Senior Pastor & Founder',
    image: '/images/pastors/pastor-alex-owusu-1.webp',
    bio: 'Rev. Dr. Alex Owusu is the founding pastor of Covenant Grace Chapel. With a deep passion for the Word of God and a heart for souls, he has dedicated his life to raising a generation rooted in scripture and walking in covenant grace.',
    featured: true,
  },
  {
    name: 'Rev. Isaac Nkansah',
    title: 'Associate Pastor',
    image: '/images/pastors/pastor-isaac-nkansah.jpg',
    bio: 'Rev. Isaac Nkansah serves with a burning passion for discipleship and the development of believers in the Word. His ministry focuses on grounding the congregation in sound biblical teaching.',
  },
  {
    name: 'Rev. Dr. Emmanuel Kusi Ntiamoah',
    title: 'Associate Pastor',
    image: '/images/pastors/pastor-emmanuel-kusi.jpg',
    bio: 'Rev. Dr. Emmanuel Kusi Ntiamoah brings academic depth and spiritual insight to the ministry. His heart beats for systematic theology and helping believers understand the depth of their covenant with God.',
  },
  {
    name: 'Rev. Daniel Opoku',
    title: 'Associate Pastor',
    image: '/images/pastors/pastor-daniel-opoku.jpg',
    bio: 'Rev. Daniel Opoku ministers with elegance and authority. His preaching is marked by clarity, precision, and a deep reverence for the Word that inspires congregants to live by scripture.',
  },
  {
    name: 'Rev. Emmanuel Asare',
    title: 'Associate Pastor',
    image: '/images/pastors/pastor-emmanuel-asare.jpg',
    bio: 'Rev. Emmanuel Asare serves with joy and youthful energy. He has a gift for connecting with people across all generations and communicating the gospel in ways that are fresh, relevant, and deeply rooted in truth.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-charcoal pt-24">

      {/* Page Header */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
          <h1 className="font-cinzel text-5xl md:text-6xl text-ivory font-bold mb-6">About CGC</h1>
          <div className="gold-line mx-auto mb-8"></div>
          <p className="font-cormorant text-xl italic text-ivory/60 leading-relaxed">
            "A community of believers rooted in the Word, growing in grace, and living out God's eternal covenant."
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
            <h2 className="font-cinzel text-4xl text-ivory font-bold mb-6">How CGC Began</h2>
            <div className="divider-gold mb-8" style={{width: '60px'}}></div>
            <p className="font-dm text-ivory/70 text-sm leading-relaxed mb-4">
              Covenant Grace Chapel was born out of a burning desire to see a generation deeply rooted in the uncompromised Word of God. Founded by Rev. Dr. Alex Owusu, CGC began as a small gathering of believers hungry for sound doctrine and authentic community.
            </p>
            <p className="font-dm text-ivory/70 text-sm leading-relaxed mb-4">
              From its earliest days, CGC has been characterised by one unwavering commitment — the Word of God, preached with clarity, lived with integrity, and shared with love. That commitment has not changed.
            </p>
            <p className="font-dm text-ivory/70 text-sm leading-relaxed">
              Today, Covenant Grace Chapel is a growing family of believers from all walks of life, united by the grace of God and the covenant promises of His Word.
            </p>
          </div>
          <div className="reveal relative">
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <Image src="/images/community/community-1.jpg" alt="CGC Community" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 border border-gold/15 rounded-sm -z-10"></div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 px-6 bg-navy/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">Doctrine</p>
            <h2 className="font-cinzel text-4xl md:text-5xl text-ivory font-bold">What We Believe</h2>
            <div className="gold-line mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'The Scripture', text: 'We believe the Bible is the inspired, infallible Word of God — the supreme authority in all matters of faith and conduct.' },
              { title: 'The Trinity', text: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit — co-equal, co-eternal, and co-glorious.' },
              { title: 'Salvation by Grace', text: 'We believe salvation is by grace through faith alone in Jesus Christ. It cannot be earned, only received.' },
              { title: 'The Resurrection', text: 'We believe in the bodily resurrection of Jesus Christ, the guarantee of our own resurrection and eternal life.' },
              { title: 'The Holy Spirit', text: 'We believe in the present-day ministry of the Holy Spirit — convicting, regenerating, sanctifying, and empowering believers.' },
              { title: 'The Church', text: 'We believe the Church is the body of Christ — called to make disciples, preach the gospel, and demonstrate the kingdom of God.' },
            ].map((belief, i) => (
              <div key={belief.title} className="glass-card rounded-sm p-6 reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                <h3 className="font-cinzel text-gold text-sm tracking-widest uppercase mb-3">{belief.title}</h3>
                <p className="font-dm text-ivory/60 text-sm leading-relaxed">{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">Shepherds</p>
            <h2 className="font-cinzel text-4xl md:text-5xl text-ivory font-bold">Our Leadership</h2>
            <div className="gold-line mx-auto mt-6"></div>
          </div>

          {/* Senior Pastor - Featured */}
          <div className="glass-card rounded-sm overflow-hidden mb-12 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <Image
                  src="/images/pastors/pastor-alex-owusu-1.webp"
                  alt="Rev. Dr. Alex Owusu"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <p className="font-cinzel text-gold text-xs tracking-[0.3em] uppercase mb-3">Senior Pastor & Founder</p>
                <h3 className="font-cinzel text-3xl text-ivory font-bold mb-2">Rev. Dr. Alex Owusu</h3>
                <div className="divider-gold mb-6" style={{width: '50px'}}></div>
                <p className="font-dm text-ivory/60 text-sm leading-relaxed mb-6">
                  Rev. Dr. Alex Owusu is the founding pastor of Covenant Grace Chapel. With a deep passion for the Word of God and a heart for souls, he has dedicated his life to raising a generation rooted in scripture and walking in covenant grace. His ministry is marked by depth, authority, and a rare combination of intellectual rigour and genuine pastoral warmth.
                </p>
                <p className="font-cormorant text-lg italic text-gold/70">
                  "The Word of God is the only foundation worth building on."
                </p>
              </div>
            </div>
          </div>

          {/* Associate Pastors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastors.slice(1).map((pastor, i) => (
              <div key={pastor.name} className="glass-card rounded-sm overflow-hidden reveal group" style={{transitionDelay: `${i * 0.1}s`}}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pastor.image}
                    alt={pastor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-cinzel text-ivory text-sm font-semibold mb-1">{pastor.name}</h3>
                  <p className="font-dm text-gold/70 text-xs tracking-wider mb-3">{pastor.title}</p>
                  <p className="font-dm text-ivory/50 text-xs leading-relaxed">{pastor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy/30 text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-cinzel text-3xl text-ivory font-bold mb-6">Ready to Be Part of the Family?</h2>
          <p className="font-dm text-ivory/60 text-sm leading-relaxed mb-8">
            Come experience a community where the Word is preached with power and grace is extended without limit.
          </p>
          <Link href="/visit" className="btn-gold px-10 py-4 rounded-sm text-sm uppercase tracking-widest inline-flex items-center gap-2">
            Plan Your Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}
