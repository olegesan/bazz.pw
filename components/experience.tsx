import React from "react";
import Section from "./section";
import SubSection from "./subSection";
import Description from "./description";
import BuletPoints from "./buletpoints";

export default function Experience({ children }) {
  return (
    <Section title="Experience">
      <SubSection
        title="MSIT Peer Tutor"
        date="Oct, 2019 - Present"
        location="Academic Enhancement Center, GGC"
      >
        <BuletPoints>
          {[
            `Reviewed students' code written in Python, Java, C#, PHP, SQL. Helped debugging source code and explained proper code formatting `,
            `Helped students to optimize their code to improve BigO performance by explaining suitable algorithms, data structures, and best practices`,
            `Provided students with foundations of Object Oriented Programming and helped them to build school projects by implementing OOP`,
          ]}
        </BuletPoints>
        {/* <Description>
              Help multiple students with undestanding 
              of fundamental CS concepts. Reviewed their 
              code to debug it and make more efficient, 
              when necessary.
              </Description> */}
      </SubSection>
      {/* <SubSection title='Foreign Language Teacher' 
          date='Aug, 2018 - Aug, 2019'
          location='ABIE, China'>
              <Description>
              I was a part of intenational team of teachers
               at a private laguage school for children. We 
               developed various tracks for students to enhance 
               their learning experience through highly 
               interactive lessons. It laso helped me to 
               develop digital media skills, while making 
               unique educational materials for studnets.
              </Description>
          </SubSection> */}
    </Section>
  );
}
