const cards =
document.querySelectorAll(
".mission-card, .program-card, .campaign-card"
);

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

},{threshold:0.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".6s ease";

observer.observe(card);

});