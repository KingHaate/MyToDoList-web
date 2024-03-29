import { H3 } from './ui/typography/h3'
import { Separator } from './ui/separator'

export default function IncompleteTasksCounter({ count }: { count: number }) {
  return (
    <div className='flex w-[30rem] flex-col items-center gap-2'>
      <H3 className='flex w-full justify-between text-[#323232]'>
        <span>Tarefas incompletas</span>
        <span>{count}</span>
      </H3>
      <Separator className='w-[29rem] bg-[#323232] opacity-50' />
    </div>
  )
}
