import React,{useState} from "react";
import { Modal,Button } from "react-bootstrap";
import n4 from "../../img/contracts.png";
import l1 from "../../img/lisans1.png";
import l2 from "../../img/lisans2.png";
import l3 from "../../img/lisans3.png";
import l4 from "../../img/lisans4.png";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="resimengel">
        <img src={l1} className="rg1" />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="resimengel">
        <img src={l2} className="rg1" />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="resimengel">
        <img src={l3} className="rg1" />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="resimengel">
        <img src={l4} className="rg1" />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function Section3() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  return (
    <section className="contract-side">
       <div>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
       
      />
       </div>
       <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
       
      />
        <MyVerticallyCenteredModal3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
       
      />
        <MyVerticallyCenteredModal4
        show={modalShow4}
        onHide={() => setModalShow4(false)}
       
      />
      <div className="container">
        <div className="d-flex flex-column flex-xl-row align-items-center justify-content-between mt-4">
          <div className="documant d-flex align-items-center mb-4 mb-xl-0">
            <img
              width="45"
              height="45"
              className="img-fluid me-2"
              src={n4}
              alt=""
            />
            <p className="contract">Contract Documents</p>
          </div>
          <div className="contents row justify-content-center">
            <div className="col-xl-3 col-lg-6 mb-2 mb-lg-0">
              <h4>
                <button className="alink" onClick={() => setModalShow(true)}>
                  Estate Agent Licence
                </button>
              </h4>
            </div>
            <div className="col-xl-3  col-lg-6 mb-2 mb-lg-0">
              <h4>
                <button className="alink" onClick={() => setModalShow2(true)}>
                  Registered Documents
                </button>
              </h4>
            </div>

            <div className="col-xl-3 col-lg-6 mb-2 mb-lg-0">
              <h4>
              <button className="alink" onClick={() => setModalShow3(true)}>
                  Contract Document
                </button>
              </h4>
            </div>
            <div className="col-xl-3 col-lg-6 mb-2 mb-lg-0">
              <h4>
              <button className="alink" onClick={() => setModalShow4(true)}>
                  Reits Dao Company Document
                </button>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
