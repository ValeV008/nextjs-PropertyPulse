import Link from 'next/link';

const HomePage = () => {
    return ( <div>
        <h1 className='text-3xl'>Welcome</h1>
        <Link href='/properties'>Go to Properties</Link> {/* <link> is client-side routing, so it doesn't refresh the page */}
    </div> );
}
 
export default HomePage;