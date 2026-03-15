import {
  formatApiErrorMessage,
  formatApiExceptionMessage,
} from "@/lib/utilities/helpers";
import apiClient from "./apiClient";

export async function attemptUserLogin(values) {
  try {
    const res = await apiClient.post("/api/user/login", values);
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
export async function attemptUserRegistration(values) {
  try {
    const res = await apiClient.post("/api/user/register", values);
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
export async function attemptUserGoogleLogin(token) {
  try {
    const res = await apiClient.post("/api/user/google-login", { token });
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

export async function getUserDetails(token) {
  try {
    const res = await apiClient.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
export async function userUpdateUserProfile(token, values) {
  try {
    const res = await apiClient.post("/api/update-profile", values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("this is res", res);

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
export async function userChangePassword(token, values) {
  try {
    const res = await apiClient.post("/api/change-password", values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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

export async function userLogout(token) {
  console.log("this is token", token);

  try {
    const res = await apiClient.post(
      "/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

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
