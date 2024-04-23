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
import { useQueryClient } from 'react-query';
import TeacherRegisterProfilePage from '../pages/TeacherRegisterProfilePage/TeacherRegisterProfilePage';
import TeacherProfiles from '../pages/TeacherProfiles/TeacherProfiles';
import TeacherProfile from '../pages/TeacherProfile/TeacherProfile';
import StudentPostersPage from '../pages/StudentPostersPage/StudentPostersPage';
import StudentMyPostersPage from '../pages/StudentMyPostersPage/StudentMyPostersPage';
import StudentPosterPage from '../pages/StudentPosterPage/StudentPosterPage';
import StudentMyPosterPage from '../pages/StudentMyPosterPage/StudentMyPosterPage';






function MeetingRoute(props) {

  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData("principalQuery");

  useEffect(() => {
      if(!!principalData) {
          alert("잘못된 접근입니다.");
          window.location.replace("/");
      }
  },[]);


    return (
      <>
        <Routes>
        <Route path='/main' element={<Homepage />} />
              <Route path='/mypage' element={<Mypage />} />
              <Route path='/teacher/profiles' element={<TeacherProfiles />} />
              <Route path='/teacher/profile' element={<TeacherProfile />} />
              <Route path='/teacher/poster/list' element={<StudentPostersPage />} />
              <Route path='/student/myposters' element={<StudentMyPostersPage />}/>
              <Route path='/student/myposter' element={<StudentMyPosterPage />}/>
              <Route path='/teacher/poster' element={<StudentPosterPage />} />

              <Route path="/student/boards" element={<BoardListPage/>} />
              <Route path="/student/board" element={<BoardWritePage/>} />
              <Route path="/student/board/:studentBoardId" element={<BoardPage/>} />
              <Route path="/student/board/update/:studentBoardId" element={<BoardUpdatePage/>} />
              <Route path="/teacher/boards" element={<TeacherBoardListPage/>} />
              <Route path="/teacher/board" element={<TeacherBoardWritePage/>} />
              <Route path="/teacher/board/:teacherBoardId" element={<TeacherBoardPage/>} />
              <Route path="/teacher/board/update/:teacherBoardId" element={<TeacherBoardUpdatePage/>} />
              <Route path='/account/teacher/registerProfile' element={ <TeacherRegisterProfilePage /> } />
              <Route path="/study/boards" element={<StudyBoardListPage/>} />
              <Route path="/study/board" element={<StudyBoardWritePage/>} />
              <Route path="/study/board/:studyBoardId" element={<StudyBoardPage/>} />
              <Route path="/study/board/update/:studyBoardId" element={<StudyBoardUpdatePage/>} />
              <Route path="/account/profile/image/:userId" element={<ProfileTest/>} />
        </Routes>

      </>
    );
}

export default MeetingRoute;