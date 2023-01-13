import LoginForm from "./LoginForm";
import Modal from "../styles/Modal.styled";

const LoginModal = props => {
  return (
    <Modal close={props.close}>
      <LoginForm closed={props.setClose} />
    </Modal>
  );
};
export default LoginModal;
