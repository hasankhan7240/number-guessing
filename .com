<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .form-container {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      width: 300px;
    }
    .form-container h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    .form-container label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    .form-container input, .form-container textarea, .form-container button {
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .form-container button {
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
    .form-container button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="form-container">
    <h2>Registration Form</h2>
    <form id="registrationForm">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required>

      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required>

      <label for="nickName">Nick Name</label>
      <input type="text" id="nickName" name="nickName">

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>

      <label for="dob">Date of Birth</label>
      <input type="date" id="dob" name="dob" required>

      <label>Gender</label>
      <input type="radio" id="male" name="gender" value="Male" required>
      <label for="male" style="display:inline;">Male</label>
      <input type="radio" id="female" name="gender" value="Female" required>
      <label for="female" style="display:inline;">Female</label>
      <input type="radio" id="other" name="gender" value="Other" required>
      <label for="other" style="display:inline;">Others</label>

      <label for="mobile">Mobile</label>
      <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder="1234567890" required>

      <label for="address">Address</label>
      <textarea id="address" name="address" rows="3"></textarea>

      <button type="button" onclick="submitForm()">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </div>

  <script>
    function submitForm() {
      const form = document.getElementById('registrationForm');
      const formData = new FormData(form);
      let data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      alert('Form Submitted Successfully!\\n' + JSON.stringify(data, null, 2));
    }
  </script>
</body>
</html>