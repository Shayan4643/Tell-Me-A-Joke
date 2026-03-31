const jokeButton = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("joke");

jokeButton.addEventListener("click", getAJoke);

function getAJoke() {
  const jokes = [
    "Today's Jokes on social sites: Women all over the world 3.15 billion Women over Facebook 5.67 billion!",
    " Wife: suno jee, aapane kaam vaali bai ko 'I LOVE YOU' bol diya kya? Husband: nahin to, kyon kya hua? Wife: kal tak mujhe bhaabhi bulaati thi, aaj didi bula rahi hai.",
    "Vaise to main bahut bada khataron ka khilaadi hoon,   par December mein paani jaise khatare se main bhi nahin khel sakata.",
    "Madam: Porus kaun tha?        Santa: pata nahi sir.        Madam: padaai ke taraf dyaan do, pataa chalegaa        Santa: Aap battayiye. Rohan kaun hai?        Madam: pata nahi.        Santa: apni beti ki taraf dyaan dijiye, pata chalega.",
    "Banta: Bro, I just left my job, I could not work for that     Boss after what he said to me.    Santa: What happened, what did he say?    Banta: You Lazy duffer man....You are fired!",
    "Santa Ka Sir Phat Gya.    Doctor: Ye kaise Hua?    Santa: Main Chappal Se Keel Thok Raha Tha.    Mujhe 1 Admi Bola -     Gadhe Kabhi KHOPDI Ka Bhi Istemal Kar Liya Kar.....",
    "Police 2 santa: sab kuch bata warna chaddi utar ke peetunga.&nbsp; ..... Santa: lo ji chori maine ki hai aap q chaddi utaroge.",
    "Teacher: listen student exams r coming soon so if u have     any doubt or question u can ask me..!    Santa: In which printing press d question paper is printed ?",
    "Banta: What exactly is First Aid?    Santa: It is when you get AIDS for the first time!",
    "Santa: Maine Apne Bete KaNaam America Rakha Hai.  Banta: Wo Kyun yaar?  Santa: Main Duniya KoBatana Chahta Hun Ke  Main America Ka Baap Hun...!",
  ];
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  jokeDisplay.textContent = joke;
}
