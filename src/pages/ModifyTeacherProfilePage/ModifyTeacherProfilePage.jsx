/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Select from "react-select";
import { modifyTeacherProfile } from "../../apis/api/profileApi";
import * as s from "./style";
import { useQuery } from "react-query";
import { getGraduateState, getUniversity } from "../../apis/api/Option";
import { useSearchParams } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import { useSignupInput } from "../../hooks/useSignupInput";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";

function ModifyTeacherProfilePage(props) {

    const [searchParams] = useSearchParams();
    const userId = parseInt(searchParams.get("userId"));

    const [ nickname, nicknameChange, nicknameMessage, setNickname ] = useSignupInput();
    const [ departmentName, departmentChange, setDepartmentName ] = useSignupInput();
    const [ phoneNumber, phoneNumberChange ] = useSignupInput();

    const [ universityId, setUniversityId ] = useState();
    const [ graduateStateId, setGraduateStateId ] = useState();

    const [ universityOptions, setUniversityOptions ] = useState([]);
    const [ graduateStateOptions, setGraduateStateOptions ] = useState([]);


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


    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            border: "1px solid #dbdbdb",
            borderRadius: "5px",
            width: "656px",
            height: "50px"
        })
    }

    const handleModifyOnClick = () => {
        modifyTeacherProfile({
            userId,
            nickname,
            universityId,
            departmentName,
            graduateStateId,
            phoneNumber
        }).then(response => {
            alert("수정이 완료되었습니다.");
            window.location.replace("/teacher/mypage");
        }).catch(error => {
            alert("다시 입력해주세요.");
        });
    }

    return (
        <div css={s.layout}>
            <div css={s.body}>

                <div css={s.bodyBox1}>
                    <div css={s.box1}>
                        <span>내 정보 수정</span>
                        <button css={s.buttonBox} onClick={handleModifyOnClick}>수정하기</button>
                    </div>
                </div>

                <div css={s.bodyBox}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>이름</span>
                        </div>
                        <div css={s.selectBox}>
                            <input type={"text"} placeholder={"이름"}  disabled/>
                        </div>
                    </div>
                </div>

                <div css={s.bodyBox}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>아이디</span>
                        </div>
                        <div css={s.selectBox}>
                            <input type={"text"} placeholder={"아이디"}  disabled/>
                        </div>
                    </div>
                </div>

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
                            <Select styles={selectStyle} options={universityOptions} placeholder="" onChange={handleUniversityOnChange}/>
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
                            <Select styles={selectStyle} options={graduateStateOptions} placeholder="" onChange={handleGraduateStateOnChange}/>
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
                            <button>회원탈퇴<CgChevronRight /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ModifyTeacherProfilePage;
// {
//     genderType === "남"
//     ?
//     <>
//         <div css={s.gender}>
//             <input id="radio1" type="radio" name="Role" value="student" disabled checked/>
//             <label htmlFor="radio1">남자</label>
//         </div>
//         <div css={s.gender}>
//             <input id="radio2" type="radio" name="Role" value="teacher" disabled/>
//             <label htmlFor="radio2">여자</label>
//         </div>
//     </>
//     :
//     <div css={s.gender}>
//         <input id="radio1" type="radio" name="Role" value="student" disabled/>
//         <label htmlFor="radio1">남자</label>
//         <input id="radio2" type="radio" name="Role" value="teacher" disabled checked/>
//         <label htmlFor="radio2">여자</label>
//     </div>
// }