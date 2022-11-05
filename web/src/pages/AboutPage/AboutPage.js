import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <main>
      <MetaTags title="About" description="About page" />

      <p>
        My goal is to actively combat social and environmental issues through
        building useful and elegant tech solutions. I believe that meaningful
        change happens when inclusion, communication and kindness are are
        central values.
      </p>
      <p>
        In 2021 I started coding as a hobby and couldn&apos;t believe how much I
        enjoyed it. It was enlivening, exciting, frustrating and mind-bending
        all at once.
      </p>
      <p>
        After years of feeling unsure about what impactful career I could fall
        in love with, it clicked for me that software development could be my
        one way ticket. I feel so pumped at the thought of contributing to
        solutions that will improve the lives of others, and have an ongoing
        positive impact on the planet.
      </p>
      <p>
        My stack is built on Node.js, Knex.js (SQL generator), Express and
        communicating using restful APIs on the back-end, and React and Redux on
        the front end. My testing suite includes TestingLibrary, Jest and
        Supertest. I&apos;m working on some cool personal projects at the
        moment. Check out my portfolio for more.
      </p>
      <p>
        Outside of trying to change the world, I love watching seeds poke their
        heads up above the soil. I love sharing food with people I love. I love
        feeling the sun and shade on my skin when I walk through trees with my
        dog. I love learning about the innovation and creativity of others.
      </p>
      <p>
        Please send me a message on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/bleuette-hille-567873224/"
        >
          LinkedIn
        </a>{' '}
        so that we can make this communication two sided. I&apos;d love to hear
        from you.
      </p>
    </main>
  )
}

export default AboutPage
