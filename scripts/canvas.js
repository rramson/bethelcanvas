function validateEmail() {
    var email = document.getElementById("emailInput").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
}

IMask(document.getElementById('PhoneID1'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID2'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID3'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID4'), {
    mask: '(000) 000-0000'
});

IMask(document.getElementById('PhoneID5'), {
    mask: '(000) 000-0000'
});

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

function enableSCS(answer) {
  console.log(answer.value);
  if (answer.value === 'Yes') {
    document.getElementById('SCS1').style.display = 'block';
  }
  else if (answer.value === 'No') {
    document.getElementById('SCS1').style.display = 'none';
  }
  else if (answer.value === 'NoWantMoreInfo') {
    document.getElementById('SCS1').style.display = 'none';
  }
  else {
    document.getElementById('SCS1').style.display = 'none';
  }
};

function enableSCS1(answer) {
  console.log(answer.value);
  if (answer.value === 'MethodistTransfer') {
    document.getElementById('mCert').style.display = 'block';
  }
  else if (answer.value === 'NewMember') {
    document.getElementById('mCert').style.display = 'none';
  }
  else if (answer.value === 'WatchCare') {
    document.getElementById('mCert').style.display = 'none';
  }
  else if (answer.value === 'ReturningMember') {
    document.getElementById('mCert').style.display = 'none';
  }  
  else {
    document.getElementById('mCert').style.display = 'none';
  }
};

function enableAFI(answer) {
  console.log(answer.value);
  if (answer.value === 'Yes') {
    document.getElementById('AFI1').style.display = 'block';
    document.getElementById('AFI2').style.display = 'block';
    document.getElementById('AFI3').style.display = 'block';
    document.getElementById('AFI4').style.display = 'block';
  }
  else if (answer.value === 'No') {
    document.getElementById('AFI1').style.display = 'none';
    document.getElementById('AFI2').style.display = 'none';
    document.getElementById('AFI3').style.display = 'none';
    document.getElementById('AFI4').style.display = 'none';
  }  
  else {
    document.getElementById('AFI1').style.display = 'none';
    document.getElementById('AFI2').style.display = 'none';
    document.getElementById('AFI3').style.display = 'none';
    document.getElementById('AFI4').style.display = 'none';
  }
};

function toggleSpouseInfo() {
  const status = document.getElementById("maritalStatus").value;
  const spouseSection = document.getElementById("spouseInfo");

  if (status === "married") {
    spouseSection.style.display = "block";
  } else {
    spouseSection.style.display = "none";
  }
}

// Optional:  Handle initial state of the form (if "married" is selected by default)
if (document.getElementById('married').checked) {
    document.getElementById('spouseInfo').style.display = 'block';
}
