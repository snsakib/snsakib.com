import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // list of projects
  projects = [
    {
      title: 'Agency',
      category: 'Corporate website landing page',
      description:
        'A responsive webpage developed as a personal project of mine to refurbish my front-end development skills.',
      tags: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Angular'],
      liveDemo: 'https://project-agency.netlify.com',
      caseStudy: '/case-study/agency',
      imgPath: 'assets/images/projects/agency/agency-screenshot-280.jpg',
      imgAlt: 'Screenshot of the project'
    }
  ];

  constructor() {}
}
