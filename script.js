document.addEventListener("DOMContentLoaded", function () {
    const fallbackBooks = [
        { title: "أساسيات البرمجة", image: "images/book-programming.jpg", author: "أحمد محمد", category: "علوم الحاسوب", status: "متوفر", description: "كتاب تعليمي يقدم المفاهيم الأساسية للبرمجة وبناء المنطق البرمجي وحل المشكلات." },
        { title: "مبادئ الهندسة", image: "images/book-engineering.jpg", author: "محمد علي", category: "الهندسة", status: "متوفر", description: "كتاب يقدم أساسيات الهندسة والتصميم والتحليل والتطبيقات العملية للطلاب." },
        { title: "الرياضيات المتقدمة", image: "images/book-math.jpg", author: "خالد حسن", category: "الرياضيات", status: "مستعار", description: "مرجع شامل للمفاهيم والمعادلات والتطبيقات الأساسية في الرياضيات الجامعية." },
        { title: "العلوم الطبيعية", image: "images/book-science.jpg", author: "سارة أحمد", category: "العلوم", status: "متوفر", description: "كتاب يستعرض مفاهيم الفيزياء والكيمياء والأحياء وعلوم الطبيعة." }
    ];
    const list = document.getElementById("books-list");
    const noResults = document.getElementById("no-results");
    let books = fallbackBooks;
    function render(items) {
        list.querySelectorAll(".book-card").forEach((card) => card.remove());
        noResults.hidden = items.length > 0;
        items.forEach((book) => {
            const card = document.createElement("article");
            card.className = "book-card";
            card.innerHTML = `<div class="book-icon"><i class="fa-solid fa-book-open"></i></div><div class="book-cover"><img src="${book.image}" alt="غلاف كتاب ${book.title}"></div><h3 class="book-title">${book.title}</h3><p><i class="fa-solid fa-user"></i> المؤلف: ${book.author}</p><p><i class="fa-solid fa-layer-group"></i> التصنيف: ${book.category}</p><p class="${book.status === "متوفر" ? "available" : "borrowed"}"><i class="fa-solid fa-circle-check"></i> ${book.status}</p><button type="button" class="details-button">عرض التفاصيل</button>`;
            card.querySelector(".details-button").addEventListener("click", () => openModal(book));
            list.appendChild(card);
        });
    }
    function openModal(book) {
        document.getElementById("modal-title").textContent = book.title;
        document.getElementById("modal-image").src = book.image;
        document.getElementById("modal-image").alt = book.title;
        document.getElementById("modal-author").textContent = book.author;
        document.getElementById("modal-category").textContent = book.category;
        document.getElementById("modal-status").textContent = book.status;
        document.getElementById("modal-description").textContent = book.description;
        document.getElementById("book-modal").style.display = "flex";
        document.getElementById("book-modal").setAttribute("aria-hidden", "false");
    }
    function filterBooks() {
        const query = document.getElementById("book-search").value.trim().toLowerCase();
        const category = document.querySelector(".book-controls aside a.selected")?.dataset.category || "الكل";
        render(books.filter((book) => (category === "الكل" || book.category === category) && [book.title, book.author, book.category].some((value) => value.toLowerCase().includes(query))));
    }
    document.getElementById("search-form").addEventListener("submit", (event) => { event.preventDefault(); filterBooks(); });
    document.querySelectorAll(".book-controls aside a").forEach((link, index) => link.addEventListener("click", (event) => { event.preventDefault(); document.querySelectorAll(".book-controls aside a").forEach((item) => item.classList.remove("selected")); link.classList.add("selected"); filterBooks(); }));
    document.getElementById("close-modal").addEventListener("click", () => { document.getElementById("book-modal").style.display = "none"; document.getElementById("book-modal").setAttribute("aria-hidden", "true"); });
    document.getElementById("book-modal").addEventListener("click", (event) => { if (event.target.id === "book-modal") document.getElementById("close-modal").click(); });
    const firstCategory = document.querySelector(".book-controls aside a");
    if (firstCategory) firstCategory.classList.add("selected");
    render(books);
    fetch("data/books.json").then((response) => response.json()).then((data) => { books = data; render(books); }).catch(() => render(books));
});
