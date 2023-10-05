import React from 'react'
import AlbumCard from './AlbumCard'

const ArtistAlbum = ({ albums }) => {
  return (
    <section>
      <h3>Artist Album</h3>
      <div>
        {
          albums?.map(album => (
            <AlbumCard
              key={album.id}
              album={album}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ArtistAlbum