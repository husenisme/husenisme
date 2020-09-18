// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ahmad Husen',
  siteDescription: 'My personal site, portfolio, and blog',
  siteUrl: 'https://husen.id',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
    // Load all Blog Posts from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/posts/**/*.md',
        typeName: 'BlogPost',
        refs: {
          tag: 'BlogTag',
          author: 'BlogAuthor',
        },
      },
    },
    // Load Tags from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/tags/**/*.md',
        typeName: 'BlogTag',
        refs: {
          posts: {
            typeName: 'BlogPost',
          },
        },
      },
    },
    // Load Authors from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/authors/**/*.md',
        typeName: 'BlogAuthor',
        refs: {
          posts: {
            typeName: 'BlogPost',
          },
        },
      },
    },
    // Load all Portfolio Works from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/portfolio/works/**/*.md',
        typeName: 'PortfolioWork',
        refs: {
          tag: 'PortfolioTag',
        },
      },
    },
    // Load Tags from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/portfolio/tags/**/*.md',
        typeName: 'PortfolioTag',
        refs: {
          posts: {
            typeName: 'PortfolioWork',
          },
        },
      },
    },
    // Netlify CMS Plugin
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `src/cms/index.js`,
        configPath: `src/cms/config.yml`,
        publicPath: `/cms`,
        htmlTitle: `Content Manager`,
      },
    },
  ],
  templates: {
    BlogPost: [
      {
        path: '/blog/:year/:month/:day/:title',
        component: './src/templates/Blog/SinglePost.vue',
      },
    ],
    BlogTag: [
      {
        path: '/blog/tag/:title',
        component: './src/templates/Blog/Tag.vue',
      },
    ],
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },
  configureWebpack: {
    // merged with the internal config
  },
}
