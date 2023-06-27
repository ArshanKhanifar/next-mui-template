import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user.name}!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
