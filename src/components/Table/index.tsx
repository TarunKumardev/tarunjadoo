import  { useState, useEffect } from 'react'; // Import React and useState
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import ProductTableHeader from './TableHeader';
import { Idata } from '@/types';
import { ProductDialog } from '../Dialogdemo';
import { Badge } from '@/components/ui/badge';
import { DialogFooter } from '../ui/dialog';
import { Input } from '../ui/input';
import useSearch from '@/hooks/useSearch';

const imageURL = 'https://lh3.google.com/u/0/d/17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV=w1920-h932-iv1';

export default function ProductTable({ data }: { data: Idata[] }) {
  // Use state to manage product data and search results
  const [productData, setProductData] = useState(data);
  const [modalState, setModalState] = useState({
    isTriggered: false,
    data: {},
  });

  // Handle search using the useSearch hook
  const { debounceSearch, searchResults } = useSearch(data);

  // Update product data when search results change
  useEffect(() => {
    setProductData(searchResults);
  }, [searchResults]);

  function updateProductBadge(productname: string, type: string) {
    const updatedData = productData.map((data) => {
      if (data.productname === productname) {
        return {
          ...data,
          badge: type,
        };
      }
      return data;
    });
    setProductData(updatedData);
  }

  function openProductDialog(productname: string) {
    const updatedData = productData.find((data) => data.productname === productname);
    setModalState({
      isTriggered: !modalState.isTriggered,
      data: updatedData!,
    });
  }

  function handleProduct(varianttype: string) {
    const updatedData = productData.map((data) => {
      if (modalState.data.productname === data.productname) {
        return {
          ...data,
          badge: varianttype,
        };
      }
      return data;
    });
    setProductData(updatedData);
    setModalState({
      isTriggered: !modalState.isTriggered,
      data: {},
    });
  }

  return (
    <>
      <ProductDialog isboolean={modalState.isTriggered} setismodal={setModalState}>
        <h1>Missing Product</h1>
        <h2>Is '{modalState.data?.productname}' urgent</h2>
        <DialogFooter>
          <Button type="submit" onClick={() => handleProduct('urgent')}>
            No
          </Button>
          <Button type="submit" onClick={() => handleProduct('not urgent')}>
            Yes
          </Button>
        </DialogFooter>
      </ProductDialog>
      <div className="h-[70vh] overflow-y-scroll ">
        <div className="flex justify-between p-5 ">
          <div className="">
            <Input
              className='w-[400px]'
              onChange={(e) => debounceSearch(e.target.value)}
              style={{ borderRadius: "100px" }}
              placeholder='Search....'
            />
          </div>
          <div className="">
            <Button className='border' style={{ borderRadius: "50px" }} >Add item</Button>
          </div>
        </div>
        <Table>
          <ProductTableHeader />
          <TableBody>
            {productData.map((value: Idata) => (
              <ProductTableRow
                key={value.productname}
                updateBadge={updateProductBadge}
                openDialog={openProductDialog}
                {...value}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function ProductTableRow({
  productname,
  brand,
  quantity,
  price,
  badge,
  updateBadge,
  openDialog,
}: Idata) {
  const VariantBadge = () => (
    <Badge variant={badge === 'Approved' ? 'outline' : 'destructive'}>{badge}</Badge>
  );

  return (
    <TableRow>
      <TableCell className="font-medium">
        <img src={imageURL} className='w-[68px] h-[68px] ' loading="eager" alt={productname} />
      </TableCell>
      <TableCell>{productname}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell className='' >{badge ? <VariantBadge /> : null} </TableCell>
      <TableCell className="">
        <div className="flex items-center justify-between">
          <div className="" style={{ textAlign: 'end' }}>
            <Button onClick={() => updateBadge(productname, 'Approved')}>Yes</Button>
            <Button onClick={() => openDialog(productname)}>Remove</Button>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
