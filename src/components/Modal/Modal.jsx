import {Button} from "../Button/Button";
import {UsersContext} from "../../contexts/UsersContext";
import {useContext} from "react";
import {ModalContext} from "../../contexts/ModalContext";
import styles from "./Modal.module.css";
import {Field, Form} from "react-final-form";
import cx from "classnames";

const Input = ({ name, placeholder, error }) => (
        <div className={cx(styles.inputWrapper, error && styles.highlightedInputWrapper)}>
            <Field
                name={name}
                component="input"
                placeholder={placeholder}
                className={styles.input}
                autoComplete={"off"}
            />

            {error && <div className={styles.errorMsg}>{error}</div>}

        </div>
)


const Modal = () => {
    const {users, addUser, changeUser} = useContext(UsersContext);
    const {openedModal, closeModal} = useContext(ModalContext);


    const actionType = openedModal.type === "CREATE" ? "Создать" : "Изменить";

    const onSubmit = (values, errors) => {
        if (errors.length !== 0) return;

        const name = values.firstName;
        const secondName = values.secondName;

        if (actionType === "Создать") {
            addUser({
                name: name,
                secondName: secondName,
                id: users.length + 1,
                type: "custom"
            });
        }

        if (actionType === "Изменить") {
            changeUser(openedModal.id, name, secondName);
        }

        closeModal();
    }

    const isValidValue = (value, minLength, maxLength) => {
        if (!value) return;
        return value.length <= maxLength && value.length >= minLength;
    }

    const validate = (values) => {
        const errors = {};

        if (!isValidValue(values.firstName, 4, 9)) errors.firstName = 'Min length is 4. Max length is 9.'
        if (!isValidValue(values.secondName, 4, 9)) errors.secondName = 'Min length is 4. Max length is 9.'

        if (!values.firstName) errors.firstName = 'Required';
        if (!values.secondName) errors.secondName = 'Required';

        return errors;
    }

    return (
        <div className={styles.modal}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={{ firstName: openedModal.defaultName, secondName: openedModal.defaultSecondName }}
                render={({ handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <h1>{actionType + " пользователя"}</h1>
                        <Input name={"firstName"} placeholder={"Имя"} error={errors.firstName}/>
                        <Input name={"secondName"} placeholder={"Фамилия"} error={errors.secondName}/>

                        <div className={styles.controls}>
                            <Button text={"Отмена"} onClick={closeModal} />
                            <Button type={"submit"} text={actionType} />
                        </div>

                    </form>
                )}
            />
        </div>
    )
}

export default Modal;