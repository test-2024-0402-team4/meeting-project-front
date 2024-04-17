/** @jsxImportSource @emotion/react */

import Select from "react-select";
import { useEffect, useState } from "react";
import { useQuery } from "react-query"
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useSignupInput } from "../../hooks/useSignupInput";
import * as s from "./style";
import { signupRequest } from "../../apis/api/signup";
import { getGraduateState, getRegion, getStudentType, getUniversity } from "../../apis/api/Option";
import { useNavigate } from "react-router-dom";

function SignupPage() {

    const [ name, nameChange, nameMessage ] = useSignupInput("name");
    const [ username, usernameChange, usernameMessage, setUsernameValue, setUsernameMessage ] = useSignupInput("username");
    const [ password, passwordChange, passwordMessage ] = useSignupInput("password");
    const [ checkPassword, checkPasswordChange ] = useSignupInput("checkPassword");
    const [ nickname, nicknameChange, nicknameMessage ] = useSignupInput("nickname");
    const [ email, emailChange, emailMessage ] = useSignupInput("email");

    const [ birthDate, birthDateChange, birthDateMessage ] = useSignupInput("birthDate");
    const [ phoneNumber, phoneNumberChange, phoneNumberMessage ] = useSignupInput("phoneNumber");
    const [ departmentName, departmentNameChange, departmentNameMessage ] = useSignupInput();

    const [ roleId, setRoleId ] = useState();
    const [ genderId, setGenderId ] = useState();

    const navigate = useNavigate();
    
    const [ studentTypeId, setStudentTypeId ] = useState();
    const [ regionId, setRegionId ] = useState();
    const [ universityId, setUniversityId ] = useState();
    const [ graduateStateId, setGraduateStateId ] = useState();
    
    const [ addInfo, setAddInfo ] = useState(false);

    const [ regionOption, setRegionOption ] = useState([]);
    const [ studentTypeOption, setStudentTypeOption ] = useState([]);
    const [ universityOption, setUniversityOption ] = useState([]);
    const [ graduateStateOption, setGraduateStateOption ] = useState([]);

    const [ checkPasswordMessage, setCheckPasswordMessage ] = useState(null);

    useEffect(() => {
        if(!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }else if(password === checkPassword) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            });
        }else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다."
                }
            });
        }
    },[password, checkPassword]);
    
    const regionQuery = useQuery(
        ["regionQuery"],getRegion,
        {
            onSuccess: response => {
                // console.log(response);
                setRegionOption(() => response.data.map(region => {
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

    const studentTypeQuery = useQuery(
        ["studentTypeQuery"],getStudentType,
        {
            onSuccess: response => {
                // console.log(response);
                setStudentTypeOption(() => response.data.map(studentType => {
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

    const universityQuery = useQuery(
        ["universityQuery"],getUniversity,
        {
            onSuccess: response => {
                // console.log(response);
                setUniversityOption(() => response.data.map(university => {
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
        // console.log(universityId.value);
    }

    const graduateStateQuery = useQuery(
        ["graduateStateQuery"],getGraduateState,
        {
            onSuccess: response => {
                // console.log(response);
                setGraduateStateOption(() => response.data.map(graduateState => {
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
        // console.log(graduateState.value);
    }

    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            border: "1px solid lightgreen",
            borderRadius: "0px",
            width: "220px",
        })
    }

    const handleAddInfo = () => {
        if(roleId === 1) {
            setAddInfo(() => true);
        }else if(roleId === 2) {
            setAddInfo(() => true);
        }
    }

    const handleBackInfo = () => {
        setAddInfo(() => false);
    }


    const handleStudentOnClick = (e) => {   // 학생
        setRoleId(() => 1);
    }
    const handleTeacherOnClick = (e) => {   // 선생님
        setRoleId(() => 2);
    }

    const handleMaleOnClick = (e) => {      // 남자
        setGenderId(() => 1);
    }
    const handleFamaleOnClick = (e) => {    // 여자
        setGenderId(() => 2);
    }

    const handleFirstSignup = () => {
        signupRequest({
            name,
            username,
            password,
            nickname,
            email,
            roleId,
            birthDate,
            phoneNumber,
            genderId,
            studentTypeId,
            departmentName,
            regionId,
            universityId,
            graduateStateId
        }).then(response => {
            console.log(response);
            alert("가입 성공");
            if(response.status === 201) {
                navigate("/auth/signin");
            }
        }).catch(error => {
            // 400번 오류(중복되었을 때)
            if( error.response.status === 400) {

                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);

                for(let [k , v] of errorEntries) {
                    if(k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                }
            }else {
                alert("입력 정보를 다시 확인해주세요.");
            }
        })
    }


    return (
        <div css={s.background}>
            <>
                {
                    !addInfo === true 
                    ?
                    <>
                        <div css={s.layout}>
                            <div css={s.logo}>로고</div>
                            <div css={s.signupLayout}>
                                <div css={s.signupBox}>
                                    <AuthPageInput type={"text"} name={"name"} placeholder={"사용자이름"} value={name} onChange={nameChange} message={nameMessage}/>
                                    <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange} message={usernameMessage}/>
                                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} message={passwordMessage}/>
                                    <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호확인"} value={checkPassword} onChange={checkPasswordChange} message={checkPasswordMessage}/>
                                    <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage}/>
                                    <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage}/>
                                    <div css={s.buttonBox}>
                                        <input id="radio1" type="radio" name="Role" value="student" onClick={handleStudentOnClick}/>
                                        <label htmlFor="radio1">학생</label>
                                        <input id="radio2" type="radio" name="Role" value="teacher" onClick={handleTeacherOnClick}/>
                                        <label htmlFor="radio2">선생님</label>
                                    </div>
                                </div>
                            </div>
                            <div css={s.foot}>
                                <button css={s.signupButton} onClick={handleAddInfo}>다음</button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div css={s.layout}>
                            <div css={s.logo}>로고</div>
                            <div css={s.signupLayout}>
                                <div css={s.signupBox}>
                                    <AuthPageInput type={"text"} name={"name"} placeholder={"사용자이름"} value={name} onChange={nameChange} message={nameMessage}/>
                                    <AuthPageInput type={"text"} name={"username"} placeholder={"아이디"} value={username} onChange={usernameChange} message={usernameMessage}/>
                                    <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} message={passwordMessage}/>
                                    <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호확인"} value={checkPassword} onChange={checkPasswordChange} message={checkPasswordMessage}/>
                                    <AuthPageInput type={"text"} name={"nickname"} placeholder={"닉네임"} value={nickname} onChange={nicknameChange} message={nicknameMessage}/>
                                    <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage}/>
                                    <div css={s.buttonBox}>
                                        <input id="radio1" type="radio" name="Role" value="student" onClick={handleStudentOnClick}/>
                                        <label htmlFor="radio1">학생</label>
                                        <input id="radio2" type="radio" name="Role" value="teacher" onClick={handleTeacherOnClick}/>
                                        <label htmlFor="radio2">선생님</label>
                                    </div>
                                </div>
                            </div>
                            <div css={s.foot}>
                                <button css={s.signupButton} onClick={handleAddInfo}>다음</button>
                            </div>
                        </div>
                        <>
                            {
                                roleId === 1
                                ?
                                <div css={s.layout}>
                                    <div css={s.logo}>학생</div>
                                    <div css={s.signupLayout}>
                                        <div css={s.signupBox}>
                                            <AuthPageInput type={"text"} name={"birthDate"} placeholder={"생년월일"} value={birthDate} onChange={birthDateChange} message={birthDateMessage}/>
                                            <AuthPageInput type={"text"} name={"phoneNumber"} placeholder={"휴대폰번호"} value={phoneNumber} onChange={phoneNumberChange} message={phoneNumberMessage}/>

                                            <div css={s.buttonBox}>
                                                <input id="radio3" type="radio" name="gender" value="male" onClick={handleMaleOnClick}/>
                                                <label htmlFor="radio3">남</label>
                                                <input id="radio4" type="radio" name="gender" value="famale" onClick={handleFamaleOnClick}/>
                                                <label htmlFor="radio4">여</label>
                                            </div>
                                            <div css={s.selectBox}>
                                                <Select styles={selectStyle} options={regionOption} placeholder="지역" onChange={handleRegionOnChange}/>
                                                <Select styles={selectStyle} options={studentTypeOption} placeholder="학습자" onChange={handleStudentTypeOnChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.foot}>
                                        <button css={s.signupButton} onClick={handleBackInfo}>뒤로</button>
                                        <button css={s.signupButton} onClick={handleFirstSignup}>가입하기</button>
                                    </div>
                                </div>
                                :
                                <div css={s.layout}>
                                    <div css={s.logo}>선생님</div>
                                    <div css={s.signupLayout}>
                                        <div css={s.signupBox}>
                                            <AuthPageInput type={"text"} name={"birthDate"} placeholder={"생년월일"} value={birthDate} onChange={birthDateChange} message={birthDateMessage}/>
                                            <AuthPageInput type={"text"} name={"phoneNumber"} placeholder={"휴대폰번호"} value={phoneNumber} onChange={phoneNumberChange} message={phoneNumberMessage}/>
                                            <AuthPageInput type={"text"} name={"departmentName"} placeholder={"학과명"} value={departmentName} onChange={departmentNameChange} message={departmentNameMessage}/>
                                            <div css={s.buttonBox}>
                                                <input id="radio3" type="radio" name="gender" value="male" onClick={handleMaleOnClick}/>
                                                <label htmlFor="radio3">남</label>
                                                <input id="radio4" type="radio" name="gender" value="famale" onClick={handleFamaleOnClick}/>
                                                <label htmlFor="radio4">여</label>
                                            </div>
                                            <div css={s.selectBox}>
                                                <Select styles={selectStyle} options={universityOption} placeholder="학교명" onChange={handleUniversityOnChange}/>
                                                <Select styles={selectStyle} options={graduateStateOption} placeholder="졸업구분" onChange={handleGraduateStateOnChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.foot}>
                                        <button css={s.signupButton} onClick={handleBackInfo}>뒤로</button>
                                        <button css={s.signupButton} onClick={handleFirstSignup}>가입하기</button>
                                    </div>
                                </div>
                            }
                        </>
                    </>
                }
            </>
        </div>
    );
}

export default SignupPage;