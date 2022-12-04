const body = document.querySelector("body");
const root = document.querySelector("#root");
const header = document.querySelector(".root__header");
const logo = document.querySelector(".root__header__logo");
const sidebar = document.querySelector(".root__sidebar");
const sidebarItem = document.querySelectorAll(".root__sidebar__item");
const sidebarSvg = document.querySelector(".root__sidebar svg");
const remove = document.querySelectorAll(".delete");
const sidebarHoverBox = document.querySelector(".sidebarHover");
const contentCards = document.querySelector(".root__content__wrap__cards");

let logoHover = null;

logo.addEventListener("mouseover", () => {
    logoHover = document.createElement("div");
    logoHover.classList.add("logo__hover");

    const text = document.createElement("span");
    text.textContent = "Home";

    logoHover.appendChild(text);
    header.appendChild(logoHover);
});
logo.addEventListener("mouseout", () => {
    logoHover.remove();
});

let sideBarHover = null;
sidebar.addEventListener("mouseover", () => {  
    sidebarHoverBox.classList.add("sidebarHoverShow");
});
sidebar.addEventListener("mouseout", () => {
    sidebarHoverBox.classList.remove("sidebarHoverShow");
});

sidebarHoverBox.addEventListener("click", () => {
    if (sidebar.classList.contains("showSidebar")){
        sidebar.classList.remove("showSidebar");
        for (let item of remove){
            item.style.opacity = "1";
        };
    } else {
        sidebar.classList.add("showSidebar");
        for (let item of remove){
            item.style.opacity = "0";
        };
    };
});

const onHover = (elem, text) => {

    let box = null;

    let rect = elem.getBoundingClientRect();
    let width = elem.offsetWidth;
    let height = elem.offsetHeight;
    let newWidth = width - (width * .50);


    elem.addEventListener("mouseover", () => {
        box = document.createElement("div");
        box.classList.add("hoverBox");
        box.style.top = `${rect.top + height}px`;
        box.style.left = `${rect.left + newWidth}px`;

        let nesto = document.createElement("span");
        nesto.textContent = text;

        box.appendChild(nesto);
        body.appendChild(box);
    });
    elem.addEventListener("mouseout", () => {
        box.remove();
    });
};

