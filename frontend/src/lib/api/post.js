import {
  formatApiErrorMessage,
  formatApiExceptionMessage,
} from "@/lib/utilities/helpers";
import apiClient from "./apiClient";

export async function fetchPosts() {
  try {
    const res = await apiClient.get("/api/posts");
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
export async function fetchPost(id) {
  try {
    const res = await apiClient.get("/api/posts/single-post/" + id);
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
