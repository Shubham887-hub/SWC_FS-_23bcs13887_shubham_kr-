import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  // ---------------- Todo App ----------------

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setList([...list, task]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    const updatedList = list.filter(
      (_, index) => index !== indexToDelete
    );

    setList(updatedList);
  }

  // ---------------- Character Counter ----------------

  const [text, setText] = useState("");

  const maxChars = 200;
  const remainingChars = maxChars - text.length;

  function handleText(e) {
    const inputText = e.target.value;

    if (inputText.length <= maxChars) {
      setText(inputText);
    }
  }

  function submitText() {
    if (text.trim() === "") return;

    alert("Submitted Successfully!");

    setText("");
  }

  // ---------------- Image Carousel ----------------

  const images = [
    "https://picsum.photos/id/1015/600/350",
    "https://picsum.photos/id/1016/600/350",
    "https://picsum.photos/id/1018/600/350",
    "https://picsum.photos/id/1020/600/350",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1
        ? 0
        : prevIndex + 1
    );
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? images.length - 1
        : prevIndex - 1
    );
  }

  // Auto Slide
  useEffect(() => {

    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);

  }, [isHovering, images.length]);

  return (
    <>
      <div 
        className="fullscreen-bg" 
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      <div className="fullscreen-overlay" />
      
      <div className="app-container">
        <header>
        <h1 className="app-title">FULL STACK</h1>
        <p className="app-subtitle">Question 1, 2 and 3.</p>
      </header>

      {/* Todo App Container */}
      <div className="glass-card">
        <h2 className="card-title">Todo App</h2>
        
        <div className="input-group">
          <input
            type="text"
            className="custom-input"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul className="todo-list">
          {list.map((item, index) => (
            <li className="todo-item" key={index}>
              <span>{item}</span>
              <button className="btn btn-danger" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Character Counter Container */}
      <div className="glass-card">
        <h2 className="card-title">Post / Review Box</h2>

        <textarea
          className="custom-textarea"
          rows="5"
          placeholder="Write something special..."
          value={text}
          onChange={handleText}
        />

        <div className="counter-info">
          <span 
            style={{
              color:
                text.length >= 180
                  ? "var(--danger)"
                  : text.length >= 160
                  ? "#fb923c"
                  : "var(--text-secondary)",
              transition: "color 0.3s ease"
            }}
          >
            Remaining Characters: {remainingChars}
          </span>
          <button className="btn" onClick={submitText}>
            Submit Review
          </button>
        </div>
      </div>

      {/* Image Carousel Container */}
      <div className="glass-card">
        <h2 className="card-title">Image Carousel</h2>

        <div
          className="carousel-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={images[currentIndex]}
            alt="slider"
            className="carousel-img"
          />

          <div className="carousel-overlay">
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`indicator-dot ${index === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn" onClick={prevSlide}>
                ‹
              </button>
              <button className="carousel-btn" onClick={nextSlide}>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;