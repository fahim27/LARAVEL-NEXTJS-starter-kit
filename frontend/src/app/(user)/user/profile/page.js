import ErrorManager from "@/components/custom_error/ErrorManager";
import UpdateForm from "./updateForm";
import { getCookieFromServer } from "@/lib/utilities/serverCookie";
import { getUserDetails } from "@/lib/api/user";

export default async function ProfilePage() {
  const authToken = await getCookieFromServer();
  const {
    success,
    message,
    data: { user },
  } = await getUserDetails(authToken);

  if (!success) return <ErrorManager message={message} showPage={false} />;
  return (
    <main className="col-md-8 ms-sm-auto col-lg-10 px-md-4 py-4 ms-5">
      <UpdateForm user={user} authToken={authToken} />
    </main>
  );
}