let cards = [
    {
        name: "Recommend API",
        tldr: "TLDRRecommend API allows us to quickly bootstrap new recommendation use cases behind an API which is easily accessible to engineers at Slack. These recommenders reuse a common set of infrastructure for every part of the recommendation engine. This has allowed us to deliver a number of different",
        hashtags: ["#machine-learning", "#backend", "#logging", "#ux", "#classification", "#slack"],
        date: "Sep 06, 2022  9m read time",
        image: "images/card1.png",
        upvotes: 267,
        commentsCount: 9,
        comments: [
            {
                commentName: "anthony valdes",
                commentImg: "images/comment1.png",
                commentDate: "Sep 6",
                commentText: "that thumbnail confused me for a second"
            },
            {
                commentName: "Sakib Ahmed",
                commentImg: "images/comment2.png",
                commentDate: "Sep 6",
                commentText: "great"
            },
            {
                commentName: "Vaibhav Khulbe",
                commentImg: "images/comment3.png",
                commentDate: "Sep 6",
                commentText: "So much to learn from these engineering blogs. Look at where ML is used in Slack!"
            },
            {
                commentName: "Théophile Diot",
                commentImg: "images/comment4.png",
                commentDate: "Sep 7",
                commentText: "Very useful!"
            },
        ],
        creator: {
            creatorImg: "images/creator1.png",
            creatorName: "Slack engineering",
            creatorHash: "@slack"
        },
        youMightLike: [
            {
                postPic: "images/post1.png",
                postName: "Announcing the TypeScript Cookbook",
                postUpvotes: 35
            },
            {
                postPic: "images/post2.png",
                postName: "Machine learning pipelines with manual confirmation",
                postUpvotes: 8
            },
            {
                postPic: "images/post3.png",
                postName: "Classification of Design Patterns",
                postUpvotes: 9
            }
        ],
        discussions:[
            {
                discName: "Lazy Loading in images with React JS ",
                discComments: 11
            },
            {
                discName: "Lazy Loading Fundamental Software Architectural Patterns images with React JS ",
                discComments: 11
            },
            {
                discName: "Lazy Book Recommendations for Software Engineers in images with React JS ",
                discComments: 9
            }
        ]
    },
    {
        name: "JavaScript Visualized: the JavaScript Engine",
        tldr: "TLDRJavaScript is based on the V8 engine used by Node.js and Chromium-based browsers. The engine tries to avoid parsing code that's not necessary right away. The optimized machine code can simply be re-used in order to speed things up. V8 is open source and has some great documentation on how it works under the hood.",
        hashtags: ["#javascript", "#v8"],
        date: "Aug 10, 2022  4m read time",
        image: "images/card2.png",
        upvotes: 786,
        commentsCount: 29,
        comments: [
            {
                commentName: "Graham Ritchie",
                commentImg: "images/comment5.png",
                commentDate: "Aug 10",
                commentText: "@tsahimatsliah and @dailyperfect - I think you will love the graphics in this! Always loved this article, thanks for adding it to Community Picks @bobbyiliev"
            },
            {
                commentName: "Ngoran Aristide",
                commentImg: "images/comment6.png",
                commentDate: "Aug 10",
                commentText: "I really loved the article. It motivated me to some extend. The writer is definitely amazing."
            },
            {
                commentName: "Chris1993",
                commentImg: "images/comment7.png",
                commentDate: "Aug 10",
                commentText: "This GIF is amazing and understandable, very lovely animations!"
            },
            {
                commentName: "bytefer",
                commentImg: "images/comment8.png",
                commentDate: "Aug 10",
                commentText: "The animations are so cool and so helpful for learning the essentials of JavaScript. Thank you for sharing!"
            },
        ],
        creator: {
            creatorImg: "images/creator2.png",
            creatorName: "Community Picks",
            creatorHash: "@community"
        },
        youMightLike: [
            {
                postPic: "images/post4.png",
                postName: "Mark Zuckerbergs Message to Meta Employees",
                postUpvotes: 64
            },
            {
                postPic: "images/creator2.png",
                postName: "JavaScript Visualized: Event Loop",
                postUpvotes: 509
            },
            {
                postPic: "images/post5.png",
                postName: "Electron 20.0.0",
                postUpvotes: 15
            }
        ],
        discussions:[
            {
                discName: "How to Lazy Load Images in React",
                discComments: 15
            },
            {
                discName: "Everything you need to learn TypeScript in just 4 minutes",
                discComments: 4
            },
            {
                discName: "I stopped using Visual Studio Code",
                discComments: 81
            }
        ]
    },
    {
        name: "How to Fetch API Data in React Like a Pro",
        tldr: "TLDRHow to Fetch API Data in React Like a Pro Building applications the user use love is not an easy task. The technique we are going to talk about is known as render as you fetch. This simple technique is also suggested by React itself while fetching data.",
        hashtags: ["#react", "#ux"],
        date: "Oct 04, 2022  3m read time",
        image: "images/card3.png",
        upvotes: 317,
        commentsCount: 19,
        comments: [
            {
                commentName: "João Pedro Martins",
                commentImg: "images/comment9.png",
                commentDate: "Oct 4",
                commentText: "Hi, does anyone know the name of the banner theme? It looks a lot like Andromeda, but I tested it here and its not."
            },
            {
                commentName: "tugrulyildirim.com",
                commentImg: "images/comment10.png",
                commentDate: "Oct 4",
                commentText: "I will try today, I hope it helps"
            },
            {
                commentName: "Chinwizu Ekwe",
                commentImg: "images/comment11.png",
                commentDate: "Oct 4",
                commentText: "Im trying this out. Thanks for sharing."
            },
            {
                commentName: "David Martínez",
                commentImg: "images/comment12.png",
                commentDate: "Oct 8",
                commentText: "Id prefer some sample code on how to implement it"
            },
        ],
        creator: {
            creatorImg: "images/creator3.png",
            creatorName: "Bits and Pieces",
            creatorHash: "@bit"
        },
        youMightLike: [
            {
                postPic: "images/post4.png",
                postName: "Mark Zuckerbergs Message to Meta Employees",
                postUpvotes: 64
            },
            {
                postPic: "images/post6.png",
                postName: "Four top Front End Monitoring Tools for your Website",
                postUpvotes: 51
            },
            {
                postPic: "images/post7.png",
                postName: "7 Tips for Python Beginners",
                postUpvotes: 30
            }
        ],
        discussions:[
            {
                discName: "How to write a good README",
                discComments: 6
            },
            {
                discName: "I made a discord bot using JavaScript in 4days",
                discComments: 7
            },
            {
                discName: "Here's how I increased a website performance by 21%",
                discComments: 5
            }
        ]
    },
    {
        name: "JavaScript Visualized: the JavaScript Engine",
        tldr: "TLDRJavaScript is based on the V8 engine used by Node.js and Chromium-based browsers. The engine tries to avoid parsing code that's not necessary right away. The optimized machine code can simply be re-used in order to speed things up. V8 is open source and has some great documentation on how it works under the hood.",
        hashtags: ["#javascript", "#v8"],
        date: "Aug 10, 2022  4m read time",
        image: "images/card2.png",
        upvotes: 786,
        commentsCount: 29,
        comments: [
            {
                commentName: "Graham Ritchie",
                commentImg: "images/comment5.png",
                commentDate: "Aug 10",
                commentText: "@tsahimatsliah and @dailyperfect - I think you will love the graphics in this! Always loved this article, thanks for adding it to Community Picks @bobbyiliev"
            },
            {
                commentName: "Ngoran Aristide",
                commentImg: "images/comment6.png",
                commentDate: "Aug 10",
                commentText: "I really loved the article. It motivated me to some extend. The writer is definitely amazing."
            },
            {
                commentName: "Chris1993",
                commentImg: "images/comment7.png",
                commentDate: "Aug 10",
                commentText: "This GIF is amazing and understandable, very lovely animations!"
            },
            {
                commentName: "bytefer",
                commentImg: "images/comment8.png",
                commentDate: "Aug 10",
                commentText: "The animations are so cool and so helpful for learning the essentials of JavaScript. Thank you for sharing!"
            },
        ],
        creator: {
            creatorImg: "images/creator2.png",
            creatorName: "Community Picks",
            creatorHash: "@community"
        },
        youMightLike: [
            {
                postPic: "images/post4.png",
                postName: "Mark Zuckerbergs Message to Meta Employees",
                postUpvotes: 64
            },
            {
                postPic: "images/creator2.png",
                postName: "JavaScript Visualized: Event Loop",
                postUpvotes: 509
            },
            {
                postPic: "images/post5.png",
                postName: "Electron 20.0.0",
                postUpvotes: 15
            }
        ],
        discussions:[
            {
                discName: "How to Lazy Load Images in React",
                discComments: 15
            },
            {
                discName: "Everything you need to learn TypeScript in just 4 minutes",
                discComments: 4
            },
            {
                discName: "I stopped using Visual Studio Code",
                discComments: 81
            }
        ]
    },
    {
        name: "JavaScript Visualized: the JavaScript Engine",
        tldr: "TLDRJavaScript is based on the V8 engine used by Node.js and Chromium-based browsers. The engine tries to avoid parsing code that's not necessary right away. The optimized machine code can simply be re-used in order to speed things up. V8 is open source and has some great documentation on how it works under the hood.",
        hashtags: ["#javascript", "#v8"],
        date: "Aug 10, 2022  4m read time",
        image: "images/card2.png",
        upvotes: 786,
        commentsCount: 29,
        comments: [
            {
                commentName: "Graham Ritchie",
                commentImg: "images/comment5.png",
                commentDate: "Aug 10",
                commentText: "@tsahimatsliah and @dailyperfect - I think you will love the graphics in this! Always loved this article, thanks for adding it to Community Picks @bobbyiliev"
            },
            {
                commentName: "Ngoran Aristide",
                commentImg: "images/comment6.png",
                commentDate: "Aug 10",
                commentText: "I really loved the article. It motivated me to some extend. The writer is definitely amazing."
            },
            {
                commentName: "Chris1993",
                commentImg: "images/comment7.png",
                commentDate: "Aug 10",
                commentText: "This GIF is amazing and understandable, very lovely animations!"
            },
            {
                commentName: "bytefer",
                commentImg: "images/comment8.png",
                commentDate: "Aug 10",
                commentText: "The animations are so cool and so helpful for learning the essentials of JavaScript. Thank you for sharing!"
            },
        ],
        creator: {
            creatorImg: "images/creator2.png",
            creatorName: "Community Picks",
            creatorHash: "@community"
        },
        youMightLike: [
            {
                postPic: "images/post4.png",
                postName: "Mark Zuckerbergs Message to Meta Employees",
                postUpvotes: 64
            },
            {
                postPic: "images/creator2.png",
                postName: "JavaScript Visualized: Event Loop",
                postUpvotes: 509
            },
            {
                postPic: "images/post5.png",
                postName: "Electron 20.0.0",
                postUpvotes: 15
            }
        ],
        discussions:[
            {
                discName: "How to Lazy Load Images in React",
                discComments: 15
            },
            {
                discName: "Everything you need to learn TypeScript in just 4 minutes",
                discComments: 4
            },
            {
                discName: "I stopped using Visual Studio Code",
                discComments: 81
            }
        ]
    },
    {
        name: "JavaScript Visualized: the JavaScript Engine",
        tldr: "TLDRJavaScript is based on the V8 engine used by Node.js and Chromium-based browsers. The engine tries to avoid parsing code that's not necessary right away. The optimized machine code can simply be re-used in order to speed things up. V8 is open source and has some great documentation on how it works under the hood.",
        hashtags: ["#javascript", "#v8"],
        date: "Aug 10, 2022  4m read time",
        image: "images/card2.png",
        upvotes: 786,
        commentsCount: 29,
        comments: [
            {
                commentName: "Graham Ritchie",
                commentImg: "images/comment5.png",
                commentDate: "Aug 10",
                commentText: "@tsahimatsliah and @dailyperfect - I think you will love the graphics in this! Always loved this article, thanks for adding it to Community Picks @bobbyiliev"
            },
            {
                commentName: "Ngoran Aristide",
                commentImg: "images/comment6.png",
                commentDate: "Aug 10",
                commentText: "I really loved the article. It motivated me to some extend. The writer is definitely amazing."
            },
            {
                commentName: "Chris1993",
                commentImg: "images/comment7.png",
                commentDate: "Aug 10",
                commentText: "This GIF is amazing and understandable, very lovely animations!"
            },
            {
                commentName: "bytefer",
                commentImg: "images/comment8.png",
                commentDate: "Aug 10",
                commentText: "The animations are so cool and so helpful for learning the essentials of JavaScript. Thank you for sharing!"
            },
        ],
        creator: {
            creatorImg: "images/creator2.png",
            creatorName: "Community Picks",
            creatorHash: "@community"
        },
        youMightLike: [
            {
                postPic: "images/post4.png",
                postName: "Mark Zuckerbergs Message to Meta Employees",
                postUpvotes: 64
            },
            {
                postPic: "images/creator2.png",
                postName: "JavaScript Visualized: Event Loop",
                postUpvotes: 509
            },
            {
                postPic: "images/post5.png",
                postName: "Electron 20.0.0",
                postUpvotes: 15
            }
        ],
        discussions:[
            {
                discName: "How to Lazy Load Images in React",
                discComments: 15
            },
            {
                discName: "Everything you need to learn TypeScript in just 4 minutes",
                discComments: 4
            },
            {
                discName: "I stopped using Visual Studio Code",
                discComments: 81
            }
        ]
    },
];

