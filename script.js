document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("borrow-form");
    const borrowDate = document.getElementById("borrow-date");
    const returnDate = document.getElementById("return-date");
    const today = new Date().toISOString().split("T")[0];
    borrowDate.min = today;
    returnDate.min = today;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        document.querySelectorAll(".error-message").forEach((item) => item.textContent = "");
        document.querySelectorAll("input, select").forEach((item) => item.classList.remove("input-error"));
        document.getElementById("success-message").textContent = "";
        let valid = true;
        const name = document.getElementById("student-name");
        const id = document.getElementById("student-id");
        const book = document.getElementById("book-name");
        if (!name.value.trim()) { document.getElementById("student-error").textContent = "يرجى إدخال اسم الطالب."; name.classList.add("input-error"); valid = false; }
        if (!/^\d+$/.test(id.value.trim())) { document.getElementById("id-error").textContent = "الرقم الجامعي يجب أن يحتوي على أرقام فقط."; id.classList.add("input-error"); valid = false; }
        if (!book.value) { document.getElementById("book-error").textContent = "يرجى اختيار الكتاب."; book.classList.add("input-error"); valid = false; }
        if (!borrowDate.value || !returnDate.value || returnDate.value <= borrowDate.value) { returnDate.classList.add("input-error"); valid = false; }
        if (valid) { document.getElementById("success-message").textContent = "تم إرسال طلب الاستعارة بنجاح."; form.reset(); borrowDate.min = today; returnDate.min = today; }
    });
});
