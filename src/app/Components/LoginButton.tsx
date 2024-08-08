"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className="bg-gray-400 px-4 py-2 rounded-lg"
        >
          Sign out
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Not signed in.</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-gray-400 px-4 py-2 rounded-lg"
        >
          Sign in to Google
        </button>
      </>
    );
  }
}
