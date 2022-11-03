import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PortfolioPage = () => {
  return (
    <div className="portfolio">
      <MetaTags title="Portfolio" description="Portfolio page" />

      <Link className="p-link" to={routes.foodFuneral()}>
        Food Funeral
      </Link>
      <Link className="p-link" to={routes.tend()}>
        Tend
      </Link>
      <p className="p-link">
        <a
          target="_blank"
          href="https://www.codewars.com/users/Bleuette"
          rel="noreferrer"
        >
          CodeWars
        </a>
      </p>
    </div>
  )
}

export default PortfolioPage
