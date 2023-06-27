import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function HomePage() {
  const { data: session, status } = useSession();

  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
  };

  if (status == "loading") {
    return <div>loading</div>;
  }

  if (session == null) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {session.user?.name}!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
