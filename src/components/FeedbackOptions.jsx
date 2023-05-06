import React from "react";

 const FeedbackOptions = ({options},onLeavFeedback)=>{
    return <ul>
        {options.map(item => (
            <button type="button" key={item} onClick={onLeavFeedback}>
                {item}
            </button> 
        )
        )}
        </ul>;
}

export default FeedbackOptions