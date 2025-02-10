/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            //allow to use images from this domain
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
