import { TableHead, TableHeader, TableRow } from '../ui/table'

function ProductTableHeader() {
  return (
    <TableHeader className='sticky'  >
    <TableRow>
      <TableHead className="w-[100px]"></TableHead>
      <TableHead>Product name</TableHead>
      <TableHead>Brand</TableHead>
      <TableHead className="">Quantity</TableHead>
      <TableHead className="">Total</TableHead>
      <TableHead className="">Status</TableHead>
      <TableHead className=""/>
    </TableRow>
  </TableHeader>
  )
}

export default ProductTableHeader