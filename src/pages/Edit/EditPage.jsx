import { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import {useSelectEditUserQuery, usePostSaveEditUserMutation} from '../../api/userApi';

export const EditPage = () => {
  const [fields, setFields] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading} = useSelectEditUserQuery(params.id);
  const [editUser] = usePostSaveEditUserMutation();

  const onChange = ({target}) => {
    const {name: FieldName, value: FieldValue} = target;

    setFields({...fields, [FieldName]: FieldValue})
  }
  const onChangeGender = (value) => {
    setFields({...fields, gender: value})
  }
  const onChangeStatus = (value) => {
    setFields({...fields, status:value})
  } 
  const onSubmit = async () => {
    await editUser({id: params.id, ...fields})
    navigate(-1)
  }



  if(isLoading) return <div>Load</div>
  return (
  <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="vertical"  
  >
     <Form.Item label="Name">
        <Input defaultValue={data.name} name="name" onChange={onChange}/>
      </Form.Item>
      <Form.Item label="Email">
        <Input defaultValue={data.email} name="email" onChange={onChange}/>
      </Form.Item>
      <Form.Item label="Status">
        <Select defaultValue={data.status} name="status" onChange={onChangeStatus}>
          <Select.Option value={data.status}>{data.status}</Select.Option>
          {
            (data.status === 'active') ? (
              <Select.Option value="inactive">inactive</Select.Option>
            ) : (
              <Select.Option value="active">active</Select.Option>
            )
          }
         
        </Select>
      </Form.Item>
      <Form.Item label="Gender">
        <Select defaultValue={data.gender} name="gender" onChange={onChangeGender}>
          <Select.Option value={data.gender}>{data.gender}</Select.Option>
          {
            (data.gender === 'female') ? 
            (
              <Select.Option value="male">male</Select.Option>
            ) : (
              <Select.Option value="female">female</Select.Option>
            )
          }
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit"  onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
  </Form>
  )
}