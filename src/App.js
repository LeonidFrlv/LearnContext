import './App.css';
import UsersPage from "./components/Users/UsersPage";
import Modal from "./components/Modal/Modal";
import { ModalContext } from "./contexts/ModalContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { createPortal } from 'react-dom';
import UserPage from "./components/UserPage/UserPage";

const App = () => {
    const {openedModal} = useContext(ModalContext);

    return (
        <div className="content">
            {openedModal && (
                createPortal(<Modal />, document.body)
            )}
            <Routes>
                <Route path="/" element={<UsersPage />} />
                <Route path="/:id" element={<UserPage />} />
            </Routes>
        </div>
    );
}

export default App;
