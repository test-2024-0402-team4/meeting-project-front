/** @jsxImportSource @emotion/react */
import { Link, useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useQuery} from 'react-query';
import React, { useEffect, useState } from 'react';
import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentProfile } from "../../apis/api/profileApi";

function StudentProfileStudyCount({boardCount}) {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const [numbers,setNumbers] = useState([]);
    const maxPageNumber = boardCount?.maxPageNumber;
    const startPageNumber = page % 5 === 0 ? page -4 : (page - (page % 5)) + 1;
    const [userId , setUserId] =useState(""); 
    const [profile,setProfile] = useState({});
    const [userIdCount , setUserIdCount] = useState();

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setUserIdCount(response.data.userId);
            },
            onError: error => {
            }
        }
    );

    const studentProfileQuery = useQuery(
        ["studentProfileQuery"],
        async() => await getStudentProfile(principalQuery.data.data.userId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log("프로필 가져오기");
                setProfile(response);
                setUserId(response.data.userId);
            },
            onError: error => {
                console.log("에러");
            },
            enabled: !!principalQuery?.data?.data
        }
    )
    
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
                    to={`/student/${userIdCount}/mypage?page=1`}>처음으로</Link>
                    }

                    {
                        page !== 1 &&
                        page> 5 
                        ? 
                        <Link css={s.pageButton(false)}
                        to={`/student/${userIdCount}/mypage?page=${startPageNumber - 5}`}>&#171;</Link>
                        :
                        page !== 1 &&
                        <Link css={s.pageButton(false)} 
                        to={`/student/${userIdCount}/mypage?page=1`}>&#171;</Link>
                    }

                    {
                        page !== 1 &&
                        <Link css={s.pageButton(false)} 
                        to={`/student/${userIdCount}/mypage?page=${page -1}`}>&#60;</Link>
                    }
                </div>
                
                {
                    numbers.map(number =>
                        <Link key={number} css={s.pageButton(number === page)} to={`/student/${userIdCount}/mypage?page=${number}`}>{number}</Link>)
                }
                <div css={s.sideBox2}>
                    {
                        page !== maxPageNumber &&
                    <Link css={s.pageButton(false)} to={`/student/${userIdCount}/mypage?page=${page +1}`}>&#62;</Link>
                    }

                    {
                        page !== maxPageNumber &&
                        page < maxPageNumber -5
                        ?
                        <Link css={s.pageButton(false)}
                        to={`/student/${userIdCount}/mypage?page=${startPageNumber + 5}`}>&#187;</Link>
                        :
                        page !== maxPageNumber &&
                        <Link css={s.pageButton(false)}
                        to={`/student/${userIdCount}/mypage?page=${maxPageNumber}`}>&#187;</Link>
                    }
                    {
                        page !== maxPageNumber &&
                    <Link css={s.pageButton(false)}
                    to={`/student/${userIdCount}/mypage?page=${maxPageNumber}`}>마지막으로</Link>
                    }
                </div>
                
            </div>
            
        </div>
    );
}

export default StudentProfileStudyCount;