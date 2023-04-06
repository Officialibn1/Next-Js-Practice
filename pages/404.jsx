import Link from "next/link";

import { useEffect } from "react";

import { useRouter } from "next/router";

const Notfound = () => {
    const router = useRouter();

    // Redirecting Function
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])


    return (
        <div className="not-found">
            <h1>Ooooops... Page Not Found</h1>

            <p>Let's start from <Link href='/'>Home</Link></p>            
        </div>
    );
}

export default Notfound;
