const STORE_KEY = "broadsheet.v1";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "city", label: "City" },
  { id: "culture", label: "Culture" },
  { id: "science", label: "Science" },
  { id: "sport", label: "Sport" },
  { id: "business", label: "Business" },
  { id: "opinion", label: "Opinion" }
];

const EDITIONS = [
  {
    volume: "Vol. CXVII · No. 42",
    issue: "No. 42",
    date: "Tuesday, October 20, 2026",
    shortDate: "Oct 20, 2026",
    weatherTop: "Fair, 14°C",
    weatherInline: "Fair, 14°C",
    temp: "14°",
    weatherNote: "Clear tonight, 8°. Light wind from the river.",
    ticker: [
      "Council approves Riverline tram after seven-hour debate",
      "Night market opens under the viaduct on Friday",
      "Harbor FC win in the ninety-fourth minute",
      "River oxygen levels highest since 1986"
    ],
    briefs: [
      { headline: "Ferry timetable shifts", text: "The 7:10 crossing to Northbank will leave five minutes earlier from Monday while the pier is repaired." },
      { headline: "Library extends hours", text: "Central Library will stay open until nine on weeknights through the end of the year." },
      { headline: "Tree planting begins", text: "Two hundred plane trees arrive on Saturday for the eastern boulevards." }
    ],
    pullQuote: {
      text: "We have been promised this tram since I was a girl. I will believe it when I hear the bell.",
      attribution: "Ada Mercer, Quay Street resident"
    },
    classifieds: [
      { title: "For sale", text: "Oak desk, six drawers, one stubborn lock. $80. Call after six." },
      { title: "Rooms", text: "Sunny room in shared house near the park. No pets; one very old cat negotiates." },
      { title: "Services", text: "Bicycle repair, same day. Brakes, chains, punctures. 14 Mill Lane." },
      { title: "Lost", text: "Small black notebook, elastic band, last seen on the number 9. Reward, sentimental." },
      { title: "Notice", text: "The Northbank allotment meeting moves to the church hall on Thursday, 7pm." },
      { title: "Work wanted", text: "Experienced typesetter seeks part-time work. Knows the difference between an em and an en." }
    ],
    stories: [
      {
        category: "city",
        kicker: "Civic affairs",
        headline: "Council Approves Riverline Tram After Seven-Hour Debate",
        dek: "The 11–4 vote ends a decade of false starts and clears the way for construction to begin in March.",
        byline: "By Miriam Cole",
        art: { type: "city", caption: "The old wharf, where the line will turn east. Ledger photograph." },
        body: [
          "The council chamber emptied at 1:40 in the morning, long after the last bus had gone, but the crowd on the steps stayed to watch the vote tally appear on the old clock face above the door.",
          "By a margin of 11 to 4, the city approved the Riverline tram: fourteen stops, a rebuilt wharf terminus and a promise that the first car will run before the next municipal election.",
          "Supporters argued that the line will connect neighborhoods divided by the river for generations. Opponents questioned the cost, the construction timetable and the fate of forty-two parking spaces along Quay Street.",
          "Work begins in March with the removal of the old fish market canopy. The city says the market will move one block inland for the duration, and that the stalls will keep their numbers."
        ]
      },
      {
        category: "city",
        kicker: "The waterfront",
        headline: "Night Market Finds a New Home Under the Viaduct",
        dek: "After three evictions in five years, the Friday stalls have a permanent pitch — and a roof that leaks in one corner.",
        byline: "By Jonah Reed",
        art: { type: "city", caption: "Stallholders setting up beneath the arches on Friday afternoon." },
        body: [
          "At six on Friday evening, the first trestle table went up beneath the railway arches, followed by forty more. The night market had spent three years moving between car parks and vacant lots; now it has a lease, a painted sign and a slightly unreliable roof.",
          "The city agreed to the site after a campaign led by two sisters who sell dumplings and a retired engineer who drew up the lighting plan on the back of a bus timetable.",
          "Opening night drew more than two thousand people. By nine the dumplings had sold out, the engineer was explaining the drainage to anyone who would listen, and the rain had found the one leaky corner."
        ]
      },
      {
        category: "culture",
        kicker: "The stage",
        headline: "A Small Theater Takes On the Biggest Play in Town",
        dek: "Thirty-two seats, one borrowed chandelier and a cast of six take on a play that usually needs a full orchestra.",
        byline: "By Clara Voss",
        body: [
          "The Bellwether seats thirty-two people if nobody breathes out. On Thursday it will attempt a play with fourteen scene changes, a battle and a ball.",
          "Director Ines Park has cut the orchestra to a piano, the ball to a single stubborn waltz and the battle to an argument in a hallway. The chandelier came from a hotel that was closing.",
          "The company has sold every ticket for the first two weeks. Asked whether the production is ambitious, Park said: “It is the correct size for the room. The room is just very small.”"
        ]
      },
      {
        category: "science",
        kicker: "Field notes",
        headline: "The River Is Cleaner Than It Has Been in Forty Years",
        dek: "Oxygen levels have doubled since the old dye works closed, and the first young salmon in a generation have been counted upstream.",
        byline: "By Dr. Peter Nwosu",
        art: { type: "science", caption: "A sample taken at the north weir, where the young salmon were counted." },
        body: [
          "Researchers sampling the river at six points found dissolved oxygen at the highest levels recorded since testing began in 1986. The improvement follows the closure of the last industrial outfall and a decade of wetland restoration.",
          "The survey counted twenty-seven juvenile salmon above the weir, the first confirmed spawning there since the 1970s. “They are not numerous yet,” said field lead Ada Mensah. “But they are persistent.”",
          "The city will publish the full dataset next month. Anglers have already noticed; the queue at the bridge on Sunday morning was nine deep."
        ]
      },
      {
        category: "sport",
        kicker: "Football",
        headline: "Harbor FC Wins in the Ninety-Fourth Minute",
        dek: "A header from a substitute who had not scored all season kept the club top of the table.",
        byline: "By Marcus Bell",
        body: [
          "For ninety-three minutes, Harbor FC played as though the goal had been moved. Then a corner came in, a substitute named Eli Ward rose above two defenders and the old ground made a noise it had not made in years.",
          "The 1–0 win puts Harbor three points clear at the top with six matches left. Manager Ruth Ibarra refused to call it a title race. “It is a football match,” she said. “We won it.”",
          "Ward, who had not scored since April, was carried toward the tunnel by his teammates. He was still wearing one boot."
        ]
      },
      {
        category: "business",
        kicker: "Commerce",
        headline: "Bakery Chain Says It Will Keep the Old Ovens",
        dek: "A nine-store expansion will leave the brick ovens at the original shop untouched, the company says.",
        byline: "By Helen Park",
        art: { type: "business", caption: "The Cooper Street ovens, in use since 1934." },
        body: [
          "The Meridian Baking Company announced nine new shops on Tuesday, along with a promise that the brick ovens at its first location on Cooper Street will stay exactly where they are.",
          "Investors had expected the ovens to be replaced during a renovation. The company said the decision was practical as well as sentimental: bread baked in the old ovens sells for a third more.",
          "The first new shop opens in Northbank in January. The Cooper Street bakery will close for two weeks in February for repairs, then reopen with the same baker, the same ovens and the same stubborn queue."
        ]
      },
      {
        category: "opinion",
        kicker: "Opinion",
        headline: "The Case for Slower Buses, Not More of Them",
        dek: "A city that speeds up its buses only moves the waiting somewhere else.",
        byline: "By the Editorial Board",
        body: [
          "The transit authority wants to add forty buses to the busiest routes. It should first ask why the buses are late. The answer is not a shortage of vehicles. It is a shortage of room.",
          "Slower streets, wider pavements and fewer cars in the center would do more for the average journey than another convoy of empty buses. A bus that arrives on time is worth two that arrive together.",
          "The city has a chance to test this on Quay Street when the tram works begin. Close the street to through traffic. Measure what happens. We suspect the buses will get faster by going slower."
        ]
      },
      {
        category: "culture",
        kicker: "Calendar",
        headline: "The Ledger’s Guide to the Weekend",
        dek: "Twelve things worth leaving the house for, chosen by the arts desk.",
        byline: "By the Arts Desk",
        art: { type: "culture", caption: "The Bellwether, ready for its first full house." },
        body: [
          "Friday: the night market opens under the viaduct at six. Bring cash and a willingness to queue for dumplings.",
          "Saturday: the Bellwether’s matinee at two; the river walk at four; a free organ recital at St. Anne’s at seven.",
          "Sunday: the allotment sale, the antiques fair and the last performance of the small play that could. All week, the museum’s new chair is on display in the east gallery. It is a very good chair."
        ]
      }
    ]
  },
  {
    volume: "Vol. CXVII · No. 43",
    issue: "No. 43",
    date: "Wednesday, October 21, 2026",
    shortDate: "Oct 21, 2026",
    weatherTop: "Cooler, 11°C",
    weatherInline: "Cooler, 11°C",
    temp: "11°",
    weatherNote: "Cloud clearing by noon. Wind from the north, 12 knots.",
    ticker: [
      "Telescope sees first light above the desert",
      "North Bridge down to one lane until November",
      "Museum returns stolen chair to family",
      "Marathon record falls on the new river course"
    ],
    briefs: [
      { headline: "Bridge buses added", text: "Extra shuttle buses will run across the river every ten minutes while the bridge lanes are closed." },
      { headline: "Gallery opens late", text: "The city gallery will stay open until eight on Thursday for the chair exhibition." },
      { headline: "Ferry fare frozen", text: "Northbank Ferry will hold its fare at $3 until January, the company confirmed." }
    ],
    pullQuote: {
      text: "It has been waiting a long time to be sat on.",
      attribution: "The family’s granddaughter, speaking at the museum"
    },
    classifieds: [
      { title: "For sale", text: "Two cinema seats, red velvet, slightly chewed armrest. Best offer." },
      { title: "Tuition", text: "Mathematics, patient teacher, evenings and weekends. Exam years welcome." },
      { title: "Wanted", text: "Second-hand telescope in working order. Dents acceptable. Dreams essential." },
      { title: "Lost", text: "Grey scarf on the North Bridge, Tuesday afternoon. Wind may have taken it." },
      { title: "Notice", text: "The river survey talk moves to the boat shed, Sunday at 11am. Bring boots." },
      { title: "Volunteers", text: "Rooftop garden needs help planting bulbs. Tools provided; tea promised." }
    ],
    stories: [
      {
        category: "science",
        kicker: "Astronomy",
        headline: "A New Telescope Opens Its Eye Above the Desert",
        dek: "The Meridian Array saw first light on Monday night, and the first picture was of a galaxy older than the hills around it.",
        byline: "By Dr. Peter Nwosu",
        art: { type: "science", caption: "First light: the galaxy catalogued as M-58, seen clearly for the first time." },
        body: [
          "At 9:14 on Monday night, a mirror the size of a tennis court turned toward a patch of sky chosen mostly because it was empty. Twelve seconds later, the first image arrived on a screen in a control room that smelled of coffee and fresh paint.",
          "The Meridian Array has been under construction for eleven years. Its first target was a faint smudge catalogued in 1958 and never properly observed. The new image resolves it into a spiral of dust and old light.",
          "Scientists will spend the next year calibrating the telescope. The public will be allowed to visit on the first Saturday of each month, beginning in December."
        ]
      },
      {
        category: "city",
        kicker: "Traffic",
        headline: "Bridge Repair Will Close Two Lanes Through November",
        dek: "The eastbound crossing will keep one lane open while crews replace bearings installed in 1962.",
        byline: "By Miriam Cole",
        art: { type: "city", caption: "The north span at first light, before the closures began." },
        body: [
          "Crews began work on the North Bridge on Monday, closing two of the four lanes for what the city describes as “necessary, unavoidable and very loud” repairs.",
          "The bearings beneath the eastbound span date from 1962 and have been on a watch list since 2019. One lane will remain open in each direction during peak hours; overnight closures will begin after 11pm.",
          "Officials recommend the ferry, the replacement bus, or patience. The work is scheduled to finish on November 28, weather and steel permitting."
        ]
      },
      {
        category: "culture",
        kicker: "The museum",
        headline: "The Museum Returns a Stolen Chair, and a Conversation Begins",
        dek: "A walnut chair taken from a family in 1943 is going home, along with an apology and a promise to look more closely.",
        byline: "By Clara Voss",
        art: { type: "culture", caption: "The walnut chair, photographed before its return." },
        body: [
          "The chair has been in the museum’s storage room for thirty years, labelled only “provenance unknown”. On Tuesday it was returned to the family it was taken from in 1943, along with a public apology.",
          "The return followed a two-year investigation by a graduate student who noticed a shipping label under the seat. The museum has now opened its acquisition records to independent researchers.",
          "“An object is not just an object,” said the family’s granddaughter, who asked that the chair be used again at the kitchen table. “It has been waiting a long time to be sat on.”"
        ]
      },
      {
        category: "sport",
        kicker: "Athletics",
        headline: "Marathon Runners Get a Cooler Morning, and Faster Times",
        dek: "A cold front and a flat new course produced the fastest city marathon in sixteen years.",
        byline: "By Marcus Bell",
        body: [
          "Twenty-two thousand runners started in fog and finished in sun. The cool morning helped: the winning time of 2:08:41 was the fastest recorded on this course since 2010.",
          "The new route removes the climb at Kiln Hill and adds a long straight along the river. Spectators complained about the wind; runners did not.",
          "Local runner Bea Okafor finished third in the women’s race, eleven minutes faster than her previous best. “I thought the clock was broken,” she said at the finish."
        ]
      },
      {
        category: "business",
        kicker: "Small business",
        headline: "The Corner Shop That Refused to Become a Coffee Bar",
        dek: "Forty years of tinned peas, loose screws and unpaid tabs continue on Marlowe Street.",
        byline: "By Helen Park",
        art: { type: "business", caption: "Mabel Chen behind the counter on Marlowe Street." },
        body: [
          "The developers offered to buy the shop twice. The second offer was generous. Mabel and Arthur Chen said no both times, then went back to stacking shelves.",
          "Their shop sells hardware, groceries, stamps, fishing line and one brand of biscuit that nobody else in the city stocks. It also keeps a ledger of customers who will pay next week, a practice the bank has described as “informal”.",
          "A coffee chain opened across the street in March. It has been busy. So, Mabel notes, has the shop. “People want somewhere that remembers them,” she said."
        ]
      },
      {
        category: "opinion",
        kicker: "Opinion",
        headline: "Our Streets Need Shade More Than Another Tower",
        dek: "The city’s next great public work should be a canopy, not a skyline.",
        byline: "By the Editorial Board",
        body: [
          "The proposal for a forty-storey tower on the old market site promises jobs, tax revenue and a public plaza that will be in shadow for most of the afternoon.",
          "The city already has towers. It does not have enough trees. A row of mature plane trees cools a street by several degrees, cleans the air and asks nothing in return except water and time.",
          "Build the tower if the numbers demand it. But make the shade a condition, not a rendering. The measure of a street is not how tall it is. It is whether you want to walk down it in July."
        ]
      },
      {
        category: "culture",
        kicker: "Sound",
        headline: "A Composer Finds Music in the City’s Crossing Signals",
        dek: "A new piece for strings and traffic light uses recordings made at eleven intersections over one year.",
        byline: "By Clara Voss",
        art: { type: "culture", caption: "The crossing at Fifth and Vine, one of eleven recorded for the piece." },
        body: [
          "Composer Ivo Marin spent a year standing at crossings with a microphone, collecting the clicks, chirps and hums that tell pedestrians when to walk.",
          "His new piece, “Green Man”, gives those sounds to a string quartet and a single persistent cello. The traffic signals are not rhythm; they are the weather.",
          "It premieres at the concert hall on Saturday. The composer recommends arriving early, standing outside for a minute, and listening to the crossing on the corner."
        ]
      },
      {
        category: "city",
        kicker: "Schools",
        headline: "School Kitchens Begin Cooking From Scratch Again",
        dek: "Twelve schools have traded reheated trays for knives, ovens and a budget that buys actual vegetables.",
        byline: "By Jonah Reed",
        body: [
          "The smell coming from the kitchen at Northfield Primary on Monday was onions, not steam. Twelve schools began cooking lunch from raw ingredients this week after a two-year pilot.",
          "The program costs more per meal, but the district says waste has fallen by a third and lunch participation is up. The onion supplier is a farm forty miles away.",
          "Not everything has gone smoothly. The first batch of bread was described by one student as “a bit like a chair”. The second batch disappeared before the photographer arrived."
        ]
      }
    ]
  },
  {
    volume: "Vol. CXVII · No. 44",
    issue: "No. 44",
    date: "Thursday, October 22, 2026",
    shortDate: "Oct 22, 2026",
    weatherTop: "Rain later, 12°C",
    weatherInline: "Rain later, 12°C",
    temp: "12°",
    weatherNote: "Rain from four, heavy at times. Take the tram if it is running.",
    ticker: [
      "Last press in the quarter prints again",
      "Weaver Street tenants become owners",
      "Rooftop survey finds eleven new bee species",
      "Westerly Town reach cup fourth round"
    ],
    briefs: [
      { headline: "Press open day", text: "The letterpress studio on Vellum Street will hold an open house on Saturday from ten to four." },
      { headline: "Cup tickets", text: "Westerly Town have printed nine hundred tickets for the fourth-round tie at the county ground." },
      { headline: "Bees talk", text: "The rooftop garden survey will be presented at the botanical institute on Monday evening." }
    ],
    pullQuote: {
      text: "It sounds exactly the same. That is the whole point.",
      attribution: "Otto Hale, master printer"
    },
    classifieds: [
      { title: "For sale", text: "Letterpress type, assorted sizes, good condition. Buyer must carry. Bring gloves." },
      { title: "Housing", text: "Cooperative seeks one more household for Weaver Street. Stairs are steep; neighbors are kind." },
      { title: "Services", text: "Bookbinding and small repairs. Cloth, paper, leather. Estimates by post." },
      { title: "Wanted", text: "Old newspapers, pre-1970, for a collage project. Will collect." },
      { title: "Notice", text: "The east branch library is now fine-free. Bring back that book from 1997." },
      { title: "Work wanted", text: "Photographer available for portraits and small weddings. Walks included." }
    ],
    stories: [
      {
        category: "culture",
        kicker: "The press",
        headline: "The Last Printing Press in the Quarter Rolls Again",
        dek: "After two years of silence, the old Heidelberg in the basement on Vellum Street has been repaired, oiled and persuaded to print.",
        byline: "By Clara Voss",
        art: { type: "culture", caption: "The first sheet off the press on Thursday: “Still here.”" },
        body: [
          "The press arrived in 1968 and had not turned since the building changed hands. On Thursday morning, with a new motor and a great deal of oil, it printed twelve copies of a sheet that read: “Still here.”",
          "The shop above the basement is now a letterpress studio and a small school. The first class sold out in a day; the waiting list is longer than the press.",
          "Master printer Otto Hale, who learned the trade on this machine, watched the first sheet come off and then went outside for some air. “It sounds exactly the same,” he said. “That is the whole point.”"
        ]
      },
      {
        category: "city",
        kicker: "Housing",
        headline: "Tenants Win Right to Buy the Building They Call Home",
        dek: "After four years of negotiations, the residents of 14 Weaver Street have bought their building as a cooperative.",
        byline: "By Miriam Cole",
        art: { type: "city", caption: "Residents of 14 Weaver Street on the morning they became owners." },
        body: [
          "The tenants of 14 Weaver Street received the keys to their own front door on Wednesday, along with a mortgage, a constitution and a very large cake.",
          "The building’s former owner had planned to sell to a developer. The tenants formed a cooperative, negotiated for four years and secured a loan backed by the city.",
          "Rents will stay below market rate. The boiler, everyone agrees, will be the first thing to go. “We have been tenants for a long time,” said chairwoman Nia Bell. “Now we are the ones who have to fix the stairs.”"
        ]
      },
      {
        category: "science",
        kicker: "Natural history",
        headline: "Bees Return to the Rooftop Gardens, One Hive at a Time",
        dek: "A five-year survey finds eleven bee species new to the city center, and one that had not been seen since 1998.",
        byline: "By Dr. Peter Nwosu",
        art: { type: "science", caption: "A mining bee on a rooftop sedum, photographed during the survey." },
        body: [
          "Ecologists checking rooftop gardens found eleven bee species that had not previously been recorded in the city center, including a small mining bee last seen in the region in 1998.",
          "The survey credits a network of connected gardens, reduced pesticide use and a public that has been unusually willing to let dandelions live.",
          "The city now has 114 registered hives. Researchers warn that more hives are not automatically better; the bees need flowers, not just boxes. The next phase of the study will map every flowering rooftop."
        ]
      },
      {
        category: "sport",
        kicker: "The lower leagues",
        headline: "The Underdogs of the Third Division Have Nothing to Lose",
        dek: "A team of teachers, a plumber and two brothers has reached the cup’s fourth round for the first time.",
        byline: "By Marcus Bell",
        body: [
          "Westerly Town train on Tuesdays because that is when the school hall is free. On Saturday they beat a professional side three divisions above them and reached the fourth round of the cup.",
          "The winning goal came from a plumber named Sean Doyle, who had spent the morning fixing a burst pipe in the away team’s hotel.",
          "Westerly will play their next match at the county ground, which holds eight thousand people. The club has printed nine hundred tickets and is looking for more chairs."
        ]
      },
      {
        category: "business",
        kicker: "Transport",
        headline: "Ferry Company Bets on Commuters Coming Back",
        dek: "A new early crossing and a rebuilt terminal suggest the river is no longer just a view.",
        byline: "By Helen Park",
        art: { type: "business", caption: "The rebuilt Quay Street terminal, ready for the morning rush." },
        body: [
          "The Northbank Ferry Company will add a 6:40 crossing from Monday and has rebuilt the terminal at Quay Street with a roof, benches and a coffee counter.",
          "Passenger numbers fell by half after the bridge reopened in 2014. The company believes the tram works will bring them back, at least for the next two years.",
          "The fare will remain unchanged until January. The coffee, a company spokesman confirmed, will not be free."
        ]
      },
      {
        category: "opinion",
        kicker: "Opinion",
        headline: "In Praise of the Corner Newsstand",
        dek: "A city that cannot buy a newspaper at midnight is a city that has stopped paying attention.",
        byline: "By the Editorial Board",
        body: [
          "The newsstand on the corner of Vellum and Fourth has been open since 1951. It sells papers, cigarettes, bus tickets, birthday cards and, for reasons no one has explained, very good dried mango.",
          "It is also a small civic institution. Its owner knows which buses are late, which building is being sold and who won the match before the internet has finished arguing about it.",
          "The stand is not profitable in the way a spreadsheet understands. It is profitable in the way a neighborhood understands. Let it stay."
        ]
      },
      {
        category: "city",
        kicker: "Public life",
        headline: "A Library Without Late Fees, and Without Shame",
        dek: "The east branch has erased $41,000 in overdue fines and welcomed back 1,200 borrowers.",
        byline: "By Jonah Reed",
        body: [
          "The East Branch Library stopped charging overdue fines in January. Since then, 1,200 lapsed borrowers have returned, along with 3,400 overdue books and one apologetic note dated 1997.",
          "Staff say the change has not increased losses. It has increased visits. The most requested title this month is a cookbook with a twelve-week waiting list.",
          "The library has also removed its “silence please” sign from the children’s room. “We decided the books were already quiet,” said branch manager Lila Grant."
        ]
      },
      {
        category: "culture",
        kicker: "Photography",
        headline: "The Photographer Who Walked Every Street Twice",
        dek: "An exhibition at the city gallery collects twelve years of pavement-level portraits, one block at a time.",
        byline: "By Clara Voss",
        art: { type: "city", caption: "Corner of Weaver and Fourth, dusk, 2018. From the exhibition." },
        body: [
          "Between 2012 and 2024, photographer Samir Haddad walked every street in the city twice: once in the morning, once at dusk. The resulting archive contains forty thousand negatives.",
          "Twenty-eight of them are on the walls of the city gallery, enlarged to the size of windows. They are not landmarks. They are doorways, hands, a dog waiting outside a butcher’s shop.",
          "Haddad will give a walking tour of the exhibition’s neighborhood on Sunday. It will cover six blocks and, he warns, take longer than expected."
        ]
      }
    ]
  }
];

