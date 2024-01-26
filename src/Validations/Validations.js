

export function validateCarNumber(carNumber) {
    const carNoValidator = /^([a-zA-Z]{1,3}|([0-9]{1,3}))-[0-9]{4}$/;
    return carNoValidator.test(carNumber);
}

export function validatePhoneNumber(phoneNumber) {
    const phnNoValidator = /^(?:\d{9}|\d{2}-\d{7}|\d{3}-\d{6}|\d{2}-\d{3}-\d{4})$/;
    return phnNoValidator.test(phoneNumber);
}

export function passwordValidation(pass) {
    const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordValidator.test(pass);
}

