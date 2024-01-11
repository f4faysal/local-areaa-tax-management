"use client";
import UPTable from "@/components/ui/Table";
import UPBreadCrumb from "@/components/ui/UPBreadCrumb";
import ActionBar from "@/components/ui/actionBar";
import { useDeleteColonyMutation } from "@/redux/api/colonyApi";
import { useHomesQuery } from "@/redux/api/homeRegisterApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const HomeRegister = () => {
  const { role } = getUserInfo() as any;

  const [DeleteColony] = useDeleteColonyMutation();

  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["page"] = page;
  query["limit"] = size;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["search"] = searchTerm;
  query["role"] = "admin";

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
    console.log(debouncedTerm);
  }

  const { data, isLoading } = useHomesQuery({});

  const homesList = data?.home;

  console.log(homesList, "homesList");

  // const meta = data?.meta;

  const deleteHandler = async (id: { id: string }) => {
    message.loading("Deleting Colony...");
    try {
      const res: any = await DeleteColony(id);

      if (res?.data) {
        message.success("Colony deleted successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  //   {
  //     "_id": "65761184a364d22e1ca7ffb2",
  //     "home_id": "1234567891",
  //     "owner_name": "John Doe",
  //     "father_or_husband": "Father's Name",
  //     "home_name": "Doe Residence",
  //     "home_type": "chapra",
  //     "holding_no": "ABC123",
  //     "nid_no": "12345678901234561",
  //     "phone_no": "123-456-78901",
  //     "occupation": "Software Engineer",
  //     "profile_img": "path/to/profile.jpg",
  //     "village_name": "Villageville",
  //     "house_price": "500000",
  //     "tax_levied": "1000",
  //     "taxable_value": "490000",
  //     "colony": null,
  //     "createdAt": "2023-12-10T19:29:08.630Z",
  //     "updatedAt": "2023-12-10T19:29:08.630Z",
  //     "__v": 0,
  //     "id": "65761184a364d22e1ca7ffb2"
  // },

  const columns = [
    {
      title: "Profile Image",
      dataIndex: "profile_img",
      render: function (data: any) {
        return <img src={""} alt="profile" width="50px" height="50px" />;
      },
    },
    {
      title: "Holding No",
      dataIndex: "holding_no",
    },
    {
      title: "Home No",
      dataIndex: "home_id",
    },
    {
      title: "Home Name",
      dataIndex: "home_name",
    },
    {
      title: "Home Owner Name",
      dataIndex: "owner_name",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
    },
    {
      title: "Father/Husband Name",
      dataIndex: "father_or_husband",
    },
    {
      title: "Home Type",
      dataIndex: "home_type",
    },
    {
      title: "Village Name",
      dataIndex: "village_name",
    },
    {
      title: "colony Name",
      dataIndex: "colony",
    },
    {
      title: "House Price",
      dataIndex: "house_price",
    },
    {
      title: "Tax Levied",
      dataIndex: "tax_levied",
    },
    {
      title: "Tax Levied",
      dataIndex: "tax_levied",
    },
    {
      title: "Taxable Value",
      dataIndex: "taxable_value",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "150px",
            }}
          >
            <Link href={`/management/colony/edit/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => deleteHandler(data?.id)} danger>
              <DeleteOutlined />
            </Button>
            {/* <Button onClick={() => console.log(data)}>
              <EyeOutlined />
            </Button> */}
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    // console.log(pagination, "pagination");
    // console.log(filters, "filters");
    // console.log(field, "field" + " " + order, "order");

    const { field, order } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UPBreadCrumb
        items={[
          {
            label: `Management`,
          },
          {
            label: "Colony",
            link: `/management/colony`,
          },
        ]}
      />

      <ActionBar title="Home Register">
        <Input
          type="text"
          size="large"
          placeholder="Search ..."
          style={{
            width: "300px",
            marginRight: "20px",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          <Link href={`/home-register/create`}>
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || searchTerm) && (
            <Button
              onClick={resetFilter}
              style={{
                margin: "0 5px",
              }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UPTable
        loading={isLoading}
        columns={columns}
        dataSource={homesList}
        // pageSize={sige}
        // totalPages={meta?.total}
        showSizeChanger={true}
        // onPaginationChange={onPaginationChange}
        // onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default HomeRegister;
