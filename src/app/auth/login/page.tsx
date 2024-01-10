import AuthLogin from "@/components/ui/AuthLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Login",
};

const x = ` hello world ${1 + 1} `;

const LoginPage = () => {
  return <AuthLogin />;
};

export default LoginPage;
