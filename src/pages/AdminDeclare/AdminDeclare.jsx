import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { getDeclareStudentBoard, getDeclareStudentComment, getDeclareStudyBoard, getDeclareStudyComment, getDeclareTeacherBoard, getDeclareTeacherComment, getUserStatus } from '../../apis/api/adminApi';
import { useNavigate } from 'react-router-dom';

function AdminDeclare(props) {

    const [ declareBoard, setDeclareBoard ] = useState([]);
    
    const navigate = useNavigate();

    const handleMoveToStudentBoard = (boardId) => {
        navigate(`/student/board/${boardId}`);
    }

    const handleMoveToMyPage = (userId) => {
        getUserStatus(userId)
        .then(response => {
            if(response.data) {
                navigate(`/student/${userId}/mypage`);
            } else {
                navigate(`/teacher/${userId}/mypage`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const handleDelcareStudentComment = async () => {
        const response = await getDeclareStudentComment();
    }
    const handleDelcareStudyComment = async () => {
        const response = await getDeclareStudyComment();
    }
    const handleDelcareTecherComment = async () => {
        const response = await getDeclareTeacherComment();
    }
 
    const handleDelcareStudentBoard = async () => {
        const response = await getDeclareStudentBoard();
        setDeclareBoard(response.data)
        console.log(response.data)
    }
    const handleDelcareTeacherBoard = async () => {
        const response = await getDeclareTeacherBoard();
        setDeclareBoard(response.data)

    }
    const handleDelcareStudyBoard = async () => {
        const response = await getDeclareStudyBoard();
        setDeclareBoard(response.data)

    }
    const handleUserStatus= async () => {
        
    }

    return (
        <div css={s.layout}>
            <div>
                <button onClick={handleDelcareStudentBoard}>신고 학생 게시글 가져오기</button>
                <button onClick={handleDelcareTeacherBoard}>신고 선생님 게시글 가져오기</button>
                <button onClick={handleDelcareStudyBoard}>신고 공부방 게시글 가져오기</button>
                <button onClick={handleDelcareStudentComment}>학생 글 신고된 댓글 가져오기</button>
                <button onClick={handleDelcareStudyComment}>공부방 글 신고된 댓글 가져오기</button>
                <button onClick={handleDelcareTecherComment}>선생님 글 신고된 댓글 가져오기</button>
            </div>
            <div>
                
                    <li css={s.boardListHeader}>
                        <div>닉네임</div>
                        <div>제목</div>
                        <div>신고주제</div>
                        <div>프로필로 이동</div>
                        <div>글로 이동</div>
                        <div>신고 날짜</div>
                        <div>신고내용</div>
                    </li>
                    {declareBoard?.map((board, index) => (
                        <li css={s.boardList} key={index}>
                            <div>{board.nickName}</div>
                            <div>{board.title}</div>
                            <div>{board.theme}</div>
                            <div>
                                <button onClick={() => handleMoveToMyPage(board.userId)}>프로필로 이동</button>
                            </div>
                            <div>
                                <button onClick={() => handleMoveToStudentBoard(board.boardId)}>글로 이동</button>
                            </div>
                            <div>{board.createDate}</div>
                            <div dangerouslySetInnerHTML={{ __html: board.content }}></div>
                        </li>
                    ))}
                
            </div>
        </div>
    );
}

export default AdminDeclare;