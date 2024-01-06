// netlify/functions/submitForm.js
exports.handler = async function (event, context) {
    try {
      const data = JSON.parse(event.body);
      // Here you can do whatever you want with the form data, e.g., send an email.
      console.log("Form data received:", data);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form data received successfully" }),
      };
    } catch (error) {
      console.error("Error processing form data:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };
  