/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { getPrincipalRequest } from "../../apis/api/principal";
import { getStudentProfile } from "../../apis/api/profileApi";
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

function Mypage(props) {

    const queryClient = useQueryClient();
    const [profile,setProfile] = useState({});
    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log("principal Success");
            },
            onError: error => {
                console.log("principal Error");
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
                console.log(response);
                setProfile(response);
            },
            onError: error => {
                console.log("에러");
            },
            enabled: !!principalQuery?.data?.data
        }
    )
console.log(profile);

    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    <div css={s.profile}>
                        <div css={s.profileUpdateButton}>
                            <button>
                                정보 수정
                            </button> 
                        </div>
                        <div css={s.profileImgLayout}>
                            <img src={profile?.data?.userImgUrl} />
                        </div>
                        <div>
                            <span>
                                {profile.data?.nickname}
                            </span>
                            <span css={s.roleName}>
                            {profile.data?.roleNameKor}
                            </span>
                        </div>
                        <div>
                            <span>
                            {profile.data?.genderType}
                            </span>
                            <span>
                            {profile.data?.regionName}
                            </span>
                        </div>
                    </div>
                </div>
                <div css={s.mypageContentLayout}>
                    <div css={s.mypageContentTitle}>
                        <div>
                            신청 내역
                        </div>
                        <div>
                            내가 쓴 글
                        </div>
                    </div>
                    <div css={s.mypageContent}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mypage;