import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callback: {
        //invoked on successfull sign in
        async signIn({profile}) {
            // connect to database
            // check if user exists
            // if not, create user
            // return true to allow sign in
        },

        // session callback function that modifies the session object
        async session({session}) {
            // get user from database
            // assing user id from the session
            // return session
        }
    }
}