import { useEffect, useState } from "react"
import Listing from "./listing";
import Skeleton from "../components/skeleton";
export default function Jobs() {
    const [jobdata, setJobdata] = useState(false);

    useEffect(() => {
      setInterval(() => {
        setJobdata(true)
      }, 3000)
    })
  return (
      <div>
        
        {
            jobdata ? <Listing/> : <Skeleton/>
        }
    </div>
    

  )
}
