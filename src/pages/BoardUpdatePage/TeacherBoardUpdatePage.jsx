/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactQuill from "react-quill";
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useQuill } from "../../hooks/quillHook";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { useMutation, useQuery } from "react-query";
import { QUILL_MODULES } from "../../constants/quillModules";
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../apis/firebase/firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleTeacherBoardReqeust, updateTeacherBoardRequest } from "../../apis/api/teacherBoardApi";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";

function TeacherBoardUpdatePage(props) {
    useAuthCheck();
    useTeacherCheck();
    useAuthEmailCheck("teacher");
    const params = useParams();
    const [quillValue , handleQuillValueChange, setQuillValue] = useQuill();
    const [inputValue , handleInputChange, setInputValue] = useMaxValueValidateInput(20);
    const reactQuillRef = useRef();
    const navigate = useNavigate();


    const getBoardQuery = useQuery(
        ["getBoardQuery"],
        async() => await getSingleTeacherBoardReqeust(params.teacherBoardId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setInputValue(() => response.data.title)
               setQuillValue(() => response.data.content)
                console.log(response.data);
 
            }
        }
    );
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
    const modules = useMemo(()=> QUILL_MODULES(quillImageHandler), []);

    const updateBoardMutation = useMutation({
      mutationKey: "updateBoardMutation",
      mutationFn: updateTeacherBoardRequest,
      onSuccess: response => {
        alert("변경이 완료되었습니다!");
        navigate("/teacher/boards?page=1");
      },
      onError: error =>{
        console.log(error)
      }
    });
    


    const handleSubmitClick = () => {
      const board = {
        teacherBoardId : params.teacherBoardId,
        title : inputValue,
        content : quillValue
      };

      console.log(board)
      
      updateBoardMutation.mutate({
        teacherBoardId: params.teacherBoardId,
        data: board
      });
    }
    console.log(params.teacherBoardId);

    console.log(inputValue);
    console.log(quillValue);

    const handleCancelClick = () => {
      if(window.confirm("정말 취소하시겠습니까?")){
        navigate("/teacher/boards?page=1")
      }
    }
   
    return (
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
          
          <div css={s.quill}>
              <ReactQuill style={{
                marginBottom: "50px",
                width: "1100px",
                height: "700px"
              }}
              modules={modules}
              onChange={handleQuillValueChange}
              value={quillValue}
              ref={reactQuillRef}
              />
            </div>
          </div>
        </div>
    );
}

export default TeacherBoardUpdatePage;