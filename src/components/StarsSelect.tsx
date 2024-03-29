import { useState } from 'react'

import StarsSelectItem, { type Stars } from './StarsSelectItem'

export default function StarsSelect() {
  const [stars, setStars] = useState<Stars>(2)
  const starsLeft = (5 - stars) as Stars

  function handleStarsSelectChange(starsSelected: Stars) {
    setStars(starsSelected === stars ? 0 : starsSelected)
  }

  return (
    <div className='flex gap-1'>
      {[...Array(stars)].map((_e, index) => (
        <StarsSelectItem
          key={index}
          selected
          onSelect={() => handleStarsSelectChange((index + 1) as Stars)}
        />
      ))}
      {[...Array(starsLeft)].map((_e, index) => (
        <StarsSelectItem
          key={index}
          onSelect={() => handleStarsSelectChange((index + 1 + stars) as Stars)}
        />
      ))}
    </div>
  )
}
