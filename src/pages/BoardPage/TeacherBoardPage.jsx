/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { deleteTeacherBoardRequest, getSingleTeacherBoardReqeust, updateTeacherBoardViewCountRequest } from "../../apis/api/teacherBoardApi";
import TeacherComment from "../../components/StudentComment/TeacherComment";
import GetTime from "../../components/GetTime/GetTime";
import { GrView } from "react-icons/gr";
import { getPrincipalRequest } from "../../apis/api/principal";
import { getTeacherIdByTeacherBoardIdRequest, getTeacherIdRequest, updateBoardViewCountRequest } from "../../apis/api/boardApi";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";

function TeacherBoardPage(props) {
    useAuthCheck();
    useTeacherCheck();
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");

    const [timeStamp,setTimeStamp] = useState("");
    const formattedTime = GetTime(new Date(timeStamp));
    const [userId, setUserId] = useState("");
    const [teacherId, setTeacherId] = useState();
    const [userIdByBoard , setUserIdByBoard] = useState();

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log("principal Success");
                console.log(response);
                setUserId(response.data.userId);
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );

    const updateViewCount = useQuery(
        ["updateViewCount"],
        async () => await updateTeacherBoardViewCountRequest(params?.teacherBoardId),
        {
            refetchOnWindowFocus: false,
            onSuccess: () => {
                getBoardQuery.refetch();
            }
        }
    )
  
    const getTeacherId = useQuery(
      ["getTeacherId",userId],
      async() => await getTeacherIdRequest(userId),
      {
          refetchOnWindowFocus : false,
          onSuccess: response => {
                console.log(response);
                setTeacherId(response.data.teacherId);
          },
          onError: error => {
            console.log(userId);
          },
          enabled: !!userId
      }
  );
  console.log(teacherId);

  const getTeacherIdByBoardId = useQuery(
    ["getTeacherIdByBoardId"],
    async() => await getTeacherIdByTeacherBoardIdRequest(params.teacherBoardId),
    {
        refetchOnWindowFocus : false,
        onSuccess: response => {
            console.log(response.data.teacherId);
            setUserIdByBoard(response.data.teacherId);
        }
    }
);

    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleTeacherBoardReqeust(params.teacherBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
               setTimeStamp(() => response.data.createDate)
                console.log(response.data);
            }
        }
    );

    const deleteBoardMutation = useMutation({
        mutationKey:"deleteBoardMutation",
        mutationFn: deleteTeacherBoardRequest,
        onSuccess: response => {
            alert("삭제 완료")
            window.location.replace("/teacher/boards?page=1");

        }
    });
    
    const handleDeleteClick = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
        deleteBoardMutation.mutate(params.teacherBoardId);
        }
    }

    console.log(teacherId);
    console.log(userIdByBoard);

    const handleDeclareClick = () => {
        window.location.replace(`/notice/declare/teacher/${params.teacherBoardId}`);
    }
    

    return (
    <div css={s.layout}>
        <div css={s.authority}>
            <button css={s.authorityButton}>선생님용</button>
            <button css={s.authorityButton}>공부방</button>
        </div>
        
        <div css={s.showDate}> {formattedTime} </div>

        <div css={s.boardListLayout}>
           <div css={s.boardPageProfile}>
                <div css={s.boardPageMainHeader}>
                        <div css={s.boardPageProfileImg}> img </div>
                        <div>
                            <div> {singleBoard.title}</div>
                            <div> author </div>
                        </div>
                </div>
                <div css={s.optionButtons}>
                <div css={s.boardPageViewCount}>
                <div css={s.viewIcon}>
                        <GrView />
                    </div>
                    {singleBoard.viewCount}</div>

                    {
                        teacherId === userIdByBoard ?
                    <>    
                        <Link to={`/teacher/board/update/${singleBoard.teacherBoardId}`}>
                        <button css={s.optionButton}>수정</button>
                        </Link>
                        <button css={s.optionButton} onClick={handleDeleteClick}>삭제</button>
                    </>
                    :
                    <div css={s.blank}>
                        <button onClick={handleDeclareClick} css={s.optionButton}>신고</button>
                    </div>
                    }
                </div>

           </div>
           
        <div css={s.boardPageMain}>
            <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
        </div>   
        
            
        </div>
        
        <div>
            
        </div>
            <TeacherComment />
    </div>
    );
}

export default TeacherBoardPage;