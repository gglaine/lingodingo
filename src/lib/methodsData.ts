export interface MethodType {
  id: string;
  titleKey: string;
  descKey: string;
  howItWorks: string;
  whyYoullLoveIt: string;
  getStartedTips: string;
  joinTheCommunity: string;
  successWith: string;
  whatsNext: string;
  imageSrc: string;
}

// Define a base path for the i18n keys to avoid repetition
const basePath = 'common.methods';

// Function to generate a method object
function createMethod(id: string, imageSrc: string): MethodType {
  return {
    id,
    titleKey: `${basePath}.${id}.title`,
    descKey: `${basePath}.${id}.description`,
    howItWorks: `${basePath}.${id}.howItWorks`,
    whyYoullLoveIt: `${basePath}.${id}.whyYoullLoveIt`,
    getStartedTips: `${basePath}.${id}.getStartedTips`,
    joinTheCommunity: `${basePath}.${id}.joinTheCommunity`,
    successWith: `${basePath}.${id}.successWith`,
    whatsNext: `${basePath}.${id}.whatsNext`,
    imageSrc
  };
}

const methodsData: MethodType[] = [
  createMethod('clt', '/images/methods/diverse_class.png'),
  createMethod('tpr', '/images/methods/total-response.png'),
  createMethod('storytelling', '/images/methods/storytelling.png'),
  createMethod('dailyJournal', '/images/methods/diverse_class.png'),
  createMethod('languagePartner', '/images/methods/group_mob.png'),
  createMethod('recipeTranslation', '/images/methods/recipe.png'),
  createMethod('languageMedia', '/images/methods/podcasts_and_videos.png'),
  createMethod('virtualQuiz', '/images/methods/language_quizz.png'),
  createMethod('pictureStorytelling', '/images/methods/storytelling.png'),
  createMethod('mediaClub', '/images/methods/movie_club.png'),
  createMethod('onlineGames', '/images/methods/online_games.webp'),
  createMethod('socialMediaChallenge', '/images/methods/social_media_app.png'),
  createMethod('flashcards', '/images/methods/flashcards.png'),
  createMethod('penPals', '/images/methods/penpals.png'),
  createMethod('funnyWords', '/images/methods/funny_words.webp'),
  createMethod('exonyms', '/images/methods/exonyms.png'),
  createMethod('languageChallenges', '/images/methods/rotated_tongue_twister.webp'),
  createMethod('accentRecognition', '/images/methods/accent_recognition.webp'),
  createMethod('madeUpWords', '/images/methods/language_plays.png'),
  createMethod('museum', '/images/methods/museum_class.png'),
  createMethod('outdoor', '/images/methods/outdoor_class.png'),
  createMethod('languagePartners', '/images/methods/language_partners.webp'),
];


export default methodsData;
