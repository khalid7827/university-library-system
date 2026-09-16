document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        document.querySelectorAll("small").forEach((item) => item.textContent = "");
        document.querySelectorAll("input, select, textarea").forEach((item) => item.classList.remove("input-error"));
        document.getElementById("success-message").textContent = "";
        let valid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");
        if (!name.value.trim()) { document.getElementById("name-error").textContent = "يرجى إدخال الاسم."; name.classList.add("input-error"); valid = false; }
        if (!email.validity.valid) { document.getElementById("email-error").textContent = "يرجى إدخال بريد إلكتروني صحيح."; email.classList.add("input-error"); valid = false; }
        if (!subject.value) { document.getElementById("subject-error").textContent = "يرجى اختيار الموضوع."; subject.classList.add("input-error"); valid = false; }
        if (!message.value.trim()) { document.getElementById("message-error").textContent = "يرجى كتابة الرسالة."; message.classList.add("input-error"); valid = false; }
        if (valid) { document.getElementById("success-message").textContent = "تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا."; form.reset(); }
    });
});
