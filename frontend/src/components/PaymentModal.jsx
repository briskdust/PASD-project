import PaymentModalStyle from "../styles/PaymentModalStyle.styled";
import Payment from "./Payment";

const PaymentModal = props => {
  return (
    <PaymentModalStyle close={props.close}>
      <Payment close={props.closePayment} />
    </PaymentModalStyle>
  );
};
export default PaymentModal;
