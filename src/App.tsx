import AbautMe from "./custom-components/custom-page-components/AbautMe";
import SiteHeader from "./custom-components/custom-page-components/SiteHeader";

const App = () => {
  return (
    <>
      <div className="bg-zinc-900 min-h-screen font-(family-name:--font-roboto)">
        <SiteHeader/>
        <main className="flex flex-col items-center">
          <AbautMe/>
        </main>
      </div>
    </>
  )
}


export default App;