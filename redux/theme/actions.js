import { TOGGLE_THEME } from "./types";

export function toggleTheme(bool) {
  return {
    type: TOGGLE_THEME,
    payload: bool
  };
}
