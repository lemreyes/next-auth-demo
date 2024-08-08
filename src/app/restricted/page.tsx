import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Restricted() {
  const session = await getServerSession(options);

  if (session === null) {
    return (
      <div className="p-8">
        <p>You are not logged in.</p>
        <p>This page is restricted.</p>
      </div>
    );
  } else {
    return (
      <div className="p-8">
        <p>You are logged in as {session.user?.email}</p>
      </div>
    );
  }
}
