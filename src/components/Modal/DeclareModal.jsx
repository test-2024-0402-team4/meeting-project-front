/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';
function DeclareModal({ onClose, onSelect }) {

    const [selectedTitle, setSelectedTitle] = useState("");
    const [customTitle, setCustomTitle] = useState("");
    const [isCustomInputVisible, setIsCustomInputVisible] = useState(false);

    const titles = [
        "모집공고에 부적절한 내용이 있어요",
        "본인인증 정보가 이상해요",
        "수업이 성사됐는데, 무단으로 약속을 어겼어요",
        "선생님이 학생/학부모로 잘못 가입하신 것 같아요",
        "게시판에 부적절한 댓글/게시글을 올렸어요",
        "외부에서 문제가 있었던 분이에요",
        "그 외 다른 문제가 있어요"
    ];

    const handleTitleChange = (event) => {
        setSelectedTitle(event.target.value);
    };

    const handleConfirm = () => {
        onSelect(selectedTitle);
        onClose();
    };

    return (
        <div css={s.modal}>
            <ul css={s.modalList}>
                {titles.map((title, index) => (
                    <li key={index} css={s.modalListItem}>
                        <label>
                            <input
                                type="radio"
                                value={title}
                                checked={selectedTitle === title}
                                onChange={handleTitleChange}
                            />
                            {title}
                        </label>
                    </li>
                ))}
            </ul>
            <button css={s.modalCloseButton} onClick={handleConfirm}>
                완료
            </button>
        </div>
    );
}

export default DeclareModal;