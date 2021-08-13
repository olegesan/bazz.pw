import React from "react";
import Section from "./section";
import SubSection from "./subSection";
import Description from "./description";
import BuletPoints from "./buletpoints";

export default function Hackathon() {
  return (
    <Section title="Hackathon">
      <SubSection title="HackGT 7" date="Oct, 2020" location="">
        {/* <Description>
              HackGT 7 Descripiton
              </Description> */}
        <BuletPoints>
          {[
            "In a team of 3 developer built a web app to help small businesses interpret their data and implement optimal solutions utilizing Data Science",
            `Implemented Node.js script to communicate with API provided by NCR with HMAC authentication to load transactions' data`,
            `Worked with other teammate's python code to build visualization with Streamlit`,
          ]}
        </BuletPoints>
      </SubSection>
      <SubSection title="Shellhacks" date="Sep, 2020" location="">
        {/* <Description>
              Shellhacks
              </Description> */}
        <BuletPoints>
          {[
            `Worked in a team to design and develop a web application meant to help hackers find teams for various hackathons`,
            `Lead the front-end development along with managing another teammate's tasks. Used React.js with Bootstrap and Material-UI components to quickly build a nice and intuitive UI`,
            `Contributed to API development with about 20 endpoints and participated in DB schema design involving 7 entities`,
          ]}
        </BuletPoints>
      </SubSection>
      <SubSection title="UgaHacks 5" date="Feb, 2020" location="">
        {/* <Description>
              Ugahacks
              </Description> */}
        <BuletPoints>
          {[
            `Worked in the team to design our app. Utilized UML to build the model of the system, which helped to finish design before the end of Day 1`,
            `Lead the development of our backend. Used Express.js to implement server-side logic of our app and to communicate with BalckRock Aladdin API. Developed persistent data storage with MongoDB`,
            `Contributed to frontend development in React.js. Refactored stock chart component to correctly display data from backend`,
          ]}
        </BuletPoints>
      </SubSection>
    </Section>
  );
}
