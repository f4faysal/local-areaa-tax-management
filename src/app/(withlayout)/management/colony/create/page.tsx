"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import ImageUpload from "@/components/ui/image-upload";
import { useCreateCategorieMutation } from "@/redux/api/categorieApi";
import { getUserInfo } from "@/services/auth.service";
import { Avatar, Button, Col, Row, message } from "antd";
import { useState } from "react";

const CreateCategoriePage = () => {
  const { role } = getUserInfo() as any;
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697354272/gcu3mnulmato2odnqqvp.png"
  );

  //   const [addDepartment] = useAddDepartmentMutation();
  const [createCategorie] = useCreateCategorieMutation();

  // const [creatAdmin] = useCreatAdminMutation();

  const onSubmit = async (data: any) => {
    message.loading("Adding Categorie...");
    try {
      const catagoriData = { imageLink: imageUrl, ...data };
      const res = await createCategorie(catagoriData).unwrap();
      console.log(res);
      if (res?.success) {
        setImageUrl(
          "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697354272/gcu3mnulmato2odnqqvp.png"
        );
        message.success("Categorie added successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <SMBreadcrumb
        items={[
          {
            label: "Manage Categories",
            path: `/${role}/categories`,
          },
          {
            label: "Create Categories",
          },
        ]}
      />

      <h1>Create Admin</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="title"
              label="Category Title"
              type="text"
              placeholder="Category Title"
              size="large"
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col
            span={8}
            style={{
              margin: "10px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: "10px",
            }}
          >
            <Avatar shape="square" size={200} src={imageUrl} />
            <ImageUpload setImageUrl={setImageUrl} imageUrl={imageUrl} />
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default CreateCategoriePage;
