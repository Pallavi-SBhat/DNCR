import QRCodeStyling from "qr-code-styling";
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("qrModal");
  const qrCodeElement = document.getElementById("qr-code");
  const span = document.getElementsByClassName("close")[0];
  const doneButton = document.getElementById("doneButton");

  if (!modal || !span || !doneButton || !qrCodeElement) {
    console.error("Modal, close button, or QR code container not found!");
    return;
  }

  span.onclick = function () {
    modal.style.display = "none";
  };

  doneButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  document.querySelectorAll(".subscribe-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const amount = this.getAttribute("data-amount");
      if (!amount) {
        console.error(
          "Amount not found in the button's data-amount attribute!"
        );
        return;
      }
      showQRCode(amount);
      modal.style.display = "block";
    });
  });
});

function showQRCode(amount) {
  const upiId = "hitheshamin423-1@okaxis";
  const name = "DNCR Learn";
  const currency = "INR";
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&cu=${currency}&am=${amount}`;

  const qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    type: "svg",
    data: upiUrl,
    dotsOptions: {
      color: "#000000",
      type: "square",
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20,
    },
  });

  const qrCodeElement = document.getElementById("qr-code");
  if (!qrCodeElement) {
    console.error("QR code container not found!");
    return;
  }

  qrCodeElement.innerHTML = "";
  qrCode.append(qrCodeElement);
}
