import React from 'react'
import "../../Styles/Body.css";
import Info from "./Info";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import OpacityIcon from '@material-ui/icons/Opacity';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import Button from '@material-ui/core/Button';
import Final_Sa from '../../Media/Final_Sa.png'




const Body = () => {
    return (
        <main className="body">
            <div className="body_main">
                <div className="body_mainLeft">
                    {/* Headline */}
                    <div className="body_headline">
                        <h1>Say yes to<br/> environmentally <br/> friendly bags.</h1>
                    </div>
                    {/* Info */} 
                    <div className="body_info">
                        {/* Lightbulb */}
                        <div className="body_infoGroupFirst">
                            <div className="body_infoGroup">
                                
                                <Info Ui={EmojiObjectsIcon} text="100%recycled material"/>
                            </div>

                            <div className="body_infoGroup">
                                {/* Washer */}
                                <Info Ui={DragHandleIcon} text="Biodegradable plant fiber"/>
                            </div>
                        </div>

                        <div className="body_infoGroupSecond">
                            <div className="body_infoGroup">
                                {/* Plant Fiber */}
                                <Info Ui={OpacityIcon} text="Washer-machine"/>
                            </div>
                            <div className="body_infoGroup">
                                {/* No Dyes */}
                                <Info Ui={FormatColorResetIcon} text="No dyes or chemical treatment"/>
                            </div>
                        </div>

                    </div>
                    {/* Cta buttons */}
                    <div className="body_buttons">
                        <Button variant="contained"> Shop Bag</Button>
                        <Button variant="contained"> Learn More</Button>
                    </div>

                </div>
                {/* Bag Image */}

                <div className="body_image">
                    <img src={Final_Sa} 
                    alt="Bag"/>
                </div>
            </div>
        </main>
    )
}

export default Body
