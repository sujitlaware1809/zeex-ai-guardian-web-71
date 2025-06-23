# Zeex AI Guardian Backend (Flask)

## Setup

1. Create a virtual environment (already done):
   ```
   py -m venv venv
   ```
2. Activate the virtual environment:
   - **Windows:**
     ```
     venv\Scripts\activate
     ```
   - **Linux/Mac:**
     ```
     source venv/bin/activate
     ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

## Environment Variables
Set your email credentials as environment variables (recommended for security):
- `SMTP_USER` (your email address)
- `SMTP_PASS` (your app password)

Example (Windows Command Prompt):
```
set SMTP_USER=your_gmail@gmail.com
set SMTP_PASS=your_app_password
```

## Run the Flask Server
```
python contact_email_api.py
```

The API will be available at `http://localhost:5000/api/contact`.

## Notes
- The backend uses Gmail SMTP by default. You can change the SMTP server in `contact_email_api.py` if needed.
- For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833?hl=en) if 2FA is enabled. 