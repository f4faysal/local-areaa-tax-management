"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import UPBreadCrumb from "@/components/ui/UPBreadCrumb";
import { useHomeRegisterMutation } from "@/redux/api/homeRegisterApi";
import { zodResolver } from "@hookform/resolvers/zod";

import FormSelectField from "@/components/forms/formSelectField";
import UploadImage from "@/components/ui/uploadImage";
import { homeTypeOptions } from "@/constants/global";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Upload, message } from "antd";
import Title from "antd/es/typography/Title";
import { z } from "zod";

const colonySchema = z.object({
  home_id: z.string().min(1, { message: "Home ID is required" }),
  owner_name: z.string().min(1, { message: "Owner Name is required" }),
  father_or_husband: z.string().min(1, { message: "Father Name is required" }),
  home_name: z.string().min(1, { message: "Home Name is required" }),
  home_type: z.string().min(1, { message: "Home Type is required" }),
  holding_no: z.string().min(1, { message: "Holding No is required" }),
  nid_no: z.string().min(1, { message: "NID No is required" }),
  phone_no: z.string().min(1, { message: "Phone No is required" }),
  occupation: z.string().min(1, { message: "Occupation is required" }),
  profile_img: z.string().optional(),
  village_name: z.string().min(1, { message: "Village Name is required" }),
  house_price: z.string().min(1, { message: "House Price is required" }),
  tax_levied: z.string().min(1, { message: "Tax Levied is required" }),
  taxable_value: z.string().min(1, { message: "Taxable Value is required" }),
  colony: z.string().min(1, { message: "Colony is required" }),
});

const CreateHomePage = () => {
  const [HomeRegister, { isLoading }] = useHomeRegisterMutation();




  const onSubmit = async (data: z.infer<typeof colonySchema>) => {
    data.profile_img =
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";

    message.loading("Registering new home...");
    console.log(data);
    try {
      const res = await HomeRegister(data);
      console.log(res);
      if (res) {
        message.success("Home registered successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const fileList: any[] = [];

  return (
    <div>
      <UPBreadCrumb
        items={[
          {
            label: "Home Register",
            link: `/home-register`,
          },
          {
            label: "Register New Home",
          },
        ]}
      />

      <Title level={2}>
        <strong>Register New Home</strong>
      </Title>

      <Form submitHandler={onSubmit} resolver={zodResolver(colonySchema)}>
        <div
          style={{
            padding: "50px 5px",
            // border: "1px solid #ddd",
            borderRadius: "5px",
            background: "#fff",
          }}
        >
          <Title level={4}>
            <strong>Home Information</strong>
          </Title>
          <Row gutter={{ xs: 24, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                defaultFileList={[...fileList]}
              >
                <Button icon={<UploadOutlined />}>Image (ছবি) upload</Button>
              </Upload>

              <UploadImage name="profile_img" />

            </Col>

            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="home_id"
                label="Home ID (বাড়ির আইডি)"
                type="text"
                placeholder="Home ID (বাড়ির আইডি)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="holding_no"
                label="Holding No (হোল্ডিং নং)"
                type="text"
                placeholder="Holding No (হোল্ডিং নং)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="home_name"
                label="Home Name (বাড়ির নাম)"
                type="text"
                placeholder="Home Name (বাড়ির নাম)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="owner_name"
                label="Owner Name (মালিকের নাম)"
                type="text"
                placeholder="Owner Name (মালিকের নাম)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="nid_no"
                label="NID No (জাতীয় পরিচয় পত্র নং)"
                type="text"
                placeholder="NID No (জাতীয় পরিচয় পত্র নং)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="occupation"
                label="Occupation (মালিকের পেশা)"
                type="text"
                placeholder="Occupation (মালিকের পেশা)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="phone_no"
                label="Phone No (ফোন নং)"
                type="text"
                placeholder="Phone No (ফোন নং)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="father_or_husband"
                label="Father/Husband  (মালিকের বাবা/স্বামীর নাম)"
                type="text"
                placeholder="Father/Husband  (মালিকের বাবা/স্বামীর নাম)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormSelectField
                options={homeTypeOptions}
                name="home_type"
                label="Home Type (বাড়ির ধরণ)"

                placeholder="Home Type (বাড়ির ধরণ)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="village_name"
                label="Village Name (গ্রামের নাম)"
                type="text"
                placeholder="Village Name (গ্রামের নাম)"
                size="large"
              />
            </Col>

            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="colony"
                label="Colony (কলোনি)"
                type="text"
                placeholder="Colony (কলোনি)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="house_price"
                label="House Price (বাড়ির মূল্য)"
                type="text"
                placeholder="House Price (বাড়ির মূল্য)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="tax_levied"
                label="Tax Levied (কর আদায়)"
                type="text"
                placeholder="Tax Levied (কর আদায়)"
                size="large"
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} style={{ marginBottom: "16px" }}>
              <FormInput
                name="taxable_value"
                label="Taxable Value (কর আদায়যোগ্য মূল্য)"
                type="text"
                placeholder="Taxable Value (কর আদায়যোগ্য মূল্য)"
                size="large"
              />
            </Col>
          </Row>



          <Button loading={isLoading} type="primary" htmlType="submit">
            Register Home (বাড়ি নিবন্ধন করুন)
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateHomePage;
