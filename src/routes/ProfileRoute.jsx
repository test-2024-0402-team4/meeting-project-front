import React from 'react';
import TeacherProfiles from '../pages/TeacherProfiles/TeacherProfiles';
import { Route, Routes } from 'react-router-dom';
import TeacherProfile from '../pages/TeacherProfile/TeacherProfile';

function ProfileRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/account/teacher/profiles" element={ <TeacherProfiles />} />
                <Route path="/account/teacher/profile" element={ <TeacherProfile />} />
            </Routes>
        </>
    );
}

export default ProfileRoute;