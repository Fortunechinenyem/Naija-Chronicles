import { HistoricalEvent } from "@/types/historical";

export const historicalEvents: HistoricalEvent[] = [
  {
    id: "independence-1960",
    year: 1960,
    month: 10,
    day: 1,
    title: "Nigeria Gains Independence",
    description:
      "Nigeria became an independent nation from British colonial rule.",
    detailedStory:
      "On October 1, 1960, Nigeria gained independence from Britain. Prime Minister Abubakar Tafawa Balewa declared Nigeria as a sovereign nation. The green-white-green flag was hoisted for the first time.",
    images: ["/images/independence-1960.jpg"],
    category: "politics",
    significance: "high",
    region: ["national"],
    peopleInvolved: [
      "Abubakar Tafawa Balewa",
      "Nnamdi Azikiwe",
      "Obafemi Awolowo",
    ],
  },
  {
    id: "republic-1963",
    year: 1963,
    month: 10,
    day: 1,
    title: "Nigeria Becomes a Republic",
    description:
      "Nigeria transitioned to a republic with Nnamdi Azikiwe as first president.",
    detailedStory:
      "Nigeria became a republic within the Commonwealth, with Nnamdi Azikiwe as the first indigenous head of state.",
    images: ["/images/republic-1963.jpg"],
    category: "politics",
    significance: "high",
    region: ["national"],
    peopleInvolved: ["Nnamdi Azikiwe"],
  },
  {
    id: "civil-war-1967",
    year: 1967,
    title: "Nigerian Civil War Begins",
    description: "The Biafran War started, lasting until 1970.",
    detailedStory:
      "The Nigerian Civil War, also known as the Biafran War, was fought between the government and the secessionist state of Biafra.",
    images: ["/images/civil-war-1967.jpg"],
    category: "politics",
    significance: "high",
    region: ["east"],
    peopleInvolved: ["Yakubu Gowon", "Chukwuemeka Ojukwu"],
  },
  {
    id: "festa-1977",
    year: 1977,
    title: "FESTAC 77",
    description:
      "Second World Black and African Festival of Arts and Culture held in Lagos.",
    detailedStory:
      "FESTAC 77 was a major international festival celebrating African culture and arts, attracting participants from across Africa and the diaspora.",
    images: ["/images/festac-77.jpg"],
    category: "culture",
    significance: "high",
    region: ["lagos"],
    peopleInvolved: ["Olusegun Obasanjo"],
  },
  {
    id: "afcon-1980",
    year: 1980,
    title: "Nigeria Hosts and Wins AFCON",
    description:
      "Super Eagles won their first Africa Cup of Nations on home soil.",
    detailedStory:
      "Nigeria hosted and won the African Cup of Nations for the first time, defeating Algeria 3-0 in the final.",
    images: ["/images/afcon-1980.jpg"],
    category: "sports",
    significance: "high",
    region: ["national"],
    peopleInvolved: ["Christian Chukwu", "Segun Odegbami"],
  },
  {
    id: "olympic-gold-1996",
    year: 1996,
    title: "Olympic Football Gold",
    description: "Nigeria won gold in football at Atlanta Olympics.",
    detailedStory:
      "The Nigerian football team, known as the Dream Team, won Olympic gold, defeating Argentina in a thrilling final.",
    images: ["/images/olympic-1996.jpg"],
    category: "sports",
    significance: "high",
    region: ["national"],
    peopleInvolved: ["Nwankwo Kanu", "Jay-Jay Okocha"],
  },
  {
    id: "return-to-democracy-1999",
    year: 1999,
    title: "Return to Civilian Rule",
    description:
      "Nigeria returned to democratic governance after years of military rule.",
    detailedStory:
      "Olusegun Obasanjo was elected as president, marking the end of military rule and beginning of the Fourth Republic.",
    images: ["/images/democracy-1999.jpg"],
    category: "politics",
    significance: "high",
    region: ["national"],
    peopleInvolved: ["Olusegun Obasanjo"],
  },
  {
    id: "nollywood-boom-2000s",
    year: 2000,
    title: "Nollywood Expansion",
    description: "Nigerian film industry gained international recognition.",
    detailedStory:
      "Nollywood became the second-largest film industry in the world by volume, telling authentic African stories.",
    images: ["/images/nollywood.jpg"],
    category: "culture",
    significance: "medium",
    region: ["national"],
    peopleInvolved: ["Geneviève Nnaji", "Pete Edochie"],
  },
  {
    id: "africa-giant-2014",
    year: 2014,
    title: "Largest Economy in Africa",
    description: "Nigeria became Africa's largest economy after GDP rebasing.",
    detailedStory:
      "After recalculating its GDP, Nigeria emerged as the largest economy in Africa, surpassing South Africa.",
    images: ["/images/economy-2014.jpg"],
    category: "innovation",
    significance: "high",
    region: ["national"],
    peopleInvolved: ["Ngozi Okonjo-Iweala"],
  },
];
