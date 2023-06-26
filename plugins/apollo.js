import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'

export default ({ app }) => {
  const httpLink = new HttpLink({
    uri: 'https://backend.ravakdemo.ir/graphql',
  })

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.WORDPRESS_TOKEN}`,
      },
    }))
    return forward(operation)
  })

  const link = ApolloLink.from([authLink, httpLink])

  const cache = new InMemoryCache()

  const apolloClient = new ApolloClient({
    link,
    cache,
  })

  app.apolloProvider = {
    defaultClient: apolloClient,
  }
}
