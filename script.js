const quizData = {
  // <!-------------------------------------------- WEEK 1---------------------------------------------------------->
  "Week 1": [
    {
      question: "Fill in the blank space designated by the question mark.",
      options: ["Snubber", "Repeater", "Processor", "Amplifier"],
      answer: "Processor",
      image: "image.png",
    },
    {
      question:
        "2. What is the maximum data rate of Z-Wave communication technology?",
      options: ["100 kbps", "250 kbps", "500 kbps", "1 Mbps"],
      answer: "100 kbps",
    },
    {
      question:
        "Which device converts electromagnetic energy into electricity and vice versa?",
      options: ["Speaker", "Antenna", "Microphone", "Strain gauge"],
      answer: "Antenna",
    },
    {
      question: "What does 'Range' indicate in a sensor?",
      options: [
        "The correctness of the output",
        "The smallest change in input that can be detected",
        "The difference between the standard value and the value produced by the sensor",
        "The highest and the lowest value of the physical quantity within which the sensor can actually sense",
      ],
      answer:
        "The highest and the lowest value of the physical quantity within which the sensor can actually sense",
    },
    {
      question:
        "Which coding scheme is used by the IEEE 802.15.4 standard for transmitting information?",
      options: ["CSS", "THSS", "OFDM", "DSSS"],
      answer: "DSSS",
    },
    {
      question: "What is the standard transmission range of IEEE 802.15.4?",
      options: [
        "10 m to 75 m",
        "1 m to 9 m",
        "15 cm to 60 cm",
        "1 cm to 10 km",
      ],
      answer: "10 m to 75 m",
    },
    {
      question:
        "Which low power radio communication technology was designed as a simpler and cheaper alternative to Zigbee for small to medium range connectivity?",
      options: ["Bluetooth", "Z-Wave", "RFID", "NFC"],
      answer: "Z-Wave",
    },
    {
      question: "Which organization has developed the ISA 100.11a standard?",
      options: [
        "Instrument Society of America",
        "International Society of Automation",
        "International Studies Association",
        "International Solar Alliance",
      ],
      answer: "International Society of Automation",
    },
    {
      question:
        "What communication modes are supported between two NFC devices?",
      options: [
        "Broadcast-Multicast",
        "Master-Slave",
        "Active-Active or Active-Passive",
        "All of these",
      ],
      answer: "Active-Active or Active-Passive",
    },
    {
      question:
        "Which of the following is/are the drawbacks of proprietary non-IP-based solutions?",
      options: [
        "Limited flexibility to end users",
        "Interoperability",
        "Limited last-mile connectivity",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question:
        "Which MQTT QoS Level is also known as “at most once” delivery?",
      options: ["QoS 0", "QoS 1", "QoS 2", "None of these"],
      answer: "QoS 0",
    },
    {
      question:
        "In CoRE, the IoT client uses ________ for the discovery of IoT devices.",
      options: [
        "Lookup interface",
        "Resource Directory",
        "Registration Interface",
        "None of these",
      ],
      answer: "Lookup interface",
    },
    {
      question:
        "Apart from MQTT, which IoT networking protocol supports the publish/subscribe framework?",
      options: ["XMPP", "AMQP", "DDS RTPS", "All of these"],
      answer: "All of these",
    },
    {
      question:
        "Which of the following IoT protocols is based on the session layer of the OSI model?",
      options: ["MQTT", "CoAP", "AMQP", "DTLS"],
      answer: "DTLS",
    },
    {
      question: "Which of the following is not a component of RFID?",
      options: ["RFID Tag", "RFID reader", "Antenna", "Router"],
      answer: "Router",
    },
  ],
  // <!-------------------------------------------- WEEK 2---------------------------------------------------------->
  "Week 2": [
    {
      question: "In the context of Industry 4.0, what is the full form of CPS?",
      options: [
        "Controlled Power System",
        "Customer Provisioning Service",
        "Cloud Processing Service",
        "Cyber Physical Systems",
      ],
      answer: "Cyber Physical Systems",
    },
    {
      question:
        "State True or False. Business, providing information goods, has virtually zero transportation and replication cost.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following technologies is used by research scientists to selectively modify the DNA of living organisms?",
      options: [
        "3D Printing",
        "Nanomedicine",
        "Liquid Biopsy",
        "Genetic Engineering",
      ],
      answer: "Genetic Engineering",
    },
    {
      question:
        "Which of the following statements is true about addressing an economic crisis or recession?",
      options: [
        "Observing an increase in prices of major commodities is a key indicator.",
        "Increasing productivity and reducing costs can help recover from a recession.",
        "The main economy of manufacturing location should always be based on only one resource to avoid crisis.",
        "Recovery from a depression is faster than recovery from a recession when the same solution is applied.",
      ],
      answer:
        "Increasing productivity and reducing costs can help recover from a recession.",
    },
    {
      question: "What does ERP stand for in the context of ICT?",
      options: [
        "Enterprise Resource Planning",
        "Electronic Resource Platform",
        "Enhanced Reporting Protocol",
        "Economic Resource Planning",
      ],
      answer: "Enterprise Resource Planning",
    },
    {
      question:
        "How can enterprises improve sustainability with respect to energy consumption?",
      options: [
        "Increasing usage on non-renewable energy sources",
        "Reducing energy consumption from non-renewable sources and increasing use of renewable energy",
        "Focusing solely on reducing renewable energy costs",
        "Ignoring energy price fluctuations",
      ],
      answer:
        "Reducing energy consumption from non-renewable sources and increasing use of renewable energy",
    },
    {
      question:
        "What is the primary goal of 'Just-In-Time' in a Lean Production System?",
      options: [
        "Ensuring each process produces what is needed by the next process in a continuous flow",
        "Producing in advance to meet potential future demand",
        "Reducing production costs by purchasing cheap materials",
        "Increasing inventory to minimize disruptions",
      ],
      answer:
        "Ensuring each process produces what is needed by the next process in a continuous flow",
    },
    {
      question: "What is a 'value stream' in a Lean Production System?",
      options: [
        "A set of tools for production",
        "All the actions required for a product from order to delivery",
        "A method of employee training",
        "A type of waste reduction",
      ],
      answer: "All the actions required for a product from order to delivery",
    },
    {
      question:
        "Which of the following is an objective of Lean Production in Industry 4.0?",
      options: [
        "Increasing waste in processes to improve flexibility",
        "Focusing on non-value-added activities to reduce costs",
        "Identifying waste in processes and eliminating it",
        "Eliminating continuous improvement efforts",
      ],
      answer: "Identifying waste in processes and eliminating it",
    },
    {
      question:
        "Which of the following technologies is a medium for achieving smart and connected systems?",
      options: [
        "Embedded Systems",
        "Traditional Mechanical Systems",
        "Manual Control Systems",
        "Non-Interactive Devices",
      ],
      answer: "Embedded Systems",
    },
    {
      question:
        "Which of the following are key attributes of a smart business model?",
      options: [
        "Manual processes, cost reduction, and labor dependency",
        "Value proposition, revenue streams, and technologies",
        "Traditional marketing, fixed costs, and limited innovation",
        "Centralized control, non-digital strategies, and fixed processes",
      ],
      answer: "Value proposition, revenue streams, and technologies",
    },
    {
      question: "Which of the following is not a component of a Smart Factory?",
      options: [
        "Smart machines",
        "Smart manufacturing processes",
        "Information Technology",
        "Physical ledgers",
      ],
      answer: "Physical ledgers",
    },
    {
      question:
        "In the Automation Pyramid of a Smart Factory, which level is just above the Device Level?",
      options: [
        "Control Level",
        "ERP Level",
        "Manufacturing execution system level",
        "None of these",
      ],
      answer: "Control Level",
    },
    {
      question:
        "Which of the following is not a prerequisite of the Industrial Internet of Things?",
      options: [
        "Security",
        "Incompatibility",
        "Interoperability",
        "Scalability",
      ],
      answer: "Incompatibility",
    },
    {
      question:
        "In which format is healthcare data transmitted to maintain data uniformity and interoperability?",
      options: ["HL-7", "LH-5", "HD-7", "None of these"],
      answer: "HL-7",
    },
  ],
  // <!-------------------------------------------- WEEK 3---------------------------------------------------------->
  "Week 3": [
    {
      question:
        "What is the main difference between Embedded Systems and Cyber-Physical Systems (CPS)?",
      options: [
        "Embedded systems are standalone devices, whereas CPS are networked systems.",
        "CPS have limited resources, while embedded systems are not resource constrained.",
        "Main issues of Embedded Systems are timing and concurrency while the main issues of CPS are real-time response and reliability.",
        "CPS lack physical components, while embedded systems include them.",
      ],
      answer:
        "Embedded systems are standalone devices, whereas CPS are networked systems.",
    },
    {
      question: "What does 'reactive computation' in CPS signify?",
      options: [
        "Systems with zero response time",
        "Interaction with the environment in an ongoing manner",
        "Predefined computation processes",
        "Complete isolation from physical feedback",
      ],
      answer: "Interaction with the environment in an ongoing manner",
    },
    {
      question: "In healthcare applications, CPS is used for __________.",
      options: [
        "Image-guided surgery and therapy",
        "Manual monitoring of vitals",
        "Static hospital management systems",
        "Front desk management",
      ],
      answer: "Image-guided surgery and therapy",
    },
    {
      question:
        "Which programming language developed in 1958 aided the evolution of Artificial Intelligence?",
      options: ["Python", "Lisp", "Java", "Prolog"],
      answer: "Lisp",
    },
    {
      question:
        "Which level in the '5C Architecture' ensures the gathering of precise status information of machines?",
      options: ["Conversion", "Cognition", "Cyber", "Configuration"],
      answer: "Cyber",
    },
    {
      question: "Intelligent sensors are capable of _____________.",
      options: [
        "Only sensing data",
        "Processing sensed data and managing external sensors/devices",
        "Limited communication",
        "Basic analog-to-digital conversion",
      ],
      answer: "Processing sensed data and managing external sensors/devices",
    },
    {
      question:
        "What are the five phases of product lifecycle as per PLM in Industry 4.0?",
      options: [
        "Visualize, Explain, Perceive, Support, Retire",
        "Research, Design, Marketing, Distribution, Recycling",
        "Ideation, Manufacturing, Expansion, Customer Feedback, Upgradation",
        "Requirement Analysis, Development, Testing, Deployment, Maintenance",
      ],
      answer: "Visualize, Explain, Perceive, Support, Retire",
    },
    {
      question:
        "How many steps are there in the PLM solution approach in Industry 4.0?",
      options: ["8", "9", "10", "12"],
      answer: "10",
    },
    {
      question:
        "Which of the following is not a key component of an AR Device?",
      options: ["Sensors", "Cameras", "Projection Screen", "Remote Control"],
      answer: "Remote Control",
    },
    {
      question: "Which of the following statements is incorrect?",
      options: [
        "Deep Learning is a subset of Machine Learning",
        "Deep Learning is a subset of Artificial Intelligence",
        "Machine Learning is a superset of Artificial Intelligence",
        "Artificial Intelligence is a superset of Machine Learning",
      ],
      answer: "Machine Learning is a superset of Artificial Intelligence",
    },
    {
      question: "Which of the following is NOT a challenge of AI in IIoT?",
      options: [
        "Connecting devices",
        "Understanding data",
        "Training AI models",
        "Lack of available data",
      ],
      answer: "Lack of available data",
    },
    {
      question:
        "What is the primary purpose of data preprocessing in Big Data analytics?",
      options: [
        "To store data without modification",
        "To remove noises and redundancies before analysis",
        "To generate fake data for testing purposes",
        "To visualize trends before collection",
      ],
      answer: "To remove noises and redundancies before analysis",
    },
    {
      question:
        "What type of analytics is used to predict future trends based on historical data patterns?",
      options: [
        "Descriptive Analytics",
        "Diagnostic Analytics",
        "Predictive Analytics",
        "Prescriptive Analytics",
      ],
      answer: "Predictive Analytics",
    },
    {
      question:
        "Which of the following is not one of the primary constraints of mobile CPS?",
      options: [
        "Stability of the network",
        "Power requirement",
        "Security",
        "Design aesthetics",
      ],
      answer: "Design aesthetics",
    },
    {
      question: "What are the components of the 5C architecture for CPS?",
      options: [
        "Connection, Conversion, Cyber, Cognition, Configuration",
        "Creation, Controlling, Continuation, Convergence, Compatibility",
        "Calculation, Catalysis, Convergence, Convenience, Cognizance",
        "None of these",
      ],
      answer: "Connection, Conversion, Cyber, Cognition, Configuration",
    },
  ],
  // <!-------------------------------------------- WEEK 4---------------------------------------------------------->
  "Week 4": [
    {
      question:
        "What is the primary purpose of SCADA in industrial applications?",
      options: [
        "Control and monitoring of physical processes",
        "Designing sensors for manufacturing",
        "Manual intervention in industrial processes",
        "Eliminating all automation",
      ],
      answer: "Control and monitoring of physical processes",
    },
    {
      question: "What is the function of WSANs in industrial processes?",
      options: [
        "Manual sensor installation",
        "Integration of sensors and actuators with wireless networks",
        "Replacing traditional data systems",
        "Eliminating automated controls",
      ],
      answer: "Integration of sensors and actuators with wireless networks",
    },
    {
      question: "What does cybersecurity primarily aim to protect?",
      options: [
        "Physical security",
        "Internet-connected systems, including hardware, software, and data",
        "Standalone software applications",
        "Manual data handling systems",
      ],
      answer:
        "Internet-connected systems, including hardware, software, and data",
    },
    {
      question:
        "Which industrial sector benefits from advanced analytics using the Industrial Internet?",
      options: [
        "Healthcare",
        "Oil and Gas",
        "Rail Transportation",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question:
        "Cyber Physical systems comprise which of the following layers?",
      options: [
        "Control Layer, Cognitive Layer, Cyber Layer, Conversion Layer and Connection Layer",
        "Sensing Layer, Edge Computing Layer, Cloud Layer, Decision-Making Layer, and Execution Layer",
        "Detection Layer, Data Processing Layer, Connectivity Layer, Automation Layer, and User Interaction Layer",
        "Edge Computing Layer, Automation Layer, Detection Layer, Decision-Making Layer, and Device Layer",
      ],
      answer:
        "Control Layer, Cognitive Layer, Cyber Layer, Conversion Layer and Connection Layer",
    },
    {
      question:
        "Which of the following is not a differentiator between IIoT and Automation?",
      options: [
        "Ubiquitous sensing",
        "Advanced analytics",
        "IT tools and methodologies",
        "None of these",
      ],
      answer: "None of these",
    },
    {
      question:
        "In the context of Cybersecurity for Industry 4.0, what does SDCMA stand for?",
      options: [
        "Secure Data and Cloud Management Architecture",
        "Secure Data and Cloud Management Architecture",
        "Software-Defined Cloud Manufacturing Architecture",
        "Smart Digital Cloud Monitoring Algorithm",
      ],
      answer: "Software-Defined Cloud Manufacturing Architecture",
    },
    {
      question:
        "Fill in the blank. According to GE, ____________ can be defined as 'the association of the global industrial system with low-cost sensing, interconnectivity through internet, high-level computing and analytics.'",
      options: [
        "Industrial Internet",
        "Internet of Things",
        "M2M Communication",
        "SCADA",
      ],
      answer: "Industrial Internet",
    },
    {
      question: "What are the three key elements of the Industrial Internet?",
      options: [
        "Connected Devices, Ubiquitous Sensing, and Cloud Computing",
        "Intelligent Machines, Advanced Analytics, and People at work",
        "5G Networks, Quantum Computing, and Virtual Reality",
        "Autonomous Robots, Blockchain, and Cloud Gaming",
      ],
      answer: "Intelligent Machines, Advanced Analytics, and People at work",
    },
    {
      question: "What is Multisensing?",
      options: [
        "Ability to sense multiple parameters at a single sensor node",
        "Using multiple sensors to measure a single parameter",
        "A network of distributed sensors communicating wirelessly",
        "Ability to process sensor data using artificial intelligence",
      ],
      answer: "Ability to sense multiple parameters at a single sensor node",
    },
    {
      question: "Which of the following is not an advantage of WSANs?",
      options: [
        "Preinstalled infrastructure",
        "Network self-organization",
        "Easy sensor & Actuator deployment",
        "Does not require any power source to operate",
      ],
      answer: "Does not require any power source to operate",
    },
    {
      question:
        "Which of the following is a major challenge for industrial processes in Industry 4.0?",
      options: [
        "Decreasing demand for automation",
        "Unlimited availability of skilled workers",
        "Constrained workforce and resource utilization",
        "Reduced need for supply chain management",
      ],
      answer: "Constrained workforce and resource utilization",
    },
    {
      question:
        "What is a key benefit of an autonomous pull economy in Industrial Process 4.0?",
      options: [
        "High waste generation",
        "Complete manual supervision",
        "End-to-end automation facility",
        "Lack of updated demand information",
      ],
      answer: "End-to-end automation facility",
    },
    {
      question:
        "Which of the following represents the basic components of a SCADA system?",
      options: [
        "Programmable Logic Controllers (PLC) and Remote Terminal Units (RTU)",
        "Supervisory System",
        "Communication Infrastructure",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "According to IEEE 1451 standards, how is a smart sensor defined?",
      options: [
        "Sensor with limited memory and no communication capabilities",
        "Sensor with small memory and standardized physical connection to enable communication with the processor and data network",
        "A basic sensor without processing or networking capabilities",
        "Sensor that only works in standalone mode without network integration",
      ],
      answer:
        "Sensor with small memory and standardized physical connection to enable communication with the processor and data network",
    },
  ],
  // <!----------------------------------------------------- WEEK 5---------------------------------------------------------->
  "Week 5": [
    {
      question: "Which of the following is NOT a key sector of Industry 4.0?",
      options: [
        "Smart robotics",
        "Smart Warehousing",
        "Intelligent manufacturing",
        "Paper-Based Inventory Management",
      ],
      answer: "Paper-Based Inventory Management",
    },
    {
      question:
        "What is a key advantage of the Outcome-Based Model in IoT business?",
      options: [
        "Decreased profit margin",
        "Increased negotiation cycle",
        "Higher customer satisfaction",
        "Increased risks",
      ],
      answer: "Higher customer satisfaction",
    },
    {
      question:
        "Which layer in the Industrial Internet Reference Architecture (IIRA) implements domain-specific applications and decision support systems and provides interfaces to end-users?",
      options: [
        "Edge Layer",
        "Enterprise Layer",
        "Platform Layer",
        "Gateway Layer",
      ],
      answer: "Enterprise Layer",
    },
    {
      question:
        "Which of the following is NOT a component of IIoT business models?",
      options: [
        "Value Proposition",
        "Value Capturing Mechanism",
        "Value Extraction Model",
        "Value Communication",
      ],
      answer: "Value Extraction Model",
    },
    {
      question:
        "What is the primary purpose of a Cloud-Based Business Model in IIoT?",
      options: [
        "Selling software licenses",
        "Leasing cloud computing resources temporarily",
        "Manufacturing industrial equipment",
        "Increasing industrial workforce requirements",
      ],
      answer: "Leasing cloud computing resources temporarily",
    },
    {
      question:
        "Fill in the blanks. Based on the leading and lagging Occupational Safety and Health (OSH) indicators, Key Performance Indicators (KPIs) are also categorized into _________ and _________.",
      options: [
        "Leading KPI and Lagging KPI",
        "Low KPI and High KPI",
        "Level KPI and Ground KPI",
        "None of these",
      ],
      answer: "Leading KPI and Lagging KPI",
    },
    {
      question:
        "Which of the following is NOT one of the four viewpoints in the Industrial Internet Reference Architecture (IIRA)?",
      options: [
        "Business viewpoint",
        "Usage viewpoint",
        "Functional viewpoint",
        "Financial viewpoint",
      ],
      answer: "Financial viewpoint",
    },
    {
      question:
        "State true or false. In the Usage Viewpoint of IIRA, “Task” is a basic unit of work carried out by a party assuming a role.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following is a challenge uniquely associated with asset-sharing IoT business models?",
      options: [
        "Profit margin",
        "Asset configuration",
        "Scalability",
        "Resource utilization",
      ],
      answer: "Asset configuration",
    },
    {
      question:
        "What are the key revenue models in a Cloud-Based Business Model?",
      options: [
        "Direct product sales, Leasing, Licensing",
        "Pay-per-use, Subscription fees, Advertisement",
        "One-time installation charges, Maintenance fees, Donations",
        "Mass production, Bulk discounts, Customer referrals",
      ],
      answer: "Pay-per-use, Subscription fees, Advertisement",
    },
    {
      question:
        "Which of the following is an advantage of the subscription-based IoT business model?",
      options: [
        "Reduced operational complexity",
        "Predictable, recurring revenue streams",
        "Lack of customer interaction",
        "Fixed pricing for all customers",
      ],
      answer: "Predictable, recurring revenue streams",
    },
    {
      question:
        "Which of the following is/are types of business models for IoT?",
      options: [
        "Subscription Model",
        "Outcome-Based Model",
        "Asset-Sharing Model",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question:
        "What is a major benefit of the layered databus pattern in IIRA?",
      options: [
        "Increased data redundancy",
        "Rapid device-to-device integration with minimal response time",
        "Elimination of automation in industrial systems",
        "Decentralized data storage without communication",
      ],
      answer: "Rapid device-to-device integration with minimal response time",
    },
    {
      question:
        "State true or false. Lack of interoperability, data privacy, security issues, and authentication of data at the organizational level are some of the major challenges of IIoT-based business models.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following is NOT a standard IIoT reference architecture?",
      options: [
        "Three-tier IIoT architecture",
        "Gateway-based IIoT architecture",
        "Layered Databus IIoT architecture",
        "Sixty four-tier IIoT architecture",
      ],
      answer: "Sixty four-tier IIoT architecture",
    },
  ],
  // <!-------------------------------------------- WEEK 6---------------------------------------------------------->
  "Week 6": [
    {
      question:
        "Which industrial communication technology is suitable for hazardous environments?",
      options: ["ModBus-TCP", "EtherCat", "Profibus PA", "TSN"],
      answer: "Profibus PA",
    },
    {
      question:
        "Which type of modem allows simultaneous bi-directional communication?",
      options: ["Simplex", "Half-duplex", "Duplex", "Synchronous"],
      answer: "Duplex",
    },
    {
      question:
        "Which of the following industrial communication protocols follow a client-server architecture?",
      options: ["MECHATROLINK", "ModBus-TCP", "Hostlink", "DeviceNet"],
      answer: "ModBus-TCP",
    },
    {
      question:
        "What type of tasks is enabled by Smallcell Deployment in cellular networks?",
      options: [
        "Increasing dead zones",
        "Alleviating backhaul burden and reducing latency",
        "Limiting energy efficiency",
        "Eliminating spectrum flexibility",
      ],
      answer: "Alleviating backhaul burden and reducing latency",
    },
    {
      question:
        "The DS1621 temperature sensor generates how many bits of temperature data?",
      options: ["8 bits", "9 bits", "10 bits", "12 bits"],
      answer: "9 bits",
    },
    {
      question:
        "Which of the following sensors is used to measure acceleration and provides 3-axis (X, Y, Z) values?",
      options: ["TCS3200", "LM35", "MQ-2", "ADXL335"],
      answer: "ADXL335",
    },
    {
      question:
        "Which sensor is used for detecting human presence based on infrared radiation?",
      options: [
        "Image sensor",
        "Ultrasonic sensor",
        "PIR sensor",
        "Magnetostrictive sensor",
      ],
      answer: "PIR sensor",
    },
    {
      question:
        "In an MOS gas sensor, what happens to the resistance in an n-type sensor when exposed to a reducing gas?",
      options: [
        "Resistance remains the same",
        "Resistance decreases",
        "Resistance increases",
        "Resistance fluctuates randomly",
      ],
      answer: "Resistance decreases",
    },
    {
      question:
        "Which of the following characteristics describes a gas sensor’s ability to detect a specific gas in the presence of other gases?",
      options: ["Sensitivity", "Stability", "Selectivity", "Reversibility"],
      answer: "Selectivity",
    },
    {
      question:
        "What is the maximum data transmission range for EtherCat using optical waveguides?",
      options: ["100 meters", "500 meters", "10 kilometers", "20 kilometers"],
      answer: "20 kilometers",
    },
    {
      question:
        "Which communication protocol uses Common Industrial Protocol (CIP) over Ethernet?",
      options: ["EtherNet/IP", "Profinet", "EtherCat", "Modbus-TCP"],
      answer: "EtherNet/IP",
    },
    {
      question: "What is the total bus length supported by Interbus?",
      options: [
        "7 kilometers",
        "10 kilometers",
        "13 kilometers",
        "24n−2 meters, where n is the number of slaves",
      ],
      answer: "13 kilometers",
    },
    {
      question:
        "Which of the following is a key requirement for Industrial communication?",
      options: [
        "High latency communication",
        "Manual device control",
        "Single-band connectivity",
        "Very low latency",
      ],
      answer: "Very low latency",
    },
    {
      question:
        "How are sensors categorized based on their power requirements?",
      options: [
        "Active and Passive",
        "Analog and Digital",
        "Load Resistive and Load Reactive",
        "Battery-Powered and Line-Powered",
      ],
      answer: "Active and Passive",
    },
    {
      question:
        "Modbus is an industrial communication protocol for Fieldbuses that follows a master-slave architecture. What is the maximum number of slave devices supported by the master node in this protocol?",
      options: ["128", "247", "256", "494"],
      answer: "247",
    },
  ],
  // <!-------------------------------------------- WEEK 7---------------------------------------------------------->
  "Week 7": [
    {
      question: "Which of the following topologies is NOT supported by Zigbee?",
      options: ["Tree", "Bus", "Mesh", "All of these"],
      answer: "Bus",
    },
    {
      question: "What is a key benefit of Distributed Control Systems (DCS)?",
      options: [
        "Increased complexity in control mechanism",
        "Improved reliability through distributed control",
        "Increased manual interventions",
        "Reduced communication between devices",
      ],
      answer: "Improved reliability through distributed control",
    },
    {
      question: "In which frequency bands do LoRa operate?",
      options: [
        "2.4 GHz",
        "868 MHz (Europe), 915 MHz (North America)",
        "5 GHz",
        "1.8 MHz",
      ],
      answer: "868 MHz (Europe), 915 MHz (North America)",
    },
    {
      question: "Which library is required to work with the LoRa?",
      options: ["Radiohead", "Xbee", "Zigbee", "XCTU"],
      answer: "Radiohead",
    },
    {
      question:
        "Machine-to-Machine Interface (M2MI) is one of the major components of Supervisory control and Data Acquisition that is used for enabling control and operations of the remote processes by human operators.",
      options: ["True", "False"],
      answer: "False",
    },
    {
      question:
        "Zigbee uses the _____________ standard for defining its physical and medium access control (layers 1 and 2 of the OSI stack).",
      options: [
        "IEEE 802.16.6",
        "IEEE 802.15.4",
        "IEEE 502.15.4",
        "IEEE 502.16.6",
      ],
      answer: "IEEE 802.15.4",
    },
    {
      question:
        "The SIGFOX network can transmit up to 140 messages per day with a payload of 12 bytes per message.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following is/are false about the rule-based engine?",
      options: [
        "Extract causal and temporal patterns using predefined rules",
        "Handles multiple data streams and correlates them to provide meaningful output",
        "Cannot process data in near real-time",
        "All of the above",
      ],
      answer: "Cannot process data in near real-time",
    },
    {
      question: "Which of the following is NOT a Zigbee device type?",
      options: ["Coordinator", "Router", "End device", "Hub"],
      answer: "Hub",
    },
    {
      question:
        "What is the role of message brokers like MQTT and Apache Kafka in real-time IoT processing systems?",
      options: [
        "They store IoT data permanently",
        "They transfer data to analytical pipelines",
        "They eliminate the need for data analysis",
        "They reduce data complexity by deleting unnecessary events",
      ],
      answer: "They transfer data to analytical pipelines",
    },
    {
      question:
        "Which type of analytics in IIoT focuses on forecasting future conditions?",
      options: [
        "Descriptive Analytics",
        "Predictive Analytics",
        "Prescriptive Analytics",
        "Business Processing Analytics",
      ],
      answer: "Predictive Analytics",
    },
    {
      question:
        "Which of the following is NOT a key component of the Smart Water Management Platform (SWAMP)?",
      options: ["Sensors", "Virtual entity", "ERP", "Data management"],
      answer: "ERP",
    },
    {
      question:
        "Which of the following is NOT a phase of Industrial Manufacturing workflow?",
      options: [
        "Collection of service offerings and infrastructure",
        "Virtualization, allocation, and management of services",
        "On-demand service provisioning",
        "Reallocation of deployed infrastructure",
      ],
      answer: "Reallocation of deployed infrastructure",
    },
    {
      question: "Which of the following is NOT a key component of SCADA?",
      options: [
        "Sensors and Control Relays",
        "Remote Telemetry Units (RTUs)",
        "Inventory Databases",
        "Human-Machine Interface (HMI)",
      ],
      answer: "Inventory Databases",
    },
    {
      question:
        "Which of the following is NOT a major component of an Industrial Control System?",
      options: [
        "Process Variables",
        "Set Points",
        "Industrial Internet",
        "Manipulating Variables",
      ],
      answer: "Industrial Internet",
    },
  ],
  // <!-------------------------------------------- WEEK 8---------------------------------------------------------->
  "Week 8": [
    {
      question:
        "Which of the following is NOT a key characteristic of Big Data Analytics in IIoT?",
      options: ["Volume", "Velocity", "Veracity", "Validation"],
      answer: "Validation",
    },
    {
      question: "Which software is commonly used for batch-oriented analytics?",
      options: [
        "C++ and Java",
        "Apache Hadoop and Apache Spark",
        "Pandas and Numpy",
        "MongoDB and MySQL",
      ],
      answer: "Apache Hadoop and Apache Spark",
    },
    {
      question:
        "Which of the following is NOT a fundamental type of IIoT Analytics?",
      options: [
        "Descriptive Analytics",
        "Predictive Analytics",
        "Prescriptive Analytics",
        "Structural Analytics",
      ],
      answer: "Structural Analytics",
    },
    {
      question:
        "Which machine learning algorithm enables machines to improve their performance by automatically learning the ideal behaviors for a specific environment?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Regression",
      ],
      answer: "Reinforcement Learning",
    },
    {
      question:
        "Which of the following represents a key feature of Fuzzy c-Means clustering?",
      options: [
        "A data point can belong to more than one cluster",
        "A data point belongs strictly to only one cluster",
        "Extremely slower than K-Means",
        "None of these",
      ],
      answer: "A data point can belong to more than one cluster",
    },
    {
      question: "Which of the following is TRUE about the ThingWorx platform?",
      options: [
        "Perform complex analytical process",
        "Deliver real-time perception",
        "Has the ability to monitor the condition",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question:
        "State True or False. Deep learning is an 'end-to-end learning', which extracts features on its own. On the contrary, in machine learning, features are to be explicitly mentioned.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following statements is TRUE about machine learning (ML)?",
      options: [
        "ML is the subset of AI that can learn automatically from the object features",
        "ML is the subset of DL which can learn automatically by finding the features of the object on its own",
        "ML always performs better than Deep Learning models",
        "ML can only be used for image recognition tasks",
      ],
      answer:
        "ML is the subset of AI that can learn automatically from the object features",
    },
    {
      question:
        "Which of the following statements about MindSphere is incorrect?",
      options: [
        "Cloud-based operating system platform for IoT",
        "Open safety-as-a-service",
        "Bring together IoT data from products, factories, machines, and systems to exploit its prosperity",
        "Enterprise oriented solutions",
      ],
      answer: "Open safety-as-a-service",
    },
    {
      question:
        "Which of the following is/are key characteristic(s) of a Consumer IoT cloud platform?",
      options: [
        "Provide very specific applications for end users",
        "Provide modest security",
        "Generally cost-sensitive",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question:
        "Which of the following is NOT a fundamental cloud computing service?",
      options: [
        "Software-as-a-Service",
        "Platform-as-a-Service",
        "ERP-as-a-Service",
        "Infrastructure-as-a-Service",
      ],
      answer: "ERP-as-a-Service",
    },
    {
      question: "Which of the following services is NOT provided by C3 IoT?",
      options: [
        "Predictive Maintenance",
        "Inventory Optimization",
        "IoT Hardware Analysis",
        "Fraud Detection",
      ],
      answer: "IoT Hardware Analysis",
    },
    {
      question:
        "Which of the following cloud platform providers does not offer IIoT device management services?",
      options: [
        "Bosch IoT Remote Manager",
        "Facebook Cloud Services",
        "AWS’s IoT Device Management",
        "ICP DAS’s IoTstar",
      ],
      answer: "Facebook Cloud Services",
    },
    {
      question:
        "What does 'Variety' refer to in the context of data generation?",
      options: [
        "The speed at which data is generated",
        "The amount of data generated",
        "The format of data generated, such as structured, semi-structured, or unstructured",
        "The accuracy and reliability of data generated",
      ],
      answer:
        "The format of data generated, such as structured, semi-structured, or unstructured",
    },
    {
      question: "What does the 'K' in K-means clustering represent?",
      options: [
        "Number of features in the dataset",
        "Number of clusters to be identified",
        "Maximum iterations allowed in the process",
        "Number of data points in each cluster",
      ],
      answer: "Number of clusters to be identified",
    },
  ],
  // <!-------------------------------------------- WEEK 9---------------------------------------------------------->
  "Week 9": [
    {
      question:
        "Which of the following can be rendered by the fog-enabled IIoT?",
      options: [
        "Real-time monitoring and visualization",
        "End-to-end security",
        "Scalability and flexibility",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question: "Which of the following is a Fog Computing platform provider?",
      options: ["Netflix", "FogHorn", "Google Search", "Twitter Analytics"],
      answer: "FogHorn",
    },
    {
      question: "What is the primary use of the R programming language?",
      options: [
        "ERP data handling",
        "Statistical analysis and data visualization",
        "SDN security provisioning",
        "Mobile application development",
      ],
      answer: "Statistical analysis and data visualization",
    },
    {
      question:
        "Which operator in R is used to obtain the remainder of a division?",
      options: ["/", "%/%", "%%", "^"],
      answer: "%%",
    },
    {
      question: "Which of the following is NOT a data type in R?",
      options: ["Logical", "Integer", "Binary", "Complex"],
      answer: "Binary",
    },
    {
      question: "What is the function of the ‘caret’ package in R?",
      options: [
        "Provides functions for network security",
        "Provides functions for creating predictive models",
        "Manages file system operations",
        "Helps in game development",
      ],
      answer: "Provides functions for creating predictive models",
    },
    {
      question:
        "In Julia programming language, which of the following is used for string interpolation?",
      options: ["&", "%", "$", "@"],
      answer: "$",
    },
    {
      question:
        "Which of the following is NOT a basic service model of cloud computing?",
      options: [
        "Infrastructure-as-a-Service (IaaS)",
        "Platform-as-a-Service (PaaS)",
        "Software-as-a-Service (SaaS)",
        "Analytics-as-a-Service (AaaS)",
      ],
      answer: "Analytics-as-a-Service (AaaS)",
    },
    {
      question: "What is the primary purpose of data pre-processing in IIoT?",
      options: [
        "To always append 50% randomly generated data with the existing dataset",
        "To clean, integrate, and filter data before analysis",
        "To always delete 50% of the existing data randomly",
        "To transfer data directly to users without modification",
      ],
      answer: "To clean, integrate, and filter data before analysis",
    },
    {
      question:
        "State true or false. Hadoop Distributed File System (HDFS) and Kosmosfs are notable file systems derived from the open-source codes of Google File System (GFS).",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following is NOT a key requirement for a Data Center Network?",
      options: [
        "VM migration without changing IP addresses",
        "Fast detection of failure",
        "In-house power plant",
        "Efficient repair of failure",
      ],
      answer: "In-house power plant",
    },
    {
      question:
        "Edge, Aggregation, and Core are the components of which Data Center Network topology?",
      options: ["DCell", "Fat-Tree DCN", "BCube", "Hybrid Cloud Network"],
      answer: "Fat-Tree DCN",
    },
    {
      question:
        "Which of the following statements about the Data Center Network topology- BCube is incorrect?",
      options: [
        "Server-centric approach, rather than the switch-oriented practice",
        "Places intelligence on modular data center (MDC) servers",
        "Provides single serial short paths between any pair of servers",
        "Runs a source routing protocol called BSR (Bcube Source Routing)",
      ],
      answer: "Provides single serial short paths between any pair of servers",
    },
    {
      question: "What is the role of the SDN controller in a network?",
      options: [
        "It modifies data packets before forwarding to end users",
        "It defines and manages flow rules for forwarding devices",
        "It directly replaces physical network switches",
        "It completely eliminates the need for network security",
      ],
      answer: "It defines and manages flow rules for forwarding devices",
    },
    {
      question:
        "Which of the following statements is FALSE about fog computing?",
      options: [
        "The fog layer analyzes a huge volume of real-time data generated from industrial devices and machines.",
        "The fog layer simultaneously collects data from various interconnected industrial machines, smart sensors, devices, and robots.",
        "The fog layer generates the decisions from the sensed data and delivers them to the actuators with minimum latency.",
        "The fog layer increases unnecessary data transmission to the cloud and server by bypassing data filtering and restructuring.",
      ],
      answer:
        "The fog layer increases unnecessary data transmission to the cloud and server by bypassing data filtering and restructuring.",
    },
  ],
  // <!-------------------------------------------- WEEK 10---------------------------------------------------------->
  "Week 10": [
    {
      question:
        "Which of the following is NOT a component of the SDIIoT architecture?",
      options: [
        "SDIIoT – WSN",
        "SDIIoT – Industrial Bus & Network",
        "SDIIoT – ERP Framework",
        "SDIIoT – Industrial Cloud",
      ],
      answer: "SDIIoT – ERP Framework",
    },
    {
      question:
        "Which of the following is NOT a component of SD-Edge IIoT Architecture?",
      options: [
        "Cluster Head",
        "Industrial Cloud",
        "Edge Network",
        "Standalone Firewall",
      ],
      answer: "Standalone Firewall",
    },
    {
      question:
        "Which of the following is NOT a key attribute of trustworthy IIoT?",
      options: [
        "Reliability",
        "Security",
        "Unlimited network access",
        "Privacy",
      ],
      answer: "Unlimited network access",
    },
    {
      question:
        "Which of the following is an example of an IIoT attack at the physical layer?",
      options: [
        "SQL injection",
        "Device tampering",
        "Traffic flooding",
        "Man-in-the-middle attack",
      ],
      answer: "Device tampering",
    },
    {
      question: "What does the STRIDE threat model in IIoT security stand for?",
      options: [
        "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
        "Secure Transmission, Reliable Data, Industrial Deployment, Encryption",
        "Software, Tracking, Response, Integration, Data, Encryption",
        "Security Threats, Risk Identification, Detection, Evaluation",
      ],
      answer:
        "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
    },
    {
      question:
        "Which of the following is an attack vector in the network layer of IIoT?",
      options: [
        "SQL injection",
        "Traffic flooding",
        "Jamming attack",
        "Data spoofing",
      ],
      answer: "Traffic flooding",
    },
    {
      question:
        "Which of the following is NOT a building block of IIoT security?",
      options: [
        "Cloud security",
        "Data protection",
        "Physical network topologies",
        "Communication Protection",
      ],
      answer: "Physical network topologies",
    },
    {
      question:
        "Which of the following standards is related to Industrial automation and control systems security?",
      options: ["ISO/IEC 154083", "IEC 62443", "ISO 27017", "NIST SP 800-144"],
      answer: "IEC 62443",
    },
    {
      question:
        "Which of the following is NOT a key principle of data protection in IIoT?",
      options: [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Unrestricted access",
      ],
      answer: "Unrestricted access",
    },
    {
      question:
        "State true or false. Caterpillar’s AR app generates an end-to-end view of the factory floor, enabling machine operators to detect tool replacement needs and send instructions for replacement.",
      options: ["True", "False"],
      answer: "True",
    },
    {
      question:
        "Which of the following is NOT a key feature of a Smart Factory?",
      options: [
        "Continuous real-time data",
        "Prediction of future outcomes for taking preventive actions",
        "High manual operation",
        "Flexibility and adaptability",
      ],
      answer: "High manual operation",
    },
    {
      question:
        "Which of the following statements is INCORRECT about Fanuc – Zero Downtime System?",
      options: [
        "Is a robot maker",
        "Uses predictive maintenance to reduce downtime",
        "Does not predict component failure",
        "Performs cloud-based analytics with the help of in-built sensors",
      ],
      answer: "Does not predict component failure",
    },
    {
      question: "What is the purpose of SmartLabel in the food industry?",
      options: [
        "To provide consumers with product-related information via QR codes",
        "To remove ingredient details from food packaging",
        "To eliminate allergen warnings for consumers",
        "To prevent transparency in the food supply chain",
      ],
      answer:
        "To provide consumers with product-related information via QR codes",
    },
    {
      question:
        "Which of the following devices is primarily used to detect the presence of microbial disease in food?",
      options: [
        "Diagenetix-BioRanger",
        "Eskesso–The Cooking Sorcery",
        "Intellicup–Smart Cups",
        "Intellicup–The Cooking Sorcery",
      ],
      answer: "Diagenetix-BioRanger",
    },
    {
      question:
        "What is the unique feature of Spinn Inc.’s smart coffee machines?",
      options: [
        "They connect with Amazon Echo and have an auto-order feature",
        "They remove automation from coffee brewing",
        "They require manual input for all brewing processes",
        "They prevent connectivity with IoT platforms",
      ],
      answer: "They connect with Amazon Echo and have an auto-order feature",
    },
  ],
  // <!-------------------------------------------- WEEK 11---------------------------------------------------------->
  "Week 11": [
    {
      question: "What is one of the primary benefits of IIoT in healthcare?",
      options: [
        "a. Increasing the number of hospital visits",
        "b. Remote monitoring of patient health conditions",
        "c. Limiting the use of wearable healthcare devices",
        "d. Reducing the need for medical data storage",
      ],
      answer: "b. Remote monitoring of patient health conditions",
    },
    {
      question:
        "Which IoT-enabled device is used for continuous glucose level monitoring?",
      options: [
        "a. QardioCore",
        "b. Dexcom Glucose Sensor",
        "c. iHealth BP5",
        "d. Kinsa Smart Thermometer",
      ],
      answer: "b. Dexcom Glucose Sensor",
    },
    {
      question:
        "Which IIoT device monitors body temperature using wearable sensors?",
      options: [
        "a. Kinsa Smart Thermometer",
        "b. Dexcom Glucose Sensor",
        "c. iHealth BP5",
        "d. ADAMM Intelligent Asthma Monitor",
      ],
      answer: "a. Kinsa Smart Thermometer",
    },
    {
      question:
        "Which of the following ensures that medical data is not accessible by unauthorized users?",
      options: [
        "a. Integrity",
        "b. Authentication",
        "c. Confidentiality",
        "d. Availability",
      ],
      answer: "c. Confidentiality",
    },
    {
      question: "What is a major benefit of smart metering in IIoT?",
      options: [
        "a. Reduces operational costs by enabling remote management",
        "b. Increases the chance of energy loss",
        "c. Eliminates the need for grid optimization",
        "d. Limits data collection from power systems",
      ],
      answer: "a. Reduces operational costs by enabling remote management",
    },
    {
      question:
        "What is a key advantage of Advanced Metering Infrastructure (AMI)?",
      options: [
        "a. Prevents broadband and radio frequency communications",
        "b. Enables smart meters to collect and transmit energy consumption data",
        "c. Eliminates the need for automated power distribution",
        "d. Reduces the effectiveness of metering data management",
      ],
      answer:
        "b. Enables smart meters to collect and transmit energy consumption data",
    },
    {
      question: "How does IIoT benefit the wind energy sector?",
      options: [
        "a. Predicts turbine issues before large-scale damage occurs",
        "b. Prevents automation in remote power plants",
        "c. Increases the difficulty of maintaining remote turbines",
        "d. Disables predictive maintenance in wind farms",
      ],
      answer: "a. Predicts turbine issues before large-scale damage occurs",
    },
    {
      question:
        "Which of the following is NOT a key function of Inventory Management?",
      options: [
        "a. Decouple components of the production-distribution system",
        "b. Hedge against price increases or take advantage of quantity discounts",
        "c. Eliminating stock monitoring",
        "d. Smoothen the flow of operations",
      ],
      answer: "c. Eliminating stock monitoring",
    },
    {
      question:
        "What type of RFID tag has an onboard battery but no active transmitter?",
      options: [
        "a. Active RFID Tag",
        "b. Passive RFID Tag",
        "c. Semi-Passive RFID Tag",
        "d. Dynamic RFID Tag",
      ],
      answer: "c. Semi-Passive RFID Tag",
    },
    {
      question: "Which of the following is NOT true about RFID tags?",
      options: [
        "a. RFID tags can store additional information like temperature and damage status.",
        "b. RFID tags require a line-of-sight for data reading.",
        "c. RFID tags are used for product identification and visibility.",
        "d. RFID tags have better security compared to barcodes.",
      ],
      answer: "b. RFID tags require a line-of-sight for data reading.",
    },
    {
      question:
        "Which network security measure is used to detect and prevent malware?",
      options: [
        "a. Access control",
        "b. Antivirus and antimalware software",
        "c. Virtual Private Network",
        "d. Data encryption",
      ],
      answer: "b. Antivirus and antimalware software",
    },
    {
      question: "Which of the following is not a key feature of AR?",
      options: [
        "a. AR creates the perception of a mixed reality spectrum.",
        "b. AR produces an enhanced view of the real world using multiple sensory modalities – auditory, haptic, somatosensory, olfactory, and visual.",
        "c. AR completely replaces the real-world environment with a fully virtual space.",
        "d. AR utilizes the existing physical environment and overlays additional useful information on top of it.",
      ],
      answer:
        "c. AR completely replaces the real-world environment with a fully virtual space.",
    },
    {
      question: "How does IoT enhance security in facility management?",
      options: [
        "a. By monitoring alarms, smoke detectors, and life safety systems remotely",
        "b. By disconnecting emergency response systems",
        "c. By preventing real-time access to security alerts",
        "d. By limiting surveillance capabilities in buildings",
      ],
      answer:
        "a. By monitoring alarms, smoke detectors, and life safety systems remotely",
    },
    {
      question: "Which of the following is NOT a type of network security?",
      options: [
        "a. Intrusion prevention systems",
        "b. Firewalls",
        "c. Mobile device security",
        "d. Manual error tracking",
      ],
      answer: "d. Manual error tracking",
    },
    {
      question: "Which of the following is NOT a component of an RFID system?",
      options: [
        "a. RFID reader",
        "b. Antenna",
        "c. Integrated Circuit Card (ICC)",
        "d. RFID tag or smart label",
      ],
      answer: "c. Integrated Circuit Card (ICC)",
    },
  ],
  // <!-------------------------------------------- WEEK 12---------------------------------------------------------->
  "Week 12": [
    {
      question:
        "Which of the following is NOT a benefit of IoT in the oil and gas industry?",
      options: [
        "Improving work safety",
        "Enhancing production efficiency",
        "Eliminating equipment maintenance",
        "Saving cost and time",
      ],
      answer: "Eliminating equipment maintenance",
    },
    {
      question:
        "What is a key application of IoT sensors in the pharmaceutical industry?",
      options: [
        "Detecting adverse drug reactions (ADR)",
        "Eliminate utilization of equipment",
        "Increasing production costs intentionally",
        "Avoiding remote control of equipment",
      ],
      answer: "Detecting adverse drug reactions (ADR)",
    },
    {
      question:
        "Which of the following cannot be achieved by performing condition-based monitoring using IoT?",
      options: [
        "Predicting quality through continuous monitoring",
        "Analytics-based weather prediction and its impact on farming",
        "Adjust the amount of required material",
        "Eliminating pricing models entirely",
      ],
      answer: "Eliminating pricing models entirely",
    },
    {
      question: "How does IoT improve logistics for industries?",
      options: [
        "Preventing product location tracking with sensors or RFID tags",
        "Ensuring contamination detection and alert notifications",
        "Avoiding warehouse monitoring altogether",
        "Ignoring asset tracking to prevent loss",
      ],
      answer: "Ensuring contamination detection and alert notifications",
    },
    {
      question:
        "How does IoT contribute to reducing energy expenses in industries?",
      options: [
        "By analyzing real-time data to identify inefficiencies",
        "By increasing regulatory control burdens",
        "By avoiding usage pattern analysis",
        "By ignoring energy usage optimization",
      ],
      answer: "By analyzing real-time data to identify inefficiencies",
    },
    {
      question:
        "Which of the following can be achieved by using IoT in the chemical industry?",
      options: [
        "Reduction in Energy Expenses",
        "Predictive Maintenance",
        "Improve Logistics",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question:
        "Which generation of UAVs introduced transformable designs, 1080 HD video, and three-axis gimbals?",
      options: [
        "Second Generation",
        "Fourth Generation",
        "Fifth Generation",
        "Sixth Generation",
      ],
      answer: "Fourth Generation",
    },
    {
      question: "How do UAVs help in the mining industry?",
      options: [
        "Digging entire tunnels",
        "Managing stockpiles and grading control",
        "Operating drilling machinery",
        "Refining extracted minerals",
      ],
      answer: "Managing stockpiles and grading control",
    },
    {
      question: "How do UAVs help in agriculture?",
      options: [
        "Monitor crop stress factors like over-fertilization or drought",
        "Reduce human labor completely",
        "Eliminate the need for fertilizers",
        "Increase soil erosion",
      ],
      answer: "Monitor crop stress factors like over-fertilization or drought",
    },
    {
      question: "What is a major advantage(s) of UAVs in telecommunication?",
      options: [
        "Monitor towers from any angle and height",
        "Covers wide areas with less cost",
        "Broadcasting live events",
        "All of these",
      ],
      answer: "All of these",
    },
    {
      question:
        "Which of the following is most suitable for scanning a huge number of items in a warehouse, checking the missing items, and monitoring full inventory?",
      options: [
        "Unmanned Aerial Vehicle (UAV)",
        "Automated Guided Vehicle (AGV)",
        "Autonomous Underwater Vehicle (AUV)",
        "Segway",
      ],
      answer: "Unmanned Aerial Vehicle (UAV)",
    },
    {
      question:
        "Which generation of UAVs introduced transformable designs with 360° gimbals and high-quality video instrumentation?",
      options: [
        "Third Generation",
        "Fourth Generation",
        "Fifth Generation",
        "Sixth Generation",
      ],
      answer: "Fifth Generation",
    },
    {
      question:
        "Which of the following is NOT an application of UAVs in forestry?",
      options: [
        "Conducting forestry surveys to show information about forest species, including the humans around the forest",
        "Precision forestry and canopy mapping for measuring canopy height, density, and volume estimation",
        "Tracking wildland fires",
        "Eradicating endangered species",
      ],
      answer: "Eradicating endangered species",
    },
    {
      question:
        "What is one of the primary applications of UAVs in construction sites?",
      options: [
        "Painting buildings",
        "Monitoring job sites",
        "Replacing construction workers",
        "Manufacturing construction materials",
      ],
      answer: "Monitoring job sites",
    },
    {
      question:
        "Which of the following is/are FALSE about the necessity of case studies?",
      options: [
        "The case study investigates real-life phenomena through a detailed analysis of related events.",
        "The case study generally selects a vast geographical area or a large number of individuals as the subject matter.",
        "Both (a) and (b)",
        "Neither (a) nor (b)",
      ],
      answer:
        "The case study generally selects a vast geographical area or a large number of individuals as the subject matter.",
    },
  ],
};

const weekList = document.getElementById("weekList");
const questionsDiv = document.getElementById("questions");
const weekTitle = document.getElementById("weekTitle");

Object.keys(quizData).forEach((week) => {
  const li = document.createElement("li");
  li.textContent = week;
  li.onclick = () => loadQuestions(week);
  weekList.appendChild(li);
});

function loadQuestions(week) {
  weekTitle.textContent = week;
  questionsDiv.innerHTML = "";

  if (quizData[week].length === 0) {
    questionsDiv.innerHTML = "<p>No questions available for this week.</p>";
    return;
  }

  quizData[week].forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    let imageHtml = item.image
      ? `<img src="${item.image}" alt="Question Image">`
      : "";
    let optionsHtml = item.options
      .map(
        (option) => `
                  <li>
                      <label>
                          <input type="radio" name="q${index}" value="${option}"> ${option}
                      </label>
                  </li>`
      )
      .join("");

    questionDiv.innerHTML = `
              ${imageHtml}
              <strong>Q${index + 1}:</strong> ${item.question}
              <ul>${optionsHtml}</ul>
              <button onclick="showAnswer(${index})">Show Answer</button>
              <p class="answer" id="answer${index}"></p>`;

    questionsDiv.appendChild(questionDiv);
  });

  // Add Submit Button at the end
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Answers";
  submitButton.className = "submit-btn";
  submitButton.onclick = () => checkAnswers(week);
  questionsDiv.appendChild(submitButton);
}

function showAnswer(index) {
  const answerDisplay = document.getElementById(`answer${index}`);
  const correctAnswer = quizData[weekTitle.textContent][index].answer;
  answerDisplay.textContent = `Correct Answer: ${correctAnswer}`;
  answerDisplay.style.display = "block";
}

function checkAnswers(week) {
  quizData[week].forEach((item, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    const answerDisplay = document.getElementById(`answer${index}`);

    if (selectedOption) {
      if (selectedOption.value === item.answer) {
        answerDisplay.textContent = "Correct ✅";
        answerDisplay.className = "answer correct";
      } else {
        answerDisplay.textContent = `Incorrect ❌ (Correct: ${item.answer})`;
        answerDisplay.className = "answer incorrect";
      }
    } else {
      answerDisplay.textContent = "No answer selected ❌";
      answerDisplay.className = "answer incorrect";
    }

    answerDisplay.style.display = "block";
  });

  // Disable all options after submission
  document.querySelectorAll("input[type=radio]").forEach((input) => {
    input.disabled = true;
  });
}
