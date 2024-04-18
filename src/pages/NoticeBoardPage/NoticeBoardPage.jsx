/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import React, { useState } from 'react';
import { deleteBoardRequest, getSingleBoardReqeust, getSingleNoticeBoardReqeust } from "../../apis/api/boardApi";
import { Link, useParams } from "react-router-dom";

function NoticeBoardPage(props) {
    const params = useParams();
    const [singleBoard , setSingleBoard] = useState("");
    
    const getNoticeBoardQuery = useQuery(
        ["getNoticeBoardQuery"],
        async() => await getSingleNoticeBoardReqeust(params.noticeId),
        {
            refetchOnWindowFocus : false,
            onSuccess: response => {
               setSingleBoard(() => response.data)
                console.log(response.data);
            }
        }
    );

    

    return (
    <div css={s.layout}>
        
        <div css={s.boardPageTitle}>
            {singleBoard.title}
        </div>
        <div css={s.showDate}> {singleBoard.createDate} </div>
        <div css={s.boardListLayout}>
        <div css={s.boardPageMain}>
            <code dangerouslySetInnerHTML ={{__html: singleBoard.content}}></code>
        </div>
            <div css={s.boardPageViewCount}>{singleBoard.viewCount}</div>
            
        </div>
    
            
    </div>
    );
}

export default NoticeBoardPage;