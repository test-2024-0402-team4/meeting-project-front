/** @jsxImportSource @emotion/react */
import * as s from "./style";

import { useState } from 'react';
import Select from "react-select";
import { getStudentProfile, modifyStudentProfile } from '../../apis/api/profileApi';
import { useQuery } from "react-query";
import { getRegion } from "../../apis/api/Option";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useSignupInput } from "../../hooks/useSignupInput";
import { useSearchParams } from "react-router-dom";
import { getPrincipalRequest } from "../../apis/api/principal";
import { CgChevronRight } from "react-icons/cg";

function ModifyStudentProfilePage(props) {

    const [searchParams] = useSearchParams();
    const userId = parseInt(searchParams.get("userId"));
    
    const [ nickname, nicknameChange, nicknameMessage, setNickname ] = useSignupInput();
    const [ phoneNumber, phoneNumberChange ] = useSignupInput();

    const [ name, setName ] = useState();
    const [ username, setUsername ] = useState();
    const [ regionId, setRegionId ] = useState();
    const [ regionName, setregionName ] = useState();
    const [ genderType, setGenderType ] = useState();
    
    const [ regionOptions, setRegionOptions ] = useState([]);

    const principalQuery = useQuery(
        ["principalQuery"],
        getPrincipalRequest,
        {
            onSuccess: response => {
                console.log(response);
                setUsername(response.data.username);
                setName(response.data.name);
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const studentProfileQuery = useQuery(
        ["studentProfileQuery"],
        async() => await getStudentProfile(principalQuery.data.data.userId),
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                // console.log("학생 프로필 정보가져오기");
                // console.log(response);
                setNickname(response.data.nickname);
                setGenderType(response.data.genderType);
                setregionName(response.data.regionName);
            },
            enabled: !!principalQuery?.data?.data
        }
    )

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
        modifyStudentProfile({
            userId,
            nickname,
            regionId,
            phoneNumber
        }).then(response => {
            alert("수정이 완료되었습니다.");
            window.location.replace("/student/mypage");
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
                            <span>휴대폰 번호</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.selectBox}>
                            <AuthPageInput type={"text"} name={"phoneNumber"} placeholder={"휴대폰번호"} value={phoneNumber} onChange={phoneNumberChange}/>
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
                                <div css={s.gender}>
                                    <input id="radio1" type="radio" name="Role" value="student" disabled/>
                                    <label htmlFor="radio1">남자</label>
                                    <input id="radio2" type="radio" name="Role" value="teacher" disabled checked/>
                                    <label htmlFor="radio2">여자</label>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div css={s.bodyBox}>
                    <div css={s.box2}>
                        <div css={s.spanBox}>
                            <span>거주 지역</span>
                            <span>(필수)</span>
                        </div>
                        <div css={s.selectBox}>
                            <Select styles={selectStyle} options={regionOptions} placeholder={regionName} onChange={handleRegionOnChange}/>
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

export default ModifyStudentProfilePage;