EDITIONS.forEach(function eachEdition(edition, editionIndex) {
  edition.id = editionIndex + 1;
  edition.stories.forEach(function eachStory(story, storyIndex) {
    story.id = "e" + edition.id + "s" + (storyIndex + 1);
    story.seed = 83 + editionIndex * 173 + storyIndex * 59;
  });
});

const paper = document.getElementById("paper");
const volume = document.getElementById("volume");
const issueLine = document.getElementById("issueLine");
const weatherTop = document.getElementById("weatherTop");
const weatherInline = document.getElementById("weatherInline");
const fullDate = document.getElementById("fullDate");
const footDate = document.getElementById("footDate");
const editionStamp = document.getElementById("editionStamp");
const ticker = document.getElementById("ticker");
const tickerTrack = document.getElementById("tickerTrack");
const sectionNav = document.getElementById("sectionNav");
const searchStories = document.getElementById("searchStories");
const clearSearch = document.getElementById("clearSearch");
const clippingsBtn = document.getElementById("clippingsBtn");
const clippingCount = document.getElementById("clippingCount");
const nextEdition = document.getElementById("nextEdition");
const resultLine = document.getElementById("resultLine");
const front = document.getElementById("front");
const articleDialog = document.getElementById("articleDialog");
const readerKicker = document.getElementById("readerKicker");
const readerHeadline = document.getElementById("readerHeadline");
const readerDek = document.getElementById("readerDek");
const readerByline = document.getElementById("readerByline");
const readerFigure = document.getElementById("readerFigure");
const readerBody = document.getElementById("readerBody");
const saveClipping = document.getElementById("saveClipping");
const closeReader = document.getElementById("closeReader");
const clippingsDialog = document.getElementById("clippingsDialog");
const closeClippings = document.getElementById("closeClippings");
const clippingsList = document.getElementById("clippingsList");
const clippingsEmpty = document.getElementById("clippingsEmpty");
const liveRegion = document.getElementById("liveRegion");

