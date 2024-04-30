/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";

import React, { useEffect, useState } from 'react';

function StudyBoardPageCount({boardCount}) {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const [numbers,setNumbers] = useState([]);
    const maxPageNumber = boardCount?.maxPageNumber;
    const startPageNumber = page % 5 === 0 ? page -4 : (page - (page % 5)) + 1;
   
    useEffect(() => {
        const endPageNumber = startPageNumber + 4 > maxPageNumber ? maxPageNumber : startPageNumber + 4;
        
        let pageNumbers = [];

        for(let i = startPageNumber;i<= endPageNumber;i++){
           pageNumbers = [...pageNumbers, i];
        }
        setNumbers(() => pageNumbers);
      

    },[page,boardCount])
   
    return (
        <div css={s.layout}>
            <div css={s.pageNumbers}>
                <div css={s.sideBox1}>
                    {
                        page !== 1 &&
                    <Link css={s.pageButton(false)} 
                    to={`/study/boards?page=1`}>처음으로</Link>
                    }

                    {
                        page !== 1 &&
                        page> 5 
                        ? 
                        <Link css={s.pageButton(false)}
                        to={`/study/boards?page=${startPageNumber - 5}`}>&#171;</Link>
                        :
                        page !== 1 &&
                        <Link css={s.pageButton(false)} 
                        to={`/study/boards?page=1`}>&#171;</Link>
                    }

                    {
                        page !== 1 &&
                        <Link css={s.pageButton(false)} 
                        to={`/study/boards?page=${page -1}`}>&#60;</Link>
                    }
                </div>
                {
                    numbers.map(number =>
                        <Link key={number} css={s.pageButton(number === page)} to={`/study/boards?page=${number}`}>{number}</Link>)
                }
                <div css={s.sideBox2}>
                    {
                        page !== maxPageNumber &&
                    <Link css={s.pageButton(false)} to={`/study/boards?page=${page +1}`}>&#62;</Link>
                    }

                    {
                        page !== maxPageNumber &&
                        page < maxPageNumber -5
                        ?
                        <Link css={s.pageButton(false)}
                        to={`/study/boards?page=${startPageNumber + 5}`}>&#187;</Link>
                        :
                        page !== maxPageNumber &&
                        <Link css={s.pageButton(false)}
                        to={`/study/boards?page=${maxPageNumber}`}>&#187;</Link>
                    }
                    {
                        page !== maxPageNumber &&
                    <Link css={s.pageButton(false)}
                    to={`/study/boards?page=${maxPageNumber}`}>마지막으로</Link>
                    }
                </div>    
            </div>
            
        </div>
    );
}

export default StudyBoardPageCount;