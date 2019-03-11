export function profileRiskCalc(obj) {
  const { ethnicity, age, gender, height, weight, familyHistory, smoking, highBloodPressure, diabetes} = obj;
  // weighed scores based on research paper statistics.
  const ETHNICITY_SCORE = {
    'Asian': 2,
    'African': 6,
    'Caucasian': 4.5,
    'Hispanics': 2.5,
    'Others': 1
  };
  const GENDER_SCORE = {
    'Male': 3,
    'Female': 4.5
  };
  const AGE_SCORE = {
    'Less than 65': 0.5,
    '65-74': 1.5,
    '75-84': 8.5,
    '85 or older': 16
  };
  const BMI_SCORE = {
    'Underweight': 1.5,
    'Normal': 0,
    'Overweight': 3,
    'Obese': 4.5
  };
  const FAMHISTORY_SCORE = familyHistory? 1 : 0;
  const SMOKING_SCORE = smoking? 1.5: 0;
  const HBP_SCORE = highBloodPressure? 3 : 0;
  const DIABETES_SCORE = diabetes? 3 : 0;
  // BMI calculation
  const BMI = BMICalc(height, weight);

  return ETHNICITY_SCORE[ethnicity] + GENDER_SCORE[gender] + AGE_SCORE[age] + BMI_SCORE[BMI] + FAMHISTORY_SCORE + SMOKING_SCORE + HBP_SCORE + DIABETES_SCORE;
};

function BMICalc(height, weight) {
  let m = height/39.37;
  let kg = weight/2.205;
  let bmi = kg/(m*m);
  if(bmi > 30)
    return 'Obese';
  if(bmi > 25)
    return 'Overweight';
  if(bmi > 18.5)
    return 'Normal';
  else
    return 'Underweight';
};

export function riskScoreCalc(profileScore, assessScore) {
  return profileScore * 2 + assessScore * 8;
}
