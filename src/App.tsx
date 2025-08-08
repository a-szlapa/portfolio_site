import AbautMe from "./custom-components/custom-page-components/AbautMe";
import CallToAction from "./custom-components/custom-page-components/CallToAction";
import { Footer } from "./custom-components/custom-page-components/Footer";
import ProjectsList from "./custom-components/custom-page-components/ProjectsList";
import SiteHeader from "./custom-components/custom-page-components/SiteHeader";
import { Separator } from "@/components/ui/separator"

const App = () => {
  return (
    <>
      <div className="bg-zinc-900 min-h-screen font-(family-name:--font-roboto)">
        <SiteHeader/>
        <main className="flex flex-col items-center">
          <AbautMe/>
          <ProjectsList/>
          <Separator className="my-20 bg-zinc-600"/>
          <CallToAction/>
          <Separator className="my-10 bg-zinc-600"/>
        </main>
        <Footer/>
      </div>
    </>
  )
}


export default App;