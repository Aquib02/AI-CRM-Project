from pydantic import BaseModel

class InteractionCreate(BaseModel):

    hcp_name: str
    interaction_type: str
    topics_discussed: str
    sentiment: str
    outcomes: str
    follow_up_actions: str