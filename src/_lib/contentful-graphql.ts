const ENV = process.env.CONTENTFUL_ENV;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENV}`;
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json'
}

const contentfulGQLClient = {
  query: ({ query, variables = undefined }: { query: string, variables?: Record<string, string> }) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 }
    })
  }
}

export default contentfulGQLClient