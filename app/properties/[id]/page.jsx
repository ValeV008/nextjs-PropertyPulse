// [id] means dynamic routing. Whatever url we go to http://localhost:3000/properties/100 or http://localhost:3000/properties/42, we will get this page.
// '[...id]' is a 'catch all', meaning if we put any subroute (i.e. ".../100/rooms"), we would still get this page.

const PropertyPage = () => {
    return ( <div>Property Page</div> );
}
 
export default PropertyPage;