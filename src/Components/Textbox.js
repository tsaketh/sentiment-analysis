import React from 'react';

const Textbox = ({onInput, getSentiment}) => {
    return (
        <div>
            <textarea 
                className='db border-box w-100 measure center ba pa2 br2 mb2 b--green bg-lightest-blue' 
                type="text" 
                placeholder='Enter a review or a phrase to know its sentiment'
                onChange={onInput}/>
            <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="View Sentiment" 
                onClick={getSentiment}/>
        </div>
    );
}

export default Textbox;