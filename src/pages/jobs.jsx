import { useState } from "react"
import Listing from "./listing";
import Skeleton from "../components/skeleton";

export default function Jobs() {
    const [jobdata, setJobdata] = useState(true);
  return (
    <div>
        
        {
            jobdata ? <Listing/> : <Skeleton/>
        }
    </div>
  )
}
