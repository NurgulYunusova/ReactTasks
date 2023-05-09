/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function ModalCreate({ modal, toggle, title, body, addData, setNewData }) {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Post</ModalHeader>
        <ModalBody>
          <Input
            onChange={(e) => setNewData("title", e.target.value)}
            value={title}
          />
          <Input
            type="textarea"
            rows="5"
            onChange={(e) => setNewData("body", e.target.value)}
            value={body}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addData}>
            Add Data
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalCreate;
