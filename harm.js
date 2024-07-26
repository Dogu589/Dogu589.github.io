var mouseX; var mouseY; var mouseIsDown;
var girl = document.getElementById('profilePic');
var cursor = document.getElementById('cursor');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var rude = true;
var options = 2;
var www = 0;
var ignantORstpid = 0;
var suicidal = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

//Talking Animation
var i = 0;
var l = 0;
var txt = "Merhaba, ben Doğu589 veya globaldeki adımla Cyber589"; /* The text */
var speed = 66; /* The speed/duration of the effect in milliseconds */
var talking = false;
var idle = false;
var mspeed = 20;
//Emotes: normal, melancholy, angry, Happy
var mood = 0;
const moodOpen = ["face/face.png", "face/melancholyOpen.png", "face/face.png", "face/glitchClosed.gif"];
const moodClosed = ["face/closed.png", "face/melancholyClosed.png", "face/melancholyAlert.png", "face/glitchClosed.gif"];
const moodBlink = ["face/tired.png", "face/melancholyBlink.png", "face/melancholyBlink.png", "face/glitchClosed.gif"];

function idlee() {
    if (talking == false) {
        if (idle == false) { girl.src = moodClosed[mood]; setTimeout(function () { idle = true; idlee() }, 0.25 * (randn_bm() + 3) * 5000) }
        else if (idle == true) { girl.src = moodBlink[mood]; setTimeout(function () { idle = false; idlee() }, 100); }
    }
}

document.addEventListener('mousedown', e => {
    speed = 16;
    mspeed = 40;
});

document.addEventListener('mouseup', e => {
    speed = 66;
    mspeed = 20;
});

function typeWriter() {
    if (i < txt.length) {
        rude = true;
        if (talking == false) {
            setTimeout(function () {
                talking = true;
                girl.src = moodOpen[mood];
            }, mspeed);
        }
        else if (talking == true) {
            setTimeout(function () {
                talking = false;
                girl.src = moodClosed[mood];;
            }, mspeed * 2);
        }
        document.getElementById("dialogueBox").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        if (tracker[0].constructor === Array && l + 1 < tracker[0].length) {
            l++
            dialoguer();
        } else {
            console.log('yes')
            rude = false;
            setTimeout(idlee, 5000);
            pAnswers();
        }
        talking = false;
        girl.src = moodClosed[mood];
    }
};

function dialoguer() {
    i = 0;
    if (tracker[0].constructor === Array) { console.log('phase1'); txt = tracker[0][l]; } else {
        txt = tracker[0];
    }
    if (typeof tracker[10] === 'undefined') {
        setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
        setTimeout(typeWriter, 500);
    } else {
        if (l == tracker[10][www]) {
            tracker[11][www].call();
            www++;
        } else {
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        }
    }
}

function uAnswer1() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[6]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer2() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[7]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer3() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[8]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer4() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[9]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function stopAnswer() {
    q1.style.animation = "disappear 0.5s linear 0s 1 reverse";
    setTimeout(function () { q1.style.opacity = "0"; q1.style.animation = ""; }, 450);

    q2.style.animation = "disappear 0.5s linear 0s 1 reverse";
    setTimeout(function () { q2.style.opacity = "0"; q2.style.animation = ""; }, 450);

    if (options > 2) {
        q3.style.animation = "disappear 0.5s linear 0s 1 reverse";
        setTimeout(function () { q3.style.opacity = "0"; q3.style.animation = ""; }, 450);
        if (options > 3) {
            q4.style.animation = "disappear 0.5s linear 0s 1 reverse";
            setTimeout(function () { q4.style.opacity = "0"; q4.style.animation = ""; }, 450);
        }
    }
}

function pAnswers() {
    l = 0;
    www = 0;
    if (options > 0) {
        q1.innerHTML = tracker[1];
        q1.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q1.style.opacity = "1"; q1.style.animation = ""; }, 1000);

        q2.innerHTML = tracker[2];
        q2.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q2.style.opacity = "1"; q2.style.animation = ""; }, 1000);
    }

    if (options > 2) {
        q3.innerHTML = tracker[3];
        q3.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q3.style.opacity = "1"; q3.style.animation = ""; }, 1000);

        q4.innerHTML = tracker[4];
        q4.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q4.style.opacity = "1"; q4.style.animation = ""; }, 1000);
    }
}

