import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOPtions={
    providers:[
        GithubProvider({
            clientId:'',
            clientSecret:''
        })
    ]
}