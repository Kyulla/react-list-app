import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoute({ isLogged }: any){
    if(isLogged) return <Navigate to="/" />
    return <Outlet />;
}