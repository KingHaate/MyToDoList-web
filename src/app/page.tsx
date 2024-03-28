import Profile from '@/components/Profile'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Profile username='KingHaate' level={999} stars={4} />
    </main>
  )
}
