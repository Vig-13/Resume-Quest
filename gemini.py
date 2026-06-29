import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def analyze_resume(resume_text):

    prompt = f"""
You are an expert ATS resume reviewer.

Analyze the following resume.

Return ONLY valid JSON.

The JSON should have this structure:

{{
    "ats_score": 85,
    "strengths": [
        "...",
        "..."
    ],
    "weaknesses": [
        "...",
        "..."
    ],
    "grammar": [
        "...",
        "..."
    ],
    "rephrased_bullets": [
        {{
            "original": "...",
            "improved": "..."
        }}
    ],
    "interview_questions": [
        "...",
        "...",
        "..."
    ]
}}

Resume:

{resume_text}
"""

    response = model.generate_content(prompt)

    cleaned_response = (
        response.text
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(cleaned_response)