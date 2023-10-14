import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './mode-toggle'
import { Search } from './search'
import { TeamSwitcher } from './team-switcher'
import { UserNav } from './user-nav'

export function Header() {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <MobileNav />
        <TeamSwitcher className='max-sm:hidden' />
        <MainNav className='mx-6 max-sm:hidden' />
        <div className='md:ml-auto flex items-center gap-4 max-sm:w-full'>
          <Search />
          <div className='ml-auto'>
            <UserNav />
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
