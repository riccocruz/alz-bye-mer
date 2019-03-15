// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
    profileScore
    riskScore
    assessmentScore
    todos {
      type
      createdAt
      isCompleted
    }
    physicals {
      items {
        id
        createAt
        date
        score
      }
      nextToken
    }
    cognitives {
      items {
        id
        createdAt
        type
        difficulty
        solved
        total
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
    gender
    ethnicity
    familyHistory
    smoking
    highBloodPressure
    diabetes
    height
    weight
    profileScore
    riskScore
    assessmentScore
    todos {
      type
      createdAt
      isCompleted
    }
    physicals {
      items {
        id
        createAt
        date
        score
      }
      nextToken
    }
    cognitives {
      items {
        id
        createdAt
        type
        difficulty
        solved
        total
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
    gender
    ethnicity
    familyHistory
    smoking
    highBloodPressure
    diabetes
    height
    weight
    profileScore
    riskScore
    assessmentScore
    todos {
      type
      createdAt
      isCompleted
    }
    physicals {
      items {
        id
        createAt
        date
        score
      }
      nextToken
    }
    cognitives {
      items {
        id
        createdAt
        type
        difficulty
        solved
        total
      }
      nextToken
    }
  }
}
`;
export const onCreatePhysical = `subscription OnCreatePhysical {
  onCreatePhysical {
    id
    createAt
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
      profileScore
      riskScore
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
export const onUpdatePhysical = `subscription OnUpdatePhysical {
  onUpdatePhysical {
    id
    createAt
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
      profileScore
      riskScore
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
export const onDeletePhysical = `subscription OnDeletePhysical {
  onDeletePhysical {
    id
    createAt
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
      profileScore
      riskScore
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
export const onCreateCognitive = `subscription OnCreateCognitive {
  onCreateCognitive {
    id
    createdAt
    type
    difficulty
    solved
    total
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
      profileScore
      riskScore
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
export const onUpdateCognitive = `subscription OnUpdateCognitive {
  onUpdateCognitive {
    id
    createdAt
    type
    difficulty
    solved
    total
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
      profileScore
      riskScore
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
export const onDeleteCognitive = `subscription OnDeleteCognitive {
  onDeleteCognitive {
    id
    createdAt
    type
    difficulty
    solved
    total
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
      profileScore
      riskScore
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
