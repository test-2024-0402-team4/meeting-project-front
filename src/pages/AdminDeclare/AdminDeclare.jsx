import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { getDeclareStudentBoard, getDeclareStudentComment, getDeclareStudyBoard, getDeclareStudyComment, getDeclareTeacherBoard, getDeclareTeacherComment, getDeclareUser, getUserStatus } from '../../apis/api/adminApi';
import { useNavigate } from 'react-router-dom';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { useTeacherCheck } from '../../hooks/useTeacherCheck';
import { useAdminCheck } from '../../hooks/useAdminCheck';

function AdminDeclare(props) {
    useAuthCheck();
    useAdminCheck();
    const [ declareBoard, setDeclareBoard ] = useState([]);
    const [ declareComment, setDeclareComment ] =useState([]);
    const [declareUser, setDeclareUser] = useState();
    const [boardContent, setBoardContent] = useState(0);
    const [ content, setContent ] = useState(0);
    
    const navigate = useNavigate();

    const handleMoveToBoard = (boardName,boardId) => {
        navigate(`/${boardName}/board/${boardId}`);
    } 

    const handleMoveToMyPage = (userId) => {
        getUserStatus(userId)
        .then(response => {
            if(response.data) {
                navigate(`/student/${userId}/mypage?page=1`);
            } else {
                navigate(`/teacher/${userId}/mypage?page=1`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const handleDelcareStudentComment = async () => {
        const response = await getDeclareStudentComment();
        setDeclareComment(response.data);
        setContent(1)
        setBoardContent(0)

    }
    const handleDelcareTecherComment = async () => {
        const response = await getDeclareTeacherComment();
        console.log(response.data)
        setDeclareComment(response.data);
        setContent(1)
        setBoardContent(1);

    }
    const handleDelcareStudyComment = async () => {
        const response = await getDeclareStudyComment();
        setDeclareComment(response.data);
        setContent(1)
        setBoardContent(2)

    }

    const handleDelcareStudentBoard = async () => {
        const response = await getDeclareStudentBoard();
        setDeclareBoard(response.data)
        setContent(0)
        setBoardContent(0)
        console.log(response.data)

    }
    const handleDelcareTeacherBoard = async () => {
        const response = await getDeclareTeacherBoard();
        setDeclareBoard(response.data)
        setContent(0)
        setBoardContent(1)
        console.log(response.data)

    }
    const handleDelcareStudyBoard = async () => {
        const response = await getDeclareStudyBoard();
        console.log(response.data)
        setDeclareBoard(response.data)
        setContent(0)
        setBoardContent(2)
    }

    const handleDeclareUserList = async () => {
        const response = await getDeclareUser()
        setContent(2)
        setDeclareUser(response.data)
    }


    return (
        <div css={s.layout}>
            <div>

                <button onClick={handleDelcareStudentBoard}>신고 된 학생 게시글</button>

                <button onClick={handleDelcareTeacherBoard}>신고 된 선생님 게시글</button>

                <button onClick={handleDelcareStudyBoard}>신고 된 공부방 게시글</button>

                <button onClick={handleDelcareStudentComment}>신고된 학생 댓글</button>

                <button onClick={handleDelcareTecherComment}>신고된 선생님 댓글</button>

                <button onClick={handleDelcareStudyComment}>신고된 공부방 댓글</button>

                <button onClick={handleDeclareUserList}>신고 된 유저 조회</button>

            </div>
            <div>
                {
                    content === 0 ? 
                    <li css={s.boardListHeader}>
                        <div>닉네임</div>
                        <div>제목</div>
                        <div>신고주제</div>
                        <div>프로필로 이동</div>
                        <div>글로 이동</div>
                        <div>신고 날짜</div>
                        <div>신고내용</div>
                    </li>
                    :
                    content === 1 ?
                    <li css={s.boardListCommentHeader}>
                        <div>닉네임</div>
                        <div>글 제목</div>
                        <div>댓글 내용</div>
                        <div>프로필로 이동</div>
                        <div>글로 이동</div>
                        <div>신고주제</div>
                        <div>신고내용</div>
                        <div>신고 날짜</div>
                    </li>
                    :
                    <li css={s.boardListCommentHeader}>
                        <div>아이디</div>
                        <div>이메일</div>
                        <div>닉네임</div>
                        <div>권한</div>
                        <div>프로필로 이동</div>
                        <div>신고주제</div>
                        <div>신고내용</div>
                        <div>신고 날짜</div>
                    </li>
                }
                
                {content === 0 &&
                    declareBoard?.map((board, index) => (
                        <li css={s.boardList} key={index}>
                            <div>{board.nickName}</div>
                            <div>{board.title}</div>
                            <div>{board.theme}</div>
                            <div>
                                <button onClick={() => handleMoveToMyPage(board.userId)}>프로필로 이동</button>
                            </div>
                            <div>
                                {boardContent === 0 ? (
                                    <button onClick={() => handleMoveToBoard("student", board.boardId)}>글로 이동</button>
                                ) : boardContent === 1 ? (
                                    <button onClick={() => handleMoveToBoard("teacher", board.boardId)}>글로 이동</button>
                                ) : (
                                    <button onClick={() => handleMoveToBoard("study", board.studyBoardId)}>글로 이동</button>
                                )}
                            </div>
                            <div>{board.createDate}</div>
                            <div dangerouslySetInnerHTML={{ __html: board.declareContent }}></div>
                        </li>
                    ))}
                    {content === 1 &&
                        declareComment?.map((comment, index) => (
                            <li css={s.boardList} key={index}>
                                <div>{comment.nickName}</div>
                                <div>{comment.title}</div>
                                <div>{comment.comment}</div>
                                <div>
                                    <button onClick={() => handleMoveToMyPage(comment.userId)}>프로필로 이동</button>
                                </div>
                                <div>
                                    {boardContent === 0 ? (
                                        <button onClick={() => handleMoveToBoard("student", comment.studentBoardId)}>글로 이동</button>
                                    ) : boardContent === 1 ? (
                                        <button onClick={() => handleMoveToBoard("teacher", comment.teacherBoardId)}>글로 이동</button>
                                    ) : (
                                        <button onClick={() => handleMoveToBoard("study", comment.studyBoardId)}>글로 이동</button>
                                    )}
                                </div>
                                <div>{comment.theme}</div>
                                <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
                                <div>{comment.createDate}</div>
                            </li>
                        ))}
                    {
                        content === 2 &&
                        declareUser?.map((user, index) => (
                            <li css={s.boardList} key={index}>
                                <div>{user.name}</div>
                                <div>{user.email}</div>
                                <div>{user.nickname}</div>
                                <div>
                                    {user.roleId === 1 ? "학생" : user.roleId === 2 ? "선생님" : "관리자"}
                                </div>
                                <div>
                                    <button onClick={() => handleMoveToMyPage(user.userId)}>프로필로 이동</button>
                                </div>
                                <div>{user.theme}</div>
                                <div dangerouslySetInnerHTML={{ __html: user.content }}></div>
                                <div>{user.createDate}</div>
                            </li>
                        ))
                    }
                    
            </div>
        </div>
    );
}

export default AdminDeclare;