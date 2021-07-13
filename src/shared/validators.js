import { PASSWORD_STRENGTH } from "./constants/common";
import { REGEXP } from "./constants/regexp";

export const passwordLengthValidator = password => password.match(REGEXP.PASSWORD_LENGTH);

export const emailLengthValidator = email => email.match(REGEXP.EMAIL);


const lowerCaseCheck = password => REGEXP.LOWER_CASE.test(password);

const upperCaseCheck = password => REGEXP.UPPER_CASE.test(password);

const numberCaseCheck = password => REGEXP.NUMBERS.test(password);

const eightCharacterCaseCheck = password => REGEXP.EIGHT_CHARACTERS.test(password);

export const passwordStrengthController = password => {
  let passwordStrength;

  const passwordStrengthNum = 
  lowerCaseCheck(password) + 
  upperCaseCheck(password) + 
  numberCaseCheck(password) + 
  eightCharacterCaseCheck(password);

  Object.keys( PASSWORD_STRENGTH ).forEach( el => {
    if (PASSWORD_STRENGTH[el] === passwordStrengthNum) {
      passwordStrength = el
    }
  })
};
