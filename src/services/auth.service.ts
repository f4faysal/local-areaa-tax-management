import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFormLocalStorage, setToLocalStorage } from "@/utils/local-sororage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authtoken = getFormLocalStorage(authKey);
  if (authtoken) {
    const decodedData = decodedToken(authtoken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authtoken = getFormLocalStorage(authKey);
  if (authtoken) {
    return true;
  } else {
    return false;
  }
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
