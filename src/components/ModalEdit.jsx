/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function ModalEdit({ modal, toggle, title, body, changeData, saveData }) {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Post</ModalHeader>
        <ModalBody>
          <Input
            onChange={(e) => changeData("title", e.target.value)}
            value={title}
          />
          <Input
            type="textarea"
            rows="5"
            onChange={(e) => changeData("body", e.target.value)}
            value={body}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={saveData}>
            Save Data
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalEdit;
