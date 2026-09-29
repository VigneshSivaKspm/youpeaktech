import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return <Link to="/" aria-label="Youpeak Tech home" className="group inline-flex items-center gap-2.5 rounded-lg">
    <span className={`grid h-9 w-9 place-items-center rounded-xl ${light ? 'bg-white' : 'bg-gradient-to-br from-brand-700 via-violet-600 to-cyan-500'} shadow-md`} aria-hidden="true">
      <svg viewBox="0 0 36 36" className="h-6 w-6"><path d="M7 8l11 20L29 8h-6l-5 9-5-9z" className={light ? 'fill-brand-700' : 'fill-white'} /><circle cx="28" cy="8" r="3.2" className="fill-accent-500" /></svg>
    </span>
    <span className={`text-[15px] font-black tracking-[0.08em] ${light ? 'text-white' : 'text-ink'}`}>YOUPEAK <span className={light ? 'text-cyan-200' : 'gradient-text-bright'}>TECH</span></span>
  </Link>
}
