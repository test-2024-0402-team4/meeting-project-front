/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactQuill from "react-quill";
import React, { useCallback, useRef, useState } from 'react';
import { useQuill } from "../../hooks/quillHook";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { useMutation, useQuery } from "react-query";
import { QUILL_MODULES } from "../../constants/quillModules";
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../apis/firebase/firebaseConfig";
import { getTeacherNickname, registerTeacherBoard } from "../../apis/api/teacherBoardApi";
import { getPrincipalRequest } from "../../apis/api/principal";
import { getTeacherIdRequest } from "../../apis/api/boardApi";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";
import { getTeacherIdRequest, getUserNickname } from "../../apis/api/boardApi";


function TeacherBoardWritePage(props) {
    useAuthCheck();
    useTeacherCheck();
    useAuthEmailCheck("teacher");
    const [quillValue , handleQuillValueChange] = useQuill();
    const [inputValue , handleInputChange] = useMaxValueValidateInput(20);
    const reactQuillRef = useRef();
    const [userId, setUserId] = useState("");
    const [teacherId, setTeacherId] = useState();
    const [nickName , setNickName] = useState();

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

const getTeacherNicknameRequest = useQuery(
  ["getTeacherNicknameRequest",userId],
  async() => await getTeacherNickname(userId),
  {
      refetchOnWindowFocus : false,
      onSuccess: response => {
            console.log(response);
            setNickName(response.data.nickname);
      },
      onError: error => {
        console.log(userId);
      },
      enabled: !!userId
  }
);


    const registerBoardMutation = useMutation({
      mutationKey: "registerBoardMutation",
      mutationFn: registerTeacherBoard,
      onSuccess: response => {
        alert("글이 작성되었습니다");
        window.location.replace("/teacher/boards?page=1");
      }
    });

    const handleSubmitClick = () => {
      
      const board = {
        teacherId: teacherId,
        nickname: nickName,
        title : inputValue,
        content : quillValue,
        viewCount : 0
      };

      console.log(board)
        if(window.confirm("글을 작성하시겠습니까?")){
        registerBoardMutation.mutate(board);
      }
    }

    console.log(inputValue);
    console.log(quillValue);

    const quillImageHandler = useCallback(() => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/");
  
      input.onchange = async () => {
        const file = input.files[0];
        const storageRef = ref(storage, `project_image/${uuid()}_${file.name}`);
        const uploadResponse = await uploadBytes(storageRef,file);
  
        const downloadUrl =  await getDownloadURL(uploadResponse.ref);
        const editor = reactQuillRef.current.getEditor();
        const range = editor.getSelection(true);
        editor.insertEmbed(range, "image", downloadUrl);
        editor.setSelection(range.index + 1);
  
      }
  
      input.click();
    }, []);
    const handleCancelClick = () => {
      if(window.confirm("정말 취소하시겠습니까?")){
        window.location.replace("/teacher/boards?page=1");
      }
    }
   
    return (
        <>
        <div css={s.layout}>
          <div css={s.writePageTitle}>
            게시글 작성
            
            <div css={s.titleButtons}>
                <button css={s.titleButton} onClick={handleSubmitClick}>완료</button>
                <button css={s.titleButton} onClick={handleCancelClick}>취소</button>
            </div>
          </div>

          <div css={s.writeMain}>
           <input css={s.mainInput} 
           type="text" 
           placeholder="제목을 입력하세요"
           onChange={handleInputChange}
           value={inputValue} />
        </div>  
          <div css={s.quill}>
            <ReactQuill style={{
                marginBottom: "50px",
                width: "1100px",
                height: "700px"
            }}
            modules={QUILL_MODULES(quillImageHandler)}
            onChange={handleQuillValueChange}
            ref={reactQuillRef}/>
            </div>
        </div>
        </>
    );
}

export default TeacherBoardWritePage;