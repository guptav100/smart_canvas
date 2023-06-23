# JARVIS. A Virtual Home Assistant
#### To be published on 6th July 2023
#### Paper ID 24459
<a href="https://docs.google.com/document/d/1xJT0zg8e2tiWOiQ3WEQYTwm7kVZaAAerkuVsDXCm32Y/edit?usp=sharing">Demo Link</a>

 
#### Guided by
Ms. Khushboo Verma, Assistant Professor, ECE Department

<div><br></div>


Chakit Gupta
chakitg1@gmail.com

Akash Kumar
kumarakash12701@gmail.com

Vishal Gupta
vishalgupta24092@gmail.com

Simran Shah
simransaha1234@gmail.com

Abstract: Jarvis is a multipurpose desktop application programme. By comprehending voice commands, the virtual assistant performs tasks or replies to user enquiries. A virtual assistant is computer software that simplifies a user's daily tasks, such as reading the news, checking the weather, browsing the internet, doing certain basic system operations, and many more. The desktop version of Jarvis' virtual assistant is optimised for performance.
Keywords: Jarvis, Home Assistant, Virtual, Automated, Voice Commands,  Desktop, Smart Homes. 

## INTRODUCTION
The development of artificial intelligence (AI) that can create natural human-machine interactions (speech/voice communication, gesture detection, facial expressions, etc.) is now becoming more and more noticeable. The interaction of direction was first seen and investigated since it was crucial to the system's comprehension. Although it is not yet possible for a human to learn to communicate with a machine, it is already possible for a computer to do so by observing a person's activities, routines, personality, or other characteristics and making an effort to become his personal assistant.
Virtual assistants are computer programmes that make it easier for the user to complete daily duties, such as showing weather information or reports, setting reminders, building lists for searches, etc. AI chatbots and speech/voice commands are both accepted by virtual assistants. Voice-based virtual assistants require a wake-up word or invocation before they will activate the attendant and respond to voice commands.

We are familiar with a few virtual assistants, including Google Assistant, Siri, Alexa, and Cortana from Microsoft and Apple. This approach is intended to function well on desktop computers. Application code for personal assistants increases users' productivity by planning common chores and supplying them with data from an online source.

### Speech Recognition:
Speech recognition, also referred to as speech-to-textbook, refers to a machine's or program's ability to honor and transform spoken words into understandable text. Simple speech recognition software has a limited vocabulary and can only honor words and rulings that are pronounced clearly. More sophisticated software can handle natural speech, several accents, and multiple languages. Speech recognition uses linguistics, computer engineering research, and computer knowledge. Many modern widgets and textbook-focused programs now come with speech recognition features to make utilizing them simpler or hands-free. Voice recognition and speech recognition are two separate technologies that shouldn't be mixed together. Words uttered in a language can be recognised using speech recognition technology. Voice recognition uses biometrics to identify people by their voices.
Before turning spoken words into text, speech recognition systems process and evaluate them using computer algorithms. A computer programme turns the sound a microphone records into written language that computers and people can understand by going through these four steps.
The audio should be broken down into its component parts, divided into corridors, digitised into a computer-readable format, and then matched using an algorithm to the most appropriate textbook representation.
### Artificial Intelligence:
Artificial intelligence (AI) is the ability of a computer or a robot that is controlled by a computer to do tasks that would typically be completed by intelligent beings. The phrase is frequently used to refer to a design that aims to give systems cognitive abilities that are similar to those of living things, such as the ability to reason, decipher meaning, generalise, and learn from past mistakes. Since the development of the digital computer in the 1940s, it has been demonstrated that computers can be taught to carry out incredibly complex tasks with ease, comparable to playing chess or chumming for fine theorems. Although computer processing speed and memory capacity are constantly increasing, no software has yet been able to match the severity of death in broader fields or in conditioning that requires a substantial amount of common knowledge. However, some programmes have outperformed human experts and professionals in performing specific tasks. In this limited sense, artificial intelligence can be implemented in jobs as diverse as medical diagnosis, computerised research tools, and voice or handwriting recognition.
### Virtual Assistance:
An independent contractor who works for a client and offers executive support while operating from a location other than the client's office is known as a virtual adjunct. A virtual assistant often works from home, but they can access crucial planning tools like participant scheduling from any location. Virtual assistants frequently have prior experience serving as an executive adjunct or office director. Virtual assistants that are skilled in social media, content management, writing blog posts, graphic design, and online marketing are vying for new positions. It is anticipated that as more people and organisations adopt working from home, demand for skilled virtual assistants will increase. 
<br>
A virtual assistant is a self-employed professional who works from home or another remote location to assist clients with their administrative needs. A virtual assistant's typical duties include making phone calls, setting up appointments, organising vacations, and managing email accounts.
Some of the specialties of virtual assistants include marketing, social media management, bookkeeping, blogging, graphic design, and bookkeeping.
The option to just pay for the services you actually need is one advantage of using a virtual assistant for your business.
Virtual assistants are more common as small firms and startups rely on virtual offices to reduce costs and businesses of all sizes increase their use of the internet for daily operations.

