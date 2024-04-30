/** @jsxImportSource @emotion/react */

import Select from "react-select";
import { useEffect, useState } from "react";
import * as s from "./style";
import { useQuery, useQueryClient } from "react-query";
import { getClassType, getDate, getRegion, getSubject } from "../../apis/api/Option";
import { teacherProfileRequest } from "../../apis/api/teacherProfile";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useNavigate } from "react-router-dom";
import { getPrincipalRequest } from "../../apis/api/principal";

function TeacherRegisterProfilePage() {
    

    const [ subjectOptions, setSubjectOptions ] = useState([]);
    const [ regionOptions, setRegionOptions ] = useState([]);
    const [ classTypeOptions, setClassTypeOptions ] = useState([]);
    const [ dateOptions, setDateOptions ] = useState([]);

    const navigate = useNavigate();

    const [ subjectIds, setSubjectIds ] = useState([]);
    const [ regionIds, setRegionIds ] = useState([]);
    const [ classTypeIds, setClassTypeIds ] = useState([]);
    const [ dateIds, setDateIds ] = useState([]);

    const [ userId, setUserId ] = useState();
    const [ textLength, setTextLength ] = useState(0);

    const queryClient = useQueryClient();

    // useEffect(() => {
    //     const principalData = queryClient.getQueriesData("principalQuery");
        
    //     // console.log(principalData[0][1].data.userId);
    //     setUserId(() => principalData[0]?.data.userId);
    // },[]);

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                // console.log(response.data.userId);
                setUserId(() => response.data.userId);
            },
            onError: error => {
                console.log("principal Error");
            }
        }
    );


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
            width: "656px",
            height: "50px"
        })
    }

    const handleSubmitOnClick = () => {
        teacherProfileRequest({
            userId,
            subjectIds,
            regionIds,
            dateIds,
            classTypeIds
        }).then(response => {
            alert("등록이 완료되었습니다.");
            navigate("/main");
        }).catch(error => {
            alert("다시 입력해주세요.");
        })
    }
    

    return (
        <div css={s.layout}>
            <div css={s.body}>

                <div css={s.bodyBox1}>
                    <div css={s.box1}>
                        <span>선생님 필수정보 등록</span>
                        <button css={s.buttonBox} onClick={handleSubmitOnClick}>등록</button>
                    </div>
                </div>


                <div css={s.bodyBox}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>과외 방식</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.selectBox}>
                            <Select options={classTypeOptions} styles={selectStyle} placeholder="과외 방식" onChange={handleClassTypeIdOnChange} isMulti/>
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
                            <Select options={subjectOptions} styles={selectStyle} placeholder="과외 과목" onChange={handleSubjectIdOnChange} isMulti/>
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
                            <Select options={regionOptions} styles={selectStyle} placeholder="수업 지역" onChange={handleRegionIdOnChange}/>
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
                            <Select options={dateOptions} styles={selectStyle} placeholder="수업 가능 일정" onChange={handleDateIdOnChange} isMulti/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TeacherRegisterProfilePage;