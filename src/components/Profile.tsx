import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { H4 } from '@/components/ui/typography/h4'
import { Small } from './ui/typography/small'
import { Laptop, Star } from 'lucide-react'

interface ProfileProps {
  username: string
  level: number
  stars: 0 | 1 | 2 | 3 | 4 | 5
}

export default function Profile({ username, level, stars }: ProfileProps) {
  function renderStars() {
    const starsToRender = []
    const starsLeft = 5 - stars

    for (let i = 0; i < stars; i++) {
      starsToRender.push(
        <Star key={i} size={32} color='#FFD334' fill='#FFD334' />,
      )
    }

    for (let i = 0; i < starsLeft; i++) {
      starsToRender.push(
        <Star key={i} size={32} color='#A6A6A6' fill='#A6A6A6' />,
      )
    }

    return starsToRender
  }

  return (
    <div className='flex w-max items-center gap-12 rounded-full bg-white py-3 pl-24 pr-[6.25rem]'>
      <Avatar className='h-32 w-32'>
        <AvatarImage
          src={`https://github.com/${username}.png`}
          alt={username}
        />
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
      <div className='flex flex-col gap-1'>
        <H4 className='mb-1'>{username}</H4>
        <div className='flex items-center gap-2'>
          <Laptop color='#262626' size={28} />
          <Small>Level {level}</Small>
        </div>
        <div className='flex gap-1'>{renderStars()}</div>
      </div>
    </div>
  )
}
