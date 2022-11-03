import { Link, routes } from '@redwoodjs/router'

import FooterPage from 'src/pages/FooterPage/FooterPage'

const PortfolioLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1 className="title">
          <Link to={routes.home()}>Bleuette Hille</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.portfolio()}>Portfolio</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <FooterPage />
    </>
  )
}

export default PortfolioLayout
