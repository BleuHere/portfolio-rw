import { MetaTags } from '@redwoodjs/web'

const FoodFuneralPage = () => {
  return (
    <>
      <MetaTags title="FoodFuneral" description="FoodFuneral page" />

      <div className="content">
        <h1>Dev Academy Graduation Project</h1>
        <img
          alt="a colourful screenshot of our food blog app - Food Funeral"
          src="/images/food-funeral.png"
        />
        <p>
          In a team of four, we collaboratively planned, designed, coded and
          tested a full-stack app in less than a week. This short-deadline, high
          intensity project allowed me to hone both my technical and human
          skills.
        </p>
        <p>
          <a href="https://github.com/BleuHere/Food-Funeral">
            Here is the repo.
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=UqlEC-GZDB8&ab_channel=DevAcademyAotearoa">
            Here is a video presentation.{' '}
          </a>{' '}
          I speak at 4.45, but the whole presentation is informative and
          demonstrates the scope and implementation of the project.
        </p>
        <h2>Human Takeaways</h2>
        <img
          src="/images/miro-f-f.png"
          alt="a screenshot of positive retrospective notes from the team"
        />
        <ul>
          <li>
            We created a wellbeing-first team culture. This was intentional - we
            built processes that would encourage taking rests, giving feedback,
            and having fun.
          </li>
          <li>
            We were highly collaborative, and did awesome planning. We set
            personal learning objectives, and planned and designed our app
            together and did lots of pair programming. This made the
            implementation of our project simple and enjoyable.
          </li>
          <li>
            I had a really wonderful team experience, and felt that because of
            our team culture I could relax, enjoy the code, and trust my
            teammates. Experiencing this great environment makes me excited to
            cultivate, and contribute to this type of environment in the
            workplace.
          </li>
        </ul>
        <h2>Tech Takeaways</h2>
        <img src="/images/test.png" alt="a screenshot of 40 tests passing" />
        <ul>
          <li>
            We worked on full-stack tickets which gave me a comprehensive
            understanding of how each module talks to one another. This was
            super valuable to my learning.
          </li>
          <li>
            With less than a week to complete this project, we chose a simple
            MVP and decided we wanted to do lots of testing. I learnt a lot
            about how the code works through testing and we managed to test 87%
            of our code base!
          </li>
          <li>
            The fact that we chose a simple MVP also allowed us to be curious
            and explore while we coded. This made the experience much more
            enjoyable, but also I learnt much more than if we had needed to
            crunch code 24/7 to complete the MVP.
          </li>
        </ul>
        <img
          alt="a zoom capture of the Food Funeral team looking silly"
          src="/images/team-ff.png"
        />
      </div>
    </>
  )
}

export default FoodFuneralPage
