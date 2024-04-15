/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from 'react';

function DeleteModal(props) {
    const [view, setView] = useState(false); 

    return (
        <div css={s.optionButton}>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
}

export default DeleteModal;