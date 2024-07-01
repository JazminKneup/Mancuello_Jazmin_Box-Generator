import React, { useState } from 'react';
import '../Box/BoxGenerator.css';

function BoxGenerator() {
  const [red, setRed] = useState('');
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState('');
  const [size, setSize] = useState(50);
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (e, setColor) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isColorValid = (num) => num >= 0 && num <= 255 && /^\d+$/.test(num);
    if (isColorValid(red) && isColorValid(green) && isColorValid(blue) && size > 0) {
      const color = `rgb(${red}, ${green}, ${blue})`;
      setBoxes([...boxes, { color, size }]);
      setRed('');
      setGreen('');
      setBlue('');
      setSize(50);
    } else {
      alert("Please enter valid RGB values (0-255) and a positive size.");
    }
  };

  return (
    <div className="box-generator">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={red}
          onChange={(e) => handleColorChange(e, setRed)}
          placeholder="Red (0-255)"
          className="form-input"
        />
        <input
          type="text"
          value={green}
          onChange={(e) => handleColorChange(e, setGreen)}
          placeholder="Green (0-255)"
          className="form-input"
        />
        <input
          type="text"
          value={blue}
          onChange={(e) => handleColorChange(e, setBlue)}
          placeholder="Blue (0-255)"
          className="form-input"
        />
        <input
          type="number"
          value={size}
          onChange={handleSizeChange}
          placeholder="Enter size"
          className="form-input"
        />
        <button type="submit" className="form-button">Add Box</button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{
              backgroundColor: box.color,
              width: box.size + 'px',
              height: box.size + 'px'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BoxGenerator;