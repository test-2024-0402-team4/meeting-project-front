import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardListPage from '../pages/BoardListPage/BoardListPage';
import BoardWritePage from '../pages/BoardWritePage/BoardWritePage';
import BoardPage from '../pages/BoardPage/BoardPage';


function MeetingRoute(props) {

    return (
      <>
      
       <Routes>
            <Route path="/board/student/boardList" element={<BoardListPage/>} />
            <Route path="/board/student" element={<BoardWritePage/>} />
            <Route path="/board/student/comment/5" element={<BoardPage/>} />
            
       </Routes>
      </>
    );
}

export default MeetingRoute;