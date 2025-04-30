// src/questions.tsx
import Question from "../model/Question";

const myAge =
  new Date().getFullYear() -
  2003 -
  (new Date() < new Date(`${new Date().getFullYear()}-03-21`) ? 1 : 0);

export const Questions: Question[] = [
  {
    text: "Where are you from?",
    answers: [
      { text: "🇪🇺 Europe", points: 35 },
      { text: "🇦🇺 Australia", points: 75 },
      { text: "🇨🇦 Canada", points: 55 },
      { text: "🇨🇳 China", points: 90 },
      { text: "🇯🇵 Japan", points: 90 },
      { text: "🇳🇿 New Zealand", points: 65 },
      { text: "🇸🇬 Singapore", points: 100 },
      { text: "🇹🇼 Taiwan", points: 85 },
      { text: "🇺🇸 USA", points: 65 },
      {
        text: "Other",
        points: 0,
        dealbreaker: {
          title: "Sorry!",
          subtitle: <p>Only accepting the following countries:</p>,
          image: process.env.PUBLIC_URL + "/img/db01a.png",
        },
      },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "What is your sex?",
    answers: [
      {
        text: "Male",
        points: 0,
        dealbreaker: {
          title: "Sorry homie, this quiz ain't for you",
          subtitle: "Take this goodnight kiss tho",
          image: process.env.PUBLIC_URL + "/img/db02a.png",
        },
      },
      { text: "Female", points: 50 },
      {
        text: "Other (including trans people)",
        points: 0,
        dealbreaker: {
          title: "Not a match!",
          subtitle: <p>No hard feelings tho ❤️🌈</p>,
        },
      },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "What is your sexuality?",
    answers: [
      { text: "Straight", points: 50 },
      { text: "Bi", points: 25 },
      { text: "Pansexual", points: 25 },
      {
        text: "Gay",
        points: 0,
        dealbreaker: {
          title: "Not a match!",
          subtitle: <p>No hard feelings tho ❤️🌈</p>,
          image: process.env.PUBLIC_URL + "/img/db03a.webp",
        },
      },
      {
        text: "Asexual",
        points: 0,
        dealbreaker: {
          title: "Sorry dude",
          subtitle: <p>My deck ain't needing more aces 🃏</p>,
          image: process.env.PUBLIC_URL + "/img/db03b.jpg",
        },
      },
      { text: "Other", points: 0 },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "How old are you?",
    answers: [
      { text: `18-${myAge - 1}`, points: 50 },
      { text: `${myAge}`, points: 10 },
      {
        text: `${myAge + 1}+`,
        points: 0,
        dealbreaker: {
          title: "This u?",
          image: process.env.PUBLIC_URL + "/img/db04a.webp",
        },
      },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "Could you take up a Long-Distance Relationship (LDR)?",
    answers: [
      { text: "Yes", points: 50 },
      { text: "Only if we were in the same country", points: 10 },
      {
        text: "No",
        points: 0,
        dealbreaker: {
          title: "😐",
          subtitle: (
            <>
              <p className="mb-2">
                Bruh the fact u seeing this quiz means I'm in a different
                country.
              </p>
              <p>Like, all I can offer is an LDR rn.</p>
            </>
          ),
          image: process.env.PUBLIC_URL + "/img/db05a.webp",
        },
      },
    ],
    category: "🔒 Practical Filters",
  },
  {
    text: "How often do you smoke/vape?",
    answers: [
      {
        text: "Often",
        points: 0,
        dealbreaker: {
          title: "Lung cancer? No thank you 🚭",
          subtitle: <p>Prefering fresh air enthusiasts lmao</p>,
          image: process.env.PUBLIC_URL + "/img/db06.png",
        },
      },
      {
        text: "Sometimes",
        points: 0,
        dealbreaker: {
          title: "Still too smoky 🚭",
          subtitle: <p>Prefering fresh air enthusiasts</p>,
          image: process.env.PUBLIC_URL + "/img/db06.png",
        },
      },
      { text: "Never", points: 50 },
      { text: "Trying to quit", points: 10 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "How often do you drink?",
    answers: [
      {
        text: "Often",
        points: 0,
        dealbreaker: {
          title: "Nah",
          subtitle: <p>Alcoholism ain't cute</p>,
          image: process.env.PUBLIC_URL + "/img/db07a.jpeg",
        },
      },
      { text: "Sometimes", points: 10 },
      { text: "Rarely / Never", points: 50 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "What is your take on drugs?",
    answers: [
      {
        text: "I love both hard and soft drugs!",
        points: 0,
        dealbreaker: {
          title: "NAH",
          subtitle: <p>Hard in Hard Drugs stands for a Hard Pass lmao</p>,
          image: process.env.PUBLIC_URL + "/img/db08a.png",
        },
      },
      { text: "I love soft drugs!", points: 0 },
      { text: "I could try weed, but I don't want to be a stoner", points: 10 },
      { text: "No, thank you", points: 50 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "Do you consider yourself healthy?",
    answers: [
      {
        text: "Yes, I have a good BMI score, diet, sleep, exercise, and go to the doctor when I need to!",
        points: 50,
      },
      { text: "Yes", points: 25 },
      { text: "No", points: 0 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "Are you religious?",
    answers: [
      {
        text: "Yes",
        points: 0,
        dealbreaker: {
          title: "Not a match!",
          subtitle: "No offense ofc. We just don't vibe philosophy-wise.",
        },
      },
      {
        text: "Maybe, I'm a Deist, but not associated with any particular religion",
        points: 0,
      },
      { text: "No, I'm an Atheist/Agnostic", points: 50 },
      { text: "I don't know, I doubt my current beliefs", points: 10 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "How often do you use social media?",
    answers: [
      {
        text: "I'm addicted to doom-scrolling",
        points: 0,
        dealbreaker: {
          title: "Addiction is an addiction dude",
          image: process.env.PUBLIC_URL + "/img/db11a.jpg",
        },
      },
      { text: "Often", points: 0 },
      { text: "Sometimes", points: 25 },
      { text: "Rarely / Never", points: 50 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "Would you like to have a profound life?",
    answers: [
      { text: "Yes", points: 25 },
      { text: "No", points: 0 },
    ],
    category: "🌿 Lifestyle & Habits",
  },
  {
    text: "What do you think about casual hookups?",
    answers: [
      {
        text: "Love them!",
        points: 0,
        dealbreaker: {
          title: "💎",
          subtitle: (
            <p>
              Even diamonds can be turned into a hoe with a couple of sticks.
            </p>
          ),
          image: process.env.PUBLIC_URL + "/img/db13a.png",
        },
      },
      { text: "Not for me", points: 20 },
      { text: "Eww...", points: 50 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Body count?",
    answers: [
      { text: "0", points: 100 },
      { text: "1", points: 50 },
      { text: "2", points: 25 },
      { text: "3", points: 0 },
      {
        text: "4+",
        points: 0,
        dealbreaker: {
          title: "Wow...",
          subtitle: <p>Can't quite get it right, huh? 🙃</p>,
        },
      },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What do you think about selling nude content online?",
    answers: [
      {
        text: "I do it myself!",
        points: 0,
        dealbreaker: {
          title: "BOO!",
          subtitle: <p>Did I scare you? I'm a job application</p>,
          image: process.env.PUBLIC_URL + "/img/db15a.jpg",
        },
      },
      { text: "Not for me, but I think it empowers women", points: 0 },
      { text: "I hate the idea", points: 50 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What is your take on non-monogamy/open relationships?",
    answers: [
      {
        text: "Hell yeah!",
        points: 0,
        dealbreaker: {
          title: "That's just a no for me",
          subtitle: <p>Weird ass mfers these days...</p>,
        },
      },
      { text: "Eww...", points: 50 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Are you clingy?",
    answers: [
      { text: "Yes", points: 25 },
      { text: "No", points: 0 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Do you like deep and long talks?",
    answers: [
      { text: "Yes!", points: 50 },
      { text: "Booooring!", points: 0 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What is your love language?",
    answers: [
      { text: "Words of affirmation", points: 25 },
      { text: "Quality time", points: 50 },
      { text: "Acts of service", points: 25 },
      { text: "Receiving gifts", points: 10 },
      { text: "Physical touch", points: 25 },
      { text: "I don't know / Never thought about it", points: 10 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Can you handle intense emotions in a partner?",
    answers: [
      { text: "Yes, I welcome emotional depth", points: 50 },
      { text: "It depends", points: 25 },
      { text: "I prefer chill and easygoing only", points: 0 },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "Why are you looking for a relationship?",
    answers: [
      { text: "I'm looking for a life partner", points: 100 },
      {
        text: "I'm looking for a temporary relationship",
        points: 0,
        dealbreaker: {
          title: "I am not",
          image: process.env.PUBLIC_URL + "/img/db99a.png",
        },
      },
      {
        text: "I'm looking for friends",
        points: 0,
        dealbreaker: {
          title: "Cool!",
          subtitle: (
            <>
              <p className="mb-2">All relationships start with friendships!</p>
              <p className="mb-2">
                But let's be real, if there isn't a spark between us, I'm
                probably just gonna bail out after 2 weeks. I'm just too busy
                with life, and I'm simply looking for something deeper than
                "friends".
              </p>
              <p>
                However, if you're looking for a web developer to collaborate
                with, you can just contact me through my GitHub link located at
                the bottom of the page!
              </p>
            </>
          ),
          image: process.env.PUBLIC_URL + "/img/db99b.jpg",
        },
      },
      {
        text: "I'm feeling lonely",
        points: 0,
        dealbreaker: {
          title: "Damn, I feel ya bro",
          subtitle: (
            <p>
              That shouldn't be your sole reason to look for a relationship tho.
            </p>
          ),
          image: process.env.PUBLIC_URL + "/img/db99c.jpg",
        },
      },
      {
        text: "I'm not looking for a relationship at all",
        points: 0,
        dealbreaker: {
          title: "Let me guess, you like doing quizzes?",
          subtitle: (
            <p>
              I don't blame you. Just be sure to check what bread you are
              afterwards!
            </p>
          ),
          image: process.env.PUBLIC_URL + "/img/db99d.png",
        },
      },
    ],
    category: "💞 Relationship Philosophy",
  },
  {
    text: "What is the greatest value of life? (in your opinion)",
    answers: [
      { text: "Family", points: 25 },
      { text: "Knowledge", points: 75 },
      { text: "Money & Wealth", points: 50 },
      {
        text: "Pleasure",
        points: 0,
        dealbreaker: {
          title: "🔫🔫🔫",
          image: process.env.PUBLIC_URL + "/img/db21a.webp",
        },
      },
      { text: "Power", points: 50 },
      { text: "Self-discovery", points: 100 },
      { text: "I don't know...", points: 10 },
      { text: "Other", points: 50 },
    ],
    category: "🧭 Values & Mindset",
  },
  {
    text: "Would you like to study even after finishing school?",
    answers: [
      { text: "Yes, I'm a lifelong learner!", points: 50 },
      { text: "Not really", points: 0 },
    ],
    category: "🧭 Values & Mindset",
  },
  {
    text: "How would you feel if you discovered that after death, you would relive your life repeatedly, always the same exact way, and not remembering anything?",
    answers: [
      {
        text: "Great! I love my life despite occasional suffering!",
        points: 100,
      },
      { text: "Well... At least it's better than nothing?", points: 50 },
      {
        text: "Awful! No way I'm gonna relive all that shit again...",
        points: 0,
      },
    ],
    category: "🧭 Values & Mindset",
  },
  {
    text: "Are you emotionally mature?",
    answers: [
      { text: "Yes", points: 50 },
      {
        text: "Maybe / IDK / No",
        points: 0,
        dealbreaker: {
          title: "Then take a minute to read this",
          subtitle: (
            <>
              <p className="mb-2">
                Since you're between 18-{myAge}, I assume you might've not had
                much experience with relationships, and that's somewhat fine,
                since I mainly prioritize shared values over emotional maturity
                (it's just statistically less common that someone is open to my
                values than is emotionally mature, and I really like my values).
              </p>
              <p className="mb-2">
                <span className="font-bold">HOWEVER!</span> That doesn't excuse
                certain actions I see people do{" "}
                <span className="italic">way too often</span> during initial
                stages of getting to know each other, including:
              </p>
              <ul className="list-disc list-outside pl-4">
                <li className="mb-2">
                  <span className="font-bold">Ghosting and reappearing</span>{" "}
                  &ndash; you can just say you're busy or whatever.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Playing multiple sides</span>{" "}
                  &ndash; just pick a single guy and tell others you don't feel
                  it.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Too intense too soon</span>{" "}
                  &ndash; simply calm down, we're not getting married on Day 1.
                </li>
                <li className="mb-2">
                  <span className="font-bold">
                    Pressuring into vulnerability
                  </span>{" "}
                  &ndash; you should reciprocate.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Small talk limbo</span> &ndash;
                  don't avoid deeper topics.
                </li>
                <li className="mb-2">
                  <span className="font-bold">"My ex is so bad"</span> &ndash;
                  99% you both failed at that relationship, so don't victimize
                  yourself.
                </li>
                <li className="mb-2">
                  <span className="font-bold">"My ex..."</span> &ndash; stop
                  comparing others to your ex.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Lying</span> &ndash; that way the
                  relationship is bound to fail from the start.
                </li>
              </ul>
              <p className="mb-2">
                The premise is: you know that you can just{" "}
                <span className="font-bold">communicate</span> your issues,
                right? I'm just another human, I consider myself emotionally
                mature, and I don't bite lol. Saying,{" "}
                <span className="italic">
                  "I don't wan't to continue our talks &ndash; I hope you can
                  understand"
                </span>{" "}
                will not hurt anyone, even without stating any reason. It will
                give us both a clear indicator to move on.
              </p>
              <p>
                And all that just regarding initial stages of getting to know
                each other, I remind you! For emotional immaturity in
                relationships, I recommend just asking your{" "}
                <a
                  href="https://chatgpt.com/?q=what%20are%20some%20indicators%20someone%20is%20not%20mature%20emotionally%20in%20a%20relationship%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  chatgpt
                </a>
                .
              </p>
            </>
          ),
        },
      },
    ],
    category: "🧭 Values & Mindset",
  },
  {
    text: "What makes you feel most alive?",
    answers: [
      { text: "Creating something meaningful", points: 50 },
      { text: "Helping others", points: 50 },
      { text: "Traveling and exploring", points: 25 },
      { text: "Achieving goals", points: 25 },
      {
        text: "Partying and letting loose",
        points: 0,
        dealbreaker: {
          title: "ok",
          subtitle:
            "It's 2am as I'm coding this, take this cat image and leave",
          image: process.env.PUBLIC_URL + "/img/db25a.png",
        },
      },
      { text: "I don't really know", points: 10 },
    ],
    category: "🧭 Values & Mindset",
  },
  {
    text: "Do you have a strong sense of purpose in life?",
    answers: [
      { text: "Yes, and I'm working towards it", points: 50 },
      { text: "I'm figuring it out", points: 25 },
      { text: "No idea, I'm drifting", points: 0 },
    ],
    category: "🧭 Values & Mindset",
  },
  {
    text: "Are you extroverted/introverted?",
    answers: [
      {
        text: "Party animal",
        points: 0,
        dealbreaker: {
          title: "This u?",
          image: process.env.PUBLIC_URL + "/img/db27a.jpg",
        },
      },
      { text: "Extroverted", points: 25 },
      { text: "A mix of both", points: 50 },
      { text: "Introverted", points: 50 },
      { text: "Socially anxious", points: 10 },
    ],
    category: "🧠 Personality",
  },
];