We no longer even touch or type with our fingertips in modern society. We merely discuss the task, and the virtual assistant completes it. Additionally, the virtual assistant must offer a variety of specialised functions, like translation, weather forecasts, buzzing, searching, and browsing. Voice searches have surpassed text-based online searches made on smartphones, which have just surpassed those made on computers. Analysts predict that by 2020, 50% of searches will be made using speech or voice. More intelligent than ever, virtual assistants are on the rise.
Give your virtual assistant the freedom to gather data for you and provide thoughtful solutions.

## ETHODOLOGY
We used the model of the waterfall methodology for the development of the project. The Waterfall Methodology is the earliest and most sequential application development life cycle model currently in use. Regardless of the project, it is broken down into various series of levels called initiation, analytics, design, programming, testing, and deployment. Nobody may proceed to a following stage without finishing the preceding step, thus the need for such phases. It is commonly referred to as the linear sequence app development life cycle model for this reason.

###TASKS EXECUTED AT EACH PROJECT STAGE:
1. Gathering Requirements: The system's development required the gathering of requirements.
2. Designing Phase: Plan the necessary frameworks, programming languages, or layout for the designing phase.
3. Implementation: The work, including all programming and coding, is completed at this stage.
4. Testing: Run the programme in debugging mode to ensure that it has all the planned functions. If any bugs are discovered, fix them.
5. Deployment Stage: Deploy the application at this stage.
6. Maintenance: To inspect, adjust/replace, and redeploy as per the requirements.
To transform speech input to text, the system makes advantage of Google's online speech recognition system. The input of speech Users can access texts from specialised corpora arranged on the information center's computer network server by using the microphone, which is momentarily stored in the system before being forwarded to the Google cloud for speech recognition. The central processor is subsequently given the equivalent text, which is then received


### Python Backend: 
To establish whether a command or speech output is an API Call, Context Extraction, or System Call, the Python Backend analyses the output of the voice recognition module. After that, the output is returned to the Python backend to give the user the required outcomes.
Application Programming Interface (API) Calls: 
API is an acronym for Application Programming Interface. An API is a type of software interface that enables communication between two apps. In other words, an API is the messenger who relays your request to the service provider and then provides the outcome.

### Context Extraction: 
The process of extracting structured data from unstructured or semi-structured machine-readable materials is known as context extraction (CE). This activity typically involves employing natural language processing to analyse documents written in human languages (NLP). Recent efforts to analyse multimedia documents, such as automatic annotation and content extraction from photos, audio, and video, have shown promising results for context extraction testing.

### System Calls: 
System call is the method through which a piece of computer software asks the kernel of the operating system on which it is running for a service. The creation and execution of new processes, hardware-related services (such accessing a hard drive), and interaction with basic kernel functions like process scheduling are all examples of this. System calls give an operating system interface for a process.

