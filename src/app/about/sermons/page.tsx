'use client'
import { useEffect, useState } from 'react'
import { Play, Headphones, Search, Filter } from 'lucide-react'

const sermons = [
  { id: 1, title: 'Fruitfulness: The Covenant Promise', series: 'Fruitfulness', speaker: 'Rev. Dr. Alex Owusu', scripture: 'John 15:1-8', date: 'May 4, 2025', duration: '58 min', thumbnail: '/images/community/community-2.jpg' },
  { id: 2, title: 'Walking in the Word Daily', series: 'Fruitfulness', speaker: 'Rev. Dr. Alex Owusu', scripture: 'Joshua 1:8', date: 'Apr 27, 2025', duration: '52 min', thumbnail: '/images/community/community-4.jpg' },
  { id: 3, title: 'The Grace That Transforms', series: 'Covenant Series', speaker: 'Rev. Isaac Nkansah', scripture: 'Titus 2:11-14', date: 'Apr 20, 2025', duration: '45 min', thumbnail: '/images/community/community-5.jpg' },
  { id: 4, title: 'Understanding Your Covenant Rights', series: 'Covenant Series', speaker: 'Rev. Dr. Emmanuel Kusi Ntiamoah', scripture: 'Hebrews 8:6', date: 'Apr 13, 2025', duration: '61 min', thumbnail: '/images/community/community-6.jpg' },
  { id: 5, title: 'Faith That Moves Mountains', series: 'Faith Series', speaker: 'Rev. Daniel Opoku', scripture: 'Matthew 17:20', date: 'Apr 6, 2025', duration: '49 min', thumbnail: '/images/community/community-7.jpg' },
  { id: 6, title: 'Living as Children of Light', series: 'Faith Series', speaker: 'Rev. Emmanuel Asare', scripture: 'Ephesians 5:8-14', date: 'Mar 30, 2025', duration: '44 min', thumbnail: '/images/community/community-8.jpg' },
]

const speakers = ['All Speakers', 'Rev. Dr. Alex Owusu', 'Rev. Isaac Nkansah', 'Rev. Dr. Emmanuel Kusi Ntiamoah', 'Rev. Daniel Opoku', 'Rev. Emmanuel Asare']
const series = ['All Series', 'Fruitfulness', 'Covenant Series', 'Faith Series']

export default function SermonsPage() {
  const [search, setSearch] = useState('')
  const [selectedSpeaker, setSelectedSpeaker] = useState('All Speakers')
  const [selectedSeries, setSelectedSeries] = useState('All Series')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filtered = sermons.filter(s => {
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.scripture.toLowerCase().includes(search.toLowerCase())
    const matchSpeaker = selectedSpeaker === 'All Speakers' || s.speaker === selectedSpeaker
    const matchSeries = selectedSeries === 'All Series' || s.series === selectedSeries
    return matchSearch && matchSpeaker && matchSeries
  })

  return (
    <div className="bg-charcoal pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-transparent"></div>
        <div className="relative z-10">
          <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">The Word Preached</p>
          <h1 className="font-cinzel text-5xl md:text-6xl text-ivory font-bold mb-6">Sermons</h1>
          <div className="gold-line mx-auto mb-8"></div>
          <p className="font-cormorant text-xl italic text-ivory/60">
            "Faith comes by hearing, and hearing by the Word of God" — Romans 10:17
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 bg-navy/20 border-y border-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
              <input
                type="text"
                placeholder="Search by title or scripture..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-navy/60 border border-gold/20 text-ivory placeholder-ivory/30 font-dm text-sm pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-gold/50"
              />
            </div>

            {/* Speaker Filter */}
            <select
              value={selectedSpeaker}
              onChange={e => setSelectedSpeaker(e.target.value)}
              className="bg-navy/60 border border-gold/20 text-ivory/80 font-dm text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50"
            >
              {speakers.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            {/* Series Filter */}
            <select
              value={selectedSeries}
              onChange={e => setSelectedSeries(e.target.value)}
              className="bg-navy/60 border border-gold/20 text-ivory/80 font-dm text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50"
            >
              {series.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Sermon Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sermon, i) => (
              <div key={sermon.id} className="glass-card rounded-sm overflow-hidden reveal group cursor-pointer" style={{transitionDelay: `${i * 0.1}s`}}>
                {/* Thumbnail */}
                <div className="relative h-48 bg-navy overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-charcoal flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-gold/50 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold transition-all duration-300">
                      <Play size={20} className="text-gold ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="font-cinzel text-xs text-gold/70 tracking-widest uppercase bg-navy/80 px-2 py-1 rounded-sm">{sermon.series}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-cinzel text-ivory text-sm font-semibold mb-2 leading-tight group-hover:text-gold transition-colors">{sermon.title}</h3>
                  <p className="font-cormorant text-gold/70 text-base italic mb-3">{sermon.scripture}</p>
                  <p className="font-dm text-ivory/50 text-xs mb-1">{sermon.speaker}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gold/10">
                    <p className="font-dm text-ivory/40 text-xs">{sermon.date}</p>
                    <div className="flex gap-3">
                      <button className="text-gold/60 hover:text-gold transition-colors">
                        <Play size={14} />
                      </button>
                      <button className="text-gold/60 hover:text-gold transition-colors">
                        <Headphones size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-cinzel text-ivory/40 text-sm tracking-widest">No sermons found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
