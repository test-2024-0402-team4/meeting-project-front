import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardListPage from '../pages/BoardListPage/BoardListPage';
import BoardWritePage from '../pages/BoardWritePage/BoardWritePage';
import BoardPage from '../pages/BoardPage/BoardPage';
import BoardUpdatePage from '../pages/BoardUpdatePage/BoardUpdatePage';

import TeacherBoardListPage from '../pages/BoardListPage/TeacherBoardListPage';
import TeacherBoardWritePage from '../pages/BoardWritePage/TeacherBoardWritePage';
import TeacherBoardPage from '../pages/BoardPage/TeacherBoardPage';
import TeacherBoardUpdatePage from '../pages/BoardUpdatePage/TeacherBoardUpdatePage';



function MeetingRoute(props) {

    return (
      <>
      
       <Routes>
            <Route path="/student/boards" element={<BoardListPage/>} />
            <Route path="/student/board" element={<BoardWritePage/>} />
            <Route path="/student/board/:studentBoardId" element={<BoardPage/>} />
            <Route path="/student/board/update/:studentBoardId" element={<BoardUpdatePage/>} />
            <Route path="/teacher/boards" element={<TeacherBoardListPage/>} />
            <Route path="/teacher/board" element={<TeacherBoardWritePage/>} />
            <Route path="/teacher/board/:teacherBoardId" element={<TeacherBoardPage/>} />
            <Route path="/teacher/board/update/:teacherBoardId" element={<TeacherBoardUpdatePage/>} />
            

       </Routes>
      </>
    );
}

export default MeetingRoute;