### Text-to-Speech:
Text-to-speech refers to a feature that allows computers to read text aloud (TTS). Written text is transformed into a phonemic representation, which is then transformed into waveforms that a TTS Engine may produce as sound. TTS engines are available from third-party publishers in a wide range of tongues, dialects, and specialised vocabularies.
Virtual assistants are more common as small firms and startups rely on virtual offices to reduce costs and businesses of all sizes increase their use of the internet for daily operations. Because a virtual assistant is an independent contractor, a business is not required to provide the same benefits or make the same tax payments as it would for a full-time employee.


## EXPERIMENT SETUP
When you start the application, the system begins to analyse the audio commands and processes the command input by the user through the microphone. This might be the same as getting any data or information.
The central processing unit (CPU) receives this text and decides the voice command's character before calling the appropriate script to be processed and then put into action. But the designed system's complexity doesn't end there. The application software's ability to comprehend your speech depends on a variety of different elements, including how frequently you provide voice input. Background noises have the ability to confuse and impair voice recognition software. This is due to the fact that it lacks the inherent ability to distinguish between the ambient noises it perceives, such as a dog barking or a helicopter flying overhead. 

Engineers must put that capability into the virtual assistant; they collect data on those ambient noises and instruct it to turn them off. Speech recognition systems are frequently sensitive to these pitch shifts because humans typically adjust their voice pitch to account for noisy environments.
RESULTS AND DISCUSSION
Natural Language Processing (NLP) is a technique used by speech recognition software. Speech recognition breaks down speech into digestible bits, converts it to a digital format, and then analyses the content of the bits. As our voice assistance is text dependent, the given command in the form of text searches for the similar text written in the form of functions, if the text is matched it performs the particular task, if the text is not matched it throws an exception. The software then makes decisions based on programming and speech patterns. After determining what users said, the software converts the conversation into text and saves the text in the variable.

The  First/Home Page:
The initial and main UI window is this one. When you first open the application, Jarvis wishes you well before saying, "Jarvis is at your service, sir... How can I help you?"that  signifies that the system has begun to recognise your voice and that Jarvis is prepared to carry out any task or respond to the user's enquiry. He will say, "Sorry my service is unavailable, please check your internet connection," if you are not connected to the internet.
CONCLUSION
We covered the planning, execution, and use of digital assistance in this research paper on Jarvis, the virtual home assistant. This project was created by utilizing open-source Python community and software modules. This project's sequential structure improves efficiency, flexibility, and the ease with which new features can be added without affecting existing system features and functionalities.
It responds to voice instructions such as opening tasks or carrying out operations as well as user-supported questions and queries. It also works with voice commands. When the user is greeted in a particular way, they feel comfortable interacting with the virtual assistant. The user's needless manual labor should also be eliminated by the virtual assistant. The technology is entirely dependent on verbal voice input.
Future Updates
Making voice assistance compatible with all Python versions under Windows and Linux, as well as adding features that facilitate online payment processing, are among the tasks that will need to be completed in the future.


## REFERENCES
[1] Crevier, D. (1993). AI: The Tumultuous Search for Artificial Intelligence. New York, NY: Basic Books, ISBN 0-465-02997-3. <br>
[2] Sadun, E., &Sande, S. (2014). Talking to Siri: Mastering the Language of Apple’s Intelligent Assistant. <br>
[3] Nguyen, A. and Wobcke, W. (2005), “An Agent-Based Approach to Dialogue Management in Personal Assistant”, Proceedings of the 2005 International Conference on Intelligent User Interfaces. <br>
[4] Wobcke, W., Ho. V., Nguyen, A. and Krzywicki, A. (2005), “ A BDI Agent Architecture for Dialogue Modeling and Coordination in a Smart Personal Assistant”, Proceedings of the 2005 IEEE/WIC /ACM International Conference on Intelligent Agent Technology. <br>
[5] Virtual assistant Using Python <br>
[6] extrudesign.com <br>
[7] www.pythonprogramming.net
[8] www.Geeksforgeeks.com
[9] Documents Referred :Designing Personal Assistant Software for Task Management using Semantic. Web Technologies and Knowledge Databases - Purushotham Botla. 



