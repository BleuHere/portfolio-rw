import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <main className="content">
        <p>Hi! I&apos;m a full stack software developer.</p>
        <p>
          I&apos;m super pumped about problem solving with and away from the
          keyboard, and want to leverage my skills to combat the climate crisis.
        </p>
        <p>
          I like long walks in native forests, being entranced by beautiful
          storytelling, and making fancy dinners for my loved ones.
        </p>
      </main>
    </>
  )
}

export default HomePage
