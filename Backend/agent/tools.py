from langchain.tools import tool


@tool
def summarize_interaction(text: str):
    """Summarize interaction notes"""
    return text[:150]


@tool
def sentiment_analysis(text: str):
    """Detect sentiment of discussion"""

    if "positive" in text.lower():
        return "Positive"

    if "negative" in text.lower():
        return "Negative"

    return "Neutral"


@tool
def extract_hcp(text: str):
    """Extract doctor name"""

    if "dr" in text.lower():
        return "Doctor mentioned"

    return "Unknown"


@tool
def log_interaction_tool(data: str):
    """Log interaction into system"""

    return "Interaction logged"


@tool
def edit_interaction_tool(data: str):
    """Edit interaction"""

    return "Interaction updated"