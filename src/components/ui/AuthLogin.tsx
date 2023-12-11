"use client";

import { Button, Col, Row, Typography, message } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

import { storeUserInfo } from "@/services/auth.service";
import Form from "../Forms/form";
import FormInput from "../Forms/formInput";

type FormValues = {
  id: string;
  password: string;
};

const AuthLogin = () => {
  const router = useRouter();
  const { Title } = Typography;

  const { xs, md } = useBreakpoint();

  const fontSize = (md && 1) || (xs && 2);

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(data);
    try {
      const res: any = {};
      console.log(res);

      if (res?.data?.accessToken) {
        router.push("/");
        message.success("User Login Success");
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } else {
        message.error("User Login Fail try again later");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      <Col
        xs={{ span: 16, offset: 0 }}
        md={{ span: 10, offset: 0 }}
        lg={{ span: 5, offset: 0 }}
      >
        <div
          style={{
            padding: "80px 20px 40px 20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100px",
              top: "-50px",
              borderRadius: "20px",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",

              backgroundColor: "black",
              color: "white",
              padding: "0 10px",
            }}
          >
            <Title
              level={fontSize || 1}
              style={{ color: "white", padding: 0, margin: 0 }}
            >
              Sign In
            </Title>
          </div>

          <Form submitHandler={onSubmit}>
            <>
              <div>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  placeholder="Enter your email"
                  label="User Email"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="password"
                  label="User Password"
                />
              </div>
              <Button
                style={{
                  width: "100%",
                  margin: "15px 0",
                }}
                type="primary"
                htmlType="submit"
                // loading={loading}
                size="large"
              >
                Login
              </Button>
            </>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default AuthLogin;
