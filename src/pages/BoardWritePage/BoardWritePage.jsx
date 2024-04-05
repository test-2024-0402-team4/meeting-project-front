/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactQuill from "react-quill";
import React, { useRef, useState } from 'react';
import { QUILL_MODULES } from "../../constants/quillModules";
import { useQuill } from "../../hooks/quillHook";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { useMutation } from "react-query";
import { registerStudentBoard } from "../../apis/api/boardApi";

function BoardWritePage(props) {
    
    const [quillValue , handleQuillValueChange] = useQuill();
    const [inputValue , handleInputChange] = useMaxValueValidateInput(20);
    const [num , setNum] = useState(0);

    const registerBoardMutation = useMutation({
      mutationKey: "registerBoardMutation",
      mutationFn: registerStudentBoard,
      onSuccess: response => {
        alert("글이 작성되었습니다");
        window.location.replace("/board/student/boardList");
      }
    });

    const handleSubmitClick = () => {
      const board = {
        studentId: 27,
        title : inputValue,
        content : quillValue,
        theme: "인사",
        viewCount : 3
      };

      console.log(board)
      
      registerBoardMutation.mutate(board);
    }

    console.log(inputValue);
    console.log(quillValue);

    return (
        <>
        <div css={s.layout}>
          <div css={s.writePageTitle}>
            게시글 작성
            
            <div css={s.titleButton}>
                <button onClick={handleSubmitClick}>완료</button>
                <button>취소</button>
            </div>
          </div>  
            <div css={s.themaChoice}>주제</div>  
            <div css={s.imgInsert}>이미지첨부</div>

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
            modules={QUILL_MODULES}
            onChange={handleQuillValueChange}/>
        </div>
        </>
    );
}

export default BoardWritePage;