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
  const GENDER_SCORE = [3, 4.5];
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
  const FAMHISTORY_SCORE = [0, 1];
  const SMOKING_SCORE = [0, 1.5];
  const HBP_SCORE = [0, 3];
  const DIABETES_SCORE = [0, 3];
  // BMI calculation
  const BMI = BMICalc(obj.height, obj.weight);

  return ETHNICITY_SCORE[ethnicity] + GENDER_SCORE[gender] + AGE_SCORE[age] + BMI_SCORE[BMI] + FAMHISTORY_SCORE[familyHistory] + SMOKING_SCORE[smoking] + HBP_SCORE[highBloodPressure] + DIABETES_SCORE[diabetes];
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
