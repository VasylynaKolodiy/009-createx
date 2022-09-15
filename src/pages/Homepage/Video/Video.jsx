import React, {useRef, useState} from "react";
import './Video.scss';
import videoPoster from '../../../assets/img/homepage/videoPoster.jpg';
import video from '../../../assets/img/homepage/video.webm';
import {ReactComponent as Volume} from '../../../assets/img/homepage/volume.svg';

const Video = () => {

  const vidRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(true);

  const handlePlayVideo = () => {
    if (vidRef.current.paused) vidRef.current.play();
    else vidRef.current.pause();
    setPaused(!paused)
  }


  return (
    <section className="video">
      <div className="video__container container">
        <h1 className="video__title">
          We are Createx Construction Bureau
        </h1>
        <p className="video__text">
          We are rightfully considered to be the best construction company in the USA.
        </p>

        <div className={`video__object ${paused ? 'paused' : ''}`}>
          <video ref={vidRef} className="video__play" id="video__play" poster={videoPoster} muted={muted} loop>
            <source className="video__source" src={video} type='video/webm'/>
          </video>

          <button className="video__playbtn" id="video__playbtn" onClick={handlePlayVideo}/>
          <span id="play-button-container">
            <span className="play-button play-button-before">
            </span>
            <span className="play-button play-button-after">
            </span>
          </span>


          <button className={`video__volumebtn ${muted ? 'muted' : ''}`} onClick={() => setMuted(!muted)}>
            <Volume/>
          </button>
        </div>
      </div>
      {/*video__container*/}
    </section>
  )
};

export default Video


