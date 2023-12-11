import AuthLogin from "@/components/ui/AuthLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Login",
};

const LoginPage = () => {
  return <AuthLogin />;
};

export default LoginPage;
