const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'y0tlid1q',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skS8qUYnR7MxHNnUk1YcK9KUL2kCBVYXrCS4hiBQu8CXDGTSRY5wosZKvRJwEdGeyvofZuhztyTCjTiYMXPR9dEcluuM1bcnBdRXG5Ea08wdjWc1nQSzvtlkQlqrYbf2x196fLtXpN8D20viyLKau6fNg7vA4g1nCaapy7eP7Iv9YjVClAXy', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})


export default client;