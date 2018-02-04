
var bio0 = "<p>Recently, I’ve been finding it difficult to maintain contact with friends and family whilst also juggling school, work, and personal projects. That little metaphorical triangle listing: work, social life, and free time; pick two, springs to mind constantly. This is what prompted me to try and smash my work and social life together with <a href='http://isleofvodya.com' target='_blank'>Isle of Vodya</a> and <a href='http://spotify.club' target='_blank'>Spotify.club</a>. I thought that by combining them I would; through an alchemical mixture of friendship, web development, and game design/music, find the solution to my time management woes.</p><p>And in the end, it kinda worked out. However, it had a knock-on effect of adding a moderate amount of stress to my personal projects that previously wasn’t there.</p>";

var bio1 = "<p>I’ve been really enjoying my experience on <a href='https://twitter.com/LoganBuchanan' target='_blank'>Twitter</a> recently. Not the browsing portion though, that primarily consists of strangers yelling at each other. Instead I’ve been enjoying writing small bits of dialogue. I’ve kept the speakers vague, and the situations disconnected from one another, but its been fun trying to create characters within only aspects of their speech patterns. I don’t know if I’ve been successful at all with this, but it’s been a good way to break away from coding occasionally.</p>";


var bio2 = "<p>As I’ve been writing up these small thoughts, Word has been suggesting things that are far beyond what I’m used to. With certain turns of phrase like ‘once in a while’ and ‘look into’ Word has been suggesting different words and phrases to replace them. Overall, I like the idea and by extension a bit of the intent. However, I’ve got a creeping worry that this could homogenize writing in a destructive fashion. There’s a certain voice that has been pervasive in the writing on the web. A casual disinterested tone that feels like it was spawned by sites like Vice. This new voice has made much of the writing on the web feel boring/repetitive to me.</p><p>This Word correction feature just seemed like a new gateway into this conclusion. Granted, when I give it a second look, I think this viewpoint is a little alarmist.</p>"

var bioArray = [bio0, bio1, bio2];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var thoughtContainer = document.getElementById('thought');

thoughtContainer.innerHTML = bioArray[getRandomInt(3)];
