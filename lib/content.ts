// Single source of truth for all editorial content on the site.
// Replace or expand `body` fields with full text whenever it becomes available;
// where `body` is empty, detail pages show the excerpt plus a "Read original" link.

export type Entry = {
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  originalUrl: string;
};

const ORIGIN = "https://www.kanikaguptashori.com";

export const awards: Entry[] = [
  {
    slug: "kanika-gupta-shori-wins-the-women-icon-of-the-year-award-2023",
    title: "Kanika Gupta Shori Wins the ‘Women Icon of the Year’ Award, 2023",
    excerpt:
      "Square Yards is proud to simplify the home-buying experience for its customers and to be a meaningful contributor to the proptech industry.",
    originalUrl: `${ORIGIN}/awards/kanika-gupta-shori-wins-the-women-icon-of-the-year-award-2023`,
  },
  {
    slug: "young-industry-leaders-feted-at-realty-40-under-40-conclave-awards-grand-finale",
    title: "Young Industry Leaders Feted at Realty+ 40 Under 40 Conclave & Awards",
    excerpt:
      "Kanika Gupta Shori was recognised alongside a cohort of young industry leaders at the Realty+ 40 Under 40 grand finale.",
    originalUrl: `${ORIGIN}/awards/young-industry-leaders-feted-at-realty-40-under-40-conclave-awards-grand-finale`,
  },
  {
    slug: "kanika-gupta-shori-makes-it-to-list-times-40-under-40-recognizes-true-leaders-in-various-segments",
    title: "Kanika Gupta Shori Makes It to the Times 40 Under 40 List",
    excerpt:
      "Square Yards’ Co-Founder and COO featured on the prestigious Times 40 Under 40 list of true leaders and path-breakers across segments.",
    originalUrl: `${ORIGIN}/awards/kanika-gupta-shori-makes-it-to-list-times-40-under-40-recognizes-true-leaders-in-various-segments`,
  },
  {
    slug: "changer-makers-innovators-celebrated-at-4th-edition-of-bw-disrupt-under-40",
    title: "Change Makers & Innovators Celebrated at the 4th Edition of BW Disrupt Under 40",
    excerpt:
      "The list of winners included Kanika Gupta Shori, a trail-blazer in mainstream Indian real estate.",
    originalUrl: `${ORIGIN}/awards/changer-makers-innovators-celebrated-at-4th-edition-of-bw-disrupt-under-40`,
  },
  {
    slug: "ms-kanika-gupta-shori-presented-with-businessworld-40-under-40-award",
    title: "Ms. Kanika Gupta Shori Presented with the Businessworld 40 Under 40 Award",
    excerpt:
      "Kanika Gupta Shori joined the coveted BW Businessworld 40 Under 40 club, 2019, as one of the industry’s most influential women leaders.",
    originalUrl: `${ORIGIN}/awards/ms-kanika-gupta-shori-presented-with-businessworld-40-under-40-award`,
  },
  {
    slug: "square-yards-recognized-as-red-herring-top-100-asia-award-winner-2019",
    title: "Square Yards Recognized as a Red Herring Top 100 Asia Award Winner 2019",
    excerpt:
      "Square Yards was named a winner of the 2019 Red Herring Top 100 Asia Award.",
    originalUrl: `${ORIGIN}/awards/square-yards-recognized-as-red-herring-top-100-asia-award-winner-2019`,
  },
  {
    slug: "kanika-gupta-shori-awarded-with-entrepreneur-of-the-year-2019-by-great-indian-women-leadership",
    title: "Entrepreneur of the Year 2019, Great Indian Women Leadership",
    excerpt:
      "Kanika was honoured with the “Woman Entrepreneur of the Year” award at the Great Indian Women Leader (GIWL) Awards 2019.",
    originalUrl: `${ORIGIN}/awards/kanika-gupta-shori-awarded-with-entrepreneur-of-the-year-2019-by-great-indian-women-leadership`,
  },
  {
    slug: "square-yards-bagged-golden-brick-awards-2019",
    title: "Square Yards Bagged the Golden Brick Awards 2019",
    excerpt:
      "Square Yards won “Best Real Estate Digital Agency of the Year (National)” at the 4th Golden Brick Awards.",
    originalUrl: `${ORIGIN}/awards/square-yards-bagged-golden-brick-awards-2019`,
  },
  {
    slug: "square-yards-has-won-real-estate-website-of-the-year-2019",
    title: "Square Yards Won Real-Estate Website of the Year 2019",
    excerpt:
      "Square Yards won the “Real-Estate Website of the Year” award for squareyards.com at the 11th Realty+ Conclave & Excellence Awards.",
    originalUrl: `${ORIGIN}/awards/square-yards-has-won-real-estate-website-of-the-year-2019`,
  },
];

