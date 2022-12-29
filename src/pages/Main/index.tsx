import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FilterOffcanvas from '../../components/FilterOffcanvas';
import { useTranslation } from 'react-i18next';

export default function Main() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="justify-content-md-start text-center">
        <Col className="text-start" md={2}>
          <Button variant="primary" onClick={handleShow} className="me-2 mt-2">
            {t('Filter')}
          </Button>
          <FilterOffcanvas show={show} handleClose={handleClose} />
        </Col>
        <Col className="text-center" xs={12} md={10}></Col>
      </Row>
    </Container>
  );
}
