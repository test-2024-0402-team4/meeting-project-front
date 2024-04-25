import { Route, Routes } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { getPrincipalRequest } from '../apis/api/principal';
import SignupPage from '../pages/SignupPage/SignupPage';
import SigninPage from '../pages/SigninPage/SigninPage';
import OAuth2Page from '../pages/OAuth2Page/OAuth2Page';
import AuthFindPage from '../pages/AuthFindPage/AuthFindPage';
import AuthFindCheckPage from '../pages/AuthFindPage/AuthFindCheckPage';
import ModifyPasswordPage from '../pages/AuthFindPasswordPage/ModifyPasswordPage';
import AuthFindPasswordPage from '../pages/AuthFindPasswordPage/AuthFindPasswordPage';
import OAuth2MergePage from '../pages/OAuth2MergePage/OAuth2MergePage';
import OAuth2SignupPage from '../pages/OAuth2SignupPage/OAuth2SignupPage';
import { useEffect } from 'react';
import OAuth2SigninPage from '../pages/OAuth2SigninPage/OAuth2SigninPage';

function AuthRoute(props) {
    

    return (
        <>
            <Routes>
                <Route path="/auth/signup" element={ <SignupPage />}/>
                <Route path="/auth/signin" element={ <SigninPage />}/>
                <Route path="/auth/oauth2" element={ <OAuth2Page />}/>

                <Route path='/auth/findId' element={ <AuthFindPage /> } />
                <Route path='/auth/findId/check' element={ <AuthFindCheckPage /> }/>
                <Route path='/auth/findPassword' element={ <AuthFindPasswordPage /> }/>
                <Route path="/auth/modifyPassword" element={ <ModifyPasswordPage /> } />

                <Route path='/auth/oauth2/signin' element={ <OAuth2SigninPage/>} />
                <Route path='/auth/oauth2/merge' element={ <OAuth2MergePage /> }/>
                <Route path='/auth/oauth2/signup' element={ <OAuth2SignupPage /> }/>
            </Routes>
        </>
    );
}

export default AuthRoute;