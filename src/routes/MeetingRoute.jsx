import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardListPage from '../pages/BoardListPage/BoardListPage';
import BoardWritePage from '../pages/BoardWritePage/BoardWritePage';
import BoardPage from '../pages/BoardPage/BoardPage';
import BoardUpdatePage from '../pages/BoardUpdatePage/BoardUpdatePage';
import TeacherBoardListPage from '../pages/BoardListPage/TeacherBoardListPage';
import TeacherBoardWritePage from '../pages/BoardWritePage/TeacherBoardWritePage';
import TeacherBoardPage from '../pages/BoardPage/TeacherBoardPage';
import TeacherBoardUpdatePage from '../pages/BoardUpdatePage/TeacherBoardUpdatePage';
import StudyBoardListPage from '../pages/BoardListPage/StudyBoardListPage';
import StudyBoardWritePage from '../pages/BoardWritePage/StudyBoardWritePage';
import StudyBoardPage from '../pages/BoardPage/StudyBoardPage';
import StudyBoardUpdatePage from '../pages/BoardUpdatePage/StudyUpdatePage';
import RootHeader from '../components/RootHeader/RootHeader';
import RootFooter from '../components/RootFooter/RootFooter';
import Homepage from '../pages/Homepage/Homepage';
import Mypage from '../pages/Mypage/Mypage';
import ProfileTest from '../pages/ProfileTest/ProfileTest';
import { useQuery, useQueryClient } from 'react-query';
import TeacherRegisterProfilePage from '../pages/TeacherRegisterProfilePage/TeacherRegisterProfilePage';
import TeacherProfiles from '../pages/TeacherProfiles/TeacherProfiles';
import TeacherProfile from '../pages/TeacherProfile/TeacherProfile';
import StudentPostersPage from '../pages/StudentPostersPage/StudentPostersPage';
import StudentMyPostersPage from '../pages/StudentMyPostersPage/StudentMyPostersPage';
import StudentPosterPage from '../pages/StudentPosterPage/StudentPosterPage';
import StudentMyPosterPage from '../pages/StudentMyPosterPage/StudentMyPosterPage';
import StudentRegisterPosterPage from '../pages/StudentRegisterPosterPage/StudentRegisterPosterPage';
import MypageStudy from '../pages/Mypage/MypageStudy';
import MypageTeacher from '../pages/Mypage/MypageTeacher';
import MypageTeacherStudy from '../pages/Mypage/MypageTeacherStudy';
import StudentMyPosterModifyPage from '../pages/StudentMyPosterModifyPage/StudentMyPosterModifyPage';
import ModifyStudentProfilePage from '../pages/ModifyStudentProfilePage/ModifyStudentProfilePage';
import ModifyTeacherProfilePage from '../pages/ModifyTeacherProfilePage/ModifyTeacherProfilePage';
import NoticeBoardPage from '../pages/NoticeBoardPage/NoticeBoardPage';
import NoticeBoardListPage from '../pages/NoticeBoardList/NoticeBoardList';
import { getPrincipalRequest } from '../apis/api/principal';
import DeclarePage from '../pages/DeclarePage/DeclarePage';
import DeclareStudentCommentPage from '../pages/DeclarePage/DeclareStudentCommentPage';
import DeclareTeacherPage from '../pages/DeclarePage/DeclareTeacherPage';
import DeclareTeacherCommentPage from '../pages/DeclarePage/DeclareTeacherCommentPage';
import DeclareStudyCommentPage from '../pages/DeclarePage/DeclareStudyCommentPage';
import DeclareStudyPage from '../pages/DeclarePage/DeclareStudyPage';
import AdminDeclare from '../pages/AdminDeclare/AdminDeclare';
import { useAuthCheck } from '../hooks/useAuthCheck';


function MeetingRoute(props) {

    return (
      <>
        <Routes>
        <Route path='/' element={<Homepage />} />
              <Route path='/student/:userId/mypage' element={<Mypage />} />
              <Route path='/student/:userId/mypage/study' element={<MypageStudy />} />
              <Route path='/teacher/:userId/mypage' element={<MypageTeacher />} />
              <Route path='/teacher/:userId/mypage/study' element={<MypageTeacherStudy />} />

              <Route path='/student/mypage/modify' element={ <ModifyStudentProfilePage />} />
              <Route path='/teacher/mypage/modify' element={ <ModifyTeacherProfilePage />} />

              <Route path='/admin/declare' element={<AdminDeclare />} />

              <Route path='/student/tutor/list' element={<TeacherProfiles />} />
              <Route path='/student/tutor' element={<TeacherProfile />} />
              <Route path='/student/myposter' element={<StudentMyPosterPage />}/>
              <Route path='/student/myposters' element={<StudentMyPostersPage />} />
              <Route path='/student/myposter/modify' element={ <StudentMyPosterModifyPage />} />
              <Route path='/student/register/poster' element={ <StudentRegisterPosterPage /> } />
                          
              <Route path='/teacher/tutee/poster/list' element={<StudentPostersPage />} />
              <Route path='/teacher/tutee/poster' element={<StudentPosterPage />} />
              <Route path='/teacher/register/profile' element={ <TeacherRegisterProfilePage /> } />

              <Route path="/student/boards" element={<BoardListPage/>} />
              <Route path="/student/board" element={<BoardWritePage/>} />
              <Route path="/student/board/:studentBoardId" element={<BoardPage/>} />
              <Route path="/student/board/update/:studentBoardId" element={<BoardUpdatePage/>} />

              <Route path="/teacher/boards" element={<TeacherBoardListPage/>} />
              <Route path="/teacher/board" element={<TeacherBoardWritePage/>} />
              <Route path="/teacher/board/:teacherBoardId" element={<TeacherBoardPage/>} />
              <Route path="/teacher/board/update/:teacherBoardId" element={<TeacherBoardUpdatePage/>} />
              
              <Route path="/study/boards" element={<StudyBoardListPage/>} />
              <Route path="/study/board" element={<StudyBoardWritePage/>} />
              <Route path="/study/board/:studyBoardId" element={<StudyBoardPage/>} />
              <Route path="/study/board/update/:studyBoardId" element={<StudyBoardUpdatePage/>} />
              <Route path="/account/profile/image/:userId" element={<ProfileTest/>} />

              <Route path="/notice/board/:noticeId" element={<NoticeBoardPage />} />
              <Route path="/notice/boards" element={<NoticeBoardListPage />} />

              <Route path="/notice/declare/:studentBoardId" element={<DeclarePage />} />
              <Route path="/notice/declare/student/comment/:studentCommentId" element={<DeclareStudentCommentPage />} />

              <Route path="/notice/declare/teacher/:teacherBoardId" element={<DeclareTeacherPage />} />
              <Route path="/notice/declare/teacher/comment/:teacherCommentId" element={<DeclareTeacherCommentPage />} />

              <Route path="/notice/declare/study/:studyBoardId" element={<DeclareStudyPage />} />
              <Route path="/notice/declare/study/comment/:studyCommentId" element={<DeclareStudyCommentPage />} />

        </Routes>

      </>
    );
}

export default MeetingRoute;