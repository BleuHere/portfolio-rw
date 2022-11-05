import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <main>
      <MetaTags title="About" description="About page" />

      <h1>About Me</h1>
      <p>
        In 2021 I started coding as a hobby, and soon realised
        <em> &apos;holy moly, this is great!&apos;.</em> It became clear that I
        did indeed have a knack for (and love of) logic and problem solving.
      </p>
      <p>
        After years of feeling unsure about what impactful career I could fall
        in love with, it clicked for me that software development could be my
        one way ticket. I feel excited about being part of the solution and
        building cool things.
      </p>
      <p>
        My goal is to actively combat social and environmental issues through
        building useful and elegant tech solutions. I believe that meaningful
        change happens when inclusion, communication and kindness are are
        central values.
      </p>
      <p>
        My stack is built on Node.js, Knex.js (SQL generator) and Express on the
        back-end and React, Redux, AJAX and RESTful APIs on the front end. My
        testing suite includes TestingLibrary, Jest and Supertest. I&apos;m
        working on some cool personal and group projects at the moment. Check
        out my portfolio for more.
      </p>
    </main>
  )
}

export default AboutPage
