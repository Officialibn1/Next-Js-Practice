import Link from "next/link";

import { useEffect } from "react";

import { useRouter } from "next/router";


const NotFound = () => {

    const route = useRouter();

    // Redirecting User
    useEffect(() => {
        setTimeout(() => {
            // route.go(-1);

            route.push('/');
        }, 3000)

    }, []);


    return (
        <div className="not-found">
            <h1>Ooooops......</h1>

            <h2>This page cannot be found</h2>

            <h2>Go back <Link href='/'>Home</Link> </h2>
        </div>
    );
}

export default NotFound;
