import robot from "../assets/robot.png";
// import placeholder from "../assets/placeholder.png";
import missing from "../assets/missing.jpg";

export const ProjectList = [
  {
    name: "Coin Collecting Robot",
    image: robot,
    description: "Designed an autonomous robot to detect and collect coins within a boundary set by an AC wire, thanks to a cleverly used tank circuit. Using an Atmega328 microprocessor, firmware in C was developed for motor control and detection tasks. Calibration of these systems was accomplished via capacitance and voltage readings from pySerial and PuTTY, ultimately boosting voltage detection accuracy by 40%.",
  },
  {
    name: "Simple RISC Machine",
    image: missing,
    description: "Designed and implemented a turing-complete Simple Reduced Instruction Set Computer (RISC) in Verilog onto a De1-SoC using ModelSim and Quartus. The RISC machine features a comprehensive datapath state machine, I/O, and a 3-stage pipeline, all written in Verilog.\n\nAdditionally, an assembler was created using C that encoded supported instructions such as MOV, ADD, CMP, AND, MVN, and B. This facilitated easy assembly of code for the RISC machine.",
  },
  {
    name: "Digital Communication System",
    image: missing,
    description: "In this project, a digital communication system was designed and implemented on a DE-1 SoC FPGA using Verilog. The system employed various communication techniques such as modulation, demodulation, Binary Phase Shift Keying (BPSK), error correction, and encoding. A root-raised cosine digital signal processing filter was also incorporated in the design.\n\nThe performance of the system was thoroughly tested and verified using module-level test benches, along with power analysis in Quartus. This rigorous testing ensured the robustness and reliability of the digital communication system.",
  },
  {
    name: "Password Manager",
    image: missing,
    description: "Developed a desktop password manager application, using Java and SHA-256 string hashing libraries for enhanced security. The application features an interactive user interface, crafted with Swing, and achieves data persistence through JSON. To ensure the reliability of the application, comprehensive testing was carried out using JUnit and JaCoCo, resulting in an impressive 97% code coverage.",
  },

  {
    name: "Capacative Sensor Reaction Game",
    image: missing,
    description: "Designed a touch interface game using the AT89LP51RC2 microcontroller and 8051 Assembly code. A 555 timer was configured as an a-stable oscillator to detect frequency changes in capacitive sensors. An ISR was implemented to control speakers and timers were utilized to measure the frequency from the sensors. During testing, a function generator and oscilloscope were used to ensure proper hardware functionality.",
  },
];
