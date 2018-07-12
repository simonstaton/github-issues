export default ({ html, helmet, store }) => `
<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
</head>
<body ${helmet.bodyAttributes.toString()}>
  <div id='root'>${html}</div>
  <script>
    window.__bootstrapData__ = ${JSON.stringify(store).replace(/</g, '\\x3c')};
  </script>
  <script src='/scripts/client.js' async></script>
</body>
</html>
`;
