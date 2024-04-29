/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { getTeacherProfiles } from "../../apis/api/teacherProfile";
import { Link, Route, useNavigate } from "react-router-dom";
import TeacherProfile from "../TeacherProfile/TeacherProfile";
import { useQuery, useQueryClient } from "react-query";
import { FaRegCircleXmark } from "react-icons/fa6";
import Select from "react-select";
import { getClassType, getDate, getRegion, getSubject } from "../../apis/api/Option";

function TeacherProfiles() {
    const navigate = useNavigate();
    const [filterModal, setFilterModal] = useState(0);
    const [searchData, setSearchData] = useState({
        nickname : null,
        genderId : 0,
        subjects : [],
        regions : [],
        dates: [],
        classTypes: []
    });

    const [teacherProfiles, setTeacherProfiles] = useState([]);
    const [ subjects, setSubjects ] = useState([]);
    const [ region, setRegion ] = useState([]);
    const [ date, setDate ] = useState([]);
    const [ classType, setClassType ] = useState([]);

    useEffect(() => {
        getTeacherProfile();
        getSubjects();
        getRegions();
        getDates();
        getClassTypes();
    }, []);

    useEffect(() => {
        getTeacherProfile();
    }, [searchData.genderId, searchData.subjects, searchData.regions, searchData.dates, searchData.classTypes]);

    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            border: "1px solid #9decdb",
            borderRadius: "4px",
            width: "220px",
            heighy:"100%"
        })
    }

    const getTeacherProfile = async () => {
        try {
            const params = {
                nickname : searchData.nickname,
                genderId : searchData.genderId,
                subjectIds : searchData.subjects.map(option => option.value),
                regionIds : searchData.regions.map(option => option.value),
                dateIds: searchData.dates.map(option => option.value),
                classTypeIds: searchData.classTypes.map(option => option.value)
            }
            const response = await getTeacherProfiles(params);
            setTeacherProfiles(response.data);
        } catch (error) {
            console.log("에러", error);
        }
    };

    const getSubjects = async () => {
        try {
            const response = await getSubject();
            setSubjects(() => response.data.map(subject => {
                return {
                    value: subject.subjectId,
                    label: subject.subjectName
                }
            }))
        } catch (error) {
            console.log("에러", error);
        }
    }

    const getRegions = async () => {
        try {
            const response = await getRegion(); 
            setRegion(() => response.data.map(region => ({
                value: region.regionId,
                label: region.regionName
            })));
        } catch (error) {
            console.log("에러", error);
        }
    }
    
    const getDates = async () => {
        try {
            const response = await getDate();
            setDate(() => response.data.map(date => ({
                value: date.dateId,
                label: date.dateType
            })));
        } catch (error) {
            console.log("에러", error);
        }
    }
    
    const getClassTypes = async () => {
        try {
            const response = await getClassType(); 
            setClassType(() => response.data.map(classType => ({
                value: classType.classTypeId,
                label: classType.classType
            })));
        } catch (error) {
            console.log("에러", error);
        }
    }
    const handleSubjectOption = (selectedOptions) => {
        setSearchData(prevState => ({
            ...prevState,
            subjects: selectedOptions
        }));
    };

    const handleGenderChange = (event) => {
        setSearchData({
            ...searchData,
            genderId: parseInt(event.target.value)
        });
    };

    const handleRegionOption = (selectedOptions) => {
        setSearchData(prevState => ({
            ...prevState,
            regions: selectedOptions
        }));
    };
    
    const handleDateOption = (selectedOptions) => {
        setSearchData(prevState => ({
            ...prevState,
            dates: selectedOptions
        }));
    };
    
    const handleClassTypeOption = (selectedOptions) => {
        setSearchData(prevState => ({
            ...prevState,
            classTypes: selectedOptions
        }));
    };
    return (
        <>
            <div css={s.layout}>
                <div  css={s.teacherProfilesRootLayout}>
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
                                    <div css={s.filiterModal(1)}>
                                        <div>
                                            <input type="radio" name="gender" value="0" onChange={handleGenderChange} /> 전체
                                            <input style={{marginLeft:"10px"}} type="radio" name="gender" value="1" onChange={handleGenderChange} /> 남자
                                            <input style={{marginLeft:"10px"}} type="radio" name="gender" value="2" onChange={handleGenderChange} /> 여자
                                        </div>
                                        <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                            <FaRegCircleXmark />
                                        </div>
                                    </div>
                                </>
                                ) : filterModal === 2 ? (
                                    <>
                                        <div css={s.filiterModal(2)}>
                                            <Select styles={selectStyle} key={"subjects"} options={subjects} placeholder="과목명" value={searchData.subjects} onChange={handleSubjectOption} isMulti/>
                                            <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                                <FaRegCircleXmark />
                                            </div>
                                        </div>
                                    </>
                                ) : filterModal === 3 ? (
                                    <>
                                        <div css={s.filiterModal(3)}>
                                            <Select styles={selectStyle} key={"region"} options={region} placeholder="지역" value={searchData.regions} onChange={handleRegionOption} isMulti/>                        
                                            <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                                <FaRegCircleXmark />
                                            </div>
                                        </div>
                                    </>
                                ) : filterModal === 4 ? (
                                    <>
                                        <div css={s.filiterModal(4)}>
                                            <Select styles={selectStyle} key={"date"} options={date} placeholder="요일" value={searchData.dates} onChange={handleDateOption} isMulti/>
                                            <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                                <FaRegCircleXmark />
                                            </div>
                                        </div>
                                    </>
                                ) : filterModal === 5 ? (
                                    <>
                                        <div css={s.filiterModal(5)}>
                                            <Select styles={selectStyle} key={"classType"} options={classType}  placeholder="수업방식" value={searchData.classTypes} onChange={handleClassTypeOption}isMulti/>
                                            <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                                <FaRegCircleXmark />
                                            </div>
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
                <div onClick={() => setFilterModal(() => 0)} css={s.teacherProfiles}>
                    <div css={s.teacherProfileContainer}>
                        {
                            teacherProfiles.length === 0 
                            ? <h1>검색 결과가 없습니다.</h1>
                            :
                            teacherProfiles?.map(
                                teacherProfile => 
                                <div key={teacherProfile.userId} css={s.teacherProfile}>
                                    <div css={s.imgLayout}>
                                        <img src={teacherProfile.userImgUrl}/>
                                    </div>
                                    <div onClick={() => navigate(`/student/tutor?userId=${teacherProfile.userId}`)} css={s.teacherProfileContent}>
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