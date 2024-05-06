/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import Select from "react-select";
import { modifyTeacherProfile } from "../../apis/api/profileApi";
import * as s from "./style";
import { useQuery } from "react-query";
import { getClassType, getDate, getGraduateState, getRegion, getSubject, getUniversity } from "../../apis/api/Option";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import { useSignupInput } from "../../hooks/useSignupInput";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { getTeacherProfileInfo, teacherEssentialInfoModify } from "../../apis/api/teacherProfile";
import { getPrincipalRequest } from "../../apis/api/principal";
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";
import { deleteUser } from "../../apis/api/accountApi";
import { sendAuthEmail } from "../../apis/api/emailApi";
import AuthMail from "../../components/AuthMali/AuthMail";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useTeacherCheck } from "../../hooks/useTeacherCheck";
import { useAuthEmailCheck } from "../../hooks/useAuthEmailCheck";

function ModifyTeacherProfilePage(props) {
    useAuthCheck();
    useTeacherCheck();
    const [searchParams] = useSearchParams();
    const userId = parseInt(searchParams.get("userId"));


    const [ subjectOptions, setSubjectOptions ] = useState([]);
    const [ regionOptions, setRegionOptions ] = useState([]);
    const [ classTypeOptions, setClassTypeOptions ] = useState([]);
    const [ dateOptions, setDateOptions ] = useState([]);

    const [ clasTypeNames, setClassTypeNames ] = useState("");
    const [ dateNames, setDateNames ] = useState("");
    const [ regionNames, setRegionNames ] = useState("");
    const [ subjectNames, setSubjectNames ] = useState(""); 
    const [ teacherIntroduceContent, setTeacherIntroduceContent ] = useState("");


    const [ subjectIds, setSubjectIds ] = useState([]);
    const [ regionIds, setRegionIds ] = useState([]);
    const [ classTypeIds, setClassTypeIds ] = useState([]);
    const [ dateIds, setDateIds ] = useState([]);

    //------------------------------------------------------

    const [ nickname, nicknameChange, nicknameMessage, setNickname ] = useSignupInput();
    const [ departmentName, departmentChange, departmentMessage, setDepartmentName ] = useSignupInput();
    const [ phoneNumber, phoneNumberChange ] = useSignupInput();

    const [ auth, setAuth ] = useState();
    const [ name, setName ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ universityName, setUniversityName ] = useState("");
    const [ graduateState, setGraduateState ] = useState("");
    const [ genderType, setGenderType ] = useState("");

    const [ universityId, setUniversityId ] = useState();
    const [ graduateStateId, setGraduateStateId ] = useState();

    const [ infoState, setInfoState ] = useState();

    const [isActive, setIsActive] = useState(false);
    const [isEssentialActive, setIsEssentialActive] = useState(false);

    const [ universityOptions, setUniversityOptions ] = useState([]);
    const [ graduateStateOptions, setGraduateStateOptions ] = useState([]);

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const [ textLength, setTextLength ] = useState(0);


    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            onSuccess: response => {
                setName(response.data.name);
                setUsername(response.data.username);
                setEmail(response.data.email);
                setAuth(response.data.emailAuth)
                console.log(response.data.emailAuth);
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const teacherProfileQuery = useQuery(
        ["teacherProfileQuery"],
        async() => await getTeacherProfileInfo({userId: userId}),
        {
            onSuccess: response => {
                // console.log(response);
                setDepartmentName(response.data.departmentName);
                setUniversityName(response.data.universityName);
                setGraduateState(response.data.graduateState);
                setGenderType(response.data.genderType);
                setNickname(response.data.nickname);
                setClassTypeNames(response.data.classTypeNames);
                setDateNames(response.data.dateNames);
                setSubjectNames(response.data.subjectNames);
                setRegionNames(response.data.regionNames);
                setTeacherIntroduceContent(response.data.teacherIntroduceContent);
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    )


    const universityQuery = useQuery(
        ["universityQuery"],
        getUniversity,
        {
            onSuccess: response => {
                setUniversityOptions(() => response.data.map(university => {
                    return {
                        value: university.universityId,
                        label: university.universityName
                    }
                }));

            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
    const handleUniversityOnChange = (universityId) => {
        setUniversityId(() => universityId.value);
    }

    const graduateStateQuery = useQuery(
        ["graduateStateQuery"],
        getGraduateState,
        {
            onSuccess: response => {
                setGraduateStateOptions(() => response.data.map(graduateState => {
                    return {
                        value: graduateState.graduateStateId,
                        label: graduateState.graduateState
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
    const handleGraduateStateOnChange = (graduateState) => {
        setGraduateStateId(() => graduateState.value);
    }

    const classTypeQuery = useQuery(
        ["classTypeQuery"],
        getClassType,
        {
            onSuccess: response => {
                setClassTypeOptions(() => response.data.map(classType => {
                    return {
                        value: classType.classTypeId,
                        label: classType.classType
                    }
                }))
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
    const handleClassTypeIdOnChange = (classTypeIds) => {
        setClassTypeIds(classTypeIds.map(option => option.value));
        console.log(classTypeIds.map(option => option.value));
    }


    const subjectQuery = useQuery(
        ["subjectQuery"],
        getSubject,
        {
            onSuccess: response => {
                // console.log(response);
                setSubjectOptions(() => response.data.map(subject => {
                    return {
                        value: subject.subjectId,
                        label: subject.subjectName
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
    const handleSubjectIdOnChange = (subjectIds) => {
        setSubjectIds(subjectIds.map(option => option.value));
        console.log(subjectIds.map(option => option.value));
    }

    const regionQuery = useQuery(
        ["regionQuery"],
        getRegion,
        {
            onSuccess: response => {
                // console.log(response);
                setRegionOptions(() => response?.data.map(region => {
                    return {
                        value: region.regionId,
                        label: region.regionName
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
    const handleRegionIdOnChange = (regionIds) => {
        setRegionIds(regionIds.map(option => option.value));
        console.log(regionIds.map(option => option.value));
    }


    const dateQuery = useQuery(
        ["dateQuery"],
        getDate,
        {
            onSuccess: response => {
                // console.log(response);
                setDateOptions(() => response.data.map(date => {
                    return {
                        value: date.dateId,
                        label: date.dateType
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
    const handleDateIdOnChange = (dateIds) => {
        setDateIds(dateIds.map(option => option.value));
        console.log(dateIds.map(option => option.value));
    }


    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            border: "1px solid #dbdbdb",
            borderRadius: "5px",
            width: "660px",
            height: "50px"
        })
    }

    // 기본정보 수정 버튼
    const handleModifyOnClick = () => {
        // const checkFlags = [
        //     nickname?.type,
        //     universityId?.type,
        //     departmentName?.type,
        //     graduateStateId?.type,
        //     phoneNumber?.type,
        //     teacherIntroduceContent?.type
        // ];
        // // 만약 checkFlags 안에 error 타입이랑 undefined, null이 하나라도 포함되있다면
        // if(checkFlags.includes(null)) {
        //     alert("필수 입력 정보를 다시 확인하세요.");
        //     return;
        // }

        modifyTeacherProfile({
            userId,
            nickname,
            universityId,
            departmentName,
            graduateStateId,
            phoneNumber,
            teacherIntroduceContent
        }).then(response => {
            alert("수정이 완료되었습니다.");
            window.location.replace("/");
        }).catch(error => {
            alert("다시 입력해주세요.");
        });
    }

    // 필수정보 수정 버튼
    const handleEssentialInfoOnClick = () => {
        teacherEssentialInfoModify({
            userId,
            subjectIds,
            regionIds,
            classTypeIds,
            dateIds,
            teacherIntroduceContent
        }).then(response => {
            alert("수정이 완료되었습니다.");
            window.location.replace("/");
        }).catch(error => {
            alert("다시 입력해주세요.");
        });
    }

    const handleIntroduceOnChange = (e) => {
        setTeacherIntroduceContent(() => e.target.value);
        setTextLength(() => e.target.value.length);
    }

    const handleLeaveButton = () => {
        deleteUser(userId);
        localStorage.removeItem("AccessToken")
        window.location.replace("/")
    }

    const handleBasicInfo = () => {
        setInfoState(() => 1);
        setIsActive(true);
        setIsEssentialActive(false);
    }
    const handleEssentialInfo = () => {
        setInfoState(() => 2);
        setIsActive(false);
        setIsEssentialActive(true);
    }
    
    const handleAuthEmailSend = () => {
        sendAuthEmail();
    }

    return (
        <div css={s.layout}>
            <div css={s.body}>

                <div css={s.bodyBox1}>
                    <div css={s.head1}>
                        <div css={s.head2}>
                            <div css={s.head3}>
                                <span onClick={handleBasicInfo} style={{ borderBottom: isActive ? '1px solid #aaaaaa' : 'none' }}>기본정보 수정</span>
                            </div>
                            <div  css={s.head3}>
                                <span onClick={handleEssentialInfo} style={{ borderBottom: isEssentialActive ? '1px solid #aaaaaa' : 'none' }}>필수정보 수정</span>
                            </div>
                        </div>
                        <div css={s.head3}>
                            {
                                infoState === 1
                                ?
                                <button css={s.buttonBox} onClick={handleModifyOnClick}>수정하기</button>
                                :
                                <button css={s.buttonBox} onClick={handleEssentialInfoOnClick}>수정하기</button>
                            }
                        </div>                            
                    </div>
                </div>


                {
                    infoState === 1
                    ?
                    <>
                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>이름</span>
                                </div>
                                <div css={s.selectBox}>
                                    <input type={"text"} placeholder={"이름"} value={name} disabled/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>아이디</span>
                                </div>
                                <div css={s.selectBox}>
                                    <input type={"text"} placeholder={"아이디"} value={username} disabled/>
                                </div>
                            </div>
                        </div>

                        <AuthMail email={email} auth={auth}/>            
                        
                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>닉네임</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange}/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>성별</span>
                                </div>
                                <div css={s.genderBox}>
                                    {
                                        genderType === "남"
                                        ?
                                        <>
                                            <div css={s.gender}>
                                                <input id="radio1" type="radio" name="Role" value="student" disabled checked/>
                                                <label htmlFor="radio1">남자</label>
                                            </div>
                                            <div css={s.gender}>
                                                <input id="radio2" type="radio" name="Role" value="teacher" disabled/>
                                                <label htmlFor="radio2">여자</label>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div css={s.gender}>
                                                <input id="radio1" type="radio" name="Role" value="student" disabled/>
                                                <label htmlFor="radio1">남자</label>
                                            </div>
                                            <div css={s.gender}>
                                                <input id="radio2" type="radio" name="Role" value="teacher" disabled checked/>
                                                <label htmlFor="radio2">여자</label>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>


                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>대학교</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <Select styles={selectStyle} options={universityOptions} placeholder={universityName} onChange={handleUniversityOnChange}/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>졸업 유무</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <Select styles={selectStyle} options={graduateStateOptions} placeholder={graduateState} onChange={handleGraduateStateOnChange}/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>학과 명</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <AuthPageInput type={"text"} name={"departmentName"} placeholder={"학과 명"} value={departmentName} onChange={departmentChange}/>
                                </div>
                            </div>
                        </div>


                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>휴대폰 번호</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <AuthPageInput type={"text"} name={"phoneNumber"} placeholder={"휴대폰번호"} value={phoneNumber} onChange={phoneNumberChange}/>
                                </div>
                            </div>
                        </div>


                        <div css={s.leaveBox}>
                            <div css={s.leave}>
                                <div css={s.leaveSpan}>
                                    <span>회원탈퇴를 원하시는 분은 아래의 버튼을 눌러주세요.</span>
                                </div>
                                <div css={s.leaveButton}>

                                    <button onClick={openModal}>회원탈퇴<CgChevronRight /></button>
                                    <Modal css={s.modal} isOpen={modalIsOpen} onRequestClose={closeModal}>
                                        <div css={s.modalHead}>
                                            <span>회원탈퇴</span>
                                            <button onClick={closeModal}><GrClose /></button>
                                        </div>
                                        <div css={s.modalContent}>
                                            <span>정말 회원탈퇴 하시겠습니까?</span>
                                        </div>
                                        <div css={s.modalButton}>
                                            <button onClick={handleLeaveButton}>탈퇴하기</button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>과외 방식</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <Select options={classTypeOptions} styles={selectStyle} placeholder={clasTypeNames} onChange={handleClassTypeIdOnChange} isMulti/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>과외 과목</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <Select options={subjectOptions} styles={selectStyle} placeholder={subjectNames} onChange={handleSubjectIdOnChange} isMulti/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>희망 수업지역</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.selectBox}>
                                    <Select options={regionOptions} styles={selectStyle} placeholder={regionNames} onChange={handleRegionIdOnChange} isMulti/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>수업 가능 일정</span>
                                    <span>(필수)</span>
                                </div>

                                <div css={s.selectBox}>
                                    <Select options={dateOptions} styles={selectStyle} placeholder={dateNames} onChange={handleDateIdOnChange} isMulti/>
                                </div>
                            </div>
                        </div>

                        <div css={s.bodyBox}>
                            <div css={s.box2}>
                                <div css={s.spanBox}>
                                    <span>간단하게 본인을 소개해주세요.</span>
                                    <span>(필수)</span>
                                </div>
                                <div css={s.inputBox}>
                                    <textarea type="text" placeholder="" value={teacherIntroduceContent} minLength="10" onChange={handleIntroduceOnChange} />
                                </div>
                                <div css={s.text}>
                                    <span>현재 {textLength}자 / 권장 10자 이상</span>
                                </div>
                            </div>
                        </div>
                    </>
                }

            </div>


        </div>
    );
}

export default ModifyTeacherProfilePage;