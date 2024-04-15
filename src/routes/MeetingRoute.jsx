import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardListPage from '../pages/BoardListPage/BoardListPage';
import BoardWritePage from '../pages/BoardWritePage/BoardWritePage';
import BoardPage from '../pages/BoardPage/BoardPage';
import BoardUpdatePage from '../pages/BoardUpdatePage/BoardUpdatePage';
import SignupPage from '../pages/SignupPage/SignupPage';


function MeetingRoute(props) {

    return (
      <>
      
       <Routes>
            <Route path="/board/student/boardList" element={<BoardListPage/>} />
            <Route path="/board/student" element={<BoardWritePage/>} />
            <Route path="/board/student/comment/:studentBoardId" element={<BoardPage/>} />
            <Route path="/board/student/update/:studentBoardId" element={<BoardUpdatePage/>} />
       </Routes>
      </>
    );
}

export default MeetingRoute;