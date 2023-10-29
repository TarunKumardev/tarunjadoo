import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { ReactNode } from "react"




export function ProductDialog({ children , isboolean ,setismodal } : {children : ReactNode ,  isboolean : boolean ,setismodal  : React.Dispatch<React.SetStateAction<{
    istriggerd: boolean;
    data: object;
}>>} ) {
  return (
    <Dialog open = {isboolean}  onOpenChange={() => setismodal((prev) => {
         return {
            ...prev,
            istriggerd : !prev.istriggerd  
         }
    } )} >
      <DialogContent className="sm:max-w-[425px]">
          {children}

      </DialogContent>
    </Dialog>
  )
}
