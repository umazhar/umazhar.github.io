import robot from "../assets/robot.png";
// import placeholder from "../assets/placeholder.png";
import missing from "../assets/missing.jpg";
import silicon from "../assets/silicon.png"

export const ProjectList = [
  {
    name: "Drone FSM Synthesis and PnR",
    image: silicon,
    description: "Design, Synthesis, and layout of a SystemVerilog mock drone flight controller state machine in gPDK 45 nm standard cell library (probably doesn't work IRL lmao)",
    technologies: "SystemVerilog, Cadence Virtuoso, Cadence Innovus"
  },
  {
    name: "Poisionous Mushroom Classifier",
    image: missing,
    description: "Tells you if a mushroom will kill you or not if you eat it (works about 70% of the time, oops)",
    technologies: "Python, Tensorflow"
  },
  {
    name: "Hiking Sharing Platform",
    image: missing,
    description: "App to look for and save hikes that you will never actually hike.",
    technologies: "React, Express, MongoDB, Jest, Oauth"

  },
  {
    name: "Coin Collecting Robot",
    image: missing,
    description: "Robot that picks up coins.",
    technologies: "C, Python, Atmega328"
  },
  {
    name: "Simple RISC Machine",
    image: missing,
    description: "Basically a computer.",
    technologies: "Verilog, ARM Assembly, Python"
  },
  {
    name: "Digital Communication System",
    image: missing,
    description: "You can talk into a microphone and hear sound out the other end. ",
    technologies: "Verilog, Quartus, Modelsim, Simulink/Matlab"
  },
  {
    name: "Password Manager",
    image: missing,
    description: "Very insecure. Great way to lose your bank account info.",
    technologies: "Java, Swing, JUnit, JSON"
  },

  {
    name: "Capacative Sensor Reaction Game",
    image: missing,
    description: "Some reaction game that worked about half the time.",
    technologies: "8051 Assembly, AT89LP52"
  },
];
