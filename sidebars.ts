import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Welcome',
      className: 'sidebar-welcome',
    },
    {
      type: 'doc',
      id: 'mission',
      label: 'Mission',
      className: 'sidebar-mission',
    },
    {
      type: 'doc',
      id: 'about',
      label: 'About',
      className: 'sidebar-about',
    },
    {
      type: 'category',
      label: 'Services',
      className: 'sidebar-services',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'services',
      },
      items: [
        {
          type: 'doc',
          id: 'services/system-analysis',
          label: 'System Analysis',
          className: 'sidebar-service-item',
        },
        {
          type: 'doc',
          id: 'services/mentorship',
          label: 'Mentorship & Coaching',
          className: 'sidebar-service-item',
        },
        {
          type: 'doc',
          id: 'services/consulting',
          label: 'IT Consulting',
          className: 'sidebar-service-item',
        },
        {
          type: 'doc',
          id: 'services/architecture-audit',
          label: 'Architecture Audit',
          className: 'sidebar-service-item',
        },
      ],
    },
    {
      type: 'category',
      label: 'Portfolio',
      className: 'sidebar-portfolio',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'portfolio',
      },
      items: [
        {
          type: 'doc',
          id: 'portfolio',
          label: 'Overview',
          className: 'sidebar-portfolio-item',
        },
        {
          type: 'doc',
          id: 'portfolio/adrs',
          label: 'ADRs',
          className: 'sidebar-portfolio-item',
        },
        {
          type: 'doc',
          id: 'portfolio/diagrams',
          label: 'Diagrams',
          className: 'sidebar-portfolio-item',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      className: 'sidebar-resources',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'resources',
      },
      items: [
        {
          type: 'link',
          label: 'Blog',
          href: '/blog',
          className: 'sidebar-blog-link',
        },
        {
          type: 'link',
          label: 'Contact',
          href: 'mailto:contact@mikeshogin.com',
          className: 'sidebar-contact-link',
        },
      ],
    },
  ],
};

export default sidebars; 