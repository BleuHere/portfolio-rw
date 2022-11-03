import { MetaTags } from '@redwoodjs/web'

const TendPage = () => {
  return (
    <main>
      <MetaTags title="Tend" description="Tend page" />

      <h1>Tend</h1>
      <img
        alt="part way through a level of Tend the game"
        src="tend-garden.png"
      />
      <p>
        Tend is a gardening game I started working on during Dev Academy. The
        purpose of the game is to cultivate empathy towards others and an
        interest in gardening.
      </p>
      <p>
        <a href="https://github.com/BleuHere/tend-to">Here is the repo.</a>
      </p>
      <p>
        <a href="https://www.youtube.com/watch?v=a2U13qFJhvY&ab_channel=DevAcademyAotearoa">
          Here is a video presentation.
        </a>{' '}
        My presentation runs for the first 5 ish minutes.
      </p>
      <h2>The Story</h2>
      <img
        alt="instructions for the first level of Tend the game"
        src="tend.png"
      />
      <p>
        Your friend has asked you to look after their garden while they are away
        getting treatment for an illness.
      </p>
      <p>
        Your task is to prepare the garden beds, and grow and harvest plants. As
        you go through each level, you friend communicates with you via email,
        giving you tips and celebrating your work.
      </p>
      <p>
        At the end of the game, it is revealed that your friend is in fact the
        Earth, and you have been doing your best to save her by being
        resourceful, sequestering carbon, and learning how to work alongside
        nature.
      </p>
      <h2>The Stack</h2>
      <img alt="a code snippet from tend" src="tend-code.png" />

      <p>
        This game uses React and Redux on the front end, an AJAX API built on
        SuperAgent, and Express and Knex.js (a SQL generator) on the backend.
      </p>
      <p>
        I got to practise writing Redux Thunk functions, and learned a lot about
        the different elements of state in both Redux and React.
      </p>
      <p>
        I also did some component testing, which is something I hadn&apos;t done
        before. I used TestingLibrary and Jest for this.
      </p>
      <h2>Takeaways</h2>
      <img
        alt="a code snippet from tend readme showing planning"
        src="readme.png"
      />

      <p>
        As you can see from the README in the repo, I did some great planning. I
        really enjoyed this part of the project and felt like I got into a great
        flow.
      </p>
      <p>
        I enjoyed designing the gameplay, and the logic required to make the
        game responsive. I originally built the game using React useState hooks,
        but quickly realised Redux would be a better tool. I switched over
        midway through the project, which was a good pivot.
      </p>
      <p>
        Unfortunately, after reflecting on the game, I realised two things.
        Firstly - this game is not actually very fun to play. And secondly, I
        don&apos;t have the passion for game developement to invest the time
        into this game to make it fun.
      </p>
      <p>
        A big thing I recognised as something to improve was my ability to read
        and follow documentation. This is something I have been focusing on
        since this point.
      </p>
      <p>
        This was the first full-stack app I had ever built independently, and I
        feel really proud of what I achieved, and what I learnt.
      </p>
    </main>
  )
}

export default TendPage
