import React from 'react'
import "../../Styles/Info.css";


const Info = ({text,Ui}) => {
    return (
        <div className="info">
            <div className="info_block">
                <Ui/>
                <p>{text}</p>  
            </div>
            
        </div>
    )
}

export default Info
