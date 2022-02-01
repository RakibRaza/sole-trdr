import { ApolloClient, InMemoryCache, HttpLink, from, } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://soletrdr-stg.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "nSCCJcB6TKa2h1UhiD10uuU1fMYw6SLQ02iVglCHCa7rSiDHiSZNbVbsjNRh3E6u"
    }
  }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});