'use client';

// [id] means dynamic routing. Whatever url we go to http://localhost:3000/properties/100 or http://localhost:3000/properties/42, we will get this page.
// '[...id]' is a 'catch all', meaning if we put any subroute (i.e. ".../100/rooms"), we would still get this page.

import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const PropertyPage = () => {
    console.log("Property page log"); {/* Since PropertyPage is a server component (without 'use client' at the top), the log will show in server terminal, not in browser console */}

    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    return ( <div>
        Property Page
        <br /><br />
        <button onClick={() => router.replace('/')}>UseRouter: Go Home</button>
        <br />
        UseParams: Dynamic part: {params.id} {/* http://localhost:3000/properties/100 -> params.id == 100. id because folder name is also [id]. */}
        <br />
        UseSearchParams: Search params: {searchParams.get("name")} {/* http://localhost:3000/properties/100?name=Valentin */}
        <br />
        UsePathname: Pathname: {pathName} {/* http://localhost:3000/properties/100?name=Valentin -> /properties/100 */}
    </div> );

}
 
export default PropertyPage;