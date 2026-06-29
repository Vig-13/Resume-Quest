# 🏆 Resume Quest

> Level Up Your Career with AI

Resume Quest is an AI-powered resume analyzer that evaluates uploaded resumes against ATS-style criteria using Google's Gemini AI. It provides actionable feedback, rewrites resume bullet points, checks grammar, and generates personalized interview questions through a gamified RPG-inspired interface.

---

## ✨ Features

- 📄 Upload PDF resumes
- 🤖 AI-powered ATS analysis using Google Gemini
- 📊 ATS Score
- 🛡 Strengths & Areas for Improvement
- ✍ AI Resume Bullet Rewriting
- 📝 Grammar Review
- 🎯 Personalized Interview Questions
- 🎮 RPG-inspired user interface

---

## 🛠 Tech Stack

- Python
- FastAPI
- Google Gemini API
- PyMuPDF
- HTML
- CSS
- JavaScript

---

## 📸 Screenshots

### Landing Page

![Landing Page](assets/landing.png)

### Resume Analysis

![Analysis](assets/results.png)

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Vig-13/Resume-Quest.git
```

Navigate to the project

```bash
cd Resume-Quest
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the application

```bash
uvicorn app:app --reload
```

Open

```
http://localhost:8000
```

---

## 📂 Project Structure

```text
Resume-Quest
│
├── app.py
├── gemini.py
├── requirements.txt
├── README.md
│
├── static
│   ├── css
│   ├── js
│   └── images
│
├── templates
│   ├── index.html
│   └── result.html
│
└── uploads
```

---

## 🔮 Future Improvements

- Resume comparison
- Multiple resume history
- PDF report generation
- Skill-wise ATS scoring
- Authentication

---

## 👨‍💻 Author

**Vignesh Ram**
