import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "../../components/FilterButton";

export default function Admin() {
  interface FeedbackInterface {
    id: string;
    message: string;
  }
  const [feedbackList, setFeedbackList] = useState<FeedbackInterface[]>([]);
  const [newMessage, setNewFeedback] = useState("");

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

  const handleDeleteFeedback = (id: string) => {
    fetch(`https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/feedback/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFeedbackList((prevState) => prevState.filter((feedback) => feedback.id !== id));
    });
  };

  useEffect(() => {
    fetch("https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/feedback")
      .then((response) => response.json())
      .then((data: FeedbackInterface[]) => setFeedbackList(data));
  }, [newMessage]);

  return (
    <div>
      <ListGroup>
        {feedbackList.map((feedback) => (
          <ListGroup.Item key={feedback.id}>
            <div> {feedback.message}</div>
            <div>
              {formatDate(feedback.id)}
              <Button text='Delete' color='btn-red' onClick={() => handleDeleteFeedback(feedback.id)} />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
