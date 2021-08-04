import React from 'react';

import Section from './section'
import SubSection from './subSection'
import Description from './description'
import BuletPoints from './buletpoints'
import ProjectInfo from './projectInfo'

const projects = [{
    image:'christmas_list',
title:"Christmas List",
github: 'https://github.com/olegesan/christmas_list_webapp',
stack:'Python, Django, Bootstrap, JQuery',
date:'Dec, 2019',
// description:`Big family is going to get gifts for each other, but dad/mom is tired of managing the gifts assignment and other tiny tasks. 
// Christma list app is meant to manage family gift list, where one person is in charge of gifts assignment, and other can only look up, what gifts they need to get, or tell what gifts they need.
// It features an algorithm of randomly assigning gifts. It uses Django for managing DB and backend. Frontend is developed using jQuery and Bootstrap.`},
description:'An app made to solve secret Santa family problem. It helps to manage family gifts for such holiday as Christmas. Register the entire family, enter desired gifts, get the gifts you are supposed to give. No additional worries required.',
points:['Gained experience with Django and build a full-stack web application. Used Bootstrap to facilitate UI styling and JQuery to handle app events',
'Developed an algorithm to handle random and correct assignment of objects to entities within specific constraints',
'Designed relational database model with one-to-many, many-to-many relationships']
},
{
    image:'bible_scraper',
    github:'https://github.com/olegesan/bible_scapper',
    title:'Bible Scraper',
    stack:'Python, Requests, BeautifulSoup, JSON',
    date:'Jan, 2020',
    description:`A simple console application that fetches a specified version of Bible from bible.com. It uses BeautifulSoup to parse fetched html pages and outputs a JSON file that can be used for other purposes.
    It was a small personal project of of necessity and inability to find json Bibles on the internet.`,
    points:['Wrote a Python script that utilized Requests and BeautifulSoup libraries to scrape Bible text and pack it in a JSON with books, chapters, verses']
},
{
    image:'bible_react',
    github:'https://github.com/olegesan/bible_react',
    title:'Bible React',
    stack:'React.JS, Flask',
    date:'Feb, 2020',
    description:"It is a very simple React application that using my bible api loads chapters from ESV bible.",
    points:['Used flask to serve JSON file through API. Implemented React.js to make API calls and dynamically update UI without reloading the page']
},
{
    image:'wedding_react',
    github:'https://github.com/olegesan/wedding-website',
    title:'Wedding React',
    stack:'React.js, MongoDB, Node.js, Twillo SendGrid',
    date:'Mar, 2020',
    // description:`Beautiful site developed for couples that are getting married. It takes advantage of React components and MongoDB database and provides great user experience.
    // Implemented  RSVP form validates input and upon successful writing of the data to the remote DB sends out an email with RSVP information. It was great practice of making a full-stack web application.
    // `,
    description:'A webapp template to help engaged couples manage their wedding info online. It deals with events times, locations, FAQ, registry, and RSVP logic.',
    points:['Collaborated with another developer through Github, handled pull request and resolved merge conflicts',
    'Worked on RSVP subsystem to allow writing/reading data to DB, form validation, as well as sending emails notifying of a new RSVP',
    'Enhanced my skill with React.js by designing more complex and capable components',
]
}]
export default function Projects({children}){

    return(
        <Section title='Projects'>
            {projects.reverse().map((project, index)=>{
                return(
                    <SubSection key={index} title={project.title}
                     github={project.github}
                    >
                        <Description>
                            <ProjectInfo date={project.date}
                            stack={project.stack}/>
                            {project.description}
                            </Description>
                            <BuletPoints>
                                {project.points}
                            </BuletPoints>
                    </SubSection>
                )
            })}
        </Section>
    )
}