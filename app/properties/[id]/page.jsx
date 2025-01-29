// [id] means dynamic routing. Whatever url we go to http://localhost:3000/properties/100 or http://localhost:3000/properties/42, we will get this page.
// '[...id]' is a 'catch all', meaning if we put any subroute (i.e. ".../100/rooms"), we would still get this page.

const PropertyPage = ({ params, searchParams }) => {
    return ( <div>
        Property Page
        <br />
        params: {params.id} {/* http://localhost:3000/properties/100 -> params.id == 100. id because folder name is also [id]. */}
        <br />
        searchParams: {searchParams.name} {/* http://localhost:3000/properties/100?name=Valentin */}
    </div> );
}

export default PropertyPage;