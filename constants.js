export function getColorSheet(isDarkMode) {
  if (isDarkMode) {
    return {
      background: "#121212",
      text: "#FFF"
    };
  } else {
    return {
      background: "#FFF",
      text: "#333"
    };
  }
}