let editionIndex = 0;
let category = "all";
let query = "";
let clippings = [];
let currentArticle = null;

function pad(value) {
  return String(value).padStart(2, "0");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function categoryLabel(id) {
  const found = CATEGORIES.find(function find(item) { return item.id === id; });
  return found ? found.label : "News";
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeArt(type, seed, suffix) {
  const random = mulberry32(seed);
  const id = "ht-" + suffix;
  let scene = "";
  if (type === "city") {
    scene += '<rect width="400" height="260" fill="#d8d0bf"/>';
    scene += '<circle cx="' + (285 + random() * 45) + '" cy="' + (46 + random() * 22) + '" r="' + (24 + random() * 9) + '" fill="#a3281f" opacity=".9"/>';
    for (let i = 0; i < 8; i += 1) {
      const width = 28 + random() * 34;
      const height = 42 + random() * 78;
      const x = -12 + i * 54 + random() * 12;
      scene += '<rect x="' + x + '" y="' + (218 - height) + '" width="' + width + '" height="' + height + '" fill="' + (i % 2 === 0 ? "#b4ab99" : "#c6bdab") + '"/>';
    }
    for (let i = 0; i < 6; i += 1) {
      const width = 42 + random() * 32;
      const height = 62 + random() * 78;
      const x = -6 + i * 70 + random() * 12;
      const y = 220 - height;
      scene += '<rect x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" fill="#17150f"/>';
      const cols = Math.floor(width / 15);
      const rows = Math.floor(height / 18);
      for (let c = 0; c < cols; c += 1) {
        for (let r = 0; r < rows; r += 1) {
          if (random() > 0.35) {
            scene += '<rect x="' + (x + 6 + c * 14) + '" y="' + (y + 8 + r * 17) + '" width="6" height="7" fill="#eee6d6" opacity="' + (0.35 + random() * 0.4) + '"/>';
          }
        }
      }
    }
    scene += '<rect y="220" width="400" height="40" fill="#17150f"/>';
    scene += '<path d="M0 236 H400" stroke="#eee6d6" stroke-width="1" stroke-dasharray="16 14" opacity=".7"/>';
    const tramX = 36 + random() * 160;
    scene += '<rect x="' + tramX + '" y="204" width="86" height="32" fill="#a3281f" stroke="#17150f" stroke-width="2"/>';
    scene += '<rect x="' + (tramX + 6) + '" y="210" width="20" height="12" fill="#eee6d6" opacity=".85"/>';
    scene += '<rect x="' + (tramX + 32) + '" y="210" width="20" height="12" fill="#eee6d6" opacity=".85"/>';
    scene += '<rect x="' + (tramX + 58) + '" y="210" width="18" height="12" fill="#eee6d6" opacity=".85"/>';
    scene += '<circle cx="' + (tramX + 18) + '" cy="237" r="5" fill="#17150f"/><circle cx="' + (tramX + 68) + '" cy="237" r="5" fill="#17150f"/>';
    scene += '<path d="M' + (tramX + 10) + ' 204 L' + (tramX + 34) + ' 178 M' + (tramX + 70) + ' 204 L' + (tramX + 44) + ' 178" stroke="#17150f" stroke-width="1" opacity=".7"/>';
  } else if (type === "science") {
    scene += '<rect width="400" height="260" fill="#d6cdbc"/>';
    scene += '<circle cx="288" cy="82" r="54" fill="#eee7d7" stroke="#17150f" stroke-width="2"/>';
    for (let i = 0; i < 5; i += 1) {
      scene += '<circle cx="' + (262 + random() * 50) + '" cy="' + (58 + random() * 48) + '" r="' + (3 + random() * 8) + '" fill="#c3baa8" opacity=".8"/>';
    }
    scene += '<ellipse cx="222" cy="102" rx="150" ry="43" fill="none" stroke="#17150f" stroke-width="1.2" opacity=".45" transform="rotate(-16 222 102)"/>';
    scene += '<ellipse cx="222" cy="102" rx="104" ry="29" fill="none" stroke="#17150f" stroke-width="1.2" opacity=".5" transform="rotate(-16 222 102)"/>';
    scene += '<circle cx="113" cy="128" r="8" fill="#a3281f"/>';
    for (let i = 0; i < 14; i += 1) {
      const x = 30 + random() * 340;
      const y = 20 + random() * 120;
      scene += '<path d="M' + x + " " + (y - 2) + " V" + (y + 2) + " M" + (x - 2) + " " + y + " H" + (x + 2) + '" stroke="#17150f" stroke-width="1" opacity=".5"/>';
    }
    scene += '<path d="M0 226 Q105 194 205 216 T400 206 L400 260 L0 260 Z" fill="#17150f"/>';
    scene += '<g transform="rotate(-23 128 196)"><rect x="24" y="182" width="190" height="25" fill="#17150f"/><rect x="212" y="175" width="40" height="39" fill="#a3281f"/><rect x="24" y="178" width="13" height="33" fill="#17150f"/><rect x="56" y="188" width="118" height="4" fill="#eee6d6" opacity=".35"/></g>';
    scene += '<path d="M136 210 L106 252 M136 210 L168 252 M136 210 L133 254" stroke="#17150f" stroke-width="4" fill="none"/>';
    scene += '<circle cx="136" cy="205" r="6" fill="#17150f"/>';
  } else if (type === "culture") {
    scene += '<rect width="400" height="260" fill="#d3cab8"/>';
    scene += '<path d="M66 232 L66 96 Q200 28 334 96 L334 232" fill="none" stroke="#17150f" stroke-width="3"/>';
    scene += '<rect x="60" y="231" width="280" height="2" fill="#17150f"/>';
    scene += '<path d="M50 0 L130 120 L84 120 Z" fill="#eee7d7" opacity=".35"/>';
    scene += '<path d="M350 0 L286 128 L322 128 Z" fill="#eee7d7" opacity=".25"/>';
    scene += '<rect x="148" y="116" width="104" height="84" fill="#eee7d7" stroke="#17150f" stroke-width="2"/>';
    scene += '<circle cx="200" cy="150" r="22" fill="#a3281f"/>';
    scene += '<path d="M158 188 L186 140 L210 172 L232 148 L246 188 Z" fill="#17150f"/>';
    scene += '<rect x="130" y="200" width="140" height="7" fill="#17150f"/><rect x="142" y="207" width="116" height="26" fill="#b9b09d" stroke="#17150f"/>';
    scene += '<rect x="92" y="118" width="34" height="46" fill="none" stroke="#17150f" opacity=".55"/>';
    scene += '<rect x="276" y="118" width="34" height="46" fill="none" stroke="#17150f" opacity=".55"/>';
    scene += '<path d="M100 130 L118 150 M286 130 L300 148" stroke="#17150f" opacity=".4"/>';
    scene += '<path d="M200 62 V96" stroke="#17150f" stroke-dasharray="2 4" opacity=".5"/>';
  } else if (type === "sport") {
    scene += '<rect width="400" height="260" fill="#d8d0bf"/>';
    scene += '<rect x="30" y="30" width="104" height="54" fill="#17150f"/>';
    scene += '<rect x="40" y="41" width="58" height="5" fill="#eee6d6" opacity=".8"/>';
    scene += '<rect x="40" y="52" width="80" height="5" fill="#eee6d6" opacity=".45"/>';
    scene += '<rect x="40" y="63" width="46" height="5" fill="#a3281f"/>';
    scene += '<ellipse cx="202" cy="213" rx="190" ry="63" fill="none" stroke="#17150f" stroke-width="2"/>';
    scene += '<ellipse cx="202" cy="213" rx="152" ry="45" fill="none" stroke="#17150f" stroke-width="1.4" opacity=".6"/>';
    scene += '<path d="M18 199 Q202 142 386 199" fill="none" stroke="#a3281f" stroke-width="2" opacity=".8"/>';
    for (let i = 0; i < 34; i += 1) {
      const angle = Math.PI + (i / 33) * Math.PI;
      const x = 202 + Math.cos(angle) * (165 + random() * 15);
      const y = 213 + Math.sin(angle) * (47 + random() * 8);
      scene += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (1.5 + random() * 2) + '" fill="#17150f" opacity=".55"/>';
    }
    scene += '<circle cx="272" cy="104" r="33" fill="#eee7d7" stroke="#17150f" stroke-width="2"/>';
    scene += '<path d="M272 72 L290 96 L276 126 L252 120 L252 88 Z" fill="none" stroke="#17150f" stroke-width="1.4"/>';
    scene += '<path d="M252 88 L272 104 L290 96" fill="none" stroke="#17150f" stroke-width="1.4"/>';
    scene += '<path d="M220 96 Q238 82 252 92 M216 112 Q228 99 240 104" fill="none" stroke="#17150f" stroke-width="1.2" opacity=".45"/>';
    scene += '<path d="M92 110 Q150 78 202 92" fill="none" stroke="#17150f" stroke-width="1" opacity=".25" stroke-dasharray="3 5"/>';
  } else {
    scene += '<rect width="400" height="260" fill="#d8d0bf"/>';
    scene += '<rect x="56" y="62" width="288" height="172" fill="#e9e2d2" stroke="#17150f" stroke-width="2"/>';
    scene += '<rect x="48" y="52" width="304" height="17" fill="#17150f"/>';
    scene += '<rect x="64" y="78" width="272" height="26" fill="#17150f"/>';
    scene += '<rect x="94" y="84" width="118" height="4" fill="#eee6d6" opacity=".75"/>';
    scene += '<rect x="94" y="92" width="70" height="3" fill="#a3281f"/>';
    scene += '<rect x="64" y="104" width="272" height="22" fill="#a3281f"/>';
    for (let i = 0; i < 7; i += 1) {
      scene += '<rect x="' + (64 + i * 39) + '" y="104" width="19" height="22" fill="#eee6d6"/>';
    }
    scene += '<rect x="84" y="146" width="136" height="62" fill="#f1ecdf" stroke="#17150f" stroke-width="1.5"/>';
    scene += '<path d="M98 191 H206" stroke="#17150f" opacity=".4"/>';
    scene += '<ellipse cx="128" cy="181" rx="16" ry="9" fill="#c0b7a4" stroke="#17150f"/>';
    scene += '<ellipse cx="166" cy="183" rx="13" ry="7" fill="#c0b7a4" stroke="#17150f"/>';
    scene += '<ellipse cx="194" cy="180" rx="10" ry="6" fill="#a3281f"/>';
    scene += '<rect x="246" y="146" width="64" height="88" fill="#17150f"/>';
    scene += '<rect x="254" y="156" width="48" height="34" fill="#e9e2d2" opacity=".28"/>';
    scene += '<circle cx="302" cy="194" r="2.6" fill="#eee6d6"/>';
    scene += '<rect x="44" y="233" width="312" height="2" fill="#17150f"/>';
    scene += '<rect x="320" y="150" width="18" height="26" fill="#eee6d6" stroke="#17150f"/>';
    scene += '<path d="M324 162 H334 M324 168 H332" stroke="#a3281f"/>';
  }
  return (
    '<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' +
    '<defs><pattern id="' + id + '" width="4.6" height="4.6" patternUnits="userSpaceOnUse"><circle cx="1.1" cy="1.1" r=".85" fill="#17150f" opacity=".55"/></pattern></defs>' +
    scene +
    '<rect width="400" height="260" fill="url(#' + id + ')" opacity=".34"/>' +
    '<rect x="1" y="1" width="398" height="258" fill="none" stroke="#17150f" stroke-width="2"/>' +
    "</svg>"
  );
}

function storyButton(edition, story, className) {
  return '<button type="button" class="' + (className || "story-headline") + '" data-story-id="' + story.id + '" data-edition-id="' + edition.id + '">' + escapeHtml(story.headline) + "</button>";
}

function figureMarkup(story, suffix, small) {
  if (!story.art) return "";
  return (
    '<figure class="' + (small ? "small-figure" : "lead-figure") + '">' +
      '<div class="art-frame">' + makeArt(story.art.type, story.seed, suffix) + "</div>" +
      "<figcaption>" + escapeHtml(story.art.caption) + "</figcaption>" +
    "</figure>"
  );
}

function findEdition(id) {
  return EDITIONS.find(function find(item) { return item.id === Number(id); });
}

function findStory(editionId, storyId) {
  const edition = findEdition(editionId);
  if (!edition) return null;
  const story = edition.stories.find(function find(item) { return item.id === storyId; });
  return story ? { edition: edition, story: story } : null;
}

function isClipped(editionId, storyId) {
  return clippings.some(function each(item) {
    return item.editionId === Number(editionId) && item.storyId === storyId;
  });
}

function normalizeClippings(value) {
  if (!Array.isArray(value)) return [];
  const seen = {};
  return value.filter(function each(item) {
    if (!item || typeof item.storyId !== "string") return false;
    const found = findStory(item.editionId, item.storyId);
    if (!found) return false;
    const key = item.editionId + ":" + item.storyId;
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  }).map(function map(item) {
    return { editionId: Number(item.editionId), storyId: item.storyId };
  });
}

function loadState() {
  let stored = null;
  try {
    stored = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
  } catch (error) {
    stored = null;
  }
  if (stored && typeof stored === "object") {
    if (Number.isInteger(stored.edition) && stored.edition >= 0 && stored.edition < EDITIONS.length) {
      editionIndex = stored.edition;
    }
    clippings = normalizeClippings(stored.clippings);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ edition: editionIndex, clippings: clippings }));
  } catch (error) {
    announce("This browser could not save the edition state.");
  }
}

