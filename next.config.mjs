/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            //allow to use images from google
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            },
            //allow to use images from cloudinary
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
