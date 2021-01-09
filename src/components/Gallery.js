import React from 'react'
import Image from './Image'

const Gallery = (props) => {
  const { urls } = props

  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url, index) => {
        return (
          <div key={index} className="column is-3">
            <Image src={url} />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
