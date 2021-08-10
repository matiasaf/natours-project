import style from "./background-video.module.scss";

function BackgroundVideo({ sources, children }) {
  return (
    <div className={style.container}>
      <video className={style.content} muted={true} autoPlay={true} loop={true}>
        <source src={sources[0]} type="video/mp4" />
        <source src={sources[1]} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
}

export default BackgroundVideo;
