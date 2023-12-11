export const setToLocalStorage = (key: string, token: any) => {
  if (!key || typeof window === "undefined") return "";

  return localStorage.setItem(key, token);
};
export const getFormLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") return "";

  return localStorage.getItem(key);
};
