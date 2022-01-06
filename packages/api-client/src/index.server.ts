import { apiClientFactory } from '@vue-storefront/core';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

import type { Setttings, Endpoints } from './types';

function onCreate(settings: Setttings) {
  const httpLink = createHttpLink({ uri: settings.api.uri, fetch });
  return {
    config: settings,
    client: new ApolloClient({
      cache: new InMemoryCache(),
      link: ApolloLink.from([httpLink])
    })
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {

  }
});

export {
  createApiClient
};
