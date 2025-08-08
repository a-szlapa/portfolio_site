import { ArrowUpRight } from "lucide-react"


type Props = {}

function CallToAction({}: Props) {
  return (
    <section className="flex flex-row justify-center">
        <div className="flex flex-row w-2/3 justify-between">
            <div className="w-1/2 flex flex-col gap-8">
                <div>
                    <h3 className="text-white text-3xl">
                        Les's create something <br />
                        <span className="text-transparent bg-clip-text bg-radial-[at_10%_25%] from-[#A5E773] from-25% via-[#83d263] via-60% to-[#2E7A2B]">
                            extraordinary
                        </span> together.
                    </h3>
                </div>
                <div>
                    <p className="text-white text-sm">
                        Got an idea for a project? Need design work or an application? Want to bing your artistic vision to life with a commion? Write to me - I love new creative collaborations!
                    </p>
                </div>
            </div>
            <div className="w-2/5 flex flex-col gap-1">
                <a href="mailto:szlapaalesy@gmail.com" className="transition-all duration-300 group px-6 pb-5 pt-7 flex flex-row items-center justify-between w-full rounded-xl border-transparent border-1 hover:border-zinc-700 hover:py-6">
                    <div>
                        <span className="text-white">
                            Email
                        </span>
                        <p className="text-zinc-400">
                            szlapaalesy@gmail.com
                        </p>
                    </div>
                    <ArrowUpRight className="text-zinc-400 group-hover:text-[#A5E773]"/>
                </a>
                <a href="https://github.com/a-szlapa" className="transition-all duration-300 group px-6 pb-5 pt-7 flex flex-row items-center justify-between w-full rounded-xl border-transparent border-1 hover:border-zinc-700 hover:py-6">
                    <div>
                        <span className="text-white">
                            Github
                        </span>
                        <p className="text-zinc-400">
                            @a-szlapa
                        </p>
                    </div>
                    <ArrowUpRight className="text-zinc-400 group-hover:text-[#A5E773]"/>
                </a>                
            </div>
        </div>
    </section>
  )
}

export default CallToAction