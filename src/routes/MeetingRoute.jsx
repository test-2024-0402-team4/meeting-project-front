import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootHeader from '../components/RootHeader/RootHeader';
import BoardListPage from '../pages/BoardListPage/BoardListPage';
import BoardPage from '../pages/BoardPage/BoardPage';
import BoardWritePage from '../pages/BoardWritePage/BoardWritePage';

function MeetingRoute(props) {

    return (
      <>
       <RootHeader/>
       <Routes>
            <Route path="/board/boardList" element={<BoardListPage/>} />
            <Route path="/board/comment" element={<BoardPage/>} />
            <Route path="/board/write" element={<BoardWritePage/>} />
       </Routes>
      </>
    );
}

export default MeetingRoute;