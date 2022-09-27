import { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

const withSuspense = WrappedComponent=>(props)=>{
    return (
        <Suspense fallback={<Preloader/>}>
            <WrappedComponent {...props}/>
        </Suspense>
    )
}
export default withSuspense;