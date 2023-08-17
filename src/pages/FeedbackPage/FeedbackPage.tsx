import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "../../components/FilterButton";
import Navigation from "../../layouts/Navigation";
import Footer from "../../layouts/Footer";
import { FeedbackType } from "../../types/FeedbackType";

function generateUniqueId(): string {
  const now: Date = new Date();
  const uniqueId: string = `${now.getFullYear()}-${padZero(now.getMonth() + 1)}-${padZero(now.getDate())}_${padZero(now.getHours())}:${padZero(
    now.getMinutes()
  )}:${padZero(now.getSeconds())}.${padZero(now.getMilliseconds())}`;
  return uniqueId;
}

function padZero(num: number): string {
  return num.toString().padStart(2, "0");
}

function Feedback() {
  const [show, setShow] = useState(false);

  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>([]);
  const [newMessage, setNewFeedback] = useState("");

  useEffect(() => {
    fetch("https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/feedback")
      .then((response) => response.json())
      .then((data: FeedbackType[]) => setFeedbackList(data));
  }, [newMessage]);

  const handleSubmitFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = generateUniqueId();
    const newFeedbackItem = { id: newId, message: newMessage };

    try {
      setFeedbackList((prevState) => [...prevState, newFeedbackItem]);
      const response = await fetch("https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/feedback", {
        method: "POST",
        body: JSON.stringify(newFeedbackItem),
      });
      const data: FeedbackType = await response.json();
      setNewFeedback("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navigation />
      <br />
      <div>We always want to improve and your feedback helps us do exactly that.</div>
      <br />
      {show ? (
        <Alert variant={"success"} onClose={() => setShow(false)} dismissible>
          Feedback submitted
        </Alert>
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmitFeedback}>
        <Form.Group controlId='formFeedback'>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Share your feedback'
            value={newMessage}
            onChange={(e) => setNewFeedback(e.target.value)}
          />
        </Form.Group>

        <Button text='Submit' color='btn-blue' type='submit' onClick={() => setShow(true)} />
      </Form>
      <Footer />
    </div>
  );
}

export default Feedback;