for (let item of cards){
    const cardBox = document.createElement("div");
    cardBox.classList.add("cardBox");
    cardBox.tabIndex = "0";

    const cardBoxHead = document.createElement("div");
    cardBoxHead.classList.add("cardBoxHead");

    const cardBoxHeadImg = document.createElement("img");
    cardBoxHeadImg.src = item.creator.creatorImg;
    cardBoxHeadImg.style.borderRadius = "50%";
    cardBoxHeadImg.style.width = "32px";
    cardBoxHeadImg.style.height = "32px";
    cardBoxHeadImg.style.marginLeft = "12px";

    const cardBoxName = document.createElement("div");
    cardBoxName.style.width = "100%";
    cardBoxName.style.height = "78px";
    cardBoxName.style.color = "#fff";
    cardBoxName.style.margin = "8px 0";
    cardBoxName.style.marginLeft = "12px";
    cardBoxName.style.marginRight = "12px";

    const cardBoxNameText = document.createElement("h3");
    cardBoxNameText.textContent = item.name;

    const cardBoxDate = document.createElement("span");
    cardBoxDate.textContent = item.date;
    cardBoxDate.style.color = "rgb(168, 179, 207)";
    cardBoxDate.style.fontSize = "13px";
    cardBoxDate.style.margin = "0 12px"

    const cardBoxImg = document.createElement("div");
    cardBoxImg.style.width = "100%";
    cardBoxImg.style.height = "160px";
    cardBoxImg.style.margin = "8px 0";

    const cardBoxImgSrc = document.createElement("img");
    cardBoxImgSrc.src = item.image;
    cardBoxImgSrc.style.width = "100%";
    cardBoxImgSrc.style.height = "100%";
    cardBoxImgSrc.style.borderRadius = "12px";

    const cardBoxFeedback = document.createElement("div");
    cardBoxFeedback.style.width = "100%";
    cardBoxFeedback.style.height = "32px";
    cardBoxFeedback.style.display = "flex";
    cardBoxFeedback.style.alignItems = "center";
    cardBoxFeedback.style.justifyContent = "space-between";
    cardBoxFeedback.style.color = "rgb(168, 179, 207)";

    const cardBoxFeedbackUpvote = document.createElement("div");
    cardBoxFeedbackUpvote.style.width = "78px";
    cardBoxFeedbackUpvote.style.height = "32px";
    cardBoxFeedbackUpvote.style.display = "flex";
    cardBoxFeedbackUpvote.style.alignItems = "center";
    cardBoxFeedbackUpvote.style.cursor = "pointer";

    const cardBoxFeedbackUpvoteIconBox = document.createElement("div");
    cardBoxFeedbackUpvoteIconBox.style.width = "32px";
    cardBoxFeedbackUpvoteIconBox.style.height = "32px";
    cardBoxFeedbackUpvoteIconBox.style.display = "flex";
    cardBoxFeedbackUpvoteIconBox.style.justifyContent = "center";
    cardBoxFeedbackUpvoteIconBox.style.alignItems = "center";
    cardBoxFeedbackUpvoteIconBox.style.borderRadius = "10px";
    cardBoxFeedbackUpvoteIconBox.classList.add("upvoteComment");

    const cardBoxFeedbackUpvoteIcon = document.createElement("img");
    cardBoxFeedbackUpvoteIcon.src = "images/upvote.png";

    const cardBoxFeedbackUpvoteCount = document.createElement("span");
    cardBoxFeedbackUpvoteCount.textContent = item.upvotes;
    cardBoxFeedbackUpvoteCount.classList.add("upvoteComment");
    cardBoxFeedbackUpvoteCount.style.marginLeft = "3px";

    const cardBoxFeedbackCommentBox = document.createElement("div");
    cardBoxFeedbackCommentBox.style.width = "78px";
    cardBoxFeedbackCommentBox.style.height = "32px";
    cardBoxFeedbackCommentBox.style.display = "flex";
    cardBoxFeedbackCommentBox.style.alignItems = "center";
    cardBoxFeedbackCommentBox.style.cursor = "pointer";

    const cardBoxFeedbackComment = document.createElement("div");
    cardBoxFeedbackComment.style.width = "32px";
    cardBoxFeedbackComment.style.height = "32px";
    cardBoxFeedbackComment.style.display = "flex";
    cardBoxFeedbackComment.style.justifyContent = "center";
    cardBoxFeedbackComment.style.alignItems = "center";
    cardBoxFeedbackComment.style.borderRadius = "10px";
    cardBoxFeedbackComment.classList.add("upvoteComment");

    const cardBoxFeedbackCommentImg = document.createElement("img");
    cardBoxFeedbackCommentImg.src = "images/comment.png";

    const cardBoxFeedbackCommentCount = document.createElement("span");
    cardBoxFeedbackCommentCount.textContent = item.commentsCount;
    cardBoxFeedbackCommentCount.classList.add("upvoteComment");
    cardBoxFeedbackCommentCount.style.marginLeft = "3px";

    const cardBoxFeedbackShare = document.createElement("div");
    cardBoxFeedbackShare.style.width = "32px";
    cardBoxFeedbackShare.style.height = "32px";
    cardBoxFeedbackShare.style.display = "flex";
    cardBoxFeedbackShare.style.justifyContent = "center";
    cardBoxFeedbackShare.style.alignItems = "center";
    cardBoxFeedbackShare.style.borderRadius = "10px";
    cardBoxFeedbackShare.classList.add("share");
    cardBoxFeedbackShare.style.cursor = "pointer";


    const cardBoxFeedbackShareIcon = document.createElement("img");
    cardBoxFeedbackShareIcon.src = "images/share.png";

    cardBoxFeedbackUpvote.addEventListener("mouseover", () => {
        cardBoxFeedbackUpvoteIconBox.style.backgroundColor = "#1ddc6f3d";
        cardBoxFeedbackUpvoteCount.style.color = "#39e58c";
    });
    cardBoxFeedbackUpvote.addEventListener("mouseout", () => {
        cardBoxFeedbackUpvoteIconBox.style.backgroundColor = "#1c1f26";
        cardBoxFeedbackUpvoteCount.style.color = "rgb(168, 179, 207)";
    });
    cardBoxFeedbackCommentBox.addEventListener("mouseover", () => {
        cardBoxFeedbackComment.style.backgroundColor = "#1ddc6f3d";
        cardBoxFeedbackCommentCount.style.color = "#39e58c";
    });
    cardBoxFeedbackCommentBox.addEventListener("mouseout", () => {
        cardBoxFeedbackComment.style.backgroundColor = "#1c1f26";
        cardBoxFeedbackCommentCount.style.color = "rgb(168, 179, 207)";
    });
    cardBoxFeedbackShare.addEventListener("mouseover", () => {
        cardBoxFeedbackShare.style.backgroundColor = "#c029f03d";
    });
    cardBoxFeedbackShare.addEventListener("mouseout", () => {
        cardBoxFeedbackShare.style.backgroundColor = "#1c1f26";
    });

    const cardBoxHover = document.createElement("div");
    cardBoxHover.style.width = "174px";
    cardBoxHover.style.height = "32px";
    cardBoxHover.style.display = "none";
    cardBoxHover.style.marginLeft = "auto";

    const cardBoxHoverBox = document.createElement("div");
    cardBoxHoverBox.style.width = "134px";
    cardBoxHoverBox.style.height = "32px";
    cardBoxHoverBox.style.borderRadius = "10px";
    cardBoxHoverBox.style.padding = "0 15px";
    cardBoxHoverBox.style.fontSize = "15px";
    cardBoxHoverBox.style.display = "flex";
    cardBoxHoverBox.style.alignItems = "center";
    cardBoxHoverBox.style.backgroundColor = "#fff";
    cardBoxHoverBox.style.cursor = "pointer";

    const cardBoxHoverBoxText = document.createElement("span");
    cardBoxHoverBoxText.textContent = "Read article";

    const cardBoxHoverBoxImg = document.createElement("img");
    cardBoxHoverBoxImg.src = "images/article.png";

    const cardBoxHoverDots = document.createElement("div");
    cardBoxHoverDots.style.width = "32px";
    cardBoxHoverDots.style.height = "32px";
    cardBoxHoverDots.style.display = "flex";
    cardBoxHoverDots.style.justifyContent = "center";
    cardBoxHoverDots.style.alignItems = "center";
    cardBoxHoverDots.style.marginLeft = "5px";
    cardBoxHoverDots.style.cursor = "pointer";
    cardBoxHoverDots.style.borderRadius = "10px";

    const cardBoxHoverDotsImg = document.createElement("img");
    cardBoxHoverDotsImg.src = "images/dots.png";

    cardBoxHoverBox.addEventListener("mouseover", () => {
        cardBoxHoverBox.style.backgroundColor = "#cfd6e6";
    });
    cardBoxHoverBox.addEventListener("mouseout", () => {
        cardBoxHoverBox.style.backgroundColor = "#fff";
    });
    cardBoxHoverDots.addEventListener("mouseover", () => {
        cardBoxHoverDots.style.backgroundColor = "#a8b3cf1f";
    });
    cardBoxHoverDots.addEventListener("mouseout", () => {
        cardBoxHoverDots.style.backgroundColor = "#1c1f26";
    });

    cardBox.addEventListener("mouseover", () => {
        cardBoxHover.style.display = "flex";
    });
    cardBox.addEventListener("mouseout", () => {
        cardBoxHover.style.display = "none";
    });

    cardBox.addEventListener("click", () => cardPopup(item));

    contentCards.appendChild(cardBox);
    cardBox.appendChild(cardBoxHead);
    cardBoxHead.appendChild(cardBoxHeadImg);
    cardBox.appendChild(cardBoxName);
    cardBoxName.appendChild(cardBoxNameText);
    cardBox.appendChild(cardBoxDate);
    cardBox.appendChild(cardBoxImg);
    cardBoxImg.appendChild(cardBoxImgSrc);
    cardBox.appendChild(cardBoxFeedback);
    cardBoxFeedback.appendChild(cardBoxFeedbackUpvote);
    cardBoxFeedbackUpvote.appendChild(cardBoxFeedbackUpvoteIconBox);
    cardBoxFeedbackUpvoteIconBox.appendChild(cardBoxFeedbackUpvoteIcon);
    cardBoxFeedbackUpvote.appendChild(cardBoxFeedbackUpvoteCount);
    cardBoxFeedback.appendChild(cardBoxFeedbackCommentBox);
    cardBoxFeedbackCommentBox.appendChild(cardBoxFeedbackComment);
    cardBoxFeedbackComment.appendChild(cardBoxFeedbackCommentImg);
    cardBoxFeedbackCommentBox.appendChild(cardBoxFeedbackCommentCount);
    cardBoxFeedback.appendChild(cardBoxFeedbackShare);
    cardBoxFeedbackShare.appendChild(cardBoxFeedbackShareIcon);
    cardBoxHead.appendChild(cardBoxHover);
    cardBoxHover.appendChild(cardBoxHoverBox);
    cardBoxHoverBox.appendChild(cardBoxHoverBoxText);
    cardBoxHoverBox.appendChild(cardBoxHoverBoxImg);
    cardBoxHover.appendChild(cardBoxHoverDots);
    cardBoxHoverDots.appendChild(cardBoxHoverDotsImg);
};

