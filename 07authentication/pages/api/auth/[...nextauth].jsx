import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/linkedin';

export const authOPtions={
    providers:[
        GithubProvider({
            clientId:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET
        }),
    ],
};

export default NextAuth(authOPtions);