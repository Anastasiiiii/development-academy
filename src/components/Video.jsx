import React from "react";
import sampleVideo from "../video/academy-video.mp4";
import "../styles/Video.css";
import Advantages from "./Advantages";

const Video = () => {

    return (
        <div className="common-block">
            <h1 className='reason-header'>Чому варто обрати офлайн-навчання?</h1>
            <div className="video-block-container">
                <div className="video-container">
                    {/*Main video */}
                    <video
                        src={sampleVideo}
                        controls={true}
                        autoPlay={false}
                        loop={false}
                        muted={false}
                        className="video-box"
                    />
                </div>
                {/*List of advanteges */}
                <Advantages />
            </div>
        </div>
    )
}

export default Video;