function copyLinkToClipBoard(event) {
    // Prevent the default action (e.g., following the link)
    event.preventDefault();
  
    // Check the type of link (email or regular link)
    const link = event.target.closest('a').href;
  
    if (link.href.startsWith("mailto:")) {
      console.log("Email link clicked: ", link.href);
      // Handle the email logic here
    } else {
      console.log("Regular link clicked: ", link.href);
      // Handle the regular link logic here
      //window.location.href = link.href; // For example, follow the link manually
    }
  }

  function copyLink(event) {
    // Prevent the default behavior of the <a> tag (redirection)
    event.preventDefault();

    // Get the link (href value of the <a> tag)
    var link = event.target.closest('a').href;

    // Create a temporary input element to copy the link to the clipboard
    var input = document.createElement('input');
    input.value = link; // Set the link to the input field
    document.body.appendChild(input); // Append the input element to the DOM

    // Select and copy the input's content
    input.select();
    document.execCommand('copy');

    // Remove the temporary input element from the DOM
    document.body.removeChild(input);

    // Optionally, you can show a confirmation message or alert
    alert('Link copied to clipboard: ' + link);
  }

  function copyNumber() {
    // Get the text content (number) of the element
    const numberText = document.getElementById("contactNumber").textContent;

    // Create a temporary input element to copy the number
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);

    // Set the value of the input to the number
    tempInput.value = numberText;

    // Select and copy the text from the input
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, show an alert that the number was copied
    alert("Number copied: " + numberText);
}