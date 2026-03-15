function doPost(e) {
  try {
    // 1. Enter the target email where you want to receive notifications
    var TO_EMAIL = "tejanarapureddy2@gmail.com";
    
    // 2. Extract values sent from our script.js fetch()
    var name = e.parameter.name || "No Name Provided";
    var senderEmail = e.parameter.email || "No Email Provided";
    var message = e.parameter.message || "No Message";
    
    // 3. Construct the email subject
    var subject = "New Portfolio Message from " + name;
    
    // 4. Construct the email body text
    var body = "You have received a new message from your portfolio website!\n\n" +
               "Name: " + name + "\n" +
               "Email: " + senderEmail + "\n\n" +
               "Message:\n" + message;
               
    // 5. Build HTML version of the email for better readability
    var htmlBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #4f46e5;">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <hr/>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
      </div>
    `;

    // 6. Send the email using Google's MailApp service
    MailApp.sendEmail({
      to: TO_EMAIL,
      subject: subject,
      body: body,
      htmlBody: htmlBody,
      replyTo: senderEmail
    });

    // 7. Return success to JS frontend
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "data": "Email Sent" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    // If an error occurs, return error info
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
