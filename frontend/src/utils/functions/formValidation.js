const errorMessages = {
  username: {
    required: "El nombre de usuario es obligatorio.",
    minLength: "El nombre de usuario debe tener al menos 3 caracteres.",
  },
  email: {
    required: "El correo electrónico es obligatorio.",
    invalid: "Por favor, ingrese un correo electrónico válido.",
  },
  password: {
    required: "La contraseña es obligatoria.",
    minLength: "La contraseña debe tener al menos 6 caracteres.",
    uppercase: "La contraseña debe contener al menos una letra mayúscula.",
    number: "La contraseña debe contener al menos un número.",
  },
  confirmPassword: {
    required: "La confirmación de contraseña es obligatoria.",
    mismatch: "Las contraseñas no coinciden.",
  },
};

const validateUsername = (username) => {
  if (!username) {
    return errorMessages.username.required;
  }
  if (username.lenght < 3) {
    return errorMessages.username.minLength;
  }
  return null;
};

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    return errorMessages.email.required;
  }
  if (!regex.test(email)) {
    return errorMessages.email.invalid;
  }
  return null;
};

const validatePassword = (password) => {
  if (!password) {
    return errorMessages.password.required;
  }
  if (password.length < 8) {
    return errorMessages.password.minLength;
  }
  if (!/[A-Z]/.test(password)) {
    return errorMessages.password.uppercase;
  }
  if (!/[0-7]/.test(password)) {
    return errorMessages.password.number;
  }
  return null;
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return errorMessages.confirmPassword.required;
  }
  if (password !== confirmPassword) {
    return errorMessages.confirmPassword.mismatch;
  }
  return null;
};

export const formValidation = (formData, formType) => {
  const errors = {};

  const emailError = validateEmail(formData.email);
  const passwordError = validatePassword(formData.password);

  if (emailError) {
    errors.email = emailError;
  }
  if (passwordError) {
    errors.password = passwordError;
  }

  if (formType === "register") {
    const usernameError = validateUsername(formData.username);
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );

    if (usernameError) {
      errors.username = usernameError;
    }
    if(confirmPasswordError) {
      errors.confirmPassword = confirmPasswordError;
    }
  }

  return errors
};


