import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import RootHeader from '../components/RootHeader/RootHeader';
import { useQuery } from 'react-query';
import { getPrincipalRequest } from '../apis/api/principal';

function AuthRoute(props) {

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log("principal Success");
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );


    return (
        <>
            <Routes>
                <Route path="/auth/*" element={ <AuthPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;