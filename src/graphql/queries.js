// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    emailVerified
    age
    gender
    ethnicity
    familyHistory
    smoking
    highBloodPressure
    diabetes
    height
    weight
    assessmentScore
    todos {
      type
      createdAt
      isCompleted
    }
    physicals {
      items {
        id
        date
        score
      }
      nextToken
    }
    cognitives {
      items {
        id
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
      age
      gender
      ethnicity
      familyHistory
      smoking
      highBloodPressure
      diabetes
      height
      weight
      assessmentScore
      todos {
        createdAt
        isCompleted
      }
      physicals {
        nextToken
      }
      cognitives {
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
    date
    score
    user {
      id
      username
      email
      emailVerified
      age
      gender
      ethnicity
      familyHistory
      smoking
      highBloodPressure
      diabetes
      height
      weight
      assessmentScore
      todos {
        createdAt
        isCompleted
      }
      physicals {
        nextToken
      }
      cognitives {
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
      date
      score
      user {
        id
        username
        email
        emailVerified
        age
        gender
        ethnicity
        familyHistory
        smoking
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
export const getCognitive = `query GetCognitive($id: ID!) {
  getCognitive(id: $id) {
    id
    alphanumericMemory {
      easy {
        solved
        total
      }
      medium {
        solved
        total
      }
      hard {
        solved
        total
      }
    }
    wordRecall {
      easy {
        solved
        total
      }
      medium {
        solved
        total
      }
      hard {
        solved
        total
      }
    }
    figureShape {
      easy {
        solved
        total
      }
      medium {
        solved
        total
      }
      hard {
        solved
        total
      }
    }
    user {
      id
      username
      email
      emailVerified
      age
      gender
      ethnicity
      familyHistory
      smoking
      highBloodPressure
      diabetes
      height
      weight
      assessmentScore
      todos {
        createdAt
        isCompleted
      }
      physicals {
        nextToken
      }
      cognitives {
        nextToken
      }
    }
  }
}
`;
export const listCognitives = `query ListCognitives(
  $filter: ModelCognitiveFilterInput
  $limit: Int
  $nextToken: String
) {
  listCognitives(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      alphanumericMemory
      wordRecall
      figureShape
      user {
        id
        username
        email
        emailVerified
        age
        gender
        ethnicity
        familyHistory
        smoking
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
