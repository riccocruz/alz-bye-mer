// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    emailVerified
    ageRange
    gender
    ethnicity
    familyHistory
    smoking
    drinking
    highBloodPressure
    diabetes
    height
    weight
    assessmentScore
    physicals {
      items {
        id
        steps
        distance
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      emailVerified
      ageRange
      gender
      ethnicity
      familyHistory
      smoking
      drinking
      highBloodPressure
      diabetes
      height
      weight
      assessmentScore
      physicals {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPhysical = `query GetPhysical($id: ID!) {
  getPhysical(id: $id) {
    id
    steps
    distance
    user {
      id
      username
      email
      emailVerified
      ageRange
      gender
      ethnicity
      familyHistory
      smoking
      drinking
      highBloodPressure
      diabetes
      height
      weight
      assessmentScore
      physicals {
        nextToken
      }
    }
  }
}
`;
export const listPhysicals = `query ListPhysicals(
  $filter: ModelPhysicalFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhysicals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      steps
      distance
      user {
        id
        username
        email
        emailVerified
        ageRange
        familyHistory
        smoking
        drinking
        highBloodPressure
        diabetes
        height
        weight
        assessmentScore
      }
    }
    nextToken
  }
}
`;
