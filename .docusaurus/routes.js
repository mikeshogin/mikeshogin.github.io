import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ru/blog',
    component: ComponentCreator('/ru/blog', '8f4'),
    exact: true
  },
  {
    path: '/ru/blog/archive',
    component: ComponentCreator('/ru/blog/archive', '30b'),
    exact: true
  },
  {
    path: '/ru/blog/system-analysis-fundamentals',
    component: ComponentCreator('/ru/blog/system-analysis-fundamentals', '4ff'),
    exact: true
  },
  {
    path: '/ru/blog/tags',
    component: ComponentCreator('/ru/blog/tags', 'e4d'),
    exact: true
  },
  {
    path: '/ru/blog/tags/architecture',
    component: ComponentCreator('/ru/blog/tags/architecture', 'b25'),
    exact: true
  },
  {
    path: '/ru/blog/tags/methodology',
    component: ComponentCreator('/ru/blog/tags/methodology', '3d5'),
    exact: true
  },
  {
    path: '/ru/blog/tags/system-analysis',
    component: ComponentCreator('/ru/blog/tags/system-analysis', '4bb'),
    exact: true
  },
  {
    path: '/ru/',
    component: ComponentCreator('/ru/', '3b3'),
    routes: [
      {
        path: '/ru/',
        component: ComponentCreator('/ru/', '119'),
        routes: [
          {
            path: '/ru/',
            component: ComponentCreator('/ru/', '07c'),
            routes: [
              {
                path: '/ru/about',
                component: ComponentCreator('/ru/about', 'd3c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/portfolio',
                component: ComponentCreator('/ru/portfolio', '014'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/portfolio/adrs',
                component: ComponentCreator('/ru/portfolio/adrs', '599'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/portfolio/diagrams',
                component: ComponentCreator('/ru/portfolio/diagrams', '126'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/resources',
                component: ComponentCreator('/ru/resources', '3c7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/services',
                component: ComponentCreator('/ru/services', 'cfb'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/services/architecture-audit',
                component: ComponentCreator('/ru/services/architecture-audit', 'fb1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/services/consulting',
                component: ComponentCreator('/ru/services/consulting', 'f76'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/services/mentorship',
                component: ComponentCreator('/ru/services/mentorship', 'f2e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/services/system-analysis',
                component: ComponentCreator('/ru/services/system-analysis', '007'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/ru/',
                component: ComponentCreator('/ru/', '03b'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