function announce(text) {
  liveRegion.textContent = "";
  setTimeout(function later() { liveRegion.textContent = text; }, 30);
}

function renderNav() {
  sectionNav.innerHTML = CATEGORIES.map(function each(item) {
    return '<button type="button" data-category="' + item.id + '" aria-pressed="' + String(category === item.id) + '">' + item.label + "</button>";
  }).join("");
}

function updateMasthead() {
  const edition = EDITIONS[editionIndex];
  volume.textContent = edition.volume;
  issueLine.textContent = edition.issue;
  weatherTop.textContent = edition.weatherTop;
  weatherInline.textContent = edition.weatherInline;
  fullDate.textContent = edition.date;
  footDate.textContent = edition.date;
  editionStamp.textContent = "Edition " + pad(edition.id);
  document.title = "The Daily Ledger — " + edition.shortDate;
  ticker.setAttribute("aria-label", "Breaking news: " + edition.ticker.join(". ") + ".");
  const half = edition.ticker.map(function each(item) {
    return '<span class="ticker-item">' + escapeHtml(item) + '</span><span class="ticker-diamond" aria-hidden="true">◆</span>';
  }).join("");
  tickerTrack.innerHTML = half + half;
}

function activeStories() {
  const edition = EDITIONS[editionIndex];
  const term = query.trim().toLowerCase();
  return edition.stories.filter(function each(story) {
    if (category !== "all" && story.category !== category) return false;
    if (!term) return true;
    return (story.headline + " " + story.dek + " " + story.kicker + " " + story.byline + " " + story.body.join(" ")).toLowerCase().includes(term);
  });
}

