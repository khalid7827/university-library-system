document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const message = document.getElementById("login-message");
    const toggle = document.getElementById("toggle-password");

    toggle.addEventListener("click", function () {
        const isPassword = password.type === "password";
        password.type = isPassword ? "text" : "password";
        toggle.setAttribute("aria-label", isPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور");
        toggle.innerHTML = `<i class="fa-solid ${isPassword ? "fa-eye-slash" : "fa-eye"}"></i>`;
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        document.querySelectorAll(".error-message").forEach((item) => item.textContent = "");
        message.textContent = "";
        let valid = true;
        if (!email.validity.valid) {
            document.getElementById("email-error").textContent = "يرجى إدخال بريد إلكتروني صحيح.";
            valid = false;
        }
        if (password.value.length < 6) {
            document.getElementById("password-error").textContent = "كلمة المرور يجب أن تتكون من 6 أحرف على الأقل.";
            valid = false;
        }
        if (valid) {
            message.textContent = "تم التحقق من البيانات بنجاح. أهلاً بك في المكتبة.";
            form.reset();
        }
    });
});
