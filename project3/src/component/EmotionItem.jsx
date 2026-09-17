import React from "react";
import "./EmotionItem.css";

const EmotionItem = ({ id, img, name, onClick, isSeleted }) => {
    const handleOnClick = () => {
        onClick(id);
    };

    return (
        <div 
            className={`EmotionItem ${
                isSeleted ? `EmotionItem_on_${id}` : `EmotionItem_off`
            }`}
            onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={img} />
            <span>{name}</span>
        </div>
    );
};

export default React.memo(EmotionItem);