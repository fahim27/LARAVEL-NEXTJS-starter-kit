import { redirect } from "next/navigation"; // for Next.js 13+ app router

export function formatApiExceptionMessage(error) {
  const statusCode = error?.response?.status;
  console.log(statusCode);

  if (statusCode) {
    if (statusCode === 404) {
      redirect("/404");
    }
    if (statusCode >= 500 && statusCode <= 599) {
      var message = "Internal Server Error";
    }
  } else {
    var message = "Something Went to wronggggg";
  }
  console.log("this is error", error);

  return {
    error: true,
    data: [],
    message: [message],
  };
}
export function formatApiErrorMessage(res) {
  return {
    success: false,
    data: res?.data?.data ? res.data.data : [],
    message: res?.data?.message
      ? res.data.message
      : ["Something Went to wronggggg"],
  };
}

export function truncateString(str, limit) {
  return str.length > limit ? str.slice(0, limit) + "..." : str;
}
