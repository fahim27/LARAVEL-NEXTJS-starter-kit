import {
  formatApiErrorMessage,
  formatApiExceptionMessage,
} from "../utilities/helpers";
import apiClient from "./apiClient";

export async function userFindAccount(values) {
  try {
    const res = await apiClient.post(
      "/api/user-password-reset/find-account",
      values,
    );
    console.log("this is respo", res);

    if (res.data.success) {
      return {
        success: true,
        message: res?.data?.message,
        data: res.data.data,
      };
    } else {
      return formatApiErrorMessage(res);
    }
  } catch (error) {
    return formatApiExceptionMessage(error);
  }
}
export async function userVerifyOtp(values) {
  try {
    const res = await apiClient.post(
      "/api/user-password-reset/verify-otp",
      values,
    );
    console.log("this is respo", res);

    if (res.data.success) {
      return {
        success: true,
        message: res?.data?.message,
        data: res.data.data,
      };
    } else {
      return formatApiErrorMessage(res);
    }
  } catch (error) {
    return formatApiExceptionMessage(error);
  }
}

export async function userResetPassword(values) {
  try {
    const res = await apiClient.post(
      "/api/user-password-reset/reset-password",
      values,
    );
    console.log("this is respo", res);

    if (res.data.success) {
      return {
        success: true,
        message: res?.data?.message,
        data: res.data.data,
      };
    } else {
      return formatApiErrorMessage(res);
    }
  } catch (error) {
    return formatApiExceptionMessage(error);
  }
}
export async function resendUserOtp(values) {
  try {
    const res = await apiClient.post(
      "/api/user-password-reset/resent-otp",
      values,
    );
    console.log("this is respo", res);

    if (res.data.success) {
      return {
        success: true,
        message: res?.data?.message,
        data: res.data.data,
      };
    } else {
      return formatApiErrorMessage(res);
    }
  } catch (error) {
    return formatApiExceptionMessage(error);
  }
}
