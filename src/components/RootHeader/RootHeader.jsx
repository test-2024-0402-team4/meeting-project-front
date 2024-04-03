/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React from 'react';

function RootHeader({children}) {
    return (
        <div css={s.header}>
            {children}
        </div>
    );
}

export default RootHeader;