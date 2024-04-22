import { Route, Routes } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import OAuth2Page from '../OAuth2Page/OAuth2Page';
import OAuth2SignupPage from '../OAuth2SignupPage/OAuth2SignupPage';
import SigninPage from '../SigninPage/SigninPage';
import { useQuery, useQueryClient } from 'react-query';
import { useEffect } from 'react';
import OAuth2MergePage from '../OAuth2MergePage/OAuth2MergePage';
import AuthFindPage from '../AuthFindPage/AuthFindPage';
import AuthFindCheckPage from '../AuthFindPage/AuthFindCheckPage';
import AuthFindPasswordPage from '../AuthFindPasswordPage/AuthFindPasswordPage';
import { getPrincipalRequest } from '../../apis/api/principal';
import { useRecoilState } from 'recoil';
import { principalState } from '../../atoms/principalAtom';
import ModifyPasswordPage from '../AuthFindPasswordPage/ModifyPasswordPage';

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

                <Route path='/findId' element={ <AuthFindPage /> } />
                <Route path='/findId/check' element={ <AuthFindCheckPage /> }/>
                <Route path='/findPassword' element={ <AuthFindPasswordPage /> }/>
                <Route path="/modifyPassword" element={ <ModifyPasswordPage /> } />

                <Route path='/oauth2/merge' element={ <OAuth2MergePage /> }/>
                <Route path='/oauth2/signup' element={ <OAuth2SignupPage /> }/>
            </Routes>
        </div>
    );
}

export default AuthPage;