import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigation } from "@/data"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-logs">
        <path d="M13 12h8"/><path d="M13 18h8"/><path d="M13 6h8"/><path d="M3 12h1"/><path d="M3 18h1"/><path d="M3 6h1"/><path d="M8 12h1"/><path d="M8 18h1"/><path d="M8 6h1"/>
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>JifsonJoyTravels</SheetTitle>
          <SheetDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
         <ul>
        {
            navigation.map((data, i) => (
            <li className="navitems py-3 hover:rounded-sm hover:bg-slate-200 px-2" key={i}>{data.name}</li>)
        )
        }
        
         </ul>
        </div>
           <div className='flex  justify-around border-t-2 py-5 border-slate-400 gap-5 flex-col'>
                <button className="border border-1 border-black rounded-lg w-24 py-1.5 px-1.5">
                    Sign in
                </button>
                <button className="border bg-black border-black rounded-lg w-24 py-1.5 px-1.5 text-white">
                    Sign up
                </button>
            </div> 
      </SheetContent>
    </Sheet>
  )
}

