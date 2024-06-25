import {createContext, useState} from "react";

const defaultUsers = [
    {
        name: "Вася",
        secondName: "Пукин",
        id: 1,
        type: "default"
    },
    {
        name: "Миша",
        secondName: "Мавашик",
        id: 2,
        type: "default"
    },
    {
        name: "Петя",
        secondName: "Пуйщик",
        id: 3,
        type: "default"
    },
    {
        name: "Митя",
        secondName: "Мутя",
        id: 4,
        type: "default"
    },
    {
        name: "Киси",
        secondName: "Миси",
        id: 5,
        type: "default"
    },
    {
        name: "Валерий",
        secondName: "Попов",
        id: 6,
        type: "default"
    },
];

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState(defaultUsers);

    const getUser = (id) => {
        return users.find(user => user.id === +id);
    }

    const addUser = (user) => {
        setUsers([...users, user]);
    }

    const deleteUser = (id) => () => {
        setUsers(users.filter(user => user.id !== id));
    }

    const changeUser = (id, newName, newSecondName) => {
        const index = users.findIndex(user => user.id === id);
        const user = users.find(user => user.id === id);
        user.name = newName;
        user.secondName = newSecondName;
        setUsers(prevUsers => prevUsers.map((item, i) => i === index ? user : item));
    }

    return (
        <UsersContext.Provider value={{users, addUser, deleteUser, changeUser, getUser}}>
            {children}
        </UsersContext.Provider>
    )
}