export const news: Entry[] = [
  {
    slug: "kanika-gupta-shori-on-women-leadership-and-technology-transforming-indian-real-estate",
    title: "Kanika Gupta Shori on Women Leadership and Technology Transforming Indian Real Estate",
    excerpt:
      "Technology has been instrumental in transforming a fragmented real estate sector, addressing inefficiencies and enhancing transparency, with Square Yards leading the shift.",
    originalUrl: `${ORIGIN}/news/kanika-gupta-shori-on-women-leadership-and-technology-transforming-indian-real-estate`,
  },
  {
    slug: "the-rise-of-real-estate-investments-among-bollywood-elites-in-2024",
    title: "The Rise of Real Estate Investments Among Bollywood Elites in 2024",
    excerpt:
      "Bollywood’s evolving real estate choices reflect its financial acumen, blending luxury, strategy and global ambition into trends that redefine celebrity investment.",
    originalUrl: `${ORIGIN}/news/the-rise-of-real-estate-investments-among-bollywood-elites-in-2024`,
  },
  {
    slug: "the-ultimate-strength-of-bulk-buying-in-real-estate",
    title: "The Ultimate Strength of Bulk Buying in Real Estate",
    excerpt:
      "With careful planning and shared objectives, group buying can offer an affordable, convenient route to property ownership while fostering community living.",
    originalUrl: `${ORIGIN}/news/the-ultimate-strength-of-bulk-buying-in-real-estate`,
  },
  {
    slug: "celebrity-property-purchases-are-transforming-indian-real-estate",
    title: "Celebrity Property Purchases Are Transforming Indian Real Estate",
    excerpt:
      "Kanika Shori believes real estate has re-emerged as a key investment choice, with high-profile purchases reshaping market sentiment.",
    originalUrl: `${ORIGIN}/news/celebrity-property-purchases-are-transforming-indian-real-estate`,
  },
  {
    slug: "bachchans-acing-the-race-in-bollywoods-real-estate-love-affair-in-mumbai",
    title: "Bachchans Acing the Race in Bollywood’s Real Estate Love Affair in Mumbai",
    excerpt:
      "While the Bachchans lead the charge, other celebrities follow close behind in Mumbai’s evolving luxury property landscape.",
    originalUrl: `${ORIGIN}/news/bachchans-acing-the-race-in-bollywoods-real-estate-love-affair-in-mumbai`,
  },
  {
    slug: "why-real-estate-developers-are-not-taking-to-affordable-housing",
    title: "Why Real Estate Developers Are Not Taking to Affordable Housing",
    excerpt:
      "Experts suggest the government should revise qualifying standards in the sector to make more buyers eligible for affordable housing.",
    originalUrl: `${ORIGIN}/news/why-real-estate-developers-are-not-taking-to-affordable-housing`,
  },
  {
    slug: "kanika-gupta-shori-talks-about-difficulties-faced-by-women-driven-startups",
    title: "Kanika Gupta Shori Talks About Difficulties Faced by Women-Driven Startups",
    excerpt:
      "The Co-Founder & COO of Square Yards reflects on how the entrepreneurial environment is steadily turning more positive for women.",
    originalUrl: `${ORIGIN}/news/kanika-gupta-shori-talks-about-difficulties-faced-by-women-driven-startups`,
  },
  {
    slug: "women-are-steadily-reshaping-indian-real-estate-narratives",
    title: "Women Are Steadily Reshaping Indian Real Estate Narratives",
    excerpt:
      "Industry experts highlight how a growing share of women investors are reshaping the way India buys and holds property.",
    originalUrl: `${ORIGIN}/news/women-are-steadily-reshaping-indian-real-estate-narratives`,
  },
  {
    slug: "indian-real-estate-market-to-become-more-robust-in-times-of-constant-price-rises",
    title: "Indian Real Estate Market to Become More Robust in Times of Constant Price Rises",
    excerpt:
      "A rising number of young professionals returning to offices is expected to lift property demand across major cities.",
    originalUrl: `${ORIGIN}/news/indian-real-estate-market-to-become-more-robust-in-times-of-constant-price-rises`,
  },
];

