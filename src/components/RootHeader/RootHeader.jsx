/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from "./3.png"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";

function RootHeader({children}) {

    const [ roleId, setRoleId ] =useState(0);
    const [ userId, setUserId ] = useState(0);
    const navigate = useNavigate();

    const [ isActive, setIsActive ] = useState(false);

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    useEffect(() => {
        const token = localStorage.getItem("AccessToken");
        if (token) {
            const tokenPayLoad = token.split('.')[1];
            try {
                const decodedPayload = JSON.parse(atob(tokenPayLoad));
                setRoleId(decodedPayload.roleId);
                setUserId(decodedPayload.userId);
                // console.log(decodedPayload.userId)

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
        setRoleId(0);
        setUserId(0);
        navigate("/auth/signin");
    }
    
    const handelPageMove = (page) => {
        navigate(`/${page}`);
    }

    return (
        <div css={s.headerLayout}>
            <div css={s.header}>
                <div css={s.logoLayout}>
                    <img onClick={() => handelPageMove("")} src={logo}/>
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
                                    <span onClick={openModal}>로그아웃</span>
                                    <Modal css={s.modal} isOpen={modalIsOpen} onRequestClose={closeModal}>
                                        <div css={s.modalHead}>
                                            <span>로그아웃</span>
                                            <button onClick={closeModal}><GrClose /></button>
                                        </div>
                                        <div css={s.modalContent}>
                                            <span>정말 로그아웃 하시겠습니까?</span>
                                        </div>
                                        <div css={s.modalButton}>
                                            <button onClick={handleLogout}>로그아웃</button>
                                        </div>
                                    </Modal>
                                    {
                                        roleId === 1 ? 
                                        (
                                            <span onClick={() => handelPageMove(`student/${userId}/mypage?page=1`)}>내 정보</span>
                                        )
                                        
                                        : roleId === 2 ?
                                        (
                                            <span onClick={() => handelPageMove(`teacher/${userId}/mypage?page=1`)}>내 정보</span>
                                        )
                                        : roleId === 3 ?
                                        (
                                            <></>
                                        )
                                        :
                                        <></>
                                    }
                                    <span onClick={() => handelPageMove("notice/boards?page=1")}>공지사항</span>
                                    </>
                                ) : (
                                    <>
                                    <span onClick={() => handelPageMove("auth/signin")}>로그인</span>
                                    <span onClick={() => handelPageMove("notice/boards?page=1")}>공지사항</span>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div css={s.headerItem}>
                        {
                            roleId === 1 ?                             
                                <>
                                    <span onClick={() => handelPageMove("student/tutor/list")} >선생님 찾기</span>
                                    <span onClick={() => handelPageMove(`student/myposters?userId=${userId}`)}>공고 조회</span>
                                    <span onClick={() => handelPageMove("student/boards?page=1")}>커뮤니티</span>
                                </>
                            :                             
                            roleId === 2 ? 
                                <>
                                    <span onClick={() => handelPageMove(`teacher/tutee/poster/list`)}>과외 학생 찾기</span>
                                    <span onClick={() => handelPageMove("teacher/boards?page=1")}>커뮤니티</span>
                                </>
                            :                            
                            roleId === 3 ?
                                <>
                                    <span onClick={() => handelPageMove("student/tutor/list")} >전체 회원 조회</span>
                                    <span onClick={() => handelPageMove(`teacher/tutee/poster/list`)}>학생 포스터 조회</span>
                                    <span onClick={() => handelPageMove("student/boards?page=1")}>학생 커뮤니티</span>
                                    <span onClick={() => handelPageMove("teacher/boards?page=1")}>선생님 커뮤니티</span>
                                    <span onClick={() => handelPageMove("admin/declare")}>신고 관리</span>
                                </>
                                :
                                <>
                                    <span onClick={() => handelPageMove("study/boards?page=1")}>공부방</span>
                                </>
                        }
                    </div>
                        
                </div>
            </div>
            {children}
        </div>
    );
}

export default RootHeader;