import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  return (
    <div>
      detail {id}
    </div>
  );
}
  
export default Detail;