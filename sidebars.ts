import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    mainSidebar: [
        {
            type: 'category',
            label: 'Welcome',
            className: 'sidebar-welcome',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'index'
            },
            items: [
                {
                    type: 'doc',
                    id: 'mission',
                    label: 'Mission',
                    className: 'sidebar-mission'
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
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: 'services',
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'services/architecture',
                            className: 'sidebar-service-architecture'
                        },
                        {
                            type: 'doc',
                            id: 'services/system-analysis',
                            className: 'sidebar-service-analysis'
                        },
                        {
                            type: 'doc',
                            id: 'services/ai',
                            className: 'sidebar-service-ai'
                        },
                        {
                            type: 'doc',
                            id: 'services/documentation',
                            className: 'sidebar-service-documentation'
                        },
                        {
                            type: 'doc',
                            id: 'services/mentorship',
                            className: 'sidebar-service-mentorship'
                        },
                        {
                            type: 'doc',
                            id: 'services/consulting',
                            className: 'sidebar-service-consulting'
                        },
                    ]
                },
            ]
        },
        // {
        //     type: 'category',
        //     label: 'Portfolio',
        //     className: 'sidebar-portfolio',
        //     collapsed: true,
        //     link: {
        //         type: 'doc',
        //         id: 'portfolio',
        //     },
        //     items: [
        //         {
        //             type: 'doc',
        //             id: 'portfolio',
        //             label: 'Overview',
        //             className: 'sidebar-portfolio-item',
        //         },
        //         {
        //             type: 'doc',
        //             id: 'portfolio/adrs',
        //             label: 'ADRs',
        //             className: 'sidebar-portfolio-item',
        //         },
        //         {
        //             type: 'doc',
        //             id: 'portfolio/diagrams',
        //             label: 'Diagrams',
        //             className: 'sidebar-portfolio-item',
        //         },
        //     ],
        // },
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
