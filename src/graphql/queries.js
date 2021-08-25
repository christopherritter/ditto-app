/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
      id
      subject
      body
      createdAt
      updatedAt
    }
  }
`;
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipient = /* GraphQL */ `
  query GetRecipient($id: ID!) {
    getRecipient(id: $id) {
      id
      name
      emailAddress
      createdAt
      updatedAt
    }
  }
`;
export const listRecipients = /* GraphQL */ `
  query ListRecipients(
    $filter: ModelRecipientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        emailAddress
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
