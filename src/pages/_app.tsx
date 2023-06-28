import "@fontsource/public-sans";
import { SessionProvider, useSession } from "next-auth/react";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import LoginPage from "@/pages/login";

const HomeWrapper = ({ children }) => {
  const { data: session, status } = useSession();
  if (session == null) {
    return (
      <Layout>
        <LoginPage />
      </Layout>
    );
  }
  return <Layout>{children}</Layout>;
};

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <HomeWrapper>
        <Component {...pageProps} />
      </HomeWrapper>
    </SessionProvider>
  );
}
