import { z } from 'zod'

import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { taskSchema } from './data/schema'
import tasksJson from './data/tasks.json'

const tasks = z.array(taskSchema).parse(tasksJson)

export default function TaskPage() {
  return (
    <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
      <div className='flex items-center justify-between space-y-2'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
