import Link from 'next/link'

function CustomLink({ children, href, style, customStyle }) {
  return (
    <Link href={href}>
      <a className={style} style={customStyle}>
        {children}
      </a>
    </Link>
  )
}

export default CustomLink
