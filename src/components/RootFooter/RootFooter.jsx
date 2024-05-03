/** @jsxImportSource @emotion/react */

import * as s from "./style";
import { ImYoutube } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoChatboxEllipses } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";

function RootFooter(props) {


    return (
        <div css={s.layout}>
            <div css={s.line}>
                <div css={s.line2}>
                    <div css={s.button}>
                        <button css={s.firstButton}>회사소개</button>
                        <button css={s.secondButton}>이용약관</button>
                        <button css={s.thirdButton}>개인정보 처리방침</button>
                        <button css={s.forthButton}>FAQ</button>
                    </div>
                    <div css={s.icon}>
                        <button css={s.iconButton}><FaInstagramSquare /></button>
                        <button css={s.iconButton}><ImYoutube /></button>
                        <button css={s.iconButton}><RiKakaoTalkFill /></button>
                    </div>
                </div>
            </div>

            <div css={s.Box}>
                <div css={s.boxhead}>
                    <div css={s.head1}>
                        <span><BiSolidPhoneCall /> 전화 문의</span>
                        <span>1544-0000</span>
                        <span>(평일 10:00 ~ 18:00)</span>
                    </div>
                    <div css={s.head1}>
                        <span><IoChatboxEllipses /> 채팅 문의</span>
                        <span>(일반 문의: 평일/주말 10:00 ~ 20:00)</span>
                        <span>(오류 문의: 평일/주말 14:00 ~ 22:00)</span>
                    </div>
                    <div css={s.head1}>

                    </div>
                </div>
                <div css={s.boxbody}>
                    <div css={s.body4}>
                        <span>소개</span>
                        <span>우리 과외나무는 학년별 다양한 과목의  </span>
                        <span>증명된 전문선생님을 모시고 있습니다.</span>
                        <span>내 꿈을 향한 목표를 위한 공부! 과외나무와 함께 하세요!</span>
                    </div>
                    <div css={s.body3}>
                        <span>주소</span>
                        <span>부산광역시 부산진구 중앙대로 668 </span>
                        <span>에이원프라자 빌딩 4층</span>
                    </div>
                    <div css={s.body1}>
                        <span>(주)과외나무</span>
                        <span>팀장  정건희</span>
                        <div css={s.body2}>
                            <span>팀원  전주환</span>
                            <span>팀원  김도균</span>
                        </div>

                    </div>
                </div>
                <div css={s.boxfoot}>
                    <span>Copyright © 2024 lessonTree All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default RootFooter;