(() => {

  if (document.getElementById('copy')) {
    document.getElementById('copyip').addEventListener('click', () => {
      navigator.clipboard.writeText('play.itheriomc.net').then((error) => {
        if (error)
          console.error(error),
          Toastify({
            text: "Error copying to your clipboard!",
            duration: 5000,
            style: {
              background: "#CE4B4B",
            }
          }).showToast();
        else
          Toastify({
            avatar: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/58/Invicon_Bottle_o%27_Enchanting.gif",
            text: "Server IP copied successfully!",
            className: "scopy",
            duration: 5000,
            stopOnFocus: false,
            style: {
              background: "#CA5D37",
              margin: "1rem",
              fontSize: ".96em",
              boxShadow: "-.06em .06em .78em #888888",
            }
            }).showToast();
        });
    });}
})();

document.querySelectorAll('.hop').forEach(button => button.innerHTML = '<div>' + button.textContent.trim().split('').join('</span><span>') + '</div>');