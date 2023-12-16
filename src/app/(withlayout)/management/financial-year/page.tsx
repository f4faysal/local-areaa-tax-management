"use client";
import UPTable from "@/components/ui/Table";
import UPBreadCrumb from "@/components/ui/UPBreadCrumb";
import ActionBar from "@/components/ui/actionBar";
import {
  useColoniesQuery,
  useDeleteColonyMutation,
} from "@/redux/api/colonyApi";
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

const FinancialYearPage = () => {
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

  const { data, isLoading } = useColoniesQuery({});

  const coloniesList = data?.colonies;

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

  const columns = [
    {
      title: "Colony Name",
      dataIndex: "colony_name",
    },
    {
      title: "Colony Name",
      dataIndex: "ward_no",
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
            label: "Financial Year",
            link: `/management/financial-year`,
          },
        ]}
      />

      <ActionBar title="Manage Financial Year">
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
          <Link href={`/management/financial-year/create`}>
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
        dataSource={coloniesList}
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

export default FinancialYearPage;
