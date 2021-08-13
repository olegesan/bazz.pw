import React from "react";
import Section from "./section";
import SubSection from "./subSection";
import Description from "./description";

export default function Skills() {
  return (
    <Section title="Skills">
      <SubSection title="Frontend">
        <Description>
          React.JS · NextJS · Chakra-UI · HTML5 · CSS · JQuery · Bootstrap
        </Description>
      </SubSection>

      <SubSection title="Backend">
        <Description>
          NodeJS · Django · Express.js · Flask · GraphQL · REST API · Laravel
        </Description>
      </SubSection>
      <SubSection title="Programming">
        <Description>JavaScript · Java · Python · PHP</Description>
      </SubSection>
    </Section>
  );
}
