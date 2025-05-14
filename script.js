document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.reviewer.value;
    const review = this.review.value;
  
    const reviewBox = document.createElement("div");
    reviewBox.style.marginBottom = "10px";
    reviewBox.innerHTML = `<strong>${name}:</strong> ${review}`;
  
    document.getElementById("reviewList").prepend(reviewBox);
    this.reset();
  });
  
  document.getElementById("printRequestForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your request! File upload feature requires server support (PHP/Node/etc).");
    this.reset();
  });
      