import React from 'react';
import emoji_0 from './emoji_0.png';
import emoji_1 from './emoji_1.png';
import emoji_2 from './emoji_2.png';
import emoji_3 from './emoji_3.png';
import emoji_4 from './emoji_4.png';

const Card = ({sentiment_id}) => {
    const sentiment_dict={'0': 'negative','1': 'somewhat negative', '2':'neutral', '3':'somewhat positive', '4':'positivie'} 
    return (
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={(sentiment_id === 0)?emoji_0:
                        (sentiment_id === 1)?emoji_1:
                        (sentiment_id === 2)?emoji_2:
                        (sentiment_id === 3)?emoji_3:emoji_4} alt="<../>" height='200px' width='auto'/>
            <div>
                <h2>{ sentiment_dict[sentiment_id] }</h2>
            </div>
        </div>
    );
}

export default Card;