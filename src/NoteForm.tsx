import { Button, Row, Form, Stack, Col } from "react-bootstrap";
import CreatableReactSelect from "react-Select/creatable";
import {Link} from "react-router-dom"
import { useRef } from "react";

export default function NoteForm() {
    const titleRef = useRef<HTMLInputElement>(null)
    const markDownRef = useRef<HTMLTextAreaElement>(null)
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title" >
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={15}  ref={markDownRef}/>
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
          <Button type="button" variant="outline-secondary">
            Cancel
          </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
 