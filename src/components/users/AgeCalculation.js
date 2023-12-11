// AgeCalculation.js

function AgeCalculation(birthdate) {
  // Check if birthdate is provided
  if (!birthdate) {
    return "No BoD";
  }

  // Extract day, month, and year components from the birthdate string
  const [day, month, year] = birthdate.split("/").map(Number);

  // Create a Date object using the components
  const birthDate = new Date(year, month - 1, day);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Check if the birthday has occurred this year
  const hasBirthdayOccurred =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate());

  // If the birthday hasn't occurred yet this year, subtract 1 from the age
  if (!hasBirthdayOccurred) {
    age--;
  }

  return age;
}

export default AgeCalculation;
