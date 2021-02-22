import react, {useState  } from "react";
import { Modal,Button, Form } from "react-bootstrap";
import "./AddMovie.css";
import m9 from "../../assets/m9.jpg";


const AddMovie =({addMovie}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("")
  const [raiting, setRaiting] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span className="Addbtn" variant="primary" onClick={handleShow}> [ + ]
        
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form.Group>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Movie name" 
    onChange={(e)=> setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group>
    <Form.Label>Raiting</Form.Label>
    <Form.Control type="number" placeholder="Movie raiting" min ="1" max ="5"
    onChange={(e)=> setRaiting(e.target.value)}/>

      </Form.Group>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {addMovie({id:Math.random(),title,img:m9,rating:raiting});handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie