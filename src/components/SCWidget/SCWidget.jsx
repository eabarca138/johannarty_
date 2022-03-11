import './SCWidget.css'

const SCWidget = () => {
  return (
    <div className='soundcloud-container'>
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1004964664&color=%23a29f98&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div styles="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a
          href="https://soundcloud.com/johannarty"
          title="Johann Arty"
          target="_blank"
          rel="noopener noreferrer"
          styles="color: #cccccc; text-decoration: none;"
        >
          Johann Arty
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/johannarty/sets/podcasts"
          title="Podcasts"
          target="_blank"
          rel="noopener noreferrer"
          styles="color: #cccccc; text-decoration: none;"
        >
          Podcasts
        </a>
      </div>
    </div>
  );
}

export default SCWidget