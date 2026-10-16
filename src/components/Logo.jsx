import { Link } from 'react-router-dom'

// The display derivative is trimmed to the visible artwork (16:9 aspect ratio, 1024x576 / 512x288 px)
// preserving the mountain symbol, navy lettering, and opaque black background with a balanced margin.
const sizes = {
  header: {
    width: 512,
    height: 288,
    imgClassName: 'h-11 w-[78px] sm:h-[52px] sm:w-[92px] rounded-lg object-contain',
    linkClassName: 'inline-flex shrink-0 items-center rounded-xl bg-black p-1 shadow-sm transition hover:opacity-90',
  },
  footer: {
    width: 512,
    height: 288,
    imgClassName: 'h-16 w-[114px] sm:h-[72px] sm:w-[128px] rounded-lg object-contain',
    linkClassName: 'inline-flex shrink-0 items-center rounded-xl bg-white p-1 shadow-sm transition hover:bg-slate-100',
  },
}

export default function Logo({ variant = 'header' }) {
  const { width, height, imgClassName, linkClassName } = sizes[variant] || sizes.header
  return (
    <Link to="/" aria-label="Youpeak Tech home" className={linkClassName}>
      <img
        src="/youpeak-technologies-logo-512.png"
        srcSet="/youpeak-technologies-logo-512.png 512w, /youpeak-technologies-logo.png 1024w"
        sizes={variant === 'footer' ? '(min-width: 640px) 128px, 114px' : '(min-width: 640px) 92px, 78px'}
        alt=""
        width={width}
        height={height}
        decoding="async"
        className={imgClassName}
      />
    </Link>
  )
}

