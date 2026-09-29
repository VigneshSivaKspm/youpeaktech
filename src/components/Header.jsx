import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

const links = [['Home','/'],['About Us','/about'],['Services','/services'],['Why Us','/why-us'],['Contact','/contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-[0_8px_30px_-24px_rgba(40,60,110,.55)] backdrop-blur-xl">
    <div className="container-site flex h-[72px] items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {links.map(([label,path]) => <NavLink key={path} to={path} className={({isActive}) => `relative py-2 text-sm font-bold transition hover:text-violet-600 ${isActive ? 'text-brand-700' : 'text-slate-600'}`}>{({isActive}) => <>{label}{isActive && <span className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-500" />}</>}</NavLink>)}
      </nav>
      <div className="hidden lg:block"><Link className="btn-primary !min-h-10 !px-5 !py-2.5" to="/contact">Get in Touch <ArrowUpRight size={16}/></Link></div>
      <button className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-ink lg:hidden" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
    </div>
    <div id="mobile-menu" className={`absolute inset-x-0 top-[72px] border-b border-slate-200 bg-white shadow-xl transition-all duration-300 lg:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'}`}>
      <nav className="container-site flex max-h-[calc(100vh-72px)] flex-col gap-1 overflow-y-auto py-5" aria-label="Mobile navigation">
        {links.map(([label,path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({isActive}) => `rounded-xl px-4 py-3.5 text-base font-semibold ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'}`}>{label}</NavLink>)}
        <Link className="btn-primary mt-3" to="/contact" onClick={() => setOpen(false)}>Get in Touch <ArrowUpRight size={17}/></Link>
      </nav>
    </div>
  </header>
}
