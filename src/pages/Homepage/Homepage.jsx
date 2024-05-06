/** @jsxImportSource @emotion/react */


import { Link } from "react-router-dom";


import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { BsPatchCheck } from "react-icons/bs";
import { useQuery, useQueryClient } from "react-query";
import { getPrincipalRequest } from "../../apis/api/principal";
import { useEffect, useState } from "react";
import { getTeacherProfileInfo } from "../../apis/api/teacherProfile";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import boyicon from "./boy2.png";
import manicon from "./man.png";
import girlicon from "./girl2.png";
import womanicon from "./woman.png";
import bookicon from "./book3.png";
import searchicon from "./search2.png";
import communication from "./communication.png";
import juhwan from "./전주환증명사진.jpg";
import gunhi from "./정건희 증명사진.jpg";
import dogyun from "./김도균 증명사진.jpg";
import lockicon from "./lock.png";
import { getStudentProfile } from "../../apis/api/profileApi";

function Homepage(props) {
    const navigate = useNavigate("");
    const queryClient = useQueryClient();
    const [roleId, setRoleId] = useState(0);
    const [userId, setUserId] = useState(0);

    const [ teacherGenderType, setTeacherGenderType ] = useState();
    const [ studentGenderType, setStudentGenderType ] = useState();

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

    useEffect(() => {
        if(userId !== 0 && roleId === 1) {
            getStudentInfo();
        }
    },[userId]);
    
    const getTeacherInfo = async () => {
        console.log(userId)
        const response = await getTeacherProfileInfo({userId: userId})
        // console.log(response)
        setClassTypeName(response.data.classTypeNames)
        setTeacherGenderType(response.data.genderType);
    }


    const getStudentInfo = async () => {
        const response = await getStudentProfile(userId);
        // console.log(response);
        setStudentGenderType(response.data.genderType);
    }


    const handelPageMove = (page) => {
        navigate(`/${page}`);
    }
    
    return (
        <div css={s.layout}>
            <div css={s.main}>
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
                        <span css={s.span}>서비스 바로가기</span>
                    </div>
                    <div css={s.serviceBox}>
                        {
                            roleId === 1 ?
                            <>
                                <div css={s.mainRightButton}>
                                    <div css={s.button1}>
                                        <div onClick={() => handelPageMove(`student/tutor/list`)} css={s.searchTeacherButton}>
                                            <div css={s.explain}>
                                                <span>과외선생님 찾기</span>
                                                <span>유능한 선생님들이 기다리고있어요.</span>                                
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img style={{width: "90px", height: "90px", marginRight: "10px"}} src={searchicon} alt="" />
                                            </div>
                                        </div>
                                        <div  onClick={() => handelPageMove(`student/${userId}/mypage?page=1`)} css={s.searchMypageButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>내 정보</span>
                                                <span>내가 작성한 프로필을 확인해보세요.</span>
                                            </div>
                                            <div css={s.serviceIcon}>
                                                {
                                                    studentGenderType === "남"
                                                    ?
                                                    <img src={boyicon} alt="" />
                                                    :
                                                    <img src={girlicon} alt=""/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.button1}>
                                        <div  onClick={() => handelPageMove(`student/boards?page=1`)} css={s.searchCommunityButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>학생 광장</span>
                                                <span>여러 학생들과 정보를 공유해보세요.</span>                                
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img src={communication} alt="" />
                                            </div>
                                        </div>
                                        <div onClick={() => handelPageMove(`study/boards?page=1`)} css={s.searchStudyButton}>
                                            <div css={s.explain}>
                                                <span>공부방</span> 
                                                <span>여러 사람과 공부방법을 공유해보세요.</span>                            
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img src={bookicon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : roleId === 2 ?
                            <>
                                <div css={s.mainRightButton}>
                                    <div css={s.button1}>
                                        <div onClick={() => handelPageMove(`teacher/tutee/poster/list`)} css={s.searchTeacherButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>과외학생 찾기</span>
                                                <span>과외를 기다리는 학생들을 찾아보세요.</span>                                
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img style={{width: "90px", height: "90px", marginRight: "10px", marginBottom: "10px"}} src={searchicon} alt="" />
                                            </div>
                                        </div>
                                        <div onClick={() => handelPageMove(`teacher/${userId}/mypage?page=1`)} css={s.searchMypageButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>내 정보</span>
                                                <span>내가 작성한 프로필을 확인해보세요.</span>
                                            </div>
                                            <div css={s.serviceIcon}>
                                                {
                                                    teacherGenderType === "남"
                                                    ?
                                                    <img src={manicon} alt="" />
                                                    :
                                                    <img src={womanicon} alt=""/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.button1}>
                                        <div onClick={() => handelPageMove(`teacher/boards?page=1`)} css={s.searchCommunityButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>선생님 광장</span>
                                                <span>여러 선생님들과 정보를 공유해보세요.</span>                                
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img src={communication} alt="" />
                                            </div>
                                        </div>
                                        <div onClick={() => handelPageMove("study/boards?page=1")} css={s.searchStudyButton}>
                                            <div css={s.explain}>
                                                <span>공부방</span> 
                                                <span>여러 사람과 공부방법을 공유해보세요.</span>                            
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img src={bookicon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div css={s.mainRightButton}>
                                    <div css={s.button1}>
                                        <div onClick={() => handelPageMove("auth/signin")} css={s.searchTeacherButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>과외 선생님 찾기</span>
                                                <span>로그인 후 이용바랍니다.</span>
                                            </div>
                                        </div>
                                        <div onClick={() => handelPageMove(`auth/signin`)}  css={s.searchMypageButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>과외 학생 찾기</span>
                                                <span>로그인 후 이용바랍니다.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.button1}>
                                        <div onClick={() => handelPageMove(`auth/signin`)}  css={s.searchCommunityButton(roleId)}>
                                            <div css={s.explain}>
                                                <span>커뮤니티</span>
                                                <span>로그인 후 이용바랍니다.</span>                                
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img src={communication} alt="" />
                                            </div>
                                        </div>
                                        <div onClick={() => handelPageMove(`study/boards?page=1`)}  css={s.searchStudyButton}>
                                            <div css={s.explain}>
                                                <span>공부방</span> 
                                                <span>여러 사람과 공부방법을 공유해보세요.</span>                            
                                            </div>
                                            <div css={s.serviceIcon}>
                                                <img src={bookicon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }    
                    </div>
                
                </div>    
            </div>

            {
                roleId === 1 || roleId === 2
                ?
                <div css={s.bottom}>
                    <div css={s.leftTitle}>
                        <span>이번주 인기 선생님들</span>
                    </div>

                    <div css={s.profileCard}>
                        <div css={s.card}>
                            <div css={s.photo}>
                                <img style={{width: "180px", height: "230px"}} src={juhwan} alt="" />
                            </div>
                            <div css={s.subinfo}> 
                                <span>이름 : 전주환</span>
                                <span>이메일 w7285@naver.com</span>
                                <span><IoIosPhonePortrait /> 010.7285.6720.</span>
                                <Link to="https://github.com/JeonJuhwanaaa" target="_blank" css={s.Link}>GitHub 바로가기</Link>
                            </div>
                        </div>
                        <div css={s.card}>
                            <div css={s.photo}>
                                <img style={{width: "180px", height: "230px"}} src={gunhi} alt="" />
                            </div>
                            <div css={s.subinfo}> 
                                <span>이름 : 정건희</span>
                                <span>이메일 rjsgmlq33@naver.com</span>
                                <span><IoIosPhonePortrait /> 010.3548.5084.</span>
                                <Link to="https://github.com/donasman" target="_blank" css={s.Link}>GitHub 바로가기</Link>
                            </div>

                        </div>
                        <div css={s.card}>
                            <div css={s.photo}>
                                <img style={{width: "190px", height: "240px"}} src={dogyun} alt="" />
                            </div>
                            <div css={s.subinfo}> 
                                <span>이름 : 김도균</span>
                                <span>이메일 rlaehrbs1968@naver.com</span>
                                <span><IoIosPhonePortrait /> 010.5114.3695.</span>                            
                                <Link to="https://github.com/GyunNote" target="_blank" css={s.Link}>GitHub 바로가기</Link>
                            </div>

                        </div>
                    </div>
                </div>
                :
                <div css={s.bottom}>
                    <div css={s.leftTitle}>
                        <span>이번주 인기 선생님들</span>
                    </div>
                    <div css={s.profileCard}>
                        <div css={s.card}>
                            <div>
                                <span><CiLock /></span>
                                <Link to={"/auth/signin"} css={s.Link}>로그인</Link>
                                <span> 후 이용바랍니다.</span>
                            </div>
                        </div>
                        <div css={s.card}>
                            <div>
                                <span><CiLock /></span>
                                <Link to={"/auth/signin"} css={s.Link}>로그인</Link>
                                <span> 후 이용바랍니다.</span>
                            </div>
                        </div>
                        <div css={s.card}>
                            <div>
                                <span><CiLock /></span>
                                <Link to={"/auth/signin"} css={s.Link}>로그인</Link>
                                <span> 후 이용바랍니다.</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Homepage;