import React, { useState } from "react";

const TrackInfo = ({ track }) => {

  const [isShowPlayer, setIsShowPlayer] = useState(false)

  const handlePlayer = () => {
    setIsShowPlayer(!isShowPlayer)
  }

  return (
    <article>
      <header>
        <img onClick={handlePlayer} src={track?.album.images[0].url} alt="" />
        <section>
          <h3 className="track_name">{track?.name}</h3>
          <ul>
            {track?.artists.map((artist) => (
              <li className="track_name" key={artist.id}>
                {artist.name}
              </li>
            ))}
          </ul>
          <p>
            <span>Album: </span>
            {track?.album.name}
          </p>
          <p>
            <span>Release date: </span>
            {track?.album.release_date}
          </p>
        </section>
      </header>
      {isShowPlayer && (
        <iframe
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </article>
  );
};

export default TrackInfo;
