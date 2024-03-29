import { Star } from 'lucide-react'

export type Stars = 0 | 1 | 2 | 3 | 4 | 5

interface StarsSelectItemProps {
  onSelect: VoidFunction
  selected?: boolean
}

export default function StarsSelectItem({
  onSelect,
  selected,
}: StarsSelectItemProps) {
  return (
    <Star
      size={20}
      color={selected ? '#FFD334' : '#A6A6A6'}
      fill={selected ? '#FFD334' : '#A6A6A6'}
      className='cursor-pointer'
      onClick={onSelect}
    />
  )
}
