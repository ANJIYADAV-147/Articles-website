import {Link} from 'react-router-dom'
import './index.css'

const NewsCard = props => {
  const {CardDetails} = props
  const {
    id,
    title,
    summary,
    publishedDate,imageUrl
  } = CardDetails
  return (
    <Link to={`/News/${id}`} className='link'>
      <li className="job-items">
      <div className='card-container'>
        <img src={imageUrl} className='imgUrl' alt='imgUrl'/>
        <div className='title-summary-container'>
            <h1 className='title'>{title}</h1>
            <p className='summary'>{summary}</p>
            <p className='date'>{publishedDate}</p>
        </div>
      </div>
                                   
      </li>
      </Link>
   
  )
}
export default NewsCard