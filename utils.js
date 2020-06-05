export const extractInitialsFromName = (firstName, lastName) => {
  if (firstName && lastName) {
    return firstName.charAt(0).toUpperCase() + " " + lastName.charAt(0).toUpperCase();
  }
  return null;
};
