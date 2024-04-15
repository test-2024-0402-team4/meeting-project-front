import { Route, Routes } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import OAuth2Page from '../OAuth2Page/OAuth2Page';
import OAuth2SignupPage from '../OAuth2SignupPage/OAuth2SignupPage';
import SigninPage from '../SigninPage/SigninPage';
import { useQueryClient } from 'react-query';
import { useEffect } from 'react';

function AuthPage(props) {

    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    useEffect(() => {
        if(!!principalData) {
            alert("잘못된 접근입니다.");
            window.location.replace("/");
        }
    },[]);


    return (
        <div>
            <Routes>
                <Route path="/signup" element={ <SignupPage />}/>
                <Route path="/signin" element={ <SigninPage />}/>
                <Route path="/oauth2" element={ <OAuth2Page />}/>
                <Route path='/oauth2/signup' element={ <OAuth2SignupPage /> }/>
            </Routes>
        </div>
    );
}

export default AuthPage;