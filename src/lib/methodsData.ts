// src/lib/methodsData.ts


export interface MethodType {
  id: string;
  titleKey: string;
  descKey: string;
  imageSrc: string;
  // ... any other properties each method has
}
const methodsData = [
    {
      id: 'clt',
      titleKey: 'common.methods.clt.title',
      descKey: 'common.methods.clt.description',
      imageSrc: '/images/diverse.png' // Original image, replace as needed
    },
    {
      id: 'tpr',
      titleKey: 'common.methods.tpr.title',
      descKey: 'common.methods.tpr.description',
      imageSrc: '/images/engaging_talk.png' // Original image, replace as needed
    },
    {
      id: 'storytelling',
      titleKey: 'common.methods.storytelling.title',
      descKey: 'common.methods.storytelling.description',
      imageSrc: '/images/storytelling.png' // Original image, replace as needed
    },
    // New methods with provided images
    {
      id: 'recipeTranslation',
      titleKey: 'common.methods.recipeTranslation.title',
      descKey: 'common.methods.recipeTranslation.description',
      imageSrc: '/images/recipe.png' // Image for Recipe Translation
    },
    {
      id: 'languageMedia',
      titleKey: 'common.methods.languageMedia.title',
      descKey: 'common.methods.languageMedia.description',
      imageSrc: '/images/podcasts_and_videos.png' // Image for Language Podcasts and Videos
    },
    {
      id: 'mediaClub',
      titleKey: 'common.methods.mediaClub.title',
      descKey: 'common.methods.mediaClub.description',
      imageSrc: '/images/movie_club.png' // Image for Movie and Book Club
    },
    {
      id: 'socialMediaChallenge',
      titleKey: 'common.methods.socialMediaChallenge.title',
      descKey: 'common.methods.socialMediaChallenge.description',
      imageSrc: '/images/social_media_app.png' // Image for Social Media Challenge
    },
    {
      id: 'flashcards',
      titleKey: 'common.methods.flashcards.title',
      descKey: 'common.methods.flashcards.description',
      imageSrc: '/images/flashcards.png' // Image for Flashcards and Vocabulary Lists
    },
    {
      id: 'penPals',
      titleKey: 'common.methods.penPals.title',
      descKey: 'common.methods.penPals.description',
      imageSrc: '/images/penpals.png' // Image for Pen Pals
    }
    // ... Add any other methods as needed
  ];
  
  export default methodsData;
  