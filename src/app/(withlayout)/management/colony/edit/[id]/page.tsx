"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import ActionBar from "@/components/ui/actionBar";
import { useColonyQuery, useUpdateColonyMutation } from "@/redux/api/colonyApi";
import { Button, Col, Row, message } from "antd";

const EditColonyPage = ({ params }: any) => {
  const [UpdateColony, { isLoading }] = useUpdateColonyMutation();

  const { data } = useColonyQuery(params.id);

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      const res = await UpdateColony({ id: params.id, body: data }).unwrap();
      console.log(res);
      // if (res?.success) {
      //   setImageUrl(res?.data?.imageLink);
      //   message.success("Updated Categorie Successfully");
      // }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    colony_name: data?.colony_name,
    ward_no: data?.ward_no,
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
      <ActionBar title="Edit Colony">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
            Update
          </Button>
        </Form>
      </ActionBar>
    </div>
  );
};

export default EditColonyPage;
