/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
import Modal from 'react-modal';
import DeclareModal from '../Modal/DeclareModal';
import { GrClose } from "react-icons/gr";
import { declareUser } from "../../apis/api/accountApi";
import { PiSiren } from "react-icons/pi";
Modal.setAppElement("#root");


function DeclareUser({isOpen, setDeclareModal, userId}) {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [declareContent, setDeclareContent] = useState("");
    const [titleModalOpen, setTitleModalOpen] = useState(false);

    const closeDeclareModal = () => {
        setDeclareModal(declareModal => false);
    }

    const handleTitleSelect = (title) => {
        setSelectedTitle(title);
        setTitleModalOpen(false);
    };

    const handleContent = (e) => {
        setDeclareContent(e.target.value)
    }

    const handleDeclareUser = () => {
        const param = {
            userId: userId,
            theme: selectedTitle,
            content: declareContent
        }; 
        declareUser(param)
        .then(() => {                
            alert("신고가 정상적으로 처리 되었습니다");
            setDeclareModal(false);
        })
        .catch(()=> alert("신고가 정상적으로 처리 되지 못했습니다"));
    }

    return (
        <div>
            <Modal css={s.modal} isOpen={isOpen} onRequestClose={closeDeclareModal}>
                <div css={s.modalHead}>
                    <div>
                        <div><PiSiren/></div>
                        <div>유저 신고하기</div>
                    </div>
                    <button onClick={closeDeclareModal}><GrClose /></button>
                </div>
                <input
                    css={s.mainInput}
                    type="text" 
                    placeholder="제목을 선택하세요"
                    value={selectedTitle}
                    onChange={(e) => setSelectedTitle(e.target.value)}
                    onClick={() => setTitleModalOpen(true)}
                />
                {titleModalOpen && <DeclareModal onClose={() => setTitleModalOpen(false)} onSelect={handleTitleSelect}/>}
                <div css={s.writeContent}>
                    <textarea css={s.contentInput} 
                        placeholder="내용을 입력하세요"
                        onChange={handleContent}
                        value={declareContent}
                    ></textarea>
                </div>
                <div css={s.declareButtonLayout}>
                    <div css={s.declareButton}>
                        <button onClick={handleDeclareUser}>확인</button>
                        <button onClick={closeDeclareModal}>취소</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default DeclareUser;