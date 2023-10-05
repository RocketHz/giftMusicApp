import React from 'react'
import { deleteTrack } from '../../store/slices/tracks.slice'
import { useDispatch } from 'react-redux'

const TrackPlaylist = ( { track } ) => {

  const dispatch = useDispatch()

  const handleDelete = () => { 
    dispatch(deleteTrack(track))
  }

  return (
    <section>
      <header>
        <img src={track.album.images[0].url} alt="" />
        <article>
          <h3>{track.name}</h3>
          <ul>
            {
              track.artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
              ))
            }
          </ul>
        </article>
        <footer onClick={handleDelete}>
          <i>xD</i>
        </footer>
      </header>
    </section>
  )
}

export default TrackPlaylist