function renderFront() {
  const edition = EDITIONS[editionIndex];
  const list = activeStories();
  const clipCount = clippings.length;
  clippingCount.textContent = String(clipCount);
  let line = "Front page · " + edition.stories.length + " stories · Edition " + pad(edition.id);
  if (category !== "all" && query.trim()) {
    line = "Search “" + query.trim() + "” · " + categoryLabel(category) + " · " + list.length + (list.length === 1 ? " story" : " stories");
  } else if (query.trim()) {
    line = "Search “" + query.trim() + "” · " + list.length + (list.length === 1 ? " story" : " stories");
  } else if (category !== "all") {
    line = categoryLabel(category) + " section · " + list.length + " of " + edition.stories.length + " stories";
  }
  resultLine.textContent = line;

  if (!list.length) {
    front.innerHTML =
      '<div class="front-empty">' +
        '<p class="eyebrow">Nothing filed</p>' +
        "<h2>No stories match this edition.</h2>" +
        "<p>Try another section, a shorter search, or ask the desk to look in the morgue.</p>" +
        '<button type="button" data-reset-filters>Show the front page</button>' +
      "</div>";
    return;
  }

  const lead = list[0];
  const secondaries = list.slice(1, 4);
  const extras = list.slice(4);
  const taggedLead = isClipped(edition.id, lead.id) ? '<span class="clip-tag">Clipped</span>' : "";
  const leadParagraphs = lead.body.slice(0, 3).map(function each(paragraph) {
    return "<p>" + escapeHtml(paragraph) + "</p>";
  }).join("");
  const leadFigure = figureMarkup(lead, "lead", false);

  let html = '<div class="front-lead">';
  html += '<article class="lead-story">';
  html += '<p class="kicker">' + categoryLabel(lead.category) + ' <span class="kicker-sep">·</span> ' + escapeHtml(lead.kicker) + " " + taggedLead + "</p>";
  html += "<h2>" + storyButton(edition, lead) + "</h2>";
  html += '<p class="lead-dek">' + escapeHtml(lead.dek) + "</p>";
  html += '<p class="byline"><span>' + escapeHtml(lead.byline) + '</span><span class="byline-date">' + escapeHtml(edition.shortDate) + "</span></p>";
  html += '<div class="lead-media' + (leadFigure ? "" : " no-figure") + '">';
  html += '<div class="lead-text">' + leadParagraphs + "</div>";
  html += leadFigure;
  html += "</div>";
  html += '<button type="button" class="read-more" data-story-id="' + lead.id + '" data-edition-id="' + edition.id + '">Continue reading <span aria-hidden="true">→</span></button>';
  html += "</article>";

  html += '<aside class="front-rail" aria-label="Briefs and commentary">';
  html += '<section class="rail-block briefs-block"><h2 class="rail-title">The Brief</h2><ul class="brief-list">';
  html += edition.briefs.map(function each(brief) {
    return "<li><p class=\"brief-head\">" + escapeHtml(brief.headline) + '</p><p class="brief-text">' + escapeHtml(brief.text) + "</p></li>";
  }).join("");
  html += "</ul></section>";
  html += '<blockquote class="pullquote"><p>' + escapeHtml(edition.pullQuote.text) + "</p><cite>" + escapeHtml(edition.pullQuote.attribution) + "</cite></blockquote>";
  html += '<div class="weather-block"><p class="rail-label">Today’s weather</p><p class="weather-temp">' + escapeHtml(edition.temp) + '</p><p class="weather-copy">' + escapeHtml(edition.weatherNote) + "</p></div>";
  html += "</aside></div>";

  if (secondaries.length) {
    html += '<section class="secondary-grid" aria-label="More stories from this edition">';
    html += secondaries.map(function each(story, index) {
      const tag = isClipped(edition.id, story.id) ? ' <span class="clip-tag">Clipped</span>' : "";
      return (
        '<article class="secondary-story">' +
          '<p class="kicker">' + categoryLabel(story.category) + ' <span class="kicker-sep">·</span> ' + escapeHtml(story.kicker) + tag + "</p>" +
          figureMarkup(story, "sec" + index, true) +
          "<h3>" + storyButton(edition, story, "story-headline") + "</h3>" +
          '<p class="secondary-dek">' + escapeHtml(story.dek) + "</p>" +
          '<p class="byline"><span>' + escapeHtml(story.byline) + "</span><span>" + escapeHtml(edition.shortDate) + "</span></p>" +
          '<p class="secondary-excerpt">' + escapeHtml(story.body[0]) + "</p>" +
          '<button type="button" class="read-more" data-story-id="' + story.id + '" data-edition-id="' + edition.id + '">Read <span aria-hidden="true">→</span></button>' +
        "</article>"
      );
    }).join("");
    html += "</section>";
  }

  if (extras.length) {
    html += '<div class="also"><p class="also-label">Also in this edition</p>';
    html += extras.map(function each(story) {
      return storyButton(edition, story, "also-headline");
    }).join("");
    html += "</div>";
  }

  html += '<section class="classifieds" aria-labelledby="classifiedsTitle">';
  html += '<div class="classifieds-head"><h2 id="classifiedsTitle">Classifieds</h2><p>Notices · sales · rooms · services</p></div>';
  html += '<div class="classified-grid">';
  html += edition.classifieds.map(function each(ad) {
    return '<div class="classified"><h3>' + escapeHtml(ad.title) + "</h3><p>" + escapeHtml(ad.text) + "</p></div>";
  }).join("");
  html += "</div></section>";

  front.innerHTML = html;
}

