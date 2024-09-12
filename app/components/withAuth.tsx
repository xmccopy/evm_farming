import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
     const Wrapper: React.FC = (props) => {
        const router = useRouter();
        useEffect(() => {
            const token = localStorage.getItem('token');
            if(!token) {
                router.push('/signin');
            }
        }, [router]);

        return <WrappedComponent {...props}/>
     };

     return Wrapper;
}

export default withAuth;