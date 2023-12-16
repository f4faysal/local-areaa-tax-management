"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import { useAddColonyMutation } from "@/redux/api/colonyApi";

import { Button, Col, Row, message } from "antd";

const CreateColonyPage = () => {
  const [AddColony, { isLoading }] = useAddColonyMutation();

  const onSubmit = async (data) => {
    message.loading("Adding Colony...");
    try {
      const res = await AddColony(data).unwrap();

      if (res?.id) {
        message.success("Colony added successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      {/* <SMBreadcrumb
        items={[
          {
            label: "Manage Categories",
            path: `/${role}/categories`,
          },
          {
            label: "Create Categories",
          },
        ]}
      /> */}

      <h1>Create Colony</h1>

      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="colony_name"
              label="Colony Name"
              type="text"
              placeholder="colony name"
              size="large"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="ward_no"
              label="Ward No"
              type="text"
              placeholder="ward number"
              size="large"
            />
          </Col>
        </Row>

        <Button loading={isLoading} type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateColonyPage;
