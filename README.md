### **Assignment: Webpage with Web Audio Sliders**
**Coding 6 | MUST 4707**

#### **Objective**
This assignment introduces you to integrating WebAudio API with interactive HTML elements. You will create a webpage from scratch that includes two sliders:
- One slider controls the frequency of an oscillator.
- The other slider adjusts the gain (volume).

You will write your WebAudio functionality in an external JavaScript file and use function expressions to handle user interactions.

---

### **Tasks**

#### **1. Set Up the HTML File**
- Create a basic webpage (`index.html`).
- Add two sliders (`input type="range"`)—one for frequency and one for gain.
- Add two buttons - one to start and one to stop
- Link an external JavaScript file (`script.js`).

#### **2. Implement WebAudio in `script.js`**
- Use the WebAudio API to create:
    - An **oscillator** (sine wave by default).
    - A **gain node** to control volume.
    - An **audio context** to manage audio processing.
- Write function expressions to:
    - **Start/stop** the oscillator when clicking the button.
    - **Update frequency** based on the first slider.
    - **Adjust volume** based on the second slider.

#### **3. Use Function Expressions for Modularity**
- Define each key action as a **function expression**, such as:
  ```javascript
  const updateFrequency = function(f) {
      oscillator.frequency.value = f;
  };
  ```  
- Attach event listeners to sliders to modify frequency and gain dynamically.

---

### **Example Behavior**
1. The user opens the webpage and sees two sliders and a button.
2. Moving the **frequency slider** changes the pitch.
3. Moving the **gain slider** adjusts the volume.
4. Clicking the button again **stops the oscillator**.

---

### **Submission**
- Submit the url to your GitHub Repository on the Canvas assignment.
- Ensure your code is **well-commented** and follows best practices.

