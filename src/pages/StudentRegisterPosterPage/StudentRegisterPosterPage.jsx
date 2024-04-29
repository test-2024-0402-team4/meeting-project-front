/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { studentRegisterPosterRequest } from "../../apis/api/posterApi";
import * as s from "./style";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { getClassType, getDate, getRegion, getStudentType, getSubject } from "../../apis/api/Option";
import { inputBox } from "../../components/AuthPageInput/style";
import { getPrincipalRequest } from "../../apis/api/principal";

function StudentRegisterPosterPage(props) {

    const naviagte = useNavigate();

    const [ studentTypeOptions, setStudentTypeOptions ] = useState();
    const [ classTypeOptions, setClassTypeOptions ] = useState();
    const [ regionOptions, setRegionOptions ] = useState(); 
    const [ subjectOptions, setSubjectOptions  ] = useState();
    const [ dateOptions, setDateOptions ] = useState();

    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");

    const [ userId, setUserId ] = useState();
    const [ genderId, setGenderId ] = useState();
    const [ studentTypeId, setStudentTypeId ] = useState();
    const [ classTypeIds, setClassTypeIds ] = useState([]);
    const [ subjectIds, setSubjectIds ] = useState([]);
    const [ dateIds, setDateIds ] = useState([]);
    const [ regionId, setRegionId ] = useState();

    const [ textLength, setTextLength ] = useState(0);

    
    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data.userId);
                setUserId(() => response.data.userId);
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );


    const studentTypeQuery = useQuery(
        ["studentTypeQuery"],
        getStudentType,
        {
            onSuccess: response => {
                setStudentTypeOptions(() => response.data.map(studentType => {
                    return {
                        value: studentType.studentTypeId,
                        label: studentType.studentType
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
    const handleStudentTypeOnChange = (studentTypeId) => {
        setStudentTypeId(() => studentTypeId.value);
        // console.log(studentTypeId.value);
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
                }));
            }
        }
    )
    const handleClassTypeOnChange = (classTypeIds) => {
        setClassTypeIds(classTypeIds.map(option => option.value));
        // console.log(classTypeIds.map(option => option.value));
    }

    const regionQuery = useQuery(
        ["regionQuery"],
        getRegion,
        {
            onSuccess: response => {
                setRegionOptions(() => response.data.map(region => {
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
    const handleRegionOnChange = (regionId) => {
        setRegionId(() => regionId.value);
        // console.log(regionId.value);
    }

    const subjectQuery = useQuery(
        ["subjectQuery"],
        getSubject,
        {
            onSuccess: response => {
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
    const handleSubjectOnChange = (subjectIds) => {
        setSubjectIds(subjectIds.map(option => option.value));
        // console.log(subjectIds.map(option => option.value));
    }

    const dateQuery = useQuery(
        ["dateQuery"],
        getDate,
        {
            onSuccess: response => {
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
    const handleDateOnChange = (dateIds) => {
        setDateIds(dateIds.map(option => option.value));
        // console.log(dateIds.map(option => option.value));
    }

    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            border: "1px solid #dbdbdb",
            borderRadius: "5px",
            width: "664px",
            height: "50px"
        })
    }

    const handleSubmitOnClick = () => {
        studentRegisterPosterRequest({
            userId,
            title,
            genderId,
            studentTypeId,
            classTypeIds,
            subjectIds,
            regionId,
            dateIds,
            content
        }).then(response => {
            alert("등록이 완료되었습니다.");
            naviagte("/main");
        }).catch(error => {
            alert("다시 입력해주세요.");
        })
    }

    const handleMaleOnClick = (e) => {      // 남자
        setGenderId(() => 1);
    }
    const handleFamaleOnClick = (e) => {    // 여자
        setGenderId(() => 2);
    }

    const handleTitleOnChange = (e) => {
        setTitle(() => e.target.value);
    }

    const handleContentOnChange = (e) => {
        setContent(() => e.target.value);
        setTextLength(e.target.value.length);
    }





    return (
        <div css={s.layout}>
            <div css={s.body}>

                <div css={s.bodyBox1}>
                    <div css={s.box1}>
                        <span>과외 모집공고 등록</span>
                        <button css={s.buttonBox} onClick={handleSubmitOnClick}>등록</button>
                    </div>
                </div>

                <div css={s.bodyBox}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>공고 제목</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.inputBox}>
                            <input type="text" value={title} placeholder="공고 제목을 입력해주세요." onChange={handleTitleOnChange}/>
                        </div>
                    </div>
                </div>

                <div css={s.bodyBox2}>
                    <div css={s.studentBox}>
                        <div css={s.spanBox}>
                            <span>학생 정보</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.genderBox}>
                            <span>성별</span>
                            <input id="radio1" type="radio" name="gender" value="male" onClick={handleMaleOnClick}/>
                            <label htmlFor="radio1">남자</label>
                            <input id="radio2" type="radio" name="gender" value="famale" onClick={handleFamaleOnClick}/>
                            <label htmlFor="radio2">여자</label>
                        </div>
                        <div css={s.selectBox}>
                            <Select options={studentTypeOptions} styles={selectStyle} placeholder="학습자" onChange={handleStudentTypeOnChange} />
                        </div>
                    </div>
                </div>

                <div css={s.bodyBox}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>과외 방식</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.selectBox}>
                            <Select options={classTypeOptions} styles={selectStyle} placeholder="과외 방식" onChange={handleClassTypeOnChange} isMulti/>
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
                            <Select options={subjectOptions} styles={selectStyle} placeholder="과외 과목" onChange={handleSubjectOnChange} isMulti/>
                        </div>
                    </div>
                </div>

                <div css={s.bodyBox}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>수업 지역</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.selectBox}>
                            <Select options={regionOptions} styles={selectStyle} placeholder="수업 지역" onChange={handleRegionOnChange}/>
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
                            <Select options={dateOptions} styles={selectStyle} placeholder="수업 가능 일정" onChange={handleDateOnChange} isMulti/>
                        </div>
                    </div>
                </div>

                <div css={s.bodyBox3}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>요청사항</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.inputBox2}>
                            <textarea type="text" placeholder=" 학생 본인의 등급이나 성적, 또는 해결하고 싶은 문제점 등을 자세히 작성할수록 좋은 선생님에게 연락 올 확률이 높아집니다. &#10;예시) 기초부터 탄탄히 알려주실 선생님이 필요합니다. 숙제를 많이 내주시는 스타일이 좋습니다. 등등" 
                            value={content} minLength="10" onChange={handleContentOnChange} />
                        </div>
                        <div css={s.text}>
                            <span>현재 {textLength}자 / 권장 10자 이상</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default StudentRegisterPosterPage;