import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import RootHeader from '../components/RootHeader/RootHeader';

function AuthRoute(props) {


    return (
        <>
            <Routes>
                <Route path="/auth/*" element={ <AuthPage />} />
            </Routes>
        </>
    );
}

export default AuthRoute;