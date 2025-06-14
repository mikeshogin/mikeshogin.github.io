import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Mike Shogin',
    tagline: 'System Analyst & IT Consultant',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://mikeshogin.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'mikeshogin',
    projectName: 'mikeshogin.github.io',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Internationalization
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
                htmlLang: 'en-US',
            },
            ru: {
                label: 'Русский',
                direction: 'ltr',
                htmlLang: 'ru-RU',
            },
        },
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    routeBasePath: '/',
                },
                blog: {
                    showReadingTime: true,
                    blogTitle: 'Blog',
                    blogDescription: 'Insights on system analysis, architecture, and IT consulting',
                    postsPerPage: 8,
                    blogSidebarTitle: 'Recent posts',
                    blogSidebarCount: 5,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} Mike Shogin.`,
                    },
                },
                pages: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Mike Shogin',
            logo: {
                alt: 'Mike Shogin Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: '/mission',
                    position: 'left',
                    label: 'Mission',
                },
                {
                    to: '/about',
                    position: 'left',
                    label: 'About',
                },
                {
                    label: 'Services',
                    to: '/services',
                    position: 'left',
                    items: [
                        {
                            label: 'Architecture Audit & Landscape',
                            to: '/services/architecture',
                        },
                        {
                            label: 'System Analysis',
                            to: '/services/system-analysis',
                        },
                        {
                            label: 'AI Workflow Integration',
                            to: '/services/ai',
                        },
                        {
                            label: 'Documentation & Decision Frameworks',
                            to: '/services/documentation',
                        },
                        {
                            label: 'Mentorship & Coaching',
                            to: '/services/mentorship',
                        },
                        {
                            label: 'IT Consulting & Strategic Roadmapping',
                            to: '/services/consulting',
                        },
                    ],
                },
                // {
                //     to: '/portfolio',
                //     position: 'left',
                //     label: 'Portfolio',
                // },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/mikeshogin',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Services',
                    items: [
                        {
                            label: 'System Analysis',
                            to: '/services/system-analysis',
                        },
                        {
                            label: 'Mentorship & Coaching',
                            to: '/services/mentorship',
                        },
                        {
                            label: 'IT Consulting',
                            to: '/services/consulting',
                        },
                        {
                            label: 'Architecture Audit',
                            to: '/services/architecture-audit',
                        },
                    ],
                },
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'Portfolio',
                            to: '/portfolio',
                        },
                        {
                            label: 'About',
                            to: '/about',
                        },
                    ],
                },
                {
                    title: 'Connect',
                    items: [
                        {
                            label: 'LinkedIn',
                            href: 'https://linkedin.com/in/mikeshogin',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/mikeshogin',
                        },
                        {
                            label: 'Email',
                            href: 'mailto:contact@mikeshogin.com',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Mike Shogin. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        metadata: [
            {
                name: 'keywords',
                content: 'system analysis, IT consulting, architecture audit, mentorship, software development, tech lead',
            },
            {
                name: 'description',
                content: 'Professional system analyst and IT consultant offering expertise in system analysis, architecture audits, and technical mentorship.',
            },
        ],
    } satisfies Preset.ThemeConfig,

    themes: ['@docusaurus/theme-mermaid'],

    markdown: {
        mermaid: true,
    },
};

export default config; 
