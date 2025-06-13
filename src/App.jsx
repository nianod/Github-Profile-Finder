import ProfFinder from "./ProfFinder"

const App = () => {
 return ( 
  <>
  <div className="border mt-4 w-fit m-auto p-5 rounded text-white card">
    <h2 className="flex items-center justify-center mt-1 text-xl font-bold">Github Profile Finder</h2>
     < ProfFinder />
  </div>   
  <p className="flex items-center justify-center gap-0.5">Regards: <i className="text-white"> @Arnold</i></p>
  </>
 )
}

export default App
