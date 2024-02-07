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
  createMethod('clt', '/images/methods/diverse.png'),
  createMethod('tpr', '/images/methods/engaging_talk.png'),
  createMethod('storytelling', '/images/methods/storytelling.png'),
  createMethod('dailyJournal', '/images/methods/diverse_class.png'),
  createMethod('languagePartner', '/images/methods/group_mob.png'),
  createMethod('recipeTranslation', '/images/methods/recipe.png'),
  createMethod('languageMedia', '/images/methods/podcasts_and_videos.png'),
  createMethod('virtualQuiz', '/images/methods/virtual_quiz.png'),
  createMethod('pictureStorytelling', '/images/methods/picture_storytelling.png'),
  createMethod('mediaClub', '/images/methods/media_club.png'),
  createMethod('onlineGames', '/images/methods/online_games.png'),
  createMethod('socialMediaChallenge', '/images/methods/social_media_challenge.png'),
  createMethod('flashcards', '/images/methods/flashcards.png'),
  createMethod('penPals', '/images/methods/pen_pals.png'),
  // Assuming placeholders for any methods without specified images
  createMethod('funnyWords', '/images/methods/placeholder.png'),
  createMethod('exonyms', '/images/methods/exonyms.png'),
  createMethod('languageChallenges', '/images/methods/placeholder.png'),
  createMethod('accentRecognition', '/images/methods/placeholder.png'),
  createMethod('madeUpWords', '/images/methods/placeholder.png'),
  createMethod('museum', '/images/methods/placeholder.png'),
  createMethod('outdoor', '/images/methods/placeholder.png'),
];


export default methodsData;
