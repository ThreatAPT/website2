const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("last night was a rocky night, i fucked up by saying something i should not have said in the first place, but i truly love you and i only mean the word i said in a friendly way, as of right now it is 23:46 at night almost midnight for me, so i want to keep it short and simple for you, i love you like there is no other woman, i love you till the end of time, and if i was to go back in time, i would definitely choose to date you again, you are the one i adore, and the one i want to protect, if this was irl, i would be begging on the floor with a basket of roses and lilies, by the time you are reading this, i would have given you robux in roblox, and here's the link to the next step https://website3-orpin.vercel.app/, i love you claire mwa <3"
);