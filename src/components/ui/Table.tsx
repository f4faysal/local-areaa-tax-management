"use client";

import { Table } from "antd";

type UMTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
  isBordered?: boolean;
  isVirtual?: boolean;
  scroll?: any;
};

const UPTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
  isBordered,
  isVirtual,
  scroll,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      bordered={isBordered}
      virtual={isVirtual}
      scroll={scroll}
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UPTable;
