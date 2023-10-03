import { ChevronsLeft, ChevronsRight, MoreVerticalIcon } from 'lucide-react'
import { createContext, ReactNode, useContext, useState } from 'react'

import { Button } from '@/components/ui/button'

type SidebarProps = {
  children: ReactNode
}

type SidebarContextProps = {
  expanded: boolean
}

const SidebarContext = createContext<SidebarContextProps>({ expanded: true })

export function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className='h-[calc(100vh_-_72px)]'>
      <nav className='h-full flex flex-col  border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          {/* Logo */}
          {/* <div */}
          {/*   className={`flex items-center text-lg font-medium overflow-hidden transition-all ${ */}
          {/*     expanded ? 'w-32' : 'w-0 scale-0' */}
          {/*   } */}
          {/*   `} */}
          {/* > */}
          {/*   <svg */}
          {/*     xmlns='http://www.w3.org/2000/svg' */}
          {/*     viewBox='0 0 24 24' */}
          {/*     fill='none' */}
          {/*     stroke='currentColor' */}
          {/*     strokeWidth='2' */}
          {/*     strokeLinecap='round' */}
          {/*     strokeLinejoin='round' */}
          {/*     className='mr-2 h-4 w-4' */}
          {/*   > */}
          {/*     <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' /> */}
          {/*   </svg> */}
          {/*   Acme Inc */}
          {/* </div> */}

          <p
            className={` overflow-hidden transition-all ${
              expanded ? 'scale-100' : 'w-0 scale-0 none'
            } `}
          >
            Menu
          </p>

          <Button
            size='sm'
            variant='outline'
            className={`rounded-lg ml-auto`}
            onClick={() => setExpanded(state => !state)}
          >
            {expanded ? (
              <ChevronsLeft className='font-bold' />
            ) : (
              <ChevronsRight className='font-bold' />
            )}
          </Button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3 flex flex-col'>{children}</ul>
        </SidebarContext.Provider>

        {/* <div className='border-t flex p-3 items-center'> */}
        {/*   <img */}
        {/*     src='https://ui-avatars.com/api/?background=EBE2FA&color=3730a3&bold=true' */}
        {/*     alt='' */}
        {/*     className='w-10 h-10 rounded-md' */}
        {/*   /> */}
        {/* <div */}
        {/*   className={` */}
        {/*       flex justify-between items-center overflow-hidden transition-all duration-300 */}
        {/*   ${expanded ? 'w-52 ml-3' : 'w-0 ml-0'} */}
        {/*   `} */}
        {/* > */}
        {/*   <div className='leading-4'> */}
        {/*     <h4 className='font-semibold'>John Doe</h4> */}
        {/*     <span className='text-xs text-neutral-600'> */}
        {/*       johndoe@email.com */}
        {/*     </span> */}
        {/*   </div> */}
        {/*   <MoreVerticalIcon /> */}
        {/* </div> */}
        {/* </div> */}
      </nav>
    </aside>
  )
}

type SidebarItemProps = {
  icon: ReactNode
  text: string
  active?: boolean
  alert?: boolean
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li
      className={`
        relative flex justify-center items-center py-2 px-3 my-2
        text-sm font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
            ? 'bg-accent text-primary'
            : 'hover:bg-accent hover:text-primary'
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0 ml-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded  ${
            active ? 'bg-primary-light-1' : 'bg-primary'
          }
            ${expanded ? '' : 'top-2'}
          `}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-primary-light-1 text-primary text-sm
          invisible  -translate-x-3 transition-all
          group-hover:visible group-hover-opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
