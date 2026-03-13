from langchain_groq import ChatGroq

from agent.tools import (
    summarize_interaction,
    sentiment_analysis,
    extract_hcp
)

llm = ChatGroq(
    model="llama-3.1-8b-instant",
    api_key="Paste_Api_key"
)


def run_agent(message):

    summary = summarize_interaction.invoke(message)
    sentiment = sentiment_analysis.invoke(message)
    doctor = extract_hcp.invoke(message)

    prompt = f"""
    Extract the interaction details from the text below.

    Text: {message}

    Return in this format only:
    

    Doctor:
    Topic:
    Sentiment:
    Summary:
    """

    llm_response = llm.invoke(prompt)

    return {
        "summary": summary,
        "sentiment": sentiment,
        "doctor": doctor,
        "llm_response": llm_response.content
    }