let cardPopup = (card) => {
    let cardPopupWrap = document.createElement("div");
    cardPopupWrap.classList.add("cardPopupWrap");

    let cardPopupBox = document.createElement("div");
    cardPopupBox.classList.add("cardPopup");

    let cardPopupOverlay = document.createElement("div");
    cardPopupOverlay.classList.add("cardPopupOverlay");

    let cardPopupBoxL = document.createElement("div");
    cardPopupBoxL.classList.add("cardPopupBoxL");

    let cardPopupBoxR = document.createElement("div");
    cardPopupBoxR.classList.add("cardPopupBoxR");

    let boxLSlider = document.createElement("div");
    boxLSlider.classList.add("boxRSlider");

    let boxLSliderBtnL = document.createElement("div");
    boxLSliderBtnL.classList.add("boxLSliderBtn");

    let boxLSliderBtnR = document.createElement("div");
    boxLSliderBtnR.classList.add("boxLSliderBtn");

    let boxLSliderBtnLImg = document.createElement("img");
    boxLSliderBtnLImg.src = "images/arrowleft.png";

    let boxLSliderBtnRImg = document.createElement("img");
    boxLSliderBtnRImg.src = "images/arrowright.png";

    let boxName = document.createElement("div");
    boxName.classList.add("boxName");
    
    let boxNameText = document.createElement("h1");
    boxNameText.textContent = card.name;

    let boxTldr = document.createElement("div");
    boxTldr.classList.add("boxTldr");

    let boxTldrSpan = document.createElement("span");
    boxTldrSpan.textContent = "TLDR";
    boxTldrSpan.classList.add("boxTldrSpan");

    let boxTldrText = document.createElement("p");
    boxTldrText.textContent = card.tldr;

    let boxHashtags = document.createElement("div");
    boxHashtags.classList.add("boxHashtags");

    let boxDate = document.createElement("div");
    boxDate.classList.add("boxDate");

    let boxDateText = document.createElement("span");
    boxDateText.textContent = card.date;

    let boxImg = document.createElement("div");
    boxImg.classList.add("boxImg");
    
    let boxImgSrc = document.createElement("img");
    boxImgSrc.src = card.image;

    let boxRating = document.createElement("div");
    boxRating.classList.add("boxRating");

    let boxRatingUpvote = document.createElement("a");
    boxRatingUpvote.textContent = `${card.upvotes} Upvotes`;
    
    let boxRatingComments = document.createElement("span");
    boxRatingComments.textContent = `${card.commentsCount} Comments`;

    let boxRate = document.createElement("div");
    boxRate.classList.add("boxRate");

    let boxRateUpvote = document.createElement("div");
    boxRateUpvote.classList.add("boxRateDiv");

    let boxRateUpvoteBox = document.createElement("div");
    boxRateUpvoteBox.classList.add("boxRateBox");

    let boxRateUpvoteBoxImg = document.createElement("img");
    boxRateUpvoteBoxImg.src = "images/upvote.png";

    let boxRateUpvoteText = document.createElement("span");
    boxRateUpvoteText.textContent = "Upvote";
    boxRateUpvoteText.classList.add("boxRateText");

    let boxRateComment = document.createElement("div");
    boxRateComment.classList.add("boxRateDiv");

    let boxRateCommentBox = document.createElement("div");
    boxRateCommentBox.classList.add("boxRateBox");

    let boxRateCommentBoxImg = document.createElement("img");
    boxRateCommentBoxImg.src = "images/comment.png";

    let boxRateCommentText = document.createElement("span");
    boxRateCommentText.textContent = "Comment";
    boxRateCommentText.classList.add("boxRateText");

    let boxRateShare = document.createElement("div");
    boxRateShare.classList.add("boxRateDiv");

    let boxRateShareBox = document.createElement("div");
    boxRateShareBox.classList.add("boxRateBox");

    let boxRateShareBoxImg = document.createElement("img");
    boxRateShareBoxImg.src = "images/share.png";

    let boxRateShareText = document.createElement("span");
    boxRateShareText.textContent = "Share";
    boxRateShareText.classList.add("boxRateText");

    boxRateUpvote.addEventListener("mouseover", () => {
        boxRateUpvoteBox.style.backgroundColor = "#1ddc6f3d";
        boxRateUpvoteText.style.color = "#39e58c";
    });
    boxRateUpvote.addEventListener("mouseout", () => {
        boxRateUpvoteBox.style.backgroundColor = "#1c1f26";
        boxRateUpvoteText.style.color = "rgb(168, 179, 207)";
    });
    boxRateComment.addEventListener("mouseover", () => {
        boxRateCommentBox.style.backgroundColor = "#1ddc6f3d";
        boxRateCommentText.style.color = "#39e58c";
    });
    boxRateComment.addEventListener("mouseout", () => {
        boxRateCommentBox.style.backgroundColor = "#1c1f26";
        boxRateCommentText.style.color = "rgb(168, 179, 207)";
    });
    boxRateShare.addEventListener("mouseover", () => {
        boxRateShareBox.style.backgroundColor = "#c029f03d";
        boxRateShareText.style.color = "#ce3df3";
    });
    boxRateShare.addEventListener("mouseout", () => {
        boxRateShareBox.style.backgroundColor = "#1c1f26";
        boxRateShareText.style.color = "rgb(168, 179, 207)";
    });

    let boxWriteComment = document.createElement("div");
    boxWriteComment.classList.add("boxWriteComment");

    let boxWriteCommentText = document.createElement("input");
    boxWriteCommentText.placeholder = "Start the discussion...";

    let boxRHead = document.createElement("div");
    boxRHead.classList.add("boxRHead");

    let boxRHeadArticle = document.createElement("div");
    boxRHeadArticle.classList.add("boxRHeadArticle");

    let boxRHeadArticleImg = document.createElement("img");
    boxRHeadArticleImg.src = "images/article.png";

    let boxRHeadArticleText = document.createElement("span");
    boxRHeadArticleText.textContent = "Read article";

    boxRHeadArticle.addEventListener("mouseover", () => {
        boxRHeadArticle.style.backgroundColor = "rgba(187, 187, 187, 0.979)";
    });
    boxRHeadArticle.addEventListener("mouseout", () => {
        boxRHeadArticle.style.backgroundColor = "#fff";
    });
    
    let boxRHeadDots = document.createElement("div");
    boxRHeadDots.classList.add("boxRHeadBox");
    boxRHeadDots.style.backgroundColor = "#1c1f26";
    boxRHeadDots.style.marginLeft = "auto";
    boxRHeadDots.style.marginRight = "5px";

    let boxRHeadDotsImg = document.createElement("img");
    boxRHeadDotsImg.src = "images/dots.png";

    boxRHeadDots.addEventListener("mouseover", () => {
        boxRHeadDots.style.backgroundColor = "#a8b3cf1f";
    });
    boxRHeadDots.addEventListener("mouseout", () => {
        boxRHeadDots.style.backgroundColor = "#1c1f26";
    });

    let boxRHeadExit = document.createElement("div");
    boxRHeadExit.classList.add("boxRHeadBox");

    let boxRHeadExitImg = document.createElement("img");
    boxRHeadExitImg.src = "images/exit.png";

    boxRHeadExit.addEventListener("mouseover", () => {
        boxRHeadExit.style.backgroundColor = "#a8b3cf1f";
    });
    boxRHeadExit.addEventListener("mouseout", () => {
        boxRHeadExit.style.backgroundColor = "#0e1217";
    });

    boxRHeadExit.addEventListener("click", () => {
        cardPopupOverlay.remove();
    });

    let boxRProfile = document.createElement("div");
    boxRProfile.classList.add("boxRProfile");

    let boxRProfileImg = document.createElement("div");
    boxRProfileImg.classList.add("boxRProfileImg");

    let boxRProfileImgSrc = document.createElement("img");
    boxRProfileImgSrc.src = card.creator.creatorImg;

    let boxRProfileInfo = document.createElement("div");
    boxRProfileInfo.classList.add("boxRProfileInfo");

    let boxRProfileInfoName = document.createElement("p");
    boxRProfileInfoName.textContent = card.creator.creatorName;

    let boxRProfileInfoHash = document.createElement("span");
    boxRProfileInfoHash.textContent = card.creator.creatorHash;

    let boxRSocial = document.createElement("div");
    boxRSocial.classList.add("boxRSocial");

    let boxRSocialText = document.createElement("p");
    boxRSocialText.textContent = "Would you recommend this article?";

    let boxRSocialSites = document.createElement("div");
    boxRSocialSites.classList.add("boxRSocialSites");

    let boxRSocialSitesCopy = document.createElement("div");
    boxRSocialSitesCopy.classList.add("boxRSocialSitesBox");

    let boxRSocialSitesCopyImg = document.createElement("img");
    boxRSocialSitesCopyImg.src = "images/2box.png";

    let boxRSocialSitesWhatsapp = document.createElement("div");
    boxRSocialSitesWhatsapp.classList.add("boxRSocialSitesBox");

    let boxRSocialSitesWhatsappImg = document.createElement("img");
    boxRSocialSitesWhatsappImg.src = "images/whatsapp.png";

    let boxRSocialSitesTwitter = document.createElement("div");
    boxRSocialSitesTwitter.classList.add("boxRSocialSitesBox");

    let boxRSocialSitesTwitterImg = document.createElement("img");
    boxRSocialSitesTwitterImg.src = "images/twitter.png";

    let boxRSocialSitesFacebook = document.createElement("div");
    boxRSocialSitesFacebook.classList.add("boxRSocialSitesBox");

    let boxRSocialSitesFacebookImg = document.createElement("img");
    boxRSocialSitesFacebookImg.src = "images/facebook.png";

    boxRSocialSitesCopy.addEventListener("mouseover", () => {
        boxRSocialSitesCopy.style.backgroundColor = "#1ddc6f3d";
    });
    boxRSocialSitesCopy.addEventListener("mouseout", () => {
        boxRSocialSitesCopy.style.backgroundColor = "#0e1217";
    });
    boxRSocialSitesWhatsapp.addEventListener("mouseover", () => {
        boxRSocialSitesWhatsapp.style.backgroundColor = "#a8b3cf1f";
    });
    boxRSocialSitesWhatsapp.addEventListener("mouseout", () => {
        boxRSocialSitesWhatsapp.style.backgroundColor = "#0e1217";
    });
    boxRSocialSitesTwitter.addEventListener("mouseover", () => {
        boxRSocialSitesTwitter.style.backgroundColor = "#a8b3cf1f";
    });
    boxRSocialSitesTwitter.addEventListener("mouseout", () => {
        boxRSocialSitesTwitter.style.backgroundColor = "#0e1217";
    });
    boxRSocialSitesFacebook.addEventListener("mouseover", () => {
        boxRSocialSitesFacebook.style.backgroundColor = "#a8b3cf1f";
    });
    boxRSocialSitesFacebook.addEventListener("mouseout", () => {
        boxRSocialSitesFacebook.style.backgroundColor = "#0e1217";
    });

    let boxRLike = document.createElement("div");
    boxRLike.classList.add("boxRLike");

    let boxRLikeHead = document.createElement("h4");
    boxRLikeHead.textContent = "You might like";

    let boxRLikeItems = document.createElement("div");
    boxRLikeItems.classList.add("boxRLikeItems");

    let boxRLikeView = document.createElement("div");
    boxRLikeView.classList.add("boxRLikeView");

    let boxRLikeViewText = document.createElement("span");
    boxRLikeViewText.textContent = "View all";

    let boxRLikeViewArrow = document.createElement("img");
    boxRLikeViewArrow.src = "images/arrowright.png";

    boxRLikeView.addEventListener("mouseover", () => {
        boxRLikeView.style.backgroundColor = "#a8b3cf1f";
        boxRLikeViewText.style.color = "#fff";
    });
    boxRLikeView.addEventListener("mouseout", () => {
        boxRLikeView.style.backgroundColor = "transparent";
        boxRLikeViewText.style.color = "rgb(168, 179, 207)";
    });

    let boxRDisc = document.createElement("div");
    boxRDisc.classList.add("boxRLike");

    let boxRDiscHead = document.createElement("h4");
    boxRDiscHead.textContent = "Best discussions";

    let boxRDiscItems = document.createElement("div");
    boxRDiscItems.classList.add("boxRLikeItems");

    let boxRDiscLucky = document.createElement("div");
    boxRDiscLucky.classList.add("boxRLikeView");

    let boxRDiscLuckyText = document.createElement("span");
    boxRDiscLuckyText.textContent = "I'm feeling lucky";

    let boxRDiscLuckyArrow = document.createElement("img");
    boxRDiscLuckyArrow.src = "images/arrowright.png";

    boxRDiscLucky.addEventListener("mouseover", () => {
        boxRDiscLucky.style.backgroundColor = "#a8b3cf1f";
        boxRDiscLuckyText.style.color = "#fff";
    });
    boxRDiscLucky.addEventListener("mouseout", () => {
        boxRDiscLucky.style.backgroundColor = "transparent";
        boxRDiscLuckyText.style.color = "rgb(168, 179, 207)";
    });

    let scrollBox = document.createElement("div");
    scrollBox.classList.add("scrollBox");

    let scrollBoxBtnL = document.createElement("div");
    scrollBoxBtnL.classList.add("boxLSliderBtn");

    let scrollBoxBtnR = document.createElement("div");
    scrollBoxBtnR.classList.add("boxLSliderBtn");

    let scrollBoxBtnLImg = document.createElement("img");
    scrollBoxBtnLImg.src = "images/arrowleft.png";

    let scrollBoxBtnRImg = document.createElement("img");
    scrollBoxBtnRImg.src = "images/arrowright.png";

    let scrollBoxInfo = document.createElement("div");
    scrollBoxInfo.classList.add("scrollBoxInfo");

    let scrollBoxInfoCreator = document.createElement("span");
    scrollBoxInfoCreator.textContent = `Published on ${card.creator.creatorName}`;

    let scrollBoxInfoName = document.createElement("h3");
    scrollBoxInfoName.textContent = card.name;

    let scrollBoxOptions = document.createElement("div");
    scrollBoxOptions.classList.add("scrollBoxOptions");

    let scrollBoxOptionsShare = document.createElement("div");
    scrollBoxOptionsShare.classList.add("boxRHeadBox");

    let scrollBoxOptionsShareImg = document.createElement("img");
    scrollBoxOptionsShareImg.src = "images/share.png";

    let scrollBoxOptionsDots = document.createElement("div");
    scrollBoxOptionsDots.classList.add("boxRHeadBox");

    let scrollBoxOptionsDotsImg = document.createElement("img");
    scrollBoxOptionsDotsImg.src = "images/dots.png";

    let scrollBoxOptionsExit = document.createElement("div");
    scrollBoxOptionsExit.classList.add("boxRHeadBox");

    let scrollBoxOptionsExitImg = document.createElement("img");
    scrollBoxOptionsExitImg.src = "images/exit.png";

    scrollBoxOptionsExit.addEventListener("click", () => {
        cardPopupOverlay.remove();
    });
    scrollBoxOptionsShare.addEventListener("mouseover", () => {
        scrollBoxOptionsShare.style.backgroundColor = "#a8b3cf1f";
    });
    scrollBoxOptionsShare.addEventListener("mouseout", () => {
        scrollBoxOptionsShare.style.backgroundColor = "transparent";
    });
    scrollBoxOptionsDots.addEventListener("mouseover", () => {
        scrollBoxOptionsDots.style.backgroundColor = "#a8b3cf1f";
    });
    scrollBoxOptionsDots.addEventListener("mouseout", () => {
        scrollBoxOptionsDots.style.backgroundColor = "transparent";
    });
    scrollBoxOptionsExit.addEventListener("mouseover", () => {
        scrollBoxOptionsExit.style.backgroundColor = "#a8b3cf1f";
    });
    scrollBoxOptionsExit.addEventListener("mouseout", () => {
        scrollBoxOptionsExit.style.backgroundColor = "transparent";
    });
    window.addEventListener("scroll", () => {
        let scrolled = window.scrollY;
        if (scrolled >= 56){
            scrollBox.style.display = "flex";
        };
        if (scrolled <= 56){
            scrollBox.style.display = "none";
        };
    });

    root.appendChild(cardPopupOverlay);
    cardPopupOverlay.appendChild(cardPopupBox);
    cardPopupBox.appendChild(cardPopupBoxL);
    cardPopupBox.appendChild(cardPopupBoxR);
    cardPopupBoxL.appendChild(boxLSlider);
    boxLSlider.appendChild(boxLSliderBtnL);
    boxLSlider.appendChild(boxLSliderBtnR);
    boxLSliderBtnL.appendChild(boxLSliderBtnLImg);
    boxLSliderBtnR.appendChild(boxLSliderBtnRImg);
    cardPopupBoxL.appendChild(boxName);
    boxName.appendChild(boxNameText);
    cardPopupBoxL.appendChild(boxTldr);
    boxTldrText.appendChild(boxTldrSpan);
    boxTldr.appendChild(boxTldrText);
    cardPopupBoxL.appendChild(boxHashtags);
    card.hashtags.forEach((elem, index) => {
        elem = document.createElement("a");
        elem.classList.add("boxHashtagsItem");
        elem.textContent = card.hashtags[index];
        boxHashtags.appendChild(elem); 
    });
    cardPopupBoxL.appendChild(boxDate);
    boxDate.appendChild(boxDateText);
    cardPopupBoxL.appendChild(boxImg);
    boxImg.appendChild(boxImgSrc);
    cardPopupBoxL.appendChild(boxRating);
    boxRating.appendChild(boxRatingUpvote);
    boxRating.appendChild(boxRatingComments);
    cardPopupBoxL.appendChild(boxRate);
    boxRate.appendChild(boxRateUpvote);
    boxRateUpvote.appendChild(boxRateUpvoteBox);
    boxRateUpvoteBox.appendChild(boxRateUpvoteBoxImg);
    boxRateUpvote.appendChild(boxRateUpvoteText);
    boxRate.appendChild(boxRateComment);
    boxRateComment.appendChild(boxRateCommentBox);
    boxRateCommentBox.appendChild(boxRateCommentBoxImg);
    boxRateComment.appendChild(boxRateCommentText);
    boxRate.appendChild(boxRateShare);
    boxRateShare.appendChild(boxRateShareBox);
    boxRateShareBox.appendChild(boxRateShareBoxImg);
    boxRateShare.appendChild(boxRateShareText);
    for (let item of card.comments){
        let boxComments = document.createElement("div");
        boxComments.classList.add("boxComments");

        let boxCommentsProfile = document.createElement("div");
        boxCommentsProfile.classList.add("boxCommentsProfile");

        let boxCommentsProfileImg = document.createElement("img");
        boxCommentsProfileImg.src = item.commentImg;

        let boxCommentsProfileInfo = document.createElement("div");
        boxCommentsProfileInfo.classList.add("boxCommentsProfileInfo");

        let boxCommentsProfileInfoName = document.createElement("p");
        boxCommentsProfileInfoName.textContent = item.commentName;

        let boxCommentsProfileInfoDate = document.createElement("span");
        boxCommentsProfileInfoDate.textContent = item.commentDate;

        let boxCommentsComment = document.createElement("div");
        boxCommentsComment.classList.add("boxCommentsComment");

        let boxCommentsCommentText = document.createElement("span");
        boxCommentsCommentText.textContent = item.commentText;

        let boxCommentsRate = document.createElement("div");
        boxCommentsRate.classList.add("boxCommentsRate");

        let boxCommentsRateUpvote = document.createElement("div");
        boxCommentsRateUpvote.classList.add("boxCommentsRateBox");

        let boxCommentsRateUpvoteImg = document.createElement("img");
        boxCommentsRateUpvoteImg.src = "images/upvote.png";

        let boxCommentsRateComment = document.createElement("div");
        boxCommentsRateComment.classList.add("boxCommentsRateBox");

        let boxCommentsRateCommentImg = document.createElement("img");
        boxCommentsRateCommentImg.src = "images/comment.png";

        let boxCommentsRateShare = document.createElement("div");
        boxCommentsRateShare.classList.add("boxCommentsRateBox");

        let boxCommentsRateShareImg = document.createElement("img");
        boxCommentsRateShareImg.src = "images/share.png";


        cardPopupBoxL.appendChild(boxComments);
        boxComments.appendChild(boxCommentsProfile);
        boxCommentsProfile.appendChild(boxCommentsProfileImg);
        boxCommentsProfile.appendChild(boxCommentsProfileInfo);
        boxCommentsProfileInfo.appendChild(boxCommentsProfileInfoName);
        boxCommentsProfileInfo.appendChild(boxCommentsProfileInfoDate);
        boxComments.appendChild(boxCommentsComment);
        boxCommentsComment.appendChild(boxCommentsCommentText);
        boxComments.appendChild(boxCommentsRate);
        boxCommentsRate.appendChild(boxCommentsRateUpvote);
        boxCommentsRateUpvote.appendChild(boxCommentsRateUpvoteImg);
        boxCommentsRate.appendChild(boxCommentsRateComment);
        boxCommentsRateComment.appendChild(boxCommentsRateCommentImg);
        boxCommentsRate.appendChild(boxCommentsRateShare);
        boxCommentsRateShare.appendChild(boxCommentsRateShareImg);

        boxCommentsRateUpvote.addEventListener("mouseover", () => {
            boxCommentsRateUpvote.style.backgroundColor = "#1ddc6f3d";
        });
        boxCommentsRateUpvote.addEventListener("mouseout", () => {
            boxCommentsRateUpvote.style.backgroundColor = "#1c1f26";
        });
        boxCommentsRateComment.addEventListener("mouseover", () => {
            boxCommentsRateComment.style.backgroundColor = "#1ddc6f3d";
        });
        boxCommentsRateComment.addEventListener("mouseout", () => {
            boxCommentsRateComment.style.backgroundColor = "#1c1f26";
        });
        boxCommentsRateShare.addEventListener("mouseover", () => {
            boxCommentsRateShare.style.backgroundColor = "#c029f03d";
        });
        boxCommentsRateShare.addEventListener("mouseout", () => {
            boxCommentsRateShare.style.backgroundColor = "#1c1f26";
        });
    };
    cardPopupBoxL.appendChild(boxWriteComment);
    boxWriteComment.appendChild(boxWriteCommentText);
    cardPopupBoxR.appendChild(boxRHead);
    boxRHead.appendChild(boxRHeadArticle);
    boxRHeadArticle.appendChild(boxRHeadArticleImg);
    boxRHeadArticle.appendChild(boxRHeadArticleText);
    boxRHead.appendChild(boxRHeadDots);
    boxRHeadDots.appendChild(boxRHeadDotsImg);
    boxRHead.appendChild(boxRHeadExit);
    boxRHeadExit.appendChild(boxRHeadExitImg);
    cardPopupBoxR.appendChild(boxRProfile);
    boxRProfile.appendChild(boxRProfileImg);
    boxRProfileImg.appendChild(boxRProfileImgSrc);
    boxRProfile.appendChild(boxRProfileInfo);
    boxRProfileInfo.appendChild(boxRProfileInfoName);
    boxRProfileInfo.appendChild(boxRProfileInfoHash);
    cardPopupBoxR.appendChild(boxRSocial);
    boxRSocial.appendChild(boxRSocialText);
    boxRSocial.appendChild(boxRSocialSites);
    boxRSocialSites.appendChild(boxRSocialSitesCopy);
    boxRSocialSitesCopy.appendChild(boxRSocialSitesCopyImg);
    boxRSocialSites.appendChild(boxRSocialSitesWhatsapp);
    boxRSocialSitesWhatsapp.appendChild(boxRSocialSitesWhatsappImg);
    boxRSocialSites.appendChild(boxRSocialSitesTwitter);
    boxRSocialSitesTwitter.appendChild(boxRSocialSitesTwitterImg);
    boxRSocialSites.appendChild(boxRSocialSitesFacebook);
    boxRSocialSitesFacebook.appendChild(boxRSocialSitesFacebookImg);
    cardPopupBoxR.appendChild(boxRLike);
    boxRLike.appendChild(boxRLikeHead);
    boxRLike.appendChild(boxRLikeItems);
    for (let item of card.youMightLike){
        let boxRLikeItemsArticle = document.createElement("div")
        boxRLikeItemsArticle.classList.add("boxRLikeItemsArticle");

        let boxRLikeItemsArticleBox = document.createElement("div");
        boxRLikeItemsArticleBox.classList.add("boxRLikeItemsArticleBox");

        let boxRLikeItemsArticleBoxImg = document.createElement("img");
        boxRLikeItemsArticleBoxImg.src = item.postPic;
        boxRLikeItemsArticleBoxImg.style.borderRadius = "50%";
        boxRLikeItemsArticleBoxImg.style.marginTop = "4px";

        let boxRLikeItemsArticleBoxInfo = document.createElement("div");
        boxRLikeItemsArticleBoxInfo.classList.add("boxRLikeItemsArticleBoxInfo");

        let boxRLikeItemsArticleBoxInfoName = document.createElement("h5");
        boxRLikeItemsArticleBoxInfoName.textContent = item.postName;

        let boxRLikeItemsArticleBoxInfoUpvotes = document.createElement("span");
        boxRLikeItemsArticleBoxInfoUpvotes.textContent = `${item.postUpvotes} Upvotes`;

        let boxRLikeItemsArticleBoxHover = document.createElement("div");
        boxRLikeItemsArticleBoxHover.classList.add("boxRLikeItemsArticleBoxHover");

        let boxRLikeItemsArticleBoxHoverImg = document.createElement("img");
        boxRLikeItemsArticleBoxHoverImg.src = "images/bookmark.png";

        boxRLikeItemsArticleBoxHover.addEventListener("mouseover", () => {
            boxRLikeItemsArticleBoxHover.style.backgroundColor = "#ff7a2b3d";
        });
        boxRLikeItemsArticleBoxHover.addEventListener("mouseout", () => {
            boxRLikeItemsArticleBoxHover.style.backgroundColor = "transparent";
        });
        boxRLikeItemsArticle.addEventListener("mouseover", () => {
            boxRLikeItemsArticle.style.backgroundColor = "#a8b3cf1f";
            boxRLikeItemsArticleBoxHover.style.opacity = "1";
        });
        boxRLikeItemsArticle.addEventListener("mouseout", () => {
            boxRLikeItemsArticle.style.backgroundColor = "transparent";
            boxRLikeItemsArticleBoxHover.style.opacity = "0";
        });

        
        boxRLikeItems.appendChild(boxRLikeItemsArticle);
        boxRLikeItemsArticle.appendChild(boxRLikeItemsArticleBox);
        boxRLikeItemsArticleBox.appendChild(boxRLikeItemsArticleBoxImg);
        boxRLikeItemsArticleBox.appendChild(boxRLikeItemsArticleBoxInfo);
        boxRLikeItemsArticleBoxInfo.appendChild(boxRLikeItemsArticleBoxInfoName);
        boxRLikeItemsArticleBoxInfo.appendChild(boxRLikeItemsArticleBoxInfoUpvotes);
        boxRLikeItemsArticleBox.appendChild(boxRLikeItemsArticleBoxHover);
        boxRLikeItemsArticleBoxHover.appendChild(boxRLikeItemsArticleBoxHoverImg);
    };
    boxRLike.appendChild(boxRLikeView);
    boxRLikeView.appendChild(boxRLikeViewText);
    boxRLikeView.appendChild(boxRLikeViewArrow);
    cardPopupBoxR.appendChild(boxRDisc);
    boxRDisc.appendChild(boxRDiscHead);
    boxRDisc.appendChild(boxRDiscItems);
    for (let item of card.discussions){
        let boxRDiscItemsBox = document.createElement("div");
        boxRDiscItemsBox.classList.add("boxRDiscItemsBox");

        let boxRDiscItemsBoxName = document.createElement("h5");
        boxRDiscItemsBoxName.textContent = item.discName;

        let boxRDiscItemsBoxComms = document.createElement("span");
        boxRDiscItemsBoxComms.textContent = `${item.discComments} Comments`;

        boxRDiscItemsBox.addEventListener("mouseover", () => {
            boxRDiscItemsBox.style.backgroundColor = "#a8b3cf1f";
        });
        boxRDiscItemsBox.addEventListener("mouseout", () => {
            boxRDiscItemsBox.style.backgroundColor = "transparent";
        });

        boxRDiscItems.appendChild(boxRDiscItemsBox);
        boxRDiscItemsBox.appendChild(boxRDiscItemsBoxName);
        boxRDiscItemsBox.appendChild(boxRDiscItemsBoxComms);
    };
    boxRDisc.appendChild(boxRDiscLucky);
    boxRDiscLucky.appendChild(boxRDiscLuckyText);
    boxRDiscLucky.appendChild(boxRDiscLuckyArrow);
    cardPopupBox.appendChild(scrollBox);
    scrollBox.appendChild(scrollBoxBtnL);
    scrollBoxBtnL.appendChild(scrollBoxBtnLImg);
    scrollBox.appendChild(scrollBoxBtnR);
    scrollBoxBtnR.appendChild(scrollBoxBtnRImg);
    scrollBox.appendChild(scrollBoxInfo);
    scrollBoxInfo.appendChild(scrollBoxInfoCreator);
    scrollBoxInfo.appendChild(scrollBoxInfoName);
    scrollBox.appendChild(scrollBoxOptions);
    scrollBoxOptions.appendChild(scrollBoxOptionsShare);
    scrollBoxOptionsShare.appendChild(scrollBoxOptionsShareImg);
    scrollBoxOptions.appendChild(scrollBoxOptionsDots);
    scrollBoxOptionsDots.appendChild(scrollBoxOptionsDotsImg);
    scrollBoxOptions.appendChild(scrollBoxOptionsExit);
    scrollBoxOptionsExit.appendChild(scrollBoxOptionsExitImg);
};

