<script>
    const toggleBtns = 
    document.querySelectorAll(".tooggle-btn");

    toggleBtns.forEach((btn) => { btn.addEventListener("click", () => { 
        const imageDiv =
         btn.nextElementSibling;
        imageDiv.style.display = 
        imageDiv.style.display === "block" ? "none" : "block" 
        });
     });
</script>