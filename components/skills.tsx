import React from "react";
import Section from "./section";
import SubSection from "./subSection";
import Description from "./description";

export default function Skills() {
    return (
        <Section title="Skills">
            <SubSection title="Programming">
                <Description>JavaScript · Python · Java · Go</Description>
            </SubSection>
            <SubSection title="Backend">
                <Description>
                    NodeJS · NestJS · Express · Flask · GraphQL · REST API ·
                    MongoDB · SQL
                </Description>
            </SubSection>
            <SubSection title="Frontend">
                <Description>
                    React · NextJS · TypeScript · Chakra-UI · HTML/CSS
                </Description>
            </SubSection>
            <SubSection title="Development">
                <Description>
                    UML · Agile · Waterfall · OOP · VCS · Docker · AWS · Flutter
                </Description>
            </SubSection>
        </Section>
    );
}
