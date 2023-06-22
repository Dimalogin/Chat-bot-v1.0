function checkValidity(value) {
  if (value === "" || value.trim() === "") {
    alert("The field must not be empty");
    return false;
  } else if (value.length < 5) {
    alert("Your Username is short");
    return false;
  }

  return true;
}

export default checkValidity;
