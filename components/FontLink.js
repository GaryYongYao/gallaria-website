function FontLink({ link }) {
  return (
    <link
      rel="preload"
      href={`/fonts/${link}.ttf`}
      as="font"
      crossOrigin=""
    />
  )
}

export default FontLink
