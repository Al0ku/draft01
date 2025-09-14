let generatedOTP = "";

function toggleLoginFields() {
  const loginType = document.getElementById("loginType").value;
  if (loginType === "aadhaar") {
    document.getElementById("aadhaarBox").classList.remove("hidden");
    document.getElementById("phoneBox").classList.add("hidden");
  } else {
    document.getElementById("phoneBox").classList.remove("hidden");
    document.getElementById("aadhaarBox").classList.add("hidden");
  }
}

function sendOTP() {
  const loginType = document.getElementById("loginType").value;
  let valid = false;

  if (loginType === "aadhaar") {
    const aadhaar = document.getElementById("aadhaar").value.trim();
    if (aadhaar.length === 12 && !isNaN(aadhaar)) valid = true;
    else alert("Please enter a valid 12-digit Aadhaar number.");
  } else {
    const phone = document.getElementById("phone").value.trim();
    if (phone.length === 10 && !isNaN(phone)) valid = true;
    else alert("Please enter a valid 10-digit phone number.");
  }

  if (!valid) return;

  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  document.getElementById("otpSection").classList.remove("hidden");
  document.getElementById("message").innerHTML = 
    "OTP sent! <br><b>(Demo OTP: " + generatedOTP + ")</b>";
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otp").value.trim();
  const role = document.getElementById("role").value;

  if (enteredOTP === generatedOTP) {
    if (role === "patient") {
      window.location.href = "patient-dashboard.html";
    } else {
      window.location.href = "doctor-dashboard.html";
    }
  } else {
    alert("Invalid OTP. Try again!");
  }
}
