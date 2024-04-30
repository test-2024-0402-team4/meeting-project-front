/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getTuteePosters } from "../../apis/api/posterApi";
import Select from "react-select";
import { getClassType, getDate, getRegion, getStudentType, getSubject } from "../../apis/api/Option";
import { FaRegCircleXmark } from "react-icons/fa6";


function StudentPostersPage(props) {

    const navigate = useNavigate();
    const [ studentPosters, setStudentPosters ] = useState([]);
    const [ subjects, setSubjects ] = useState([]);
    const [ region, setRegion ] = useState([]);
    const [ date, setDate ] = useState([]);
    const [ studentType, setStudentType ] = useState([]);

    const [searchData, setSearchData] = useState({
        subjects : [],
        regions : [],
        dates: [],
        studentTypes: []
    });

    const [filterModal, setFilterModal] = useState(0);

    useEffect(()=> {
        getStudentPoster();
        getSubjects();
        getRegions();
        getDates();
        getStudentTypes();
    }, [])

    useEffect(() => {
        getStudentPoster();

    }, [searchData.genderId, searchData.subjects, searchData.regions, searchData.dates, searchData.studentTypes]);

    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            border: "1px solid #9decdb",
            borderRadius: "4px",
            width: "220px",
            heighy:"100%"
        })
    }

    const getStudentPoster = async () => {
        try {
            const params = {
                subjectIds : searchData.subjects.map(option => option.value),
                regionIds : searchData.regions.map(option => option.value),
                dateIds: searchData.dates.map(option => option.value),
                studentTypeIds: searchData.studentTypes.map(option => option.value)
            }
            console.log(params)
            const response = await getTuteePosters(params);
            setStudentPosters(response.data)
        } catch (error) {
            console.log("에러", error);
        }
    }


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
    
    const getStudentTypes = async () => {
        try {
            const response = await getStudentType(); 
            setStudentType(() => response.data.map(studentType => ({
                value: studentType.studentTypeId,
                label: studentType.studentType
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
    
    const handleStudentTypeOption = (selectedOptions) => {
        setSearchData(prevState => ({
            ...prevState,
            studentTypes: selectedOptions
        }));
    };



    return (
        <>
        <div css={s.layout}>
            <div css={s.studentPosterRootLayout}>
                <div css = {s.filterLayout}>
                <div css={s.filterContentLayout}>
                            <div onClick={() => setFilterModal(() => 0)} >
                                필터로 검색
                            </div>
                            {filterModal === 1 ? (
                                <>
                                    <div css={s.filiterModal(1)}>
                                        <Select styles={selectStyle} key={"subjects"} options={subjects} placeholder="과목명" value={searchData.subjects} onChange={handleSubjectOption} isMulti/>
                                        <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                            <FaRegCircleXmark />
                                        </div>
                                    </div>
                            </>
                                ) : filterModal === 2 ? (
                                    <>
                                        <div css={s.filiterModal(2)}>
                                            <Select styles={selectStyle} key={"region"} options={region} placeholder="지역" value={searchData.regions} onChange={handleRegionOption} isMulti/>                        
                                            <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                                <FaRegCircleXmark />
                                            </div>
                                        </div>
                                    </>
                                ) : filterModal === 3 ? (
                                    <>
                                        <div css={s.filiterModal(3)}>
                                            <Select styles={selectStyle} key={"date"} options={date} placeholder="요일" value={searchData.dates} onChange={handleDateOption} isMulti/>
                                            <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                                <FaRegCircleXmark />
                                            </div>
                                        </div>
                                    </>
                                ) : filterModal === 4 ? (
                                    <>
                                        <div css={s.filiterModal(4)}>
                                            <Select styles={selectStyle} key={"studentType"} options={studentType} placeholder="학생타입" value={searchData.studentTypes} onChange={handleStudentTypeOption} isMulti/>
                                            <div onClick={() => setFilterModal(() => 0)} css={s.xMark}>
                                                <FaRegCircleXmark />
                                            </div>
                                        </div>
                                    </>
                                ) : 
                                (
                                    <>
                                    </>
                                )
                            }
                            <div onClick={() => setFilterModal(() => 1)} css={s.filterBox}> 
                                <div>
                                    과목
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div onClick={() => setFilterModal(() => 2)} css={s.filterBox}>
                                <div>
                                    지역
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div onClick={() => setFilterModal(() => 3)} css={s.filterBox}>
                                <div>
                                    요일
                                </div>
                                <FaChevronRight/>
                            </div>
                            <div onClick={() => setFilterModal(() => 4)} css={s.filterBox}>
                                <div>
                                    학생타입
                                </div>
                                <FaChevronRight/>
                            </div >
                        </div>
                </div>
            </div>
            <div onClick={() => setFilterModal(() => 0)}  css={s.studentPosterLayout}>
                {
                    !studentPosters ? 
                        <h1>조건에 해당하는 결과가 없습니다</h1>
                    :
                    studentPosters.map(studentPoster => 
                    <div key={studentPoster.posterId} onClick={() => navigate(`/teacher/tutee/poster?posterId=${studentPoster.posterId}`)} css={s.studentPosters}>
                        <div css={s.studentPosterContainer}>
                            <div css={s.studentPoster}>
                                <div css={s.studentPosterContent}>
                                    <div>포스터 제목</div>
                                    <div css={s.subjects}>
                                        <span>
                                            {studentPoster.subjectName.map((value, index) => (
                                                <span key={index}>
                                                    {value}
                                                    {index !== studentPoster.subjectName.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                    <div css={s.studnetinfo}>
                                        <span>{studentPoster.studentType}</span>
                                        <span>{studentPoster.genderType}</span>
                                        <span>{studentPoster.regionName}</span>
                                        {
                                            studentPoster.classType.map(value => <span>{value}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                
            </div>
        </div>
    </>
    );
}

export default StudentPostersPage;