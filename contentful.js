import { createClient } from 'contentful';

export const client = createClient({
  space: 'lhwqt73qqx1p',
  // accessToken: '739rZG0ynBmS9C40gfc-8zE7oWfuNDObxaLxGyY_qKM'
  accessToken: '-m8ofDnPyuyoPobWZTbYg8aPzpVFEnV7TvXwrI_pnt4'
});
// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: 'b3ri4rr0naoc',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: '739rZG0ynBmS9C40gfc-8zE7oWfuNDObxaLxGyY_qKM'
// })

// client.getEntries()
// .then((response) => console.log(response.items))
// .catch(console.error)