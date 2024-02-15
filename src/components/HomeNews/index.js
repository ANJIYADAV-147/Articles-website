
import {Component} from 'react'

import './index.css'
import NewsCard from '../NewsCard';


const articlesList = [
    {
    id: '1',
    title: 'Top news developments from Telangana today',
    summary: 'Stay updated with the latest news from Telangana by reading more here.',
    content: 'The government will place the white paper on Irrigation sector in the Assembly today and also the vigilance report on the construction of the Kaleshwaram project. A round-up of the Assembly proceedings. The government is likely to table the CAG report in both houses of the Legislature today.',
    author: 'Author Name',
    publishedDate: '2024-02-10',
    imageUrl: 'https://th-i.thgim.com/public/incoming/w3u5n2/article67844862.ece/alternates/LANDSCAPE_1200/IMG_Telangana_CM_Revanth_2_1_NHC4F8FR.jpg',
    },
    {
        id: '2',
        title: 'Stock Market Today: Top 10 things to know before the market opens',
        summary: 'Trends in the GIFT Nifty indicate a positive start for the broader index in India, with a gain of 80 points or 0.37 percent.',
        content: 'The market made a smart recovery on February 14 to close higher, led by gains in SBI and other PSU banks in a highly volatile session.The Sensex recovered 1, 023 points from the days low to close 277.98 points, or 0.39 percent, higher at 71,833.17. The Nifty slumped to 21,530.20 but rebounded to end the day 97 points, or 0.44 percent, higher at 21,840.The Nifty Bank index, too, gained over a 1,000 points from the day’s low to end 0.9 percent higher at 45,908.30.',
        author: 'Author Name',
        publishedDate: '2024-02-11',
        imageUrl: 'https://images.moneycontrol.com/static-mcnews/2024/02/stocks4-6-770x433.jpg?impolicy=website&width=770&height=431',
        },
    {
            id: '3',
            title: 'Closing Bell: Sensex up 228 pts, Nifty above 21,900; mid, smallcaps gain   ',
            summary: 'BSE Midcap and Smallcap indices up 1 percent each.',
            content: 'Indian benchmark indices ended higher for the third consecutive session on February 15 with Nifty above 21,900. At close, the Sensex was up 227.55 points or 0.32 percent at 72,050.38, and the Nifty was up 70.80 points or 0.32 percent at 21,910.80.',
            author: 'Author Name',
            publishedDate: '2024-01-01',
            imageUrl: 'https://images.moneycontrol.com/static-mcnews/2024/02/Sensex_Nifty-3-770x433.jpg?impolicy=website&width=770&height=431',
    },
    {
        id: '4',
        title: 'Garena Free Fire MAX redeem codes for February 15: Win free skins and vouchers today',
        summary: 'Embark on an unparalleled gaming adventure with Garena Free Fire MAX! Redeem codes for a chance to win free skins and vouchers today.',
        content: 'Embark on an unparalleled gaming adventure with Garena Free Fire MAX! This dynamic battle royale game has swiftly gained popularity within Indias gaming community, especially after the ban on its predecessor, Garena Free Fire. With stunning graphics and immersive gameplay, Garena Free Fire MAX has captured the attention of gamers nationwide.',
        author: 'Author Name',
        publishedDate: '2024-02-01',
        imageUrl: 'https://static.toiimg.com/thumb/msid-107708150,imgsize-68506,width-400,resizemode-4/107708150.jpg',
    },
    {
        id: '5',
        title: 'Sonia Gandhi files nomination for Rajya Sabha from Rajasthan',
        summary: 'Sonia Gandhi was accompanied by Rahul and Priyanka as the former Congress president filed her nomination. | Latest News India.',
        content: 'Former Congress president Sonia Gandhi filed her nomination for the Rajya Sabha election from Rajasthan on Wednesday with Rahul Gandhi and Priyanka Gandhi Vadra accompanying her. Sonia Gandhi left her Delhi residence early in the morning and reached Jaipur by 10am.',
        author: 'Author Name',
        publishedDate: '2024-02-01',
        imageUrl: 'https://www.hindustantimes.com/ht-img/img/2024/02/14/550x309/Sonia_Gandhi_Rajya_Sabha_nomination_1707876817480_1707876817684.jpg',
    },
   ];
   

class HomeNews extends Component{



    render(){
        return(
            
            <div className='Home-container'>
                <nav className='navbar'>
                    <div className='nav-container'>
                        <h1 className='heading'>Bharat News</h1>
                    </div>
                </nav>
                <div className='news-heading-container'>
                    <h1>Trending News</h1>
                    <div className='news-container'>
                        <ul className='list-news' type='none'>
                            {articlesList.map(eachArticles=>(
                                <NewsCard key={eachArticles.id} CardDetails={eachArticles}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default HomeNews