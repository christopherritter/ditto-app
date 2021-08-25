/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTemplate = /* GraphQL */ `
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
      id
      subject
      body
      authorID
      createdAt
      updatedAt
    }
  }
`;
export const updateTemplate = /* GraphQL */ `
  mutation UpdateTemplate(
    $input: UpdateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    updateTemplate(input: $input, condition: $condition) {
      id
      subject
      body
      authorID
      createdAt
      updatedAt
    }
  }
`;
export const deleteTemplate = /* GraphQL */ `
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
      id
      subject
      body
      authorID
      createdAt
      updatedAt
    }
  }
`;
export const createRecipient = /* GraphQL */ `
  mutation CreateRecipient(
    $input: CreateRecipientInput!
    $condition: ModelRecipientConditionInput
  ) {
    createRecipient(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipient = /* GraphQL */ `
  mutation UpdateRecipient(
    $input: UpdateRecipientInput!
    $condition: ModelRecipientConditionInput
  ) {
    updateRecipient(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipient = /* GraphQL */ `
  mutation DeleteRecipient(
    $input: DeleteRecipientInput!
    $condition: ModelRecipientConditionInput
  ) {
    deleteRecipient(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
