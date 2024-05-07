import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useSearchParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPrincipalRequest } from '../../apis/api/principal';
import { getTuteePoster, getTuteeProfile } from '../../apis/api/posterApi';
import { getStudentProfile } from '../../apis/api/profileApi';
import { sendEmailTeacherProfile } from '../../apis/api/emailApi';
import { PulseLoader } from "react-spinners";
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { useTeacherCheck } from '../../hooks/useTeacherCheck';
import { useAuthEmailCheck } from '../../hooks/useAuthEmailCheck';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";


function StudentPosterPage(props) {
    useAuthCheck();
    useTeacherCheck();
    useAuthEmailCheck("teacher");
    
    const [searchParams] = useSearchParams();
    const posterId = parseInt(searchParams.get("posterId"));
    const [poster, setPoster] = useState();
    const [userId, setUserId] = useState(0);
    const [email, setEmail] = useState();

    const [ createDate, setCreateDate ] = useState();
    const [ updateDate, setUpdateDate ] = useState();

    const queryClient = useQueryClient();
    const [profile,setProfile] = useState({});

    const principalData = queryClient.getQueryData("principalQuery");
    
    useEffect(() => {
        getPosterStudentProfile();
        // console.log(poster);
        // console.log(profile);
        
    }, [poster])

    // 만나이 계산기
    const birthDate = (profile?.birthDate)
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

    const getStudentMyPoster = useQuery(
        ["getStudentMyPoster"],
        async () => await getTuteePoster({ posterId: posterId }),
        {
            retry: 0,
            refetchOnWindowFocusf: false,
            onSuccess: response => {
                // console.log("학생 포스터 가져오기");
                // console.log(response);
                setCreateDate(response.data.createDate.substr(0, 10));
                setUpdateDate(response.data.updateDate.substr(0, 10));
                setPoster(response.data);
                setUserId(response.data.userId);
            },
            onError: error => {
                console.log("에러");
            }
        }
    )


    const getPosterStudentProfile = async () => {
        try {
            const response = await getTuteeProfile({userId: userId})
            // console.log(response);
            setProfile(response.data)
        } catch (error) {
            
        }
    }

    const sendTeacherProfile = useMutation({
        mutationKey: "sendTeacherProfile",
        mutationFn: sendEmailTeacherProfile,
        onSuccess: response => {
            alert("성공적으로 프로필이 전송되었습니다.");
            setModalIsOpen(false);
        }
    })

    const handleSendTeacherProfile = async () => {
        sendTeacherProfile.mutate({email: poster.email, userId: principalData.data.userId})
    }

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    
    
    return (
        <div css={s.layout}>
            <div css={s.mypageLayout}>
                <div css={s.profileLayout}>
                    <div css={s.profile}>
                        <div css={s.profileImgLayout}>
                           <img src={profile?.userImgUrl} />
                        </div>
                        
                        <div>
                            <span>
                                {profile?.nickname}
                            </span>
                            <span css={s.roleName}>
                                {profile?.roleNameKor}
                            </span>
                        </div>
                        <div>
                            <span>
                                {profile?.genderType}
                            </span>
                            <span>
                                {profile?.regionName}
                            </span>
                        </div>

                        <button onClick={openModal} css={s.applyButton} >프로필 보내기</button>
                        <Modal css={s.modal} isOpen={modalIsOpen} onRequestClose={closeModal}>
                            <div css={s.modalHead}>
                                <span>프로필 보내기</span>
                                <button onClick={closeModal}><GrClose /></button>
                            </div>
                            <div css={s.modalContent}>
                                <span>{profile?.nickname}에게</span>
                                <span>프로필을 보내시겠습니까?</span>
                            </div>
                            <div css={s.modalButton}>
                            <button onClick={() => handleSendTeacherProfile()}>
                            {
                                !sendTeacherProfile.isLoading ?
                                <div>
                                    프로필 보내기
                                </div>
                                :
                                <div>
                                    메일 보내는 중
                                    <PulseLoader 
                                    color="#11b69a"
                                    loading
                                    size={10}
                                    />
                                </div>
                            }
                            </button>
                            </div>
                        </Modal>
{/* 
                        <button onClick={() => handleSendTeacherProfile()} css={s.applyButton}>
                            {
                                !sendTeacherProfile.isLoading ?
                                <div>
                                    프로필 보내기
                                </div>
                                :
                                <div>
                                    메일 보내는 중
                                    <PulseLoader 
                                    color="#11b69a"
                                    loading
                                    size={10}
                                    />
                                </div>
                            }
                        </button> */}

                    </div>
                </div>
                <div css={s.studentInfoRootLayout}>
                        <div css={s.studentInfoContainer}>
                            <div css={s.studentInfotitle}>
                                <div>
                                    회원 정보
                                </div>
                            </div>
                            <div css={s.studentInfoLayout}>
                                <div css={s.studentInfo}>
                                    수업받을 학생 정보
                                </div>
                                <div css={s.studentInfoContent}>
                                    <div>
                                        성별
                                    </div>
                                    <div css={s.font2}>
                                        {poster?.genderType}학생 | {profile.studentType}
                                    </div>
                                </div>
                                <div css={s.studentInfoContent}>
                                    <div>
                                        나이
                                    </div>
                                    <div css={s.font2}>
                                        만 {age}세
                                    </div>
                                </div>
                            </div>
                            <div css={s.studentInfoLayout}>
                                <div>
                                    <div css={s.studentInfo}>과외 모집공고 내용</div>
                                    <div css={s.studentPosterInfo}>
                                        
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            요일
                                        </div>    
                                        <div css={s.font2}>
                                            {poster?.dateType.map(value => value).join(", ")}
                                        </div>                                
                                    </div>
                                </div>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            지역
                                        </div>
                                        <div css={s.font}>
                                            {poster?.regionName}   
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            과목
                                        </div>
                                        <div css={s.font}>
                                            {poster?.subjectName.map(value => value).join(", ")}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>과외 방식</div>
                                        <div css={s.font2}>
                                            {poster?.classType.map(value => value).join(", ")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div css={s.studentInfoLayout}>
                                <div>
                                    <div css={s.studentPosterInfo}>
                                        요청 사항
                                    </div>
                                    <div css={s.Postercontent}>
                                        <div>
                                            {poster?.content}
                                        </div>                             
                                    </div>
                                </div>
                            </div>

                            <div css={s.studentInfoLayout}>
                                <div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            과외 등록일
                                        </div>
                                        <div css={s.font2}>
                                            <span>{createDate}</span>
                                        </div>
                                    </div>
                                    <div css={s.studentInfoContent}>
                                        <div>
                                            최종 수정일
                                        </div>
                                        <div css={s.font2}>
                                            <span>{updateDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    );
}

export default StudentPosterPage;