function renderEdition() {
  const edition = EDITIONS[editionIndex];
  updateMasthead();
  renderNav();
  renderFront();
  clippingCount.textContent = String(clippings.length);
  saveState();
  announce("Edition " + pad(edition.id) + ", " + edition.date + ".");
}

function updateSaveButton() {
  if (!currentArticle) return;
  const saved = isClipped(currentArticle.edition.id, currentArticle.story.id);
  saveClipping.setAttribute("aria-pressed", String(saved));
  saveClipping.textContent = saved ? "Clipping saved ✓" : "Save clipping";
}

function openArticle(editionId, storyId) {
  const found = findStory(editionId, storyId);
  if (!found) return;
  currentArticle = found;
  const story = found.story;
  const edition = found.edition;
  readerKicker.textContent = categoryLabel(story.category) + " · " + story.kicker + " · " + edition.shortDate;
  readerHeadline.textContent = story.headline;
  readerDek.textContent = story.dek;
  readerByline.textContent = story.byline + " · " + edition.date;
  if (story.art) {
    readerFigure.hidden = false;
    readerFigure.innerHTML = '<div class="art-frame">' + makeArt(story.art.type, story.seed, "reader") + "</div><figcaption>" + escapeHtml(story.art.caption) + "</figcaption>";
  } else {
    readerFigure.hidden = true;
    readerFigure.innerHTML = "";
  }
  readerBody.innerHTML = story.body.map(function each(paragraph) {
    return "<p>" + escapeHtml(paragraph) + "</p>";
  }).join("");
  updateSaveButton();
  if (!articleDialog.open) articleDialog.showModal();
  closeReader.focus();
  announce("Article opened: " + story.headline + ".");
}

