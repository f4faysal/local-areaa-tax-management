"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import ActionBar from "@/components/ui/actionBar";

// import {
//   useCategorieQuery,
//   useUpdateCategorieMutation,
// } from "@/redux/api/categorieApi";

import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

const EditCategoriePage = ({ params }: any) => {
  // const [updateCategorie] = useUpdateCategorieMutation();

  const id = params.id;

  // const { data, isLoading } = useCategorieQuery(id);

  const { data, isLoading } = { data: { data: {} }, isLoading: false };
  const categories = data?.data;

  const { role } = getUserInfo() as any;
  // const [imageUrl, setImageUrl] = useState(categories?.imageLink);

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      // const catagoriData = { imageLink: imageUrl, ...data };
      // const res = await updateCategorie({ id, body: catagoriData }).unwrap();
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
    title: "",
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

          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </ActionBar>
    </div>
  );
};

export default EditCategoriePage;
