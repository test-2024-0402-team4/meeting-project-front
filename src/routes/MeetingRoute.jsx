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
            <Route path="/student/boards" element={<BoardListPage/>} />
            <Route path="/student/board" element={<BoardWritePage/>} />
            <Route path="/student/board/:studentBoardId" element={<BoardPage/>} />
            <Route path="/student/board/update/:studentBoardId" element={<BoardUpdatePage/>} />          
       </Routes>
      </>
    );
}

export default MeetingRoute;