"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");

  const hdlEmailInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

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
      <div>
        <p>Not signed in.</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-gray-400 px-4 py-2 rounded-lg"
        >
          Sign in to Google
        </button>
        <p>or</p>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" onChange={hdlEmailInputOnChange} className="border border-black mr-2"></input>
        <button
          className="bg-gray-400 px-4 py-2 rounded-lg"
          onClick={() => signIn("email", { email, callbackUrl: "/" })}
        >
          Login with Email
        </button>
      </div>
    );
  }
}
