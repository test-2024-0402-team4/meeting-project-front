/** @jsxImportSource @emotion/react */


import { Link } from "react-router-dom";


import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { BsPatchCheck } from "react-icons/bs";
import { useQuery, useQueryClient } from "react-query";
import { getPrincipalRequest } from "../../apis/api/principal";
import { useEffect, useState } from "react";
import { getTeacherProfileInfo } from "../../apis/api/teacherProfile";

function Homepage(props) {
    const navigate = useNavigate("");
    const queryClient = useQueryClient();
    const [roleId, setRoleId] = useState(0);
    const [userId, setUserId] = useState(0);
    const principalData = queryClient.getQueryData("principalQuery");
    const [ classTypeName, setClassTypeName ] = useState([]);

    useEffect(() => {
        if (principalData) {
            setUserId(principalData?.data.userId)
            setRoleId(principalData?.data.roleId)
        }
    }, [principalData]);

    useEffect(() => {
        if (userId !== 0 && roleId === 2) {
            getTeacherInfo();
        }
        console.log(classTypeName)

    }, [userId]);
    
    const getTeacherInfo = async () => {
        console.log(userId)
        const response = await getTeacherProfileInfo({userId: userId})
        setClassTypeName(response.data.classTypeNames)
        console.log(response.data.classTypeNames)
    }

    const handelPageMove = (page) => {
        navigate(`/${page}`);
    }
    
    return (
        <div css={s.layout}>
            <div css={s.mainLeftItem}>
                <div css={s.leftTitle}>
                    새로운 소식
                </div>
                <div css={s.dataInputBox}>
                    <div css={s.dataInputItem}>
                        <div css={s.leftItemTitle}>
                                <BsPatchCheck />
                        </div>
                        { roleId === 1 ?
                            <>
                                <div css={s.leftItemContent}>
                                    <div>
                                        과외 공고 등록하기
                                    </div> 
                                    <div>
                                        지금 바로 필요한 과외를 등록해보세요!
                                    </div>
                                        <Link to={"/student/register/poster"}>
                                        지금 바로 입력하기 &#62;
                                    </Link>
                                </div>                     
                            </>
                        :   
                            roleId === 2 ? ( 
                            <div css={s.leftItemContent}>
                                <div>
                                    {classTypeName.length !== 0 ? '필수 정보 수정하기' : '필수 정보 입력하기'}
                                </div> 
                                <div>
                                    {classTypeName.length !== 0 ? '필요한 정보들이 모두 입력 되었습니다!' : '과외에 필요한 정보들을 입력해주세요!'}
                                </div> 
                                <Link to={classTypeName.length !== 0 ? `/teacher/mypage/modify?userId=${userId}` : '/teacher/register/profile'}>
                                    {classTypeName.length !== 0 ? '수정하기' : '지금 바로 입력하기'} &#62;
                                </Link>
                            </div>  
                        )
                        :
                        <>
                            <div css={s.leftItemContent}>
                                    <div>
                                        로그인 하기
                                    </div> 
                                    <div>
                                        로그인 후 더 많은 서비스를 이용하세요!
                                    </div> 
                                    <Link to={"/auth/signin"}>
                                        지금 로그인하기 &#62;
                                    </Link>
                            </div>   
                        </>
                        }
                        
                    </div>
                </div>
            </div>
            <div css={s.mainRightLayout}>
                <div css={s.serviceTitle}>
                    서비스 바로가기
                </div>
                {
                    roleId === 1 ?
                    <>
                        <div css={s.mainRightButton}>
                            <div onClick={() => handelPageMove(`student/tutor/list`)} css={s.searchTeacherButton}>
                                <div>
                                    과외선생님 찾기
                                </div>
                            </div>
                            <div  onClick={() => handelPageMove(`student/${userId}/mypage?page=1`)} css={s.searchMypageButton(roleId)}>
                                마이페이지
                            </div>
                            <div  onClick={() => handelPageMove(`student/boards?page=1`)} css={s.searchCommunityButton(roleId)}>
                                학생 광장
                            </div>
                            <div onClick={() => handelPageMove(`study/boards?page=1`)} css={s.searchStudyButton}>
                                공부방
                            </div>
                        </div>
                    </>
                    : roleId === 2 ?
                    <>
                        <div css={s.mainRightButton}>
                            <div onClick={() => handelPageMove(`teacher/tutee/poster/list`)} css={s.searchTeacherButton(roleId)}>
                                <div>
                                    과외 학생 찾기
                                </div>
                            </div>
                            <div onClick={() => handelPageMove(`teacher/${userId}/mypage?page=1`)} css={s.searchMypageButton(roleId)}>
                                마이페이지
                            </div>
                            <div onClick={() => handelPageMove(`teacher/boards?page=1`)} css={s.searchCommunityButton(roleId)}>
                                선생님 광장
                            </div>
                            <div onClick={() => handelPageMove("study/boards?page=1")} css={s.searchStudyButton}>
                                공부방
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div css={s.mainRightButton}>
                            <div onClick={() => handelPageMove("auth/signin")} css={s.searchTeacherButton(roleId)}>
                                <div>
                                    과외선생님 찾기
                                </div>
                            </div>
                            <div onClick={() => handelPageMove(`auth/signin`)}  css={s.searchMypageButton(roleId)}>
                                과외 학생 찾기
                            </div>
                            <div onClick={() => handelPageMove(`auth/signin`)}  css={s.searchCommunityButton(roleId)}>
                                커뮤니티
                            </div>
                            <div onClick={() => handelPageMove(`study/boards?page=1`)}  css={s.searchStudyButton}>
                                공부방
                            </div>
                        </div>
                    </>
                }
                
            </div>
        </div>
    );
}

export default Homepage;