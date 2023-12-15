"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import ActionBar from "@/components/ui/actionBar";
import ImageUpload from "@/components/ui/image-upload";
import {
  useCategorieQuery,
  useUpdateCategorieMutation,
} from "@/redux/api/categorieApi";
import { getUserInfo } from "@/services/auth.service";
import { Avatar, Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";

const EditCategoriePage = ({ params }: any) => {
  const [updateCategorie] = useUpdateCategorieMutation();

  const id = params.id;

  const { data, isLoading } = useCategorieQuery(id);
  const categories = data?.data;

  const { role } = getUserInfo() as any;
  const [imageUrl, setImageUrl] = useState(categories?.imageLink);

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      const catagoriData = { imageLink: imageUrl, ...data };
      const res = await updateCategorie({ id, body: catagoriData }).unwrap();

      if (res?.success) {
        setImageUrl(res?.data?.imageLink);
        message.success("Updated Categorie Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: categories?.title,
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
      <ActionBar title="Edit Catagory">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={24} style={{ margin: "10px 0" }}>
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
            Update
          </Button>
        </Form>
      </ActionBar>
    </div>
  );
};

export default EditCategoriePage;
