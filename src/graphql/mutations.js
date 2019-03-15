// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createPhysical = `mutation CreatePhysical($input: CreatePhysicalInput!) {
  createPhysical(input: $input) {
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
export const updatePhysical = `mutation UpdatePhysical($input: UpdatePhysicalInput!) {
  updatePhysical(input: $input) {
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
export const deletePhysical = `mutation DeletePhysical($input: DeletePhysicalInput!) {
  deletePhysical(input: $input) {
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
export const createCognitive = `mutation CreateCognitive($input: CreateCognitiveInput!) {
  createCognitive(input: $input) {
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
export const updateCognitive = `mutation UpdateCognitive($input: UpdateCognitiveInput!) {
  updateCognitive(input: $input) {
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
export const deleteCognitive = `mutation DeleteCognitive($input: DeleteCognitiveInput!) {
  deleteCognitive(input: $input) {
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
