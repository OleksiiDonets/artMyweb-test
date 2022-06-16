import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { useGetUsersQuery } from '../../api/userApi';

const columnsTable = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Gender',
    dataIndex: 'gender'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Status',
    dataIndex: 'status'
  }
];

export const UsersTable = ({users}) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const {data:{apiResponse, totalPages} = {}} = useGetUsersQuery(page);

  const changePagi = (page) => {
     setPage(page)
  }
  const paginationConfig = {
    total: totalPages,
    onChange: changePagi,
    defaultPageSize: 20
  }
  const rowEvent = (event) => {
    navigate(`/edit/${event}`)
  }
  
  return (
    <Table
      columns={columnsTable}
      dataSource={apiResponse}
      pagination={paginationConfig}
      rowKey={(item) => item.id}
      onRow={(record, rowIndex) => {
          return {
            onClick: event => rowEvent(record.id)
          }
        }
      }
    />
  )
}