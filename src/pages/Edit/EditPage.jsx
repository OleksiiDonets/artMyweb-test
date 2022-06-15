import { useParams } from 'react-router-dom';
import {useSelectEditUserQuery} from '../../api/userApi';
export const EditPage = () => {
  const params = useParams();
  const { data, isLoading} = useSelectEditUserQuery(params.id);
  console.log(data, isLoading)

  return (
    <div>suka</div>
  )
}