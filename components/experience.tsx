import React from "react";
import Section from "./section";
import SubSection from "./subSection";
import Description from "./description";
import BuletPoints from "./buletpoints";

type Props = {
    children?: React.ReactNode;
};

export default function Experience(props: Props) {
    return (
        <Section title="Experience">
            <SubSection
                title="Software Engineer Intern"
                date="May, 2020 - July, 2020"
                location="Honeywell · Forge Cloud Services"
            >
                <BuletPoints>
                    {[
                        `Contributed to 3 identity management services by adding new and improving existing API using NestJS, TypeORM, and CockroachDB`,
                        `Explored and proposed incorporation of acceptance testing in CI/CD with Cucumber, Docker, and Octopus`,
                        `Worked in a fully remote agile team utilizing Jira’s SCRUM board to keep track of issues and sprint progress`,
                        `Troubleshooted and fixed over 10 bugs across 4 projects based on customer feedback`,
                    ]}
                </BuletPoints>
                {/* <Description>
              Help multiple students with undestanding 
              of fundamental CS concepts. Reviewed their 
              code to debug it and make more efficient, 
              when necessary.
              </Description> */}
            </SubSection>
            <SubSection
                title="Peer Supplemental Instruction Leader"
                date="Jan, 2021 - Present"
                location="Georgia Gwinnett College"
            >
                <BuletPoints>
                    {[
                        `Developed 12 weeks of training material focusing on OOP, Data Structures, and problem-solving skills`,
                        `Led a study group of 5 students solving coding problems and implementing OOP application assignments`,
                    ]}
                </BuletPoints>
                {/* <Description>
              Help multiple students with undestanding 
              of fundamental CS concepts. Reviewed their 
              code to debug it and make more efficient, 
              when necessary.
              </Description> */}
            </SubSection>
            <SubSection
                title="MSIT Peer Tutor"
                date="Oct, 2019 - Present"
                location="Academic Enhancement Center, GGC"
            >
                <BuletPoints>
                    {[
                        `Used individual approach to help each student succeed in the class and be able to help themselves`,
                        `Explained and helped students implement appropriate algorithms, data structures, and best practices`,
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
