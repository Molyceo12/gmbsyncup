export const images = [
    "https://res.cloudinary.com/dlezmeikx/image/upload/v1769237667/FLYING_SQUIRREL_sdxrxe.png",
    "https://res.cloudinary.com/dlezmeikx/image/upload/v1769237517/bowling_nighr_a37dux.png",
    "https://res.cloudinary.com/dlezmeikx/image/upload/v1769237310/C6F76D97-B684-4453-9281-633BA96F635F_dfyk6a.png",
];

export const gridImages = Array(24).fill(null).map((_, i) => images[i % images.length]);

export const faqData = [
    {
        question: "What is GMBSYNCUP?",
        answer: "GMBSYNCUP is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
        question: "How much does GMBSYNCUP cost?",
        answer: "Watch GMBSYNCUP on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$2.99 to US$9.99/month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your GMBSYNCUP account to watch instantly on the web at gmbsyncup.com from your personal computer or on any internet-connected device that offers the GMBSYNCUP app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take GMBSYNCUP with you anywhere."
    },
    {
        question: "How do I cancel?",
        answer: "GMBSYNCUP is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on GMBSYNCUP?",
        answer: "GMBSYNCUP has an extensive library of feature films, documentaries, TV shows, anime, award-winning GMBSYNCUP originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is GMBSYNCUP good for kids?",
        answer: "The GMBSYNCUP Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
];
