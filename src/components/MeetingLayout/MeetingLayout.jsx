import React, { Children } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MeetingLayout({children}) {
    return (
        
            <div css={s.layout}>
                {children}
            </div>
        
    );
}

export default MeetingLayout;