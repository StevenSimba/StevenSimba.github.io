const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/steve/Desktop/gatsby_demos/stevensimba.github.io/src/templates/blog-post.js"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("/home/steve/Desktop/gatsby_demos/stevensimba.github.io/src/templates/blog-list.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/steve/Desktop/gatsby_demos/stevensimba.github.io/src/templates/tags.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/steve/Desktop/gatsby_demos/stevensimba.github.io/src/pages/404.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/steve/Desktop/gatsby_demos/stevensimba.github.io/src/pages/tags.js")))
}

