import {useContext} from "react";
import styles from "./UsersPage.module.css";
import {UsersContext} from "../../contexts/UsersContext";
import {Button} from "../Button/Button";
import {ModalContext} from "../../contexts/ModalContext";
import {Link} from "react-router-dom";
import cx from "classnames";

const User = ({name, secondName, type, id}) => {
    const {deleteUser} = useContext(UsersContext);
    const {openModal} = useContext(ModalContext);

    const modal = {
        type: "UPDATE",
        id: id,
        defaultName: name,
        defaultSecondName: secondName
    }

    return (
        <div className={styles.user}>
            <div>
                <Link to={`/${id}`}>
                    <div className={styles.user_field}>{name + " " + secondName}</div>
                </Link>
                <div className={cx(styles.user_field, styles.font_size17)}>{type}</div>
            </div>

            <div className={styles.user_controls}>
                <Button text={"✎"} onClick={openModal(modal)}></Button>
                <Button text={"🗙"} onClick={deleteUser(id)}></Button>
            </div>
        </div>
    )
}

const UsersPage = () => {
    const {users} = useContext(UsersContext);
    const {openModal} = useContext(ModalContext);

    return (
        <div className={styles.users_page}>
            <div className={"font_size30"}>{"Всего пользователей: " + users.length}</div>
            <div className={styles.users}>
                {users.map(user => (
                    <User key={user.id} name={user.name} secondName={user.secondName} type={user.type} id={user.id}></User>
                ))}
            </div>
            <Button text={"СОЗДАТЬ ПОЛЬЗОВАТЕЛЯ"} onClick={openModal({type:"CREATE"})} />
        </div>
    );
};

export default UsersPage;