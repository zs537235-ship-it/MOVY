// ======================================
// SEARCH BUTTON
// ======================================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");


// Open search

searchBtn.addEventListener("click", function () {

    searchBox.classList.add("show");

    searchInput.focus();

});


// Close search

closeSearch.addEventListener("click", function () {

    searchBox.classList.remove("show");

    searchInput.value = "";

});


// ======================================
// PLAY BUTTON
// ======================================

const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function () {

    alert("Playing Lanterns...");

});




/* =====================================================
   NEXT BUTTON
===================================================== */

top10Next.addEventListener("click", function () {

    const cardWidth =
        top10Slider.querySelector(".top10-card").offsetWidth;

    const gap = 8;

    top10Slider.scrollBy({

        left: (cardWidth + gap) * 3,

        behavior: "smooth"

    });

});



/* =====================================================
   PREVIOUS BUTTON
===================================================== */

top10Prev.addEventListener("click", function () {

    const cardWidth =
        top10Slider.querySelector(".top10-card").offsetWidth;

    const gap = 8;

    top10Slider.scrollBy({

        left: -(cardWidth + gap) * 3,

        behavior: "smooth"

    });

});



/* =====================================================
   DRAG TO SLIDE
===================================================== */

let isDragging = false;

let startX;

let startScrollLeft;



top10Slider.addEventListener("mousedown", function (e) {

    isDragging = true;

    top10Slider.classList.add("dragging");

    startX = e.pageX - top10Slider.offsetLeft;

    startScrollLeft = top10Slider.scrollLeft;

});



top10Slider.addEventListener("mouseleave", function () {

    isDragging = false;

    top10Slider.classList.remove("dragging");

});



top10Slider.addEventListener("mouseup", function () {

    isDragging = false;

    top10Slider.classList.remove("dragging");

});



top10Slider.addEventListener("mousemove", function (e) {

    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - top10Slider.offsetLeft;

    const walk = (x - startX) * 1.2;

    top10Slider.scrollLeft =
        startScrollLeft - walk;

});

// =====================================================
// TRENDING THIS WEEK SLIDER
// =====================================================

const trendingSlider = document.getElementById("trendingSlider");

const trendingNext = document.getElementById("trendingNext");

const trendingPrev = document.getElementById("trendingPrev");


if (trendingSlider && trendingNext && trendingPrev) {

    trendingNext.addEventListener("click", function () {

        const card =
            trendingSlider.querySelector(".trending-card");

        const cardWidth = card.offsetWidth;

        trendingSlider.scrollBy({

            left: cardWidth + 8,

            behavior: "smooth"

        });

    });


    trendingPrev.addEventListener("click", function () {

        const card =
            trendingSlider.querySelector(".trending-card");

        const cardWidth = card.offsetWidth;

        trendingSlider.scrollBy({

            left: -(cardWidth + 8),

            behavior: "smooth"

        });

    });

}

// =====================================================
// ONLY ON NETFLIX SLIDER
// =====================================================

const streamingSlider =
    document.getElementById("streamingSlider");

const streamingNext =
    document.getElementById("streamingNext");

const streamingPrev =
    document.getElementById("streamingPrev");


if (
    streamingSlider &&
    streamingNext &&
    streamingPrev
) {

    // RIGHT SIDE

    streamingNext.addEventListener("click", function () {

        const card =
            streamingSlider.querySelector(".streaming-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        streamingSlider.scrollBy({

            left: cardWidth + 8,

            behavior: "smooth"

        });

    });


    // LEFT SIDE

    streamingPrev.addEventListener("click", function () {

        const card =
            streamingSlider.querySelector(".streaming-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        streamingSlider.scrollBy({

            left: -(cardWidth + 8),

            behavior: "smooth"

        });

    });

}

// =====================================================
// STREAMING SERVICE BUTTONS
// =====================================================

const serviceButtons =
    document.querySelectorAll(".service-btn");


serviceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        serviceButtons.forEach(function (item) {

            item.classList.remove("active");

        });

        button.classList.add("active");

    });

});

// =====================================================
// RECENTLY ADDED IN 4K SLIDER
// =====================================================

const recentlySlider =
    document.getElementById("recentlySlider");

const recentlyNext =
    document.getElementById("recentlyNext");

const recentlyPrev =
    document.getElementById("recentlyPrev");


if (
    recentlySlider &&
    recentlyNext &&
    recentlyPrev
) {

    // RIGHT ARROW

    recentlyNext.addEventListener("click", function () {

        const card =
            recentlySlider.querySelector(".recently-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        recentlySlider.scrollBy({

            left: cardWidth + 8,

            behavior: "smooth"

        });

    });


    // LEFT ARROW

    recentlyPrev.addEventListener("click", function () {

        const card =
            recentlySlider.querySelector(".recently-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        recentlySlider.scrollBy({

            left: -(cardWidth + 8),

            behavior: "smooth"

        });

    });

}

// =====================================================
// TOP RATED SLIDER
// =====================================================

const topRatedSlider =
    document.getElementById("topRatedSlider");

const topRatedNext =
    document.getElementById("topRatedNext");

const topRatedPrev =
    document.getElementById("topRatedPrev");


if (
    topRatedSlider &&
    topRatedNext &&
    topRatedPrev
) {

    // RIGHT ARROW

    topRatedNext.addEventListener("click", function () {

        const card =
            topRatedSlider.querySelector(".top-rated-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        topRatedSlider.scrollBy({

            left: cardWidth + 8,

            behavior: "smooth"

        });

    });


    // LEFT ARROW

    topRatedPrev.addEventListener("click", function () {

        const card =
            topRatedSlider.querySelector(".top-rated-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        topRatedSlider.scrollBy({

            left: -(cardWidth + 8),

            behavior: "smooth"

        });

    });

}

// =====================================================
// POPULAR GENRES SLIDER
// =====================================================

const genresSlider =
    document.getElementById("genresSlider");

const genresNext =
    document.getElementById("genresNext");

const genresPrev =
    document.getElementById("genresPrev");


if (
    genresSlider &&
    genresNext &&
    genresPrev
) {

    // RIGHT ARROW

    genresNext.addEventListener("click", function () {

        const card =
            genresSlider.querySelector(".genre-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        genresSlider.scrollBy({

            left: cardWidth + 9,

            behavior: "smooth"

        });

    });


    // LEFT ARROW

    genresPrev.addEventListener("click", function () {

        const card =
            genresSlider.querySelector(".genre-card");

        if (!card) return;

        const cardWidth = card.offsetWidth;

        genresSlider.scrollBy({

            left: -(cardWidth + 9),

            behavior: "smooth"

        });

    });

}

// =====================================================
// MOVY BACK TO TOP
// =====================================================

const movyBackTop =
    document.getElementById("movyBackTop");


if (movyBackTop) {

    movyBackTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}