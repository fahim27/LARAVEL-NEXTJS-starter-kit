import { cookies } from "next/headers";
export async function getCookieFromServer(cookieName = undefined) {
  const cookieStore = await cookies();
  return cookieName === undefined
    ? cookieStore?.get("auth_token")?.value
    : cookieStore?.get();
}
export async function deleteCookieFromServer(cookieName) {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}
