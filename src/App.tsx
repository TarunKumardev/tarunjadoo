
import Header from "./components/ui/navbar"
import { Button } from "./components/ui/button"
import data from "./data/index.json"
// import { RootState } from "./store"
// import { useDispatch, useSelector } from "react-redux"
import ProductTable from "./components/Table"

function App() {
  return (
    <>
      <Header />
      <div className="bg-card">
        <div className="shadow-lg p-3 ">
          <h6>Orders <span> {">"} Orders904054  </span> </h6>
          <div className="flex justify-between items-center  ">
            <h1>Order 904054</h1>
            <div className="pt-4">
              <Button>Back</Button>
              <Button variant="destructive" >Aprrove Order</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto border  mt-4" style={{ borderRadius : "20px"  }} >
      <ProductTable data={data} />
      </div>
    </>
  )
}

export default App
