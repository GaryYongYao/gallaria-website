import { useContext, useEffect, createContext } from 'react'
import { animateScroll as scroll } from 'react-scroll'

export function TermsWindow() {
  const { termsOpen, setTermsOpen, terms, setTerms } = useContext(TermsContext)

  useEffect(() => {
    document.body.style.overflow = termsOpen ? 'hidden' : 'auto'
  }, [termsOpen])

  const scrollToTop = () => {
    scroll.scrollTo(0, {
      containerId: 'terms-window-content',
      duration: 100,
      smooth: true
    })
  }

  return (
    <div
      className={`terms-window ${termsOpen ? 'open' : ''}`}
      onWheel={e => { e.stopPropagation() }}
    >
      <div className="container">
        <div className="terms-window-header">
          <div
            className="terms-window-close"
            onClick={() => {
              scrollToTop()
              setTermsOpen(false)
            }}
          >
            <span>CLOSE</span>
            <img src="/svg/inverted-close.svg" alt="close" />
          </div>
        </div>
        <div className="terms-window-option">
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              setTerms('policy')
            }}
            className={terms === 'policy' ? 'selected' : ''}
          >
            PRIVACY POLICY
          </a>
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              setTerms('terms')
            }}
            className={terms === 'terms' ? 'selected' : ''}
          >
            TERMS & CONDITIONS
          </a>
        </div>
        <div id="terms-window-content" className="terms-window-content">
          {terms === 'policy' && <Policy />}
          {terms === 'terms' && <Terms />}
        </div>
      </div>
    </div>
  )
}

const Policy = () => (
  <>
    <span className="title">PRIVACY POLICY (AS PER 2021)</span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
    <span className="title">PRIVACY POLICY (AS PER 2021)</span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
  </>
)

const Terms = () => (
  <>
    <span className="title">TERMS & CONDITIONS (AS PER 2021)</span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
    <span className="title">TERMS & CONDITIONS (AS PER 2021)</span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
    <span className="para">
      Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.Customer PolicyLorem ipsum dolor sit amet, consectetur adipiscing elit. In quis tempus ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non est quam. Curabitur in ligula leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id elit massa. Fusce convallis tempor neque, et sodales ante laoreet vel. Ut a sollicitudin dui, sed venenatis quam. Vivamus vel augue a metus accumsan scelerisque.
    </span>
  </>
)

export const TermsContext = createContext()
