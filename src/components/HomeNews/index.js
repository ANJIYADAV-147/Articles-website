import {Link} from 'react-router-dom'
import {Component} from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import './index.css'
import articlesList from '../../articles'
import { CgProfile } from "react-icons/cg";



class HomeNews extends Component{

    state={
        theme:'light',
    }

    toggleTheme = () => {
        this.setState(prevState => ({
          theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
      };

    render(){
        const {theme}=this.state
        return(
            
            <div  className={`Home-container ${theme}`}>
                <nav className='navbar'>
                    <div className='nav-container'>
                        <h1 className='heading'>Bharat News</h1>
                        <div className='profile-container'>
                            <button onClick={this.toggleTheme} className="toggle-button">{theme === 'light' ? <MdDarkMode size={30}/> : <CiLight size={30}/>}</button>
                            <CgProfile size={30}/>
                        </div>
                    </div>
                </nav>
                <div className='news-heading-container'>
                    <h1>Trending News</h1>
                   
                    <div className='news-container'>
                       {articlesList.map(eachArticle=>(
                         <Link to={`/articlesList/${eachArticle.id}`} className='link'>
                            <div key={eachArticle.id} className='card-container'>
                            <img src={eachArticle.imageUrl} className='imgUrl' alt='imgUrl'/>
                            <div className='title-summary-container'>
                                <h1 className='title'>{eachArticle.title}</h1>
                                <p className='summary'>{eachArticle.summary}</p>
                                <p className='date'>{eachArticle.publishedDate}</p>
                            </div>
                            </div>
                            </Link>
                       ))}
                    </div>
                    
                </div>
            </div>
            
        )
    }
}
export default HomeNews