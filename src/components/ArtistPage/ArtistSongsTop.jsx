import React from 'react'
import TrackCard from '../HomePage/TrackCard'

const ArtistSongsTop = ({tracks}) => {
  return (
    <section>
      <h3>Artists Top Songs</h3>
      <div>
        {
          tracks?.map(track => (
            <TrackCard
              key={track.id}
              track={track}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ArtistSongsTop