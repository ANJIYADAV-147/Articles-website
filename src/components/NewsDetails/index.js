import {Link} from 'react-router-dom'
import articlesList from '../../articles'
import { useParams } from 'react-router-dom';
import './index.css'

const NewsDetails=()=>{
    const {id}=useParams()
    const articles=articlesList.find(articlesList=>articlesList.id===id)
        return(
        <div className='news-details-container'>
            
            <h1 className='heading'>News Details</h1>
            <div className='details-container'>
                <div className='title-img-container'>
                    <img src={articles.imageUrl} alt='imgUrl' className='imgUrl'/>
                    <div>
                    <h1 className='titles'>{articles.title}</h1>
                    <p className='summarys'>{articles.summary}</p>
                    <p className='date'>{articles.publishedDate}</p>
                    </div>
                </div>
                <p className='contents'>{articles.content}</p>
                <Link to='/' className='link'>
                    <p>Go Back</p>
                </Link>
            </div>
                    
        </div>
        
    )
    }
                

export default NewsDetails