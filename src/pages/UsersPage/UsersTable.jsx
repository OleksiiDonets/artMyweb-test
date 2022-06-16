import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Select } from 'antd';
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

export const UsersTable = () => {
  const [gender, setGender] = useState('all');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const {data: {apiResponse,  totalPages}} = useGetUsersQuery(page, {
    selectFromResult: ({data}) =>({
      data: {
        apiResponse:data?.apiResponse.filter(user =>  gender !== 'all' ? user.gender === gender : user),
        totalPages: data?.totalPages
      }  
      
    })
  });

  const paginationConfig = {
    total: totalPages,
    onChange: setPage,
    defaultPageSize: 20
  }
  const rowEvent = (id) => {
    navigate(`/edit/${id}`)
  }
  
  const changeGenderFilter = (event) => {
    setGender(event)
  }
  return (
    <>
      <Select defaultValue='all'  onChange={changeGenderFilter} style={{
          width: 200,
          marginBottom: 40
        }}>
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="male">Male</Select.Option>
        <Select.Option value="female">Female</Select.Option>
      </Select>
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
    </>
    
  )
}