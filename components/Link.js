import Link from 'next/link'

function CustomLink({ children, href, style }) {
  return (
    <Link href={href}>
      <a className={style}>
        {children}
      </a>
    </Link>
  )
}

export default CustomLink
