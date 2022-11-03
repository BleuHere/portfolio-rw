import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MetaTags } from '@redwoodjs/web'

const FooterPage = () => {
  return (
    <footer>
      <MetaTags title="Footer" description="Footer page" />

      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bleuette-hille-567873224/"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/BleuHere"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default FooterPage
