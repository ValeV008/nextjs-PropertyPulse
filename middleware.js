// https://next-auth.js.org/tutorials/securing-pages-and-api-routes

export {default} from 'next-auth/middleware';

export const config = {
    matcher: ['/properties/add', '/profile', '/propertes/saved', '/messages']
} 