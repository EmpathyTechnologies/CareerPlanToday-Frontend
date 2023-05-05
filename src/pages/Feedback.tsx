import { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

interface FeedbackInterface {
  id: string;
  message: string;
}

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

function formatDate(input: string): string {
  const [date, time] = input.split("_");
  const dateObj = new Date(date);
  const weekday = dateObj.toLocaleString("en-us", { weekday: "long" });
  const month = dateObj.toLocaleString("en-us", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const formattedDate = `${weekday}, ${month} ${day}, ${year}`;
  const [hours, minutes, seconds] = time.split(":").map((component) => parseInt(component));
  const meridiem = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem} EDT`;
  return `${formattedDate}, ${formattedTime}`;
}

function Feedback() {
  const [feedbackList, setFeedbackList] = useState<FeedbackInterface[]>([]);
  const [newFeedback, setNewFeedback] = useState("");

  useEffect(() => {
    fetch("https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/feedback")
      .then((response) => response.json())
      .then((data: FeedbackInterface[]) => setFeedbackList(data));
  }, [newFeedback]);

  const handleSubmitFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = generateUniqueId();
    const newFeedbackItem = { id: newId, message: newFeedback };
    try {
      setFeedbackList((prevState) => [...prevState, newFeedbackItem]); // add new item to the list immediately
      const response = await fetch("https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/feedback", {
        method: "POST",
        body: JSON.stringify(newFeedbackItem),
      });
      const data: FeedbackInterface = await response.json();
      setNewFeedback("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFeedback = (id: string) => {
    fetch(`https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/feedback/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFeedbackList((prevState) => prevState.filter((feedback) => feedback.id !== id));
    });
  };

  return (
    <div style={{ margin: "0 20px" }}>
      <h1>Feedback Form</h1>
      <Form onSubmit={handleSubmitFeedback}>
        <Form.Group controlId='formFeedback'>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Share your feedback'
            value={newFeedback}
            onChange={(e) => setNewFeedback(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>

      <br />

      <ListGroup>
        {feedbackList.map((feedback) => (
          <ListGroup.Item key={feedback.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <div> {feedback.message}</div>
            <div>
              {formatDate(feedback.id)}{" "}
              <Button variant='danger' onClick={() => handleDeleteFeedback(feedback.id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Feedback;
