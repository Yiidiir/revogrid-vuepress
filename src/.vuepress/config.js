const { description } = require('../../package');

const baseLink = 'guide/';
const svelteLink = 'framework.svelte.overview';
const vueLink = 'framework.vue.overview';
const reactLink = 'framework.react.overview';
const angularLink = 'framework.angular.overview';
const vue = {
  title: 'Vue',
  children: [
    vueLink,
    'framework.vue.component',
    'framework.vue.editor',
    'framework.vue.webcomponent',
  ]
};

const svelte = {
  title: 'Svelte',
  children: [
    svelteLink,
  ]
};

const react = {
  title: 'React',
  children: [reactLink, 'framework.react.component']
};

const frameworks = {
  title: 'Frameworks',
  collapsable: false,
  children: [
    vue,
    react,
    svelte,
    'framework.ts',
    angularLink,
  ]
};

const guide = [
  {
    title: 'Documentation',
    collapsable: false,
    children: [
      '',
      'installing',
      {
        title: 'Column definitions',
        collapsable: false,
        children: [
          'column.properties',
          'column.pinned',
          'column.customHeader',
          'column.grouping',
          'autosize',
          'column.resize'
        ]
      },
      'column.types',
      {
        title: 'Cells',
        collapsable: false,
        children: [
          'cell.renderer',
          'cell.editor',
          'cell.properties',
        ]
      },
      'sorting',
      'filters',
      {
        title: 'Row properties',
        collapsable: false,
        children: [
          'rows.pinned',
          'rows.class',
          'rows.headers',
          'rows.size'
        ]
      },
      {
        title: 'Theme Manager',
        collapsable: false,
        children: ['theme', 'theme.light', 'theme.dark'],
      },
      'export.plugin',
      'api',
    ]
  },
  frameworks,
];
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'RevoGrid - Excel like data grid component',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/revogrid/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { href: 'https://fonts.googleapis.com/css?family=Nunito:700, 400|Roboto:400,400i,700&display=swap', rel: 'stylesheet' }],
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/revolist/revogrid',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: '/logo.svg',
    frameworks: [{
      img: '/js.svg',
      url: baseLink,
    },{
      img: '/vue.svg',
      url: `${baseLink}${vueLink}`,
    },{
      img: '/react.svg',
      url: `${baseLink}${reactLink}`,
    },{
      img: '/angular.svg',
      url: `${baseLink}${angularLink}`,
    },{
      img: '/svelte.svg',
      url: `${baseLink}${svelteLink}`,
    }],
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/guide/',
      },
      {
        text: 'Demo',
        link: '/demo/',
      }
    ],
    sidebar: {
      '/guide/': guide,
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
