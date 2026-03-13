from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, Base, SessionLocal
from models import Interaction
from schemas import InteractionCreate

from agent.agent import run_agent

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@app.post("/log-interaction")
def log_interaction(data: InteractionCreate, db: Session = Depends(get_db)):

    interaction = Interaction(**data.dict())

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    return {"message": "Interaction saved"}


@app.post("/ai-chat")
def ai_chat(data: dict):

    message = data["message"]

    result = run_agent(message)

    return result

@app.get("/interactions")
def get_interactions(db: Session = Depends(get_db)):

    interactions = db.query(Interaction).all()

    return interactions