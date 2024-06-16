import { Inputs } from "@types";

export function checkPhone(inputs: Inputs): boolean {
  const { phone } = inputs;
  if (phone !== null) {
    if (isNaN(parseInt(phone))) {
      return false;
    } else if (
      phone.toString().length < 10 ||
      (phone.toString().length === 11 && phone.toString()[0] !== "0") ||
      phone.toString().length > 11
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}

export function checkFormComplete(completedInputs: Inputs): boolean {
  const inputsArray = Object.values(completedInputs);
  console.log(inputsArray);
  if (inputsArray.length === 5 && !inputsArray.includes("")) {
    return true;
  } else {
    return false;
  }
}

export function checkEmail(email: string): boolean {
  if (!email.includes(".com")) {
    return false;
  } else {
    return true;
  }
}
