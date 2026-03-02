
// hamburger menu
document.addEventListener("DOMContentLoaded", () => {

    console.log("JS LOADED");

    const postGrid = document.getElementById("postGrid");
    const viewMoreBtn = document.getElementById("viewMoreBtn");

    console.log("postGrid:", postGrid);
    console.log("viewMoreBtn:", viewMoreBtn);

    if (!postGrid || !viewMoreBtn) return;

    const posts = postGrid.querySelectorAll(".post-link");

    console.log("posts found:", posts.length);

    const MAX_VISIBLE = 6;

    posts.forEach((post, index) => {
        if (index >= MAX_VISIBLE) {
            post.style.display = "none";
        }
    });

    viewMoreBtn.addEventListener("click", () => {
        posts.forEach(post => post.style.display = "");
        viewMoreBtn.style.display = "none";
    });

});