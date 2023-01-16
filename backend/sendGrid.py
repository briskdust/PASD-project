# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

message = Mail(
    from_email='oscar.defrancesca@gmail.com',
    to_emails='o.m.de.francesca@student.rug.nl',
    subject='Sending with Twilio SendGrid is Fun',
    html_content='<strong>and easy to do anywhere, even with Python</strong>')
try:
    sg = SendGridAPIClient('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')
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(e.message)
