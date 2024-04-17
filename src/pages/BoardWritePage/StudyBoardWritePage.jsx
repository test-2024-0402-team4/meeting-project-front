/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactQuill from "react-quill";
import React, { useCallback, useRef, useState } from 'react';
import { useQuill } from "../../hooks/quillHook";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { useMutation } from "react-query";
import { QUILL_MODULES } from "../../constants/quillModules";
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../apis/firebase/firebaseConfig";
import { registerTeacherBoard } from "../../apis/api/teacherBoardApi";
import { registerStudyBoard } from "../../apis/api/studyBoardApi";

function StudyBoardWritePage(props) {
    
    const [quillValue , handleQuillValueChange] = useQuill();
    const [inputValue , handleInputChange] = useMaxValueValidateInput(20);
    const reactQuillRef = useRef();

    const registerBoardMutation = useMutation({
      mutationKey: "registerBoardMutation",
      mutationFn: registerStudyBoard,
      onSuccess: response => {
        alert("글이 작성되었습니다");
        window.location.replace("/study/boards?page=1");
      }
    });

    const handleSubmitClick = () => {
      
      const board = {
        userId: 21,
        title : inputValue,
        content : quillValue,
        viewCount : 3
      };

      console.log(board)
      
      registerBoardMutation.mutate(board);
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
        window.location.replace("/study/boards?page=1");
      }
    }
   
    return (
        <>
        <div css={s.layout}>
          <div css={s.writePageTitle}>
            게시글 작성
            
            <div css={s.titleButton}>
                <button onClick={handleSubmitClick}>완료</button>
                <button onClick={handleCancelClick}>취소</button>
            </div>
          </div>

          <div css={s.writeMain}>
           <input css={s.mainInput} 
           type="text" 
           placeholder="제목을 입력하세요"
           onChange={handleInputChange}
           value={inputValue} />
        </div>  

            <ReactQuill style={{
                width: "1260px",
                height: "700px"
            }}
            modules={QUILL_MODULES(quillImageHandler)}
            onChange={handleQuillValueChange}
            ref={reactQuillRef}/>
        </div>
        </>
    );
}

export default StudyBoardWritePage;