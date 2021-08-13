import React from "react";
import Section from "./section";
import SubSection from "./subSection";
import Description from "./description";

export default function Certifications() {
  return (
    <Section title="Certifications">
      <SubSection
        title="AWS Certified Cloud Practitioner"
        date="Aug, 2020 - Aug, 2023"
        location="AWS"
      >
        <Description>
          Assures basic knowledge of AWS and its global infrastructure. Some
          experience with computing: EC2, Lambda, Elastic Beanstalk, and ECS.
          Knowledge of storage services: S3, EFS, and S3 Glacier. Database
          services: Aurora, DynamoDB, RDS. And necessary skills to manage VPC of
          deployed configurations.
        </Description>
      </SubSection>
      <SubSection
        title="MTA: Networking Fundamentals"
        date="Jul, 2020"
        location="Microsoft"
      >
        <Description>
          Validates general knowledge of networking concepts and technologies.
          I.e. network protocols, topologies, DNS, TCP/IP, OSI model.
        </Description>
      </SubSection>
      <SubSection
        title="Google IT Automation with Python Specialization"
        date="Apr, 2020"
        location="Coursera"
      >
        <Description>
          Course dedicated to application of python in real world scenarios.
          I.e. data validation, email server, reports generation, automated
          deployment, etc.
        </Description>
      </SubSection>
    </Section>
  );
}
