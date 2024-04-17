/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React, { useEffect, useState } from 'react';
import { getTeacherProfiles } from "../../apis/api/teacherProfile";
import { Link, Route, useNavigate } from "react-router-dom";
import TeacherProfile from "../TeacherProfile/TeacherProfile";

function TeacherProfiles(props) {

    const [searchData, setSearchData] = useState({
        nickname : null,
        genderId : 0,
        subjectIds : [],
        regionIds : [],
        dateIds: [],
        classTypeIds: []
    });

    const navigate = useNavigate();
 

    const [ teacherProfiles, setTeacherProfiles ] = useState([]);

    useEffect(() => {
        console.log(teacherProfiles)
    }, [teacherProfiles])

    const searchProfiles = async() => {
        await getTeacherProfiles(searchData)
        .then(response => {
            setTeacherProfiles(() => response.data)
        }
        )
        .catch(error => {
            console.log("에러")
        })
    }



    return (
        <>
            <button onClick={searchProfiles}>
                get 요청 테스트
            </button>
            <div css={s.layout}>
                {teacherProfiles.map((teacherProfile, index) => (
                    <Link style={{textDecoration : "none", color : "black"}} to={`/account/teacher/profile?userId=${teacherProfile.userId}`}> 
                    <div key={index} css={s.profileLayout}>
                        <div css={s.imgUrlLayout}>
                            imgurl
                        </div>
                        <div css={s.profileContentLayout}>
                            <div>{teacherProfile.nickname}</div>
                            <div>
                                <span>{teacherProfile.universityName} </span>
                                <span>{teacherProfile.departmentName}</span>
                            </div>
                            <div>
                                전문과목:
                                {teacherProfile.subjectNames?.map((subjectName, subIndex) => (
                                    <span key={subIndex}> {subjectName}, </span>
                                ))}
                            </div>
                            <div>
                                {teacherProfile.graduateState}
                            </div>
                        </div>
                    </div>         
                    </Link>       
                ))}
            </div>
        </>
    );
}

export default TeacherProfiles;