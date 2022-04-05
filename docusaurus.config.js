// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blockchain Dev Path',
  tagline: 'Let us explore together',
  url: 'https://github.com/WebXDAO/blockchain-dev-path',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', 
  projectName: 'docusaurus', 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
     
          editUrl: 'https://github.com/WebXDAO/blockchain-dev-path',
          routeBasePath: '/'
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WebXDAO',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          
        },
       
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Dev Path',
          },
          {
            id:"dp",
            type: 'dropdown',
            items: [
          {
            label: 'Discord',
            href: 'https://discord.com/invite/TSRwqx4K2v'
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/WebXDAO',

          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/webxdao/',
          }
            ],
            docId: 'comm',
            position: 'left',
            label: 'Community',
            
          },
          
          {
            label: "Join Us",
            href:'https://github.com/WebXDAO/start-here/issues/new?assignees=&labels=github-invitation&template=invitation.yml&title=Please+invite+me+to+the+community',
            position: 'right'
          },
          {
            label: "Become a Partner",
            href:'#',
            position: 'right'
          }


        ],
        
      },
      announcementBar: {
        id: "#",
        content: "✨Thank you for checking out our <a href='https://github.com/WebXDAO/blockchain-dev-path'>Blockchain Dev Path</a>✨"
        , backgroundColor: "#6B71F2",
        textColor:"white",
        isCloseable: true,


        
      },
      footer: {
        logo:{
          alt: 'WebXDAO',
        src: './img/Logo.svg',
        href: 'https://github.com/WebXDAO/blockchain-dev-path',
        },
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              
              {
                label: 'Discord',
                href: 'https://discord.com/invite/TSRwqx4K2v',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/WebXDAO',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/WebXDAO',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} WebXDAO.All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
