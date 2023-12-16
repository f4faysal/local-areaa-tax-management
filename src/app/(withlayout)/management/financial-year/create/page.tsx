"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import UPBreadCrumb from "@/components/ui/UPBreadCrumb";
import { useAddColonyMutation } from "@/redux/api/colonyApi";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Col, Row, message } from "antd";
import Title from "antd/es/typography/Title";
import { z } from "zod";

const colonySchema = z.object({
  start_year: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  end_year: z
    .string()
    .min(1, { message: "Ward No must be at least 1 characters" }),
});

const CreateFinancialYearPage = () => {
  const [AddColony, { isLoading }] = useAddColonyMutation();

  const onSubmit = async (data: z.infer<typeof colonySchema>) => {
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
      <UPBreadCrumb
        items={[
          {
            label: `Management`,
          },
          {
            label: "Financial Year",
            link: `/management/financial-year`,
          },
          {
            label: "Create Financial Year",
          },
        ]}
      />

      <Title level={2}>Create Financial Year</Title>

      <Form submitHandler={onSubmit} resolver={zodResolver(colonySchema)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="start_year"
              label="Start Year"
              type="text"
              placeholder="start year"
              size="large"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="end_year"
              label="End Year"
              type="text"
              placeholder="end year"
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

export default CreateFinancialYearPage;
