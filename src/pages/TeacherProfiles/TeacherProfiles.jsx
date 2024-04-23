/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { getTeacherProfiles } from "../../apis/api/teacherProfile";
import { Link, Route, useNavigate } from "react-router-dom";
import TeacherProfile from "../TeacherProfile/TeacherProfile";
import { useQuery, useQueryClient } from "react-query";

import Select from "react-select";

function TeacherProfiles() {
    const navigate = useNavigate();
    const [filterModal, setFilterModal] = useState(0);
    const [searchData, setSearchData] = useState({
        nickname : null,
        genderId : 0,
        subjectIds : [],
        regionIds : [],
        dateIds: [],
        classTypeIds: []
    });
    const [teacherProfiles, setTeacherProfiles] = useState([]);

    const getTeacherProfile = async () => {
        try {
            console.log(searchData)
            const response = await getTeacherProfiles(searchData);
            setTeacherProfiles(response.data);
        } catch (error) {
            console.log("에러", error);
        }
    };

    useEffect(() => {
        console.log(teacherProfiles)
        getTeacherProfile();
    }, [searchData]);

    const handleGenderChange = (event) => {
        setSearchData({
            ...searchData,
            genderId: parseInt(event.target.value)
        });
    };

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
                            {filterModal === 1 ? (
                                <>
                                    <div css={s.filiterModal}>
                                        <input type="radio" name="gender" value="0" onChange={handleGenderChange} /> 전체
                                        <input type="radio" name="gender" value="1" onChange={handleGenderChange} /> 남자
                                        <input type="radio" name="gender" value="2" onChange={handleGenderChange} /> 여자
                                    </div>
                                </>
                                ) : filterModal === 2 ? (
                                    <>
                                        <div css={s.filiterModal}>
                                        </div>
                                    </>
                                ) : filterModal === 3 ? (
                                    <>
                                        <div css={s.filiterModal}>
                                        </div>
                                    </>
                                ) : filterModal === 4 ? (
                                    <>
                                        <div css={s.filiterModal}>
                                        </div>
                                    </>
                                ) : filterModal === 5 ? (
                                    <>
                                        <div css={s.filiterModal}>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                            <div onClick={() => setFilterModal(() => 1)} css={s.filterBox}> 
                                <div>
                                    성별
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div onClick={() => setFilterModal(() => 2)} css={s.filterBox}>
                                <div>
                                    과목
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div onClick={() => setFilterModal(() => 3)} css={s.filterBox}>
                                <div>
                                    지역
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div onClick={() => setFilterModal(() => 4)} css={s.filterBox}>
                                <div>
                                    요일
                                </div>
                                <FaChevronRight/>
                            </div >
                            <div onClick={() => setFilterModal(() => 5)} css={s.filterBox}>
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
                        {
                            teacherProfiles.length === 0 
                            ? <h1>검색 결과가 없습니다.</h1>
                            :
                            teacherProfiles?.map(
                                teacherProfile => 
                                <div css={s.teacherProfile}>
                                    <div css={s.imgLayout}>
                                        <img src={teacherProfile.userImgUrl}/>
                                    </div>
                                    <div onClick={() => navigate(`/teacher/profile?userid=8`)} css={s.teacherProfileContent}>
                                        <div>{teacherProfile.nickname}</div>
                                        <div>
                                            <span>{teacherProfile.universityName} </span>
                                            <span>{teacherProfile.departmentName} </span>
                                            <span>학번 </span>
                                        </div>
                                        <div>
                                            수업 과목: {teacherProfile.subjectNames.map((subjectName, index) => (
                                                <span key={index}>
                                                    {subjectName}
                                                    {index < teacherProfile.subjectNames.length - 1 && ','}
                                                </span>
                                            ))}
                                        </div>
                                        <div>수업방식: {teacherProfile.classTypeNames.map((classTypeName, index) => (
                                                <span key={index}>
                                                    {classTypeName}
                                                    {index < teacherProfile.classTypeNames.length - 1 && ','}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        
                        

                    </div>
                </div>
            </div>
        </>
    );
}

export default TeacherProfiles;