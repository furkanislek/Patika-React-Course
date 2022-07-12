import {useParams} from 'react-router-dom'

function Post() {

  const params = useParams();

  return (
    <div>
        <h2>Post #{params.postId}</h2>
    </div>
  )
}

export default Post