import { Link, useSearchParams } from 'react-router-dom';
import instance from '../../apis/utils/instance';
import { useQueryClient } from 'react-query';

function OAuth2Page() {

    const [ searchParams ] = useSearchParams();

    const name = searchParams.get("name");
    const provider = searchParams.get("provider");

    // const queryClient = useQueryClient();


    //     // -------------------------------------- Token 값 비워주는기능 -- 테스트용 (임시)
    //     const handleLogout = () => {
    //         localStorage.removeItem("AccessToken");
    //         instance.interceptors.request.use((config) => {
    //             config.headers.Authorization = null;
    //             return config;
    //         });
    //         queryClient.refetchQueries("principalQuery");
    //         window.location.replace("/auth/signin");
    //     }
    //     // --------------------------------------


    return (
        <div>
            <h1>계정 통합로그인</h1>
            <Link to={`/auth/oauth2/merge?name=${name}&provider=${provider}`}>계정 통합하기</Link>
            <h1>회원가입</h1>
            <Link to={`/auth/oauth2/signup?name=${name}&provider=${provider}`}>회원가입하기</Link>
        </div>
    );
}

export default OAuth2Page;