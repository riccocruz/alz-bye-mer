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
export const onCreatePhysical = `subscription OnCreatePhysical {
  onCreatePhysical {
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
export const onUpdatePhysical = `subscription OnUpdatePhysical {
  onUpdatePhysical {
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
export const onDeletePhysical = `subscription OnDeletePhysical {
  onDeletePhysical {
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
export const onCreateCognitive = `subscription OnCreateCognitive {
  onCreateCognitive {
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
export const onUpdateCognitive = `subscription OnUpdateCognitive {
  onUpdateCognitive {
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
export const onDeleteCognitive = `subscription OnDeleteCognitive {
  onDeleteCognitive {
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
