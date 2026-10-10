import { Link } from 'react-router-dom'

// youpeak-logo-256.png is a downscaled copy of the supplied artwork (public/youpeak-logo.png, square with a transparent margin)
const sizes = {
  header: { px: 56, className: 'h-12 w-12 sm:h-14 sm:w-14' },
  footer: { px: 80, className: 'h-20 w-20' },
}

export default function Logo({ variant = 'header' }) {
  const { px, className } = sizes[variant]
  return <Link to="/" aria-label="Youpeak Tech home" className="inline-flex shrink-0 items-center rounded-lg">
    <img src="/youpeak-logo-256.png" alt="" width={px} height={px} decoding="async" className={`${className} object-contain`} />
  </Link>
}