export const articles: Entry[] = [
  {
    slug: "green-home-demand-goes-up-throughout-india",
    title: "Green Home Demand Goes Up Throughout India",
    excerpt:
      "From solar rooftops and water management to EV charging and wind turbines, green features are reshaping what Indian buyers want from a home.",
    originalUrl: `${ORIGIN}/article/green-home-demand-goes-up-throughout-india`,
  },
  {
    slug: "time-is-limited-how-do-you-want-to-spend-it-doing-your-karma-or-complaining",
    title: "Time Is Limited: How Do You Want to Spend It? Doing Your “Karma” or Complaining",
    excerpt:
      "With roughly 35 years of active working life, the choice of how we spend each of those days becomes a question worth sitting with.",
    originalUrl: `${ORIGIN}/article/time-is-limited-how-do-you-want-to-spend-it-doing-your-karma-or-complaining`,
  },
  {
    slug: "global-citizenship-is-it-even-a-real-thing",
    title: "Global Citizenship: Is It Even a Real Thing?",
    excerpt:
      "A global citizen is well-read, well-travelled, respects cultural diversity and human rights, and feels responsible towards humanity.",
    originalUrl: `${ORIGIN}/article/global-citizenship-is-it-even-a-real-thing`,
  },
  {
    slug: "my-journey-to-the-top-of-the-world",
    title: "My Journey to the Top of the World",
    excerpt:
      "The best things often happen without planning, like a thrill-packed adventure through Finland for a self-confessed sucker for adventure.",
    originalUrl: `${ORIGIN}/article/my-journey-to-the-top-of-the-world`,
  },
  {
    slug: "why-women-are-paid-less",
    title: "Why Are Women Paid Less?",
    excerpt:
      "Marking Women’s Entrepreneurship Day, a reflection on how women are advancing as entrepreneurs and business owners, and the gaps that remain.",
    originalUrl: `${ORIGIN}/article/why-women-are-paid-less`,
  },
  {
    slug: "while-we-try-to-teach-our-children-all-about-life-our-children-teach-us-what-life-is-all-about",
    title: "While We Try to Teach Our Children About Life, They Teach Us What Life Is All About",
    excerpt:
      "Children are the best teachers: a small moment over homework becomes a lesson in what really matters.",
    originalUrl: `${ORIGIN}/article/while-we-try-to-teach-our-children-all-about-life-our-children-teach-us-what-life-is-all-about`,
  },
  {
    slug: "change-is-the-only-constant-thing-in-the-world-so-why-fear-changing-houses",
    title: "Change Is the Only Constant, So Why Fear Changing Houses?",
    excerpt:
      "Most people resist the word “change,” yet a willingness to move can open doors we never expected.",
    originalUrl: `${ORIGIN}/article/change-is-the-only-constant-thing-in-the-world-so-why-fear-changing-houses`,
  },
  {
    slug: "career-or-family-you-do-not-have-to-choose-you-have-to-sacrifice-2-5-years-of-your-life-at-most",
    title: "Career or Family? You Don’t Have to Choose",
    excerpt:
      "On the eternal dilemma women face, and why it need not be a binary choice between career and family.",
    originalUrl: `${ORIGIN}/article/career-or-family-you-do-not-have-to-choose-you-have-to-sacrifice-2-5-years-of-your-life-at-most`,
  },
];

export const press = [
  {
    name: "Forbes India",
    note: "Featured as the CEO & COO of Square Yards for entrepreneurship in Indian real estate.",
  },
  {
    name: "Inc42",
    note: "On how Square Yards is scaling by integrating technology with real estate and mortgages.",
  },
  {
    name: "Livemint",
    note: "On building Square Yards in a largely male-led industry.",
  },
  {
    name: "JoshTalks",
    note: "On what it takes to become a successful entrepreneur.",
  },
];

export const stats = [
  { value: 1, prefix: "$", suffix: "B+", label: "Annual gross transactions" },
  { value: 10, suffix: "", label: "Countries" },
  { value: 40, suffix: "", label: "Cities" },
  { value: 2700, suffix: "+", label: "Team members" },
];

export function getEntry(
  collection: "news" | "awards" | "article",
  slug: string
): Entry | undefined {
  const map = { news, awards, article: articles };
  return map[collection].find((e) => e.slug === slug);
}
