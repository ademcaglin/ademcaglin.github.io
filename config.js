const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://ademcaglin.github.io",
    gaTrackingId: null
  },
  header: {
    logo: "https://avatars1.githubusercontent.com/u/14217407?v=4",
    logoLink: "https://ademcaglin.github.io",
    title: "Adem Caglin",
    githubUrl: "https://github.com/hasura/gatsby-gitbook-boilerplate",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }]
  },
  sidebar: {
    forcedNavOrder: ["/introduction"],
    links: [
      {
        text: "Stack Overflow",
        link: "https://stackoverflow.com/users/5426333/adem-caglin?tab=profile"
      },
      {
        text: "Github",
        link: "https://github.com/ademcaglin"
      },
      {
        text: "Codesandbox",
        link: "https://codesandbox.io/u/ademcaglin"
      },
      {
        text: "Twitter",
        link: "https://twitter.com/ademcaglin_en"
      }
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Adem Caglin",
    description: "Adem Caglin",
    ogImage: null,
    docsLocation: "https://github.com/ademcaglin/ademcaglin.github.io/tree/develop/content",
    favicon: "https://avatars1.githubusercontent.com/u/14217407?v=4"
  }
};

module.exports = config;
