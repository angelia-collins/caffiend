import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Form,
} from "reactstrap";
import AddButton from "./AddButton";
import CoffeeName from "./CoffeeName";
import SelectMonth from "./OptionInputs/SelectMonth";
import AllotmentInput from "./OptionInputs/AllotmentInput";

const OptionSetting = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = (e) => {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  const CustomTextInput = (num) => {
    for (let i = 0; i < props.options.length; i++) {
      switch (props.options[num]) {
        case "select month:":
          return <SelectMonth />;
          break;
        case "input allotment":
          return <AllotmentInput />;
          break;
        case "delete brand":
          return <CoffeeName />;
          break;
        case "set alerts":
          return (
            <input
              className="form-control"
              type="text"
              placeholder="availbale in next update"
              disabled
            />
          );
          break;
        default:
      }
    }
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button
          style={{
            width: "100%",
            textAlign: "center",
            backgroundColor: "#210202",
          }}
          onClick={toggle}
        >
          {buttonLabel}
          {props.title}
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
        style={{marginTop: "15vh"}}
      >
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <Label /> {props.options[0]}
          {CustomTextInput(0)}
          <Label /> {props.options[1]}
          {CustomTextInput(1)}
          {console.log(props.input1)}
        </ModalBody>

        <ModalFooter>
          <AddButton text={"Save"} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default OptionSetting;
