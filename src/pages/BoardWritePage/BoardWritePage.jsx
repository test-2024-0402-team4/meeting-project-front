/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactQuill from "react-quill";
import React from 'react';
import { QUILL_MODULES } from "../../constants/quillModules";
import { useQuill } from "../../hooks/quillHook";

function BoardWritePage(props) {
    const [quillValue , handleQuillValueChange] = useQuill();
    return (
        <>
        <div css={s.layout}>
          <div css={s.writePageTitle}>
            게시글 작성
            
            <div css={s.titleButton}>
                <button>완료</button>
                <button>취소</button>
            </div>
          </div>  
            <div css={s.themaChoice}>주제</div>  
            <div css={s.imgInsert}>이미지첨부</div>

          <div css={s.writeMain}>
           <input css={s.mainInput} type="text" placeholder="제목을 입력하세요" />
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