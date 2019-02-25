// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    email
    emailVerified
    age
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    email
    emailVerified
    age
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    email
    emailVerified
    age
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
export const createPhysical = `mutation CreatePhysical($input: CreatePhysicalInput!) {
  createPhysical(input: $input) {
    id
    steps
    distance
    user {
      id
      username
      email
      emailVerified
      age
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
export const updatePhysical = `mutation UpdatePhysical($input: UpdatePhysicalInput!) {
  updatePhysical(input: $input) {
    id
    steps
    distance
    user {
      id
      username
      email
      emailVerified
      age
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
export const deletePhysical = `mutation DeletePhysical($input: DeletePhysicalInput!) {
  deletePhysical(input: $input) {
    id
    steps
    distance
    user {
      id
      username
      email
      emailVerified
      age
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