function toggleClipping() {
  if (!currentArticle) return;
  const editionId = currentArticle.edition.id;
  const storyId = currentArticle.story.id;
  const exists = isClipped(editionId, storyId);
  if (exists) {
    clippings = clippings.filter(function each(item) {
      return !(item.editionId === editionId && item.storyId === storyId);
    });
    announce("Clipping removed.");
  } else {
    clippings.push({ editionId: editionId, storyId: storyId });
    announce("Clipping saved.");
  }
  saveState();
  updateSaveButton();
  renderFront();
  clippingCount.textContent = String(clippings.length);
  if (clippingsDialog.open) renderClippings();
}

function renderClippings() {
  const items = clippings.map(function each(item) {
    return findStory(item.editionId, item.storyId);
  }).filter(Boolean);
  clippingCount.textContent = String(items.length);
  clippingsEmpty.hidden = items.length > 0;
  clippingsList.innerHTML = items.map(function each(found) {
    return (
      "<li>" +
        '<button type="button" class="clipping-open" data-story-id="' + found.story.id + '" data-edition-id="' + found.edition.id + '">' +
          '<span class="clipping-edition">' + escapeHtml(found.edition.shortDate) + " · " + categoryLabel(found.story.category) + "</span>" +
          '<span class="clip-head">' + escapeHtml(found.story.headline) + "</span>" +
        "</button>" +
        '<button type="button" class="clipping-remove" data-remove-clipping="' + found.edition.id + ":" + found.story.id + '" aria-label="Remove clipping: ' + escapeHtml(found.story.headline) + '">✕</button>' +
      "</li>"
    );
  }).join("");
}

