import {createContext, useState} from "react";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [openedModal, setOpenedModal] = useState();

    const openModal = (obj) => () => {
        setOpenedModal(obj);
    }

    const closeModal = () => {
        setOpenedModal(null);
    }

    return (
        <ModalContext.Provider value={{openModal, closeModal, openedModal}}>
            {children}
        </ModalContext.Provider>
    )
}