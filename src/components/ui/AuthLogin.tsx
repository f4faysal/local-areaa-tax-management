"use client";

import { Button, Col, Row, Typography, message } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useRouter } from "next/navigation";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

import FormInput from "@/components/forms/formInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "../forms/form";

type FormValues = {
  contact_no: string;
  password: string;
};

const loginSchema = z.object({
  contact_no: z.string().min(10, { message: "Invalid Phone Number" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const AuthLogin = () => {
  const router = useRouter();
  const { Title } = Typography;

  const { xs, md } = useBreakpoint();
  const fontSize = (md && 1) || (xs && 2);

  const [UserLogin, { isLoading, isError }] = useUserLoginMutation();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res: any = await UserLogin(data);
      if (res?.data?.accessToken) {
        router.push("/");
        message.success("User Login Success");
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } else {
        message.error(res.error);
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

          <Form submitHandler={onSubmit} resolver={zodResolver(loginSchema)}>
            <>
              <div>
                <FormInput
                  isError={isError}
                  name="contact_no"
                  type="tel"
                  size="large"
                  placeholder="Your Phone Number"
                  label="Phone Number"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  isError={isError}
                  name="password"
                  type="password"
                  size="large"
                  placeholder="password"
                  label="User Password"
                />
              </div>
              {/* <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: "#00b96b",
                      algorithm: true, // Enable algorithm
                    },
                    Input: {
                      colorPrimary: "#eb2f96",
                      algorithm: true, // Enable algorithm
                    },
                  },
                }}
              >
                
              </ConfigProvider> */}
              {/* <Divider /> */}
              <Button
                htmlType="submit"
                loading={isLoading}
                style={{
                  width: "100%",
                  margin: "15px 0 0 0",
                }}
                size="large"
                type="primary"
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
