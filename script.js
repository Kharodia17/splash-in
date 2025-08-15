function openWhatsApp() {
    // Replace with your actual phone number in international format without the +
    const phoneNumber = "27827550575"; 
    const message = encodeURIComponent("Hello! I'm interested in your swimming classes.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}
