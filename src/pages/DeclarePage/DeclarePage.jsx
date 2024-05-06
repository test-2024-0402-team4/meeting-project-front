/** @jsxImportSource @emotion/react */
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useQuill } from "../../hooks/quillHook";
import * as s from "./style";
import React, { useCallback, useRef, useState } from 'react';
import { storage } from "../../apis/firebase/firebaseConfig";
import {v4 as uuid} from "uuid"
import ReactQuill from "react-quill";
import { useMutation, useQuery } from "react-query";
import { getPrincipalRequest } from "../../apis/api/principal";
import { registerDeclare } from "../../apis/api/boardApi";
import { useMaxValueValidateInput } from "../../hooks/inputHook";
import { QUILL_MODULES } from "../../constants/quillModules";
import DeclareModal from "../../components/Modal/DeclareModal";
import { useParams } from "react-router-dom";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useStudentCheck } from "../../hooks/useStudentCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";
function DeclarePage(props) {
    useAuthCheck();
    useStudentCheck();
    useAuthEmailCheck("student");


    const params = useParams();
    const [quillValue , handleQuillValueChange] = useQuill();
    const reactQuillRef = useRef();
    const [userId, setUserId] = useState("");
    const [inputValue , handleInputChange] = useMaxValueValidateInput(45);
    const [inputValue2 , handleInputChange2] = useMaxValueValidateInput(145);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('');

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setUserId(response.data.userId);
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );
    console.log(params);

    const registerDeclareMutation = useMutation({
        mutationKey: "registerDeclareMutation",
        mutationFn: registerDeclare,
        onSuccess: response => {
          alert("신고가 완료되었습니다");
          window.location.replace("/");
        }
      });
      console.log(userId);
      const handleSubmitClick = () => {
        
        const board = {
          userId: userId,
          studentBoardId: params.studentBoardId,
          theme : selectedTitle,
          content : inputValue2
        };
  
        console.log(board)
        if(window.confirm("글을 작성하시겠습니까?")){
            registerDeclareMutation.mutate(board); 
        }
      }

      const handleCancelClick = () => {
        if(window.confirm("정말 취소하시겠습니까?")){
          window.location.replace("/");
        }
      }
      const handleTitleSelect = (title) => {
        setSelectedTitle(title);
        setIsModalOpen(false);
    };

    return (
        <>
        <div css={s.layout}>
          <div css={s.writePageTitle}>
            신고
            
            <div css={s.titleButtons}>
                <button css={s.titleButton} onClick={handleSubmitClick}>완료</button>
                <button css={s.titleButton} onClick={handleCancelClick}>취소</button>
            </div>
          </div>

          <div css={s.writeMain}>
           <input css={s.mainInput} 
           type="text" 
           placeholder="제목을 선택하세요"
           onChange={handleInputChange}
           value={selectedTitle || inputValue} 
           onClick={() => setIsModalOpen(true)}
           />
           {isModalOpen && (
                        <DeclareModal
                            onClose={() => setIsModalOpen(false)}
                            onSelect={handleTitleSelect}
                        />
                    )}
          </div> 

          <div css={s.writeContent}>
           <textarea css={s.contentInput} 
           type="text" 
           placeholder="내용을 입력하세요"
           onChange={handleInputChange2}
           value={inputValue2} />
          </div> 

          
        </div>
        </>
    );
}

export default DeclarePage;
