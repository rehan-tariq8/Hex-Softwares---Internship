// Smooth reveal animation

const sections =
document.querySelectorAll(
".service-card, .trainer-card, .plan-card, .image-card"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

},{
    threshold:0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
    "translateY(40px)";
    section.style.transition =
    ".7s ease";

    observer.observe(section);
});