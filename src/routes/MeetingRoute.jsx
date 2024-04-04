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
            <Route path="/board/boardList" element={<BoardListPage/>} />
            <Route path="/board/write" element={<BoardWritePage/>} />
       </Routes>
      </>
    );
}

export default MeetingRoute;