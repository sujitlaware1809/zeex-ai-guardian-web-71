from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from werkzeug.utils import secure_filename

load_dotenv()

app = Flask(__name__)
CORS(app)

# Sarvam AI config
SARVAM_API_KEY = 'sk_rukb0g8g_Q6I1G3h3Uu5GVbKo7JzO4syz'
SARVAM_API_URL = 'https://api.sarvam.ai/v1/chat/completions'

# Email config
ADMIN_EMAILS = ["sujit@team.zeexai.com", "admin@zeexai.com"]
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "zeexai.tech@gmail.com"         # <-- Put your Gmail address here
SMTP_PASS = "fobo ufil ppqq ehrz"       # <-- Put your App Password here

def fetch_website_content(url):
    try:
        resp = requests.get(url, timeout=10)
        # Use the detected encoding to prevent garbled text
        resp.encoding = resp.apparent_encoding
        soup = BeautifulSoup(resp.text, 'html.parser')
        # Extract visible text from the body
        texts = soup.body.stripped_strings if soup.body else []
        content = '\n'.join(texts)
        # Limit to first 2000 characters to avoid a very long prompt
        return content[:2000]
    except Exception:
        return None

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    # Fetch website content from the homepage
    website_content = fetch_website_content('https://zeexai.com')

    if not website_content:
        return jsonify({'response': 'Sorry, I could not retrieve information from the website to answer your question.'})

    # Create a strict prompt to force answers based ONLY on the website content
    system_prompt = "You are an AI assistant that ONLY answers questions based on the provided website content. If the answer is not in the content, you MUST say 'I cannot answer this question based on the information from the website.' Do not use any external knowledge."
    user_prompt = f"Website Content:\n---\n{website_content}\n---\n\nUser Question: {user_message}\n\nBased ONLY on the text above, what is the answer?"

    # Call Sarvam AI API
    payload = {
        "model": "sarvam-m",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ]
    }
    headers = {
        "Authorization": f"Bearer {SARVAM_API_KEY}",
        "Content-Type": "application/json"
    }
    try:
        sarvam_resp = requests.post(SARVAM_API_URL, json=payload, headers=headers, timeout=15)
        sarvam_data = sarvam_resp.json()
        bot_text = sarvam_data.get('choices', [{}])[0].get('message', {}).get('content')
        if not bot_text:
            if 'error' in sarvam_data:
                bot_text = f"Error: {sarvam_data['error'].get('message', 'Unknown error')}"
            else:
                bot_text = 'Sorry, I could not get a response.'
        return jsonify({'response': bot_text})
    except Exception as e:
        return jsonify({'response': f'Error contacting Sarvam AI API: {str(e)}'}), 500

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    subject = f"New Contact Form Submission from {name}"
    body = f"Name: {name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message}"

    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = ", ".join(ADMIN_EMAILS)
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, ADMIN_EMAILS, msg.as_string())
        server.quit()
        return jsonify({"success": True, "message": "Email sent!"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/career-application', methods=['POST'])
def career_application():
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    position = request.form.get('position')
    experience = request.form.get('experience')
    cover_letter = request.form.get('coverLetter')
    resume = request.files.get('resume')

    if not all([name, email, position, cover_letter, resume]):
        return jsonify({'success': False, 'error': 'Missing required fields.'}), 400

    subject = f"New Career Application: {position} - {name}"
    body = f"Name: {name}\nEmail: {email}\nPhone: {phone}\nPosition: {position}\nExperience: {experience}\n\nCover Letter:\n{cover_letter}"

    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = ", ".join(ADMIN_EMAILS)
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    # Attach resume
    filename = secure_filename(resume.filename)
    from email.mime.base import MIMEBase
    from email import encoders
    part = MIMEBase('application', 'octet-stream')
    part.set_payload(resume.read())
    encoders.encode_base64(part)
    part.add_header('Content-Disposition', f'attachment; filename="{filename}"')
    msg.attach(part)

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, ADMIN_EMAILS, msg.as_string())
        server.quit()
        return jsonify({"success": True, "message": "Application sent!"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/api/newsletter', methods=['POST'])
def newsletter_subscribe():
    data = request.get_json()
    email = data.get('email')
    if not email or '@' not in email:
        return jsonify({'success': False, 'error': 'Invalid email address.'}), 400
    # Save to file
    try:
        with open('newsletter_subscribers.txt', 'a') as f:
            f.write(email + '\n')
    except Exception as e:
        return jsonify({'success': False, 'error': f'Could not save email: {str(e)}'}), 500
    # Notify admin
    subject = "New Newsletter Subscriber"
    body = f"A new user has subscribed to the newsletter: {email}"
    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = ", ".join(ADMIN_EMAILS)
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, ADMIN_EMAILS, msg.as_string())
        server.quit()
    except Exception as e:
        # Log error but don't block user
        print(f"Failed to send admin notification: {e}")
    return jsonify({'success': True, 'message': 'Subscribed successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True) 