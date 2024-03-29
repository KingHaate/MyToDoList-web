import StarsSelectItem, { type Stars } from './StarsSelectItem'

interface StarsSelectProps {
  stars: number
  onSelect?: (...event: any[]) => void
}

export default function StarsSelect({ stars, onSelect }: StarsSelectProps) {
  const starsLeft = (5 - stars) as Stars

  function handleStarsSelectChange(starsSelected: Stars) {
    if (!onSelect) return
    onSelect(starsSelected === stars ? 0 : starsSelected)
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
