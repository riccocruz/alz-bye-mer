// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreatePhysical = `subscription OnCreatePhysical {
  onCreatePhysical {
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
export const onUpdatePhysical = `subscription OnUpdatePhysical {
  onUpdatePhysical {
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
export const onDeletePhysical = `subscription OnDeletePhysical {
  onDeletePhysical {
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
