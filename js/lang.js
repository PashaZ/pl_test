const input = document.getElementById("phone");

  window.intlTelInput(input, {
    onlyCountries: ["ua", "pl", "gb"],
    initialCountry: "ua",
    showFlags:true,
    separateDialCode: true,
    countrySearch: false,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.2/build/js/utils.js",
  });