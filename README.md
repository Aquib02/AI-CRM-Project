# AI CRM Project

AI-powered CRM system for logging and analyzing Healthcare Professional (HCP) interactions.
This project allows medical representatives or sales teams to log meetings with doctors and use AI to summarize discussions, analyze sentiment, and extract key information automatically.



## Features

*  Log HCP interactions using a structured form
*  AI Chatbot for logging interactions via natural language
*  AI summarization of meetings
*  Sentiment analysis of interactions
*  Automatic extraction of doctor (HCP) names
*  Interaction data stored in a database
*  FastAPI backend for API services
*  React frontend for interactive UI



## Project Architecture

React Frontend
⬇
FastAPI Backend
⬇
AI Agent (LangChain + Groq LLM)
⬇
SQLite Database



## Tech Stack

**Frontend**

* React
* Vite
* CSS

**Backend**

* FastAPI
* Python
* SQLAlchemy

**AI**

* LangChain
* Groq LLM (Llama model)

**Database**

* SQLite



## Project Structure

```
AI-CRM-Project
│
├── Backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── agent
│       ├── agent.py
│       └── tools.py
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── ChatBox.jsx
│   │   │   ├── ChatBox.css
│   │   │   ├── InteractionForm.jsx
│   │   │   └── InteractionForm.css
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```



##  Installation & Setup

###  Clone the repository

```
git clone https://github.com/Aquib02/AI-CRM-Project.git
cd AI-CRM-Project
```



### Backend Setup


cd Backend
pip install -r requirements.txt


Run the FastAPI server:


uvicorn main:app --reload


Open API docs:


http://127.0.0.1:8000/docs




### Frontend Setup


cd Frontend
npm install
npm run dev


Frontend will run at:


http://localhost:5173




##  AI Agent Capabilities

The AI agent performs the following tasks:

* Summarizes interaction notes
* Detects sentiment (positive / neutral / negative)
* Extracts doctor names from conversations
* Provides AI-generated responses using Groq LLM


## Screenshots

Example screenshots you can add:

* Interaction Form UI
* Chatbot Interface
* FastAPI API Documentation


## Use Case

This project can be used by:

* Medical representatives
* Pharma CRM systems
* Sales teams interacting with healthcare professionals
* AI-powered CRM solutions


## Author

**Aquib Khan**


## License

This project is for educational and demonstration purposes.
