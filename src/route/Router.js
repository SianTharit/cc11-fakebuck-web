import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";
import AuthLayout from "../components/layout/AuthLayout";
import Sidebar from "../components/layout/sidebar/Sidebar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Router() {
    const { user } = useContext(AuthContext);

    return (
        <Routes>
            {user ? (
                <>
                    <Route path="/" element={<AuthLayout />}>
                        {/*----- Relative Path มันจะเทียบกับพาร์ทด้านหน้า ----------*/}
                        <Route path="" element={<HomePage />} />
                        <Route path="friend" element={<Sidebar />}>
                            <Route path="" element={<FriendPage />} />
                            <Route path="request" element={<FriendPage />} />
                            <Route path="suggestion" element={<FriendPage />} />
                        </Route>
                        <Route path="profile/:id" element={<ProfilePage />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </>
            )}
            {/*----- Nested Route -------*/}
        </Routes>
    );
}
export default Router;
