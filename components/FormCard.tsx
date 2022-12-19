export const FormCard = (): JSX.Element => {
  const { cardInfo, setCardInfo } = useState();
  return (
    <div>
      <div>
        <div className="flex">
          <div>0000</div>
          <div>0000</div>
          <div>0000</div>
          <div>0000</div>
        </div>
        <div>12/22</div>
        <div>NOMBRE</div>
        <div>CCV</div>
      </div>
      <div>Form</div>
    </div>
  );
};
