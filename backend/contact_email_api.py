from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

ADMIN_EMAIL = "sujit@team.zeexai.com"
SMTP_SERVER = "smtp.gmail.com"  # Change if using a different provider
SMTP_PORT = 587
SMTP_USER = os.environ.get("SMTP_USER", "your_gmail@gmail.com")  # Set your email in env
SMTP_PASS = os.environ.get("SMTP_PASS", "your_app_password")     # Set your app password in env

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
    msg['To'] = ADMIN_EMAIL
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, ADMIN_EMAIL, msg.as_string())
        server.quit()
        return jsonify({"success": True, "message": "Email sent!"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True) 