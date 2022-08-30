import React from "react";
import './Video.scss';
import videoPoster from '../../../assets/img/homepage/videoPoster.jpg';

const Video = () => {




  function playPause() {
    const myVideo = document.getElementById("video__play");
    console.log(myVideo, 'myVideo')
    if (myVideo.paused)
      myVideo.play();
    else
      myVideo.pause();
  }


  return (
    <section className="video" >
        <div className="video__container container" >
          <h1 className="video__title">
            We are Createx Construction Bureau
          </h1>
          <p className="video__text">
            We are rightfully considered to be the best construction company in the USA.
          </p>

          <div className="video__object">
            <video className="video__play" id="video__play" poster={videoPoster}>
              <source className="video__source" src="../../../assets/img/homepage/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>

            <button className="video__playbtn" id="video__playbtn" onClick={playPause}></button>
          </div>
        </div> {/*video__container*/}
    </section>
)
};

export default Video