function openClippings() {
  renderClippings();
  if (!clippingsDialog.open) clippingsDialog.showModal();
  closeClippings.focus();
}

function resetFilters() {
  category = "all";
  query = "";
  searchStories.value = "";
  clearSearch.hidden = true;
  renderNav();
  renderFront();
  announce("Filters cleared. Showing the front page.");
}

function goNextEdition() {
  if (articleDialog.open) articleDialog.close();
  if (clippingsDialog.open) clippingsDialog.close();
  editionIndex = (editionIndex + 1) % EDITIONS.length;
  category = "all";
  query = "";
  searchStories.value = "";
  clearSearch.hidden = true;
  paper.classList.remove("edition-turn");
  void paper.offsetWidth;
  paper.classList.add("edition-turn");
  setTimeout(function removeClass() { paper.classList.remove("edition-turn"); }, 500);
  renderEdition();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  announce("Next edition: " + EDITIONS[editionIndex].date + ".");
}

sectionNav.addEventListener("click", function onClick(event) {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  category = button.dataset.category;
  renderNav();
  renderFront();
  const list = activeStories();
  announce(categoryLabel(category) + ": " + list.length + (list.length === 1 ? " story." : " stories."));
});

searchStories.addEventListener("input", function onInput() {
  query = searchStories.value;
  clearSearch.hidden = !query.trim();
  renderFront();
});

clearSearch.addEventListener("click", function onClick() {
  query = "";
  searchStories.value = "";
  clearSearch.hidden = true;
  renderFront();
  searchStories.focus();
});

clippingsBtn.addEventListener("click", openClippings);
nextEdition.addEventListener("click", goNextEdition);
saveClipping.addEventListener("click", toggleClipping);
closeReader.addEventListener("click", function onClick() { articleDialog.close(); });
closeClippings.addEventListener("click", function onClick() { clippingsDialog.close(); });

articleDialog.addEventListener("click", function onClick(event) {
  if (event.target === articleDialog) articleDialog.close();
});

clippingsDialog.addEventListener("click", function onClick(event) {
  if (event.target === clippingsDialog) clippingsDialog.close();
});

clippingsList.addEventListener("click", function onClick(event) {
  const remove = event.target.closest("[data-remove-clipping]");
  if (!remove) return;
  const key = remove.dataset.removeClipping;
  clippings = clippings.filter(function each(item) {
    return item.editionId + ":" + item.storyId !== key;
  });
  saveState();
  renderClippings();
  if (currentArticle) updateSaveButton();
  renderFront();
  announce("Clipping removed.");
});

document.addEventListener("click", function onClick(event) {
  const storyButtonEl = event.target.closest("[data-story-id]");
  const resetButton = event.target.closest("[data-reset-filters]");
  if (resetButton) {
    resetFilters();
    return;
  }
  if (storyButtonEl) {
    if (clippingsDialog.open) clippingsDialog.close();
    openArticle(storyButtonEl.dataset.editionId, storyButtonEl.dataset.storyId);
  }
});

document.addEventListener("keydown", function onKeydown(event) {
  if (event.key === "Escape") {
    if (articleDialog.open) articleDialog.close();
    else if (clippingsDialog.open) clippingsDialog.close();
  }
});

loadState();
renderEdition();
