/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
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
            <div css={s.layout}>
                <div css={s.teacherProfilesRootLayout}>
                    <div css = {s.filterLayout}>
                        <div css={s.SearchNicknameLayout}>
                            <div css={s.SearchNickname}>
                                닉네임으로 검색
                            </div>
                            <div css={s.SearchBox}>
                                <input type="text" placeholder="검색어 입력"/>
                                <RiSearchLine />
                            </div>
                        </div>
                        <div css={s.filterContentLayout}>
                            필터로 검색
                            <div css={s.filterBox}>
                                <div>
                                    성별
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div css={s.filterBox}>
                                <div>
                                    과목
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div css={s.filterBox}>
                                <div>
                                    지역
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div css={s.filterBox}>
                                <div>
                                    요일
                                </div>
                                <FaChevronRight/>
                            </div >
                            <div css={s.filterBox}>
                                <div>
                                    수업방식
                                </div>
                                <FaChevronRight/>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div css={s.teacherProfiles}>
                    <div css={s.teacherProfileContainer}>
                        <div css={s.teacherProfile}>
                            <div css={s.imgLayout}>
                            </div>
                            <div onClick={() => navigate(`/teacher/profile?userid=8`)} css={s.teacherProfileContent}>
                                <div>닉네임</div>
                                <div>
                                    <span>대학이름 </span>
                                    <span>학과 </span>
                                    <span>학번 </span>
                                </div>
                                <div>전문과목: </div>
                                <div>수업방식: </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TeacherProfiles;