import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Button from "@mui/joy/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/joy";
import { Stack } from "@mui/material";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    router.push("/");
    return null;
  }

  return (
    <Container>
      <Stack spacing={2} direction={"column"} alignItems={"center"}>
        <Typography variant={"h1"}>Login</Typography>
        <Button variant={"solid"} size={"lg"} onClick={() => signIn("google")}>
          Sign in with Google
        </Button>
      </Stack>
    </Container>
  );
}
