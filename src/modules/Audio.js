
const playAudio = (route) => {
    // const src = link.src || link;
    const audio = new Audio(route);
  
    return new Promise((res) => {
      audio.play();
      audio.onended = res;
    });
  };
  
  export { playAudio };