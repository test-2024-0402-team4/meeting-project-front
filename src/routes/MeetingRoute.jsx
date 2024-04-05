import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootHeader from '../components/RootHeader/RootHeader';
import BoardListPage from '../pages/BoardListPage/BoardListPage';
import BoardPage from '../pages/BoardPage/BoardPage';
import BoardWritePage from '../pages/BoardWritePage/BoardWritePage';
import SideProfile from '../components/SideProfile/SideProfile';
import Homepage from '../pages/Homepage/Homepage';

function MeetingRoute(props) {

    return (
      <>
      
       <Routes>
            <Route path="/board/student/boardList" element={<BoardListPage/>} />
            <Route path="/board/student" element={<BoardWritePage/>} />
            <Route path="/board/comment" element={<BoardPage/>} />
       </Routes>
      </>
    );
}

export default MeetingRoute;