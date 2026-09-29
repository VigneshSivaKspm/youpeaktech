import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Logo from './Logo'

const company = [['Home','/'],['About Us','/about'],['Why Us','/why-us'],['Contact','/contact']]
const serviceLinks = ['Web Development','Software Development','Mobile App Development','UI/UX Design','E-Commerce','AI & Automation']

export default function Footer() {
  return <footer className="relative overflow-hidden bg-gradient-to-br from-[#091f32] via-[#102f4a] to-[#281f58] text-white">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-400"/>
    <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"/>
    <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_1fr_1fr] lg:gap-12 lg:py-16">
      <div><Logo light/><p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">Youpeak Tech creates modern websites, applications, software and digital solutions for businesses.</p><Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">Start a conversation <ArrowRight size={16}/></Link></div>
      <FooterGroup title="Company">{company.map(([x,p]) => <Link key={p} to={p}>{x}</Link>)}</FooterGroup>
      <FooterGroup title="Services">{serviceLinks.map(x => <Link key={x} to="/services">{x}</Link>)}</FooterGroup>
      <FooterGroup title="Contact"><span>Phone: To be provided</span><span>Email: To be provided</span><span>WhatsApp: To be provided</span><span>Location: To be provided</span></FooterGroup>
    </div>
    <div className="border-t border-white/10"><div className="container-site flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Youpeak Tech. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link></div></div></div>
  </footer>
}

function FooterGroup({ title, children }) { return <div><h2 className="mb-4 text-sm font-bold">{title}</h2><div className="flex flex-col gap-3 text-sm text-slate-300 [&>*]:transition [&>a:hover]:text-white">{children}</div></div> }
