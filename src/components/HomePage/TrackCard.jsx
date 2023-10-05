import React from "react";
import { addTrack } from "../../store/slices/tracks.slice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const TrackCard = ({ track }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAddTrack = () => {
    dispatch(addTrack(track));
  };

  const handleArtist = (id) => { 
    navigate(`/artist/${id}`)
   }

  return (
    <section className="track_content">
      <article className="track_song_item">
        <header className="track_container_img">
          <img src={track.album.images[0].url} alt="" />
        </header>
        <article className="track_info_item">
          <Link to={`/track/${track.id}`}>
            <h3 className="track_name">{track.name}</h3>
          </Link>
          <ul>
            {track.artists.map((artist) => (
              <li onClick={() => handleArtist(artist.id)} className="track_name" key={artist.id}>
                {artist.name}
              </li>
            ))}
          </ul>
        </article>
        <footer className="footer_track">
          <a target="_blank" href={track.external_urls.spotify}>
            espotifai
          </a>
          <button onClick={handleAddTrack}>addTrack</button>
        </footer>
      </article>
    </section>
  );
};

export default TrackCard;
