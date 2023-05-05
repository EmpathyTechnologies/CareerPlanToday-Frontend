import { useState, useEffect } from "react";

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
    <div>
      <h1>Feedback App</h1>
      <form onSubmit={handleSubmitFeedback}>
        <input type='text' value={newFeedback} onChange={(e) => setNewFeedback(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
      <ul>
        {feedbackList.map((feedback) => (
          <li key={feedback.id}>
            {feedback.message} <button onClick={() => handleDeleteFeedback(feedback.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feedback;
