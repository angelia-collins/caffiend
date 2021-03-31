import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
} from "reactstrap";
import AddButton from "./AddButton";


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
      >
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <Label /> {props.option1}
          <Input
            type="select"
            name="backdrop"
            id="backdrop"
            onChange={changeBackdrop}
          >
            <option value="january">January</option>
            <option value="feburary">February</option>
            <option value="march">March</option>
          </Input>
          <Label /> {props.option2}
          <Input
            type="curency"
            name="allocated_amount"
            id="exampleEmail"
            placeholder="$"
          />
        </ModalBody>

        <ModalFooter>
          <AddButton text={"Save"} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default OptionSetting;
