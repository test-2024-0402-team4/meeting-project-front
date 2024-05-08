/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { getTeacherProfile } from '../../apis/api/teacherProfile';
import { CiLocationOn } from "react-icons/ci";
import { BiSolidBookAlt } from "react-icons/bi";
import { useParams, useSearchParams } from 'react-router-dom';
import * as s from "./style";
import Select from "react-select";
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";
import { getClassType, getDate, getRegion, getSubject } from '../../apis/api/Option';
import { getStudentProfile } from '../../apis/api/profileApi';
import { useMutation, useQueryClient } from 'react-query';
import { saveApplicationDetail, sendApplyEmail } from '../../apis/api/emailApi';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { useStudentCheck } from '../../hooks/useStudentCheck';
import { useAuthEmailCheck } from '../../hooks/useAuthEmailCheck';

function TeacherProfile() {
    useAuthCheck();
    useStudentCheck();
    useAuthEmailCheck("student");

    const [searchParams] = useSearchParams();
    const userId = parseInt(searchParams.get("userId"))
    const [ teacherProfile, setTeacherProfile] = useState();
    const [ modal, setModal ] = useState(0);
    const [ studentUserId, setStudentUserId ] = useState();
    const [ studentAge, setStudentAge ] = useState(0);
    const [ subjects, setSubjects ] = useState([]);
    const [ region, setRegion ] = useState([]);
    const [ date, setDate ] = useState([]);
    const [ classType, setClassType ] = useState([]);
    const [ studentProfile, setStudentProfile ] = useState();
    const [ createDate, setCreateDate ] = useState();
    const [ updateDate, setUpdateDate ] = useState();
    const [ applyData, setApplyDate ] = useState(
        {
            name: null,
            age: 0,
            teacherEmail: null,
            email: null,
            gender: null,
            studentType: null,
            region : null,
            subjects : [],
            dates: [],
            classTypes: []
        }
    );

    useEffect(()=> {
        getTeacherProfileData();
        getSubjects();
        getRegions();
        getDates();
        getClassTypes();
        console.log(teacherProfile)
        console.log(studentProfile)

        const token = localStorage.getItem("AccessToken");
        if (token) {
            const tokenPayLoad = token.split('.')[1];
            try {
                const decodedPayload = JSON.parse(atob(tokenPayLoad));
                setStudentUserId(decodedPayload.userId)
                console.log(decodedPayload)
            } catch (error) {
                console.error("Failed to decode AccessToken:", error);
            } 
        } else {
            console.error("AccessToken not found in localStorage");
        }
    }, [])

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
        getStudentProfileData.mutate(studentUserId)
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    // 선생님 만 나이 계산기
    const birthDate = (teacherProfile?.birthDate)
    const year = birthDate?.substr(0, 4)
    const month = birthDate?.substr(4, 2)
    const day = birthDate?.substr(6, 2)

    const today = new Date();
    const birthDay = new Date(parseInt(year), parseInt(month), parseInt(day));

    let age = today.getFullYear() - birthDay.getFullYear();
    const m = today.getMonth() - birthDay.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
        age--;
    }

    const getStudentProfileData = useMutation({
        mutationKey: "sendTeacherProfile",
        mutationFn: getStudentProfile,
        onSuccess: response => {
            setApplyDate({
                ...applyData, 
                name: response.data.name,
                teacherEmail: null,
                email: response.data.email,
                gender: response.data.genderType,
                studentType: response.data.studentType,
            })
        console.log(applyData)
        }
    })

    const getTeacherProfileData = async () => {
        try {
            const response = await getTeacherProfile({ userId: userId });
            setTeacherProfile(response.data);
            console.log(response);
            setCreateDate(response.data.createDate.substr(0, 10));
            setUpdateDate(response.data.updateDate.substr(0, 10));
            
        } catch (error) {
            console.log("에러", error);
        }
    } 

    const handleApplyLesson = async () => {
        setModal(() => 1);
        getStudentProfileData.mutate(studentUserId)
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
        setApplyDate(prevState => ({
            ...prevState,
            subjects: selectedOptions
        }));
    };

    const handleRegionOption = (selectedOption) => {
        setApplyDate(prevState => ({
            ...prevState,
            region: selectedOption
        }));
    };
    
    const handleDateOption = (selectedOptions) => {
        setApplyDate(prevState => ({
            ...prevState,
            dates: selectedOptions
        }));
    };
    
    const handleClassTypeOption = (selectedOptions) => {
        setApplyDate(prevState => ({
            ...prevState,
            classTypes: selectedOptions
        }));
    };

    const handleStudentAge = (e) => {
        setStudentAge(e.target.value)
    }

    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            border: "1px solid #9decdb",
            borderRadius: "5px",
            width: "100%",
            heighy:"100%"
        })
    }
    const handelSendApplyMailOnClick = () => {
        const params = {
            name: applyData.name,
            age: studentAge,
            teacherEmail: teacherProfile.email,
            email: applyData.email,
            gender: applyData.gender,
            studentType: applyData.studentType,
            region: applyData.region.label,
            subjects : applyData.subjects.map(option => option.label),
            dates: applyData.dates.map(option => option.label),
            classType: applyData.classTypes.map(option => option.label)
        };
        try {
            if(window.confirm("신청 메일을 보내시겠습니까?")) {
                sendApplyEmail(params);
                alert("메일을 성공적으로 보냈습니다!")
                saveApplicationDetail(studentUserId, teacherProfile.userId);
                setModalIsOpen(false);
            }
        } catch (error) {
            alert("메일전송에 실패했습니다.")
        }
        
    }

    return (
        <>
            <div css={s.layout}>
                <div css={s.teacherProfileRootLayout}>

                    <div css={s.teacherProfile}>
                        <div css={s.profileHeader}>
                            <div css={s.imgBox}>
                                <img src={teacherProfile?.userImgUrl} alt="" />
                            </div>
                            <div css={s.profileContent}>
                                <div>{teacherProfile?.nickname}</div>
                                <div>{teacherProfile?.universityName}</div>
                                <div>
                                    <div>
                                        <CiLocationOn />
                                    </div>
                                    <div>
                                        <span>
                                            지역 : 
                                        </span>
                                        <span>
                                            {teacherProfile?.regionNames.map(regionName => regionName).join(", ")}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <BiSolidBookAlt />
                                    </div>
                                    <div>
                                        <span>
                                            과목 :
                                        </span>
                                        <span>
                                            {teacherProfile?.subjectNames.map(subjectName => subjectName).join(", ")}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button onClick={openModal} css={s.applyButton} >과외 신청하기</button>
                            <Modal css={s.modal} isOpen={modalIsOpen} onRequestClose={closeModal}>
                                <div css={s.modalHead}>
                                    <span>과외 신청하기</span>
                                    <button onClick={closeModal}><GrClose /></button>
                                </div>

                                <div css={s.modalContent}>
                                    <div css={s.studentInfo}>
                                        이름 : {applyData?.name}
                                    </div>
                                    <div css={s.studentInfo}>
                                        이메일 : {applyData?.email}
                                    </div>
                                    <div css={s.studentInfo}>
                                        성별 : {applyData?.gender}
                                    </div> 
                                    <div css={s.studentInfo}>
                                        학생 유형 : {applyData?.studentType}
                                    </div>
                                    <div css={s.selectLayout}>
                                        <Select styles={selectStyle} key={"subjects"} options={subjects} placeholder="과목명" onChange={handleSubjectOption} isMulti/>
                                    </div>
                                    <div css={s.selectLayout}>
                                        <Select styles={selectStyle} key={"region"} options={region} placeholder="지역" onChange={handleRegionOption}/>                        
                                    </div>
                                    <div css={s.selectLayout}>
                                        <Select styles={selectStyle} key={"date"} options={date} placeholder="요일" onChange={handleDateOption} isMulti/>
                                    </div>
                                    <div css={s.selectLayout}>
                                        <Select styles={selectStyle} key={"classType"} options={classType}  placeholder="수업방식" onChange={handleClassTypeOption}isMulti/>
                                    </div>
                                    <div css={s.selectLayout}>
                                        <input type="text" placeholder='만 나이를 입력해주세요' onChange={handleStudentAge}/>
                                    </div>
                                </div>
                                <div css={s.modalButton}>
                                <button onClick={() => handelSendApplyMailOnClick()}>메일 보내기</button>
                                </div>
                            </Modal>

                        </div>
                    </div>
                </div>
                    <div css={s.teacherInfoRootLayout}>
                        <div css={s.teacherInfoContainer}>
                            <div css={s.teacherInfotitle}>
                                <div>
                                    회원 정보
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    선생님 정보
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        성별
                                    </div>
                                    <div>
                                        {teacherProfile?.genderType}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        나이
                                    </div>
                                    <div>
                                        만 {age}세
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    대학 정보
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        대학명
                                    </div>
                                    <div>
                                        {teacherProfile?.universityName}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        학과명
                                    </div>
                                    <div>
                                        {teacherProfile?.departmentName}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        졸업유무
                                    </div>
                                    <div>
                                        {teacherProfile?.graduateState}
                                    </div>
                                </div>
                            </div>
                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    대면 수업 가능 지역
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        지역
                                    </div>
                                    <div css={s.subject}>
                                        {teacherProfile?.regionNames.map(regionName => regionName).join(", ")}
                                    </div>
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        요일
                                    </div>
                                    <div css={s.subject}>
                                        {teacherProfile?.dateNames.map(subjectName => subjectName).join(", ")}
                                    </div>
                                </div>
                            </div>

                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    수업 과목
                                </div>
                                <div css={s.teacherInfoContent}>
                                    <div>
                                        과목
                                    </div>
                                    <div css={s.subject}>
                                        {teacherProfile?.subjectNames.map(subjectName => subjectName).join(", ")}
                                    </div>
                                </div>
                            </div>

                            <div css={s.teacherInfoLayout}>
                                <div css={s.teacherInfo}>
                                    수업 소개
                                </div>
                                <div css={s.teacherInfoContent5}>
                                    <div >
                                        {teacherProfile?.teacherIntroduceContent}
                                    </div>
                                </div>
                            </div>

                            <div css={s.teacherInfoLayout6}>
                                <div css={s.teacherInfoContent6}>
                                    <div>프로필 등록일</div>
                                    <div>{createDate}</div>
                                </div>
                                <div css={s.teacherInfoContent6}>
                                    <div>최종 프로필 수정일</div>
                                    <div>{updateDate}</div>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </>
    );
}

export default TeacherProfile;