import { Mail, } from 'lucide-react';
import { GitHubIcon } from '../custom-icons/GitHubIcon';
// type Props = {}

// const SiteHeader = (props: Props) => {

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-700 bg-background/95 backdrop-blur pt-4 pb-2.5 px-6">
      <div className="container flex h-16 items-center">
        <div className="flex-col">
          <h1 className='text-white text-3xl'>Aleksy Szłapa</h1>
          <span className='text-zinc-400 '>Designer, Artist & Developer</span>
        </div>
        <nav className="ml-auto">
          <ul className="flex gap-9">
            <li><a href="mailto:szlapaaleksy@gmail.com" className="hover:text-primary text-white hover:text-[#A5E773]"><Mail className="h-7 w-7"></Mail></a></li>
            <li><a href="https://github.com/a-szlapa" className="hover:text-primary text-white hover:text-[#A5E773] "><GitHubIcon className="h-7 w-7" /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader