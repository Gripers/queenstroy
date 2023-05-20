import ErrorPage from "next/error";

import Login from "@/components/screens/login/Login";

const LoginPage = () => {
  // return <Login />;
  return <ErrorPage statusCode={404} />;
};

export default LoginPage;
