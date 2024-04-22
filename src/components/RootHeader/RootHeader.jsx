/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from "./3.png"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RootHeader({children}) {

    const [ roleId, setRoleId ] =useState(0);
    const [ userId, setUserId ] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("AccessToken");
        if (token) {
            const tokenPayLoad = token.split('.')[1];
            try {
                const decodedPayload = JSON.parse(atob(tokenPayLoad));
                setRoleId(decodedPayload.roleId);
                setUserId(decodedPayload.userId);
                console.log(decodedPayload.userId)

            } catch (error) {
                console.error("Failed to decode AccessToken:", error);
                setRoleId(0); // 예외 발생 시 roleId를 기본값으로 설정
            }
        } else {
            console.error("AccessToken not found in localStorage");
            setRoleId(0); // AccessToken이 없을 경우 roleId를 기본값으로 설정
        }
    }, [roleId, userId]);

    const getRoleName = (roleId) => {
        if (roleId === 1) {
          return "학생회원";
        } else if (roleId === 2) {
          return "선생회원";
        } else if (roleId === 3) {
          return "관리자";
        } else {
          return "비회원";
        }
      };
      
      const handleLogout = () => {
        localStorage.removeItem("AccessToken");
        navigate("/auth/signin");
    }
    
    const handelPageMove = (page) => {
        navigate(`/${page}`);
    }

    return (
        <div css={s.headerLayout}>
            <div css={s.header}>
                <div css={s.logoLayout}>
                    <img onClick={() => handelPageMove("main")} src={logo}/>
                </div>
                <div css={s.headerItemLayout}>
                    <div css={s.headerInfoLayout}>
                        <div css={s.roleName}>
                            {getRoleName(roleId)}
                        </div>
                        <div css={s.headerAcoountLayout}>
                            {
                                roleId ? (
                                    <>
                                    <span onClick={handleLogout}>로그아웃</span>
                                    <span onClick={() => handelPageMove(`mypage?userId=${userId}`)}>내 정보</span>
                                    <span>고객센터</span>
                                    </>
                                ) : (
                                    <>
                                    <span onClick={() => handelPageMove("auth/signin")}>로그인</span>
                                    <span>고객센터</span>
                                    </>
                                )
                            }
                            
                        </div>
                    </div>
                    <div css={s.headerItem}>
                        {
                            roleId === 1 ? (
                                <>
                                    <span>선생님 찾기</span>
                                    <span>공고 조회</span>
                                    <span onClick={() => handelPageMove("student/boards?page=1")}>커뮤니티</span>
                                </>
                            ) : (
                                roleId === 2 ? (
                                    <>
                                        <span>학생 찾기</span>
                                        <span onClick={() => handelPageMove("teacher/boards?page=1")}>커뮤니티</span>
                                    </>
                                ) : (
                                    <>
                                        <span>커뮤니티</span>
                                        <span onClick={() => handelPageMove("student/boards?page=1")}>커뮤니티</span>
                                    </>
                                )
                            )
                        }
                    </div>
                        
                </div>
            </div>
            {children}
        </div>
    );
}

export default RootHeader;