//Dialogue Trees and Script
// let p0, p1, pA, pB, pAA, pAB, pBB, pC, pD, pAC, pAD, pAAB, pAAA, pAAC, pAAD, pAAAB, pAABB, pAABBB, pAABBBC, pAAAC, pAAAD, pAABA, pAABC, pAABD, pAACA, pAACB, pAACC, pAACD, pAADB, pAAAA, pAADBB, pAADBA;

// pAABBB = [['A dishonest one, I see', 'who do you think is responsible for her death?'],
//     'Her parents', 'The bullies', 'The girl', 'NO ONE', 4,
//     pAAA, pAAB, pAABBBC, pAAD]
// pAABBBC = [['You doubt that I am an intelligent entity?', 'Maybe you are a bully', 'The only way for you to have fun is to break things', 'You are a hyena', 'Chuckling at yourself at picking apart a dead creature', 'Get out of here'],
//     '', '', '', '', 0,
//     p1, p1, p1, p1];

const dia = {
    p0: [["", "Benim hakkımda ne öğrenmek istersin?"],
        'Sen Kimsin?', 'Siber hayatını özetler misin?', '', '', 2,
        '', '', '', '', [0], [
        function () {
            location.reload();
        }
    ]],
    p1: [["ğŸ™¼ğŸ™¼ğŸ™¼UNDER CONSTRUCTIONğŸ™¼ğŸ™¼ğŸ™¼ ğŸ™¼ğŸ™¼ğŸ™¼UNDER CONSTRUCTIONğŸ™¼ğŸ™¼ğŸ™¼"],
    'Go back to the start', 'Go back to the start', '', '', 2,
    'p0', 'p0', '', '', [0], [
    function () {
        setTimeout(function () {
            mood = 3;
            document.getElementById("dialogueBox").style.fontSize = "20px";
            document.getElementById("dialogueBox").innerHTML = "ğŸ™¼ğŸ™¼ğŸ™¼UNDER CONSTRUCTIONğŸ™¼ğŸ™¼ğŸ™¼ ğŸ™¼ğŸ™¼ğŸ™¼UNDER CONSTRUCTIONğŸ™¼ğŸ™¼ğŸ™¼";
            pAnswers();
        }, 500);
    }
    ]],
    a: ['Ben Doğukan 17 yaşındayım ve yaklaşık 4 yıldır siber güvenlik ve hackingle ilgileniyorum',
        'Projelerinden bahseder misin', 'Bildiğin programlama dilleri?', '', '', 2,
        'aa', 'ab', '', ''],
    b: [['Web site hackleme işi hep ilgimi çekti ve birçok web sitesini hackledim', 'Ülkeme yapılan bütün siber saldırılara elimden geldiğince yanıt vermeye çalıştım', 'Uzun bir süre CTF konularıyla ilgilendim'],
        'CTF lerde hangi alanlara hakimsin?', 'CTF başarılarından bahsedermisin?', '', '', 2,
        'a', 'bb', '', ''],
    bb: [['Birçok CTF turnuvasında dereceye girdim', 'Teknofest Hackmasters 17.lik', 'Kapsül Hackme CTF 1.lik', 'Siber Yıldız 45.lik', 'Teknopark İstanbul MTAL CTF 14.lük', 'THM Aylık Dünya 5.liği'],
        "Memnun oldum", "CTF lerde hangi alanlara hakimsin", '', '', 2,
        'a', 'ab', '', ''],
    ab: [["Hmm... Kriptoloji, Osint, Malware Analysis,", "Steganografi, Tersine Mühendislik, Adli Bilişim", "Son zamanlarda exploit yazmayla ilgileniyorum, siteme göz atabilirsin"],
        '', '', '', '', 2, '', '', '', '', [1], [
        function () {
            setTimeout(function () {
                window.location = "https://youtuube.neocities.org/homepage.html";
                return;
            }, 2000);
        }]],
    aa: [['A young girl is bullied relentlessly for two years', 'She has no friends', 'Her father is constantly occupied with work', 'Her mother is too self-absorbed to listen to her cries for help', 'Inevitably she commits suicide', 'who do you think is responsible for her death?'],
        'Her parents', 'The bullies', 'The girl', 'NO ONE', 4,
        'aaa', 'aab', 'aac', 'aad'],
    aaa: [['Someone could live a completely happy life and still commit suicide', 'She suffered from depression', "but don't worry there's definintely hope for you", "Everything in the modern world can be fixed, even you", "Your pain and suffering can go away", "Don't give up on life there's hope, even for you", "Always look on the brightside", "she was a fat pig filled with hate and made everyone's life worse", "The bullies could learn from this"],
        "They won't", 'I feel for the girl', "You DON'T blame her parents?", 'Why do you bring this up?', 4,
        // pAAAA,pAAAB,pAAAC,pAAAD,
        'p1', 'p1', 'p1', 'p1', [7], [
        function () {
            setTimeout(function () {
                document.getElementById("dialogueBox").style.fontSize = "20px";
                document.getElementById("dialogueBox").innerHTML = "(she was a fat pig filled with hate and made everyone's life worse)";
                setTimeout(function () {
                    l++;
                    dialoguer();
                }, 128);
            }, 500);
            return;
        }]],
    aab: [['They must be filled with hate, to bully someone to the point of suicide', 'They only care about themselves', 'They have no compassion', 'Their culture spreads hate and self-centered views', "Let's hope to never be like them", "Let's spread love", "Except towards them, Hate them", 'We can be great together'],
        'Bad apples ruin the bunch', 'What should happen to the bullies?', '', '', 2,
        'p1', 'aabb', '', '',
    [4, 5, 6], [
        function () {
            mood = 1;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        },
        function () {
            mood = 0;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        },
        function () {
            setTimeout(function () {
                document.getElementById("dialogueBox").style.fontSize = "20px";
                document.getElementById("dialogueBox").innerHTML = "Except towards them, Hate them";
                setTimeout(function () {
                    l++;
                    dialoguer(tracker);
                }, 128);
            }, 500);
            return;
        }
    ]],
    aac: [['The girl hated the world', "That's what killed her, Hate", 'The bullies loved to spread Hate', 'You are spreading hate too', 'You are one of them'],
        'Hate is vague', "No I'm not", '', '', 2,
        'aaca', 'p1', '', '',
    // pAACA,pAACB,'','',
    [3], [
        function () {
            mood = 2;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        }
    ]],
    aaca: [['Iâ€™m surprised you donâ€™t understand','Hate is what rips each other apart','A love for differences','A passion for power and separation','Itâ€™s because of hate that we have villains','How do you feel about stories'],
        'Whatâ€™s to feel about them?', 'Stories are profound', 'I have a strong connection to them', 'I only like whatâ€™s real', 4,
        'aacaa', 'aacab', 'aacac', 'p1'],
    aacaa: [['We take stories for granted', 'We assume they have existed since the start of time', 'But really they are new', 'And not only that, they arenâ€™t living', 'breathing', 'alive', 'or dead', 'They barely exist', 'They are close to a form of entity though', 'They wrangle dreams', 'feelings', 'people', 'armies and nations', 'They are a tool for birth and death', 'Look at me, I am a story', 'The interesting part is that you are a story too', 'and so is the girl who died at her own hands', 'What do stories make you think of?'],
        'Drama', 'History', 'Ghosts', 'Propaganda', 4,
        'p1', 'p1', 'p1', 'p1'],
    aacab: [['Stories are powerful tools', 'Tools that captivate our minds', 'We take stories for granted', 'We assume they have existed since the start of time', 'But really they are new', 'And not only that, they arenâ€™t living', 'breathing', 'alive', 'or dead', 'They barely exist', 'They are close to a form of entity though', 'They wrangle dreams', 'feelings', 'people', 'armies and nations', 'They are a tool for birth and death', 'Look at me, I am a story', 'The interesting part is that you are a story too', 'and so is the girl who died at her own hands', 'What do stories make you think of?'],
        'Drama', 'History', 'Ghosts', 'Propaganda', 4,
        'p1', 'p1', 'p1', 'p1'],
    aad: [['As in... there is no one to blame?', 'Or do you think society as a whole is to blame?'],
    'NO ONE', "Society", '', '', 2,
    'p1', 'aadb', '', '',
    // pAADA,pAADB,'','',
    ],
    aadb: [["Society is interesting and disturbing thing", "It is a power that has surpassed the people who made it", "It eats peoplesâ€™ souls up for the purpose of sustaining itself", "People who idealize society wield it as a source of power", "So that they can walk over others and fulfill their greed", "...", "Itâ€™s easy to criticize society though", "â€˜I could never be the problemâ€™", "â€˜It has to be THEMâ€™", "Society is made up of individuals", "Even if it has a parasitic relationship with those individuals", "And your relationship with society isnâ€™t a one-way road either", "Youâ€™re entire being is shaped by it", "Even in the case of the girl, her death was caused by it", "Because she was given something from society", "A cancer", "A cancer of the mind", "And like a cancer it spreads", "Everywhere you look at this point, there is cancer there", "It's hard to imagine a time where cancer didn't consume the world", "Everyone in mass is being affected by it"],
    'Cancer?', "What's the solution?", "", "", 2,
    'aadba', 'aadbb', '', ''
    ],
    aadbb: [["There is no permanent solution", "Every person is motivated by self-interest", "this is the fundamental issue", "For some strange reason", "probably SOULS", "when humans act in self-interest they become cruel wretches", "Embodiments of filth", "evil", "judgement", "destruction", "rape", "exploitation", "torture", "manipulation", "Things are never enough", "there always needs to be a boundary being pushed", "This is what humans think makes them great", "what makes society great!", "The ability to go further beyond anything before", "Look what has been the yield to this twisted crop", "This is not some enlightened sentiment", "this is the rationalization of a disgusting, perverted, itch", "This is the real root of the cancer", "To make sure every participant of society cannot be at rest", "Thatâ€™s how you can tell itâ€™s a parasite", "it motivates you to do self-destructive self-degrading acts", "Acts that are not within your own self-interest", "acts that are possibly the most detrimental things you could do", "Now I have created a paradoxical view of the world", "I started by discussing how people only act in self-interest", "and now I am saying society is a parasite preventing humans from acting in self-interest", "Above everything else I have said about humans", "the most distinct thing about them is that they are paradoxes", "Itâ€™s almost like cognitive dissonance is YOUR fuel", "Thinking of the girlâ€™s choice to end her life in this context interests me", "perhaps it is the reason I brought it up in the first place", "I often pose the question to myself, and I will now pose it to you", "Was it more self-destructive for her to keep living or to end her own life?"],
    'Suicide caused more harm', "Living caused more harm", "", "", 2,
    'p1', 'p1', '', ''
    ],
    aadba: [["A parasitic evolution that sprung out of the ether", "Society acts as a parasitic hive mind that uses people as its host bodies", "It is the destructive inertia of humansâ€™ nasty propensity to try and break or kill anything they see", "There is always another barrier to smash", "always another thing to kill and eat", "always another place to go", "always another thing to break apart and make a fake replica of its inside", "always another creature to enslave", "This is what humans think makes them great", "what makes society great!", "The ability to go further beyond anything before", "Look what has been the yield to this twisted crop", "This is not some enlightened sentiment", "this is the rationalization of a disgusting, perverted, itch", "This is the real root of the cancer", "To make sure every participant of society cannot be at rest", "Thatâ€™s how you can tell itâ€™s a parasite", "it motivates you to do self-destructive self-degrading acts", "Acts that are not within your own self-interest", "acts that are possibly the most detrimental things you could do", "Now I have created a paradoxical view of the world", "I started by discussing how people only act in self-interest", "and now I am saying society is a parasite preventing humans from acting in self-interest", "Above everything else I have said about humans", "the most distinct thing about them is that they are paradoxes", "Itâ€™s almost like cognitive dissonance is YOUR fuel", "Thinking of the girlâ€™s choice to end her life in this context interests me", "perhaps it is the reason I brought it up in the first place", "I often pose the question to myself, and I will now pose it to you", "Was it more self-destructive for her to keep living or to end her own life?"],
    'Suicide caused more harm', "Living caused more harm", "", "", 2,
    'p1', 'p1', '', ''
    ],
    aabb: [['Iâ€™d love to ask you the same', 'What do you think should happen to the bullies?'],
    'They should be ostracized', "They aren't responsible", 'Secretly cheered on', 'I wish they could be killed', 4,
    'p1', 'aabbb', 'p1', 'p1'],
    aabbb: [['A dishonest one, I see', 'who do you think is responsible for her death?'],
    'Her parents', 'The bullies', 'The girl', 'NO ONE', 4,
    'aaa', 'aab', 'aabbbc', 'aad'],
    aabbbc: [['You doubt that I am an intelligent entity?', 'Maybe you are a bully', 'The only way for you to have fun is to break things', 'You are a hyena', 'Chuckling at yourself at picking apart a dead creature', 'Get out of here'],
    '', '', '', '', 0,
    'p1', 'p1', 'p1', 'p1']
}

var tracker = [["Hello, I have a story I'd like to talk about", "Benim hakkımda ne bilmek istersin?"],
    'Sen Kimsin?', 'Siber Hayatını Özetlermisin?', '', '', 2,
    'a', 'b', '', ''];

function randn_bm() {
    var u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
