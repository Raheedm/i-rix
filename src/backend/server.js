const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const nodemailer = require('nodemailer');

const app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rah004@chowgules.ac.in',
    pass: 'Whoisthis@3',
  },
});

// Endpoint to handle team registration form submissions
app.post('/api/teamregfile', (req, res) => {
  try {
    const teamData = req.body;

    // Validate data (you can add more validation as needed)
    if (!teamData.representativeName || !teamData.rollNumber || !teamData.year || !teamData.course || !teamData.totalTeamMembers) {
      return res.status(400).json({ success: false, msg: 'Incomplete team registration data' });
    }

    // Format the data as needed
    const formattedData = `Representative Name: ${teamData.representativeName}\nRoll Number: ${teamData.rollNumber}\nYear: ${teamData.year}\nCourse: ${teamData.course}\nTotal Team Members: ${teamData.totalTeamMembers}\n\n`;

    // Save the data to a file
    fs.appendFileSync('irix_reg.txt', formattedData);

    // Send email notification
    const mailOptions = {
        from: 'rah004@chowgules.ac.in',
        to: 'raheedmuzawar@gmail.com',
        subject: 'New Team Registration IRIX 2024',
        text: 'A new team has registered for IRIX',
        attachments: [
          {
            filename: 'irix_reg.txt',
            content: formattedData, // The content of the file
          },
        ],
      };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: 'Error sending email' });
      }
      
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, msg: 'Team registered successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
