declare global {
	namespace App {
	  interface PageData {
		name: string;
		id: string;
	  }
  
	  interface Params {
		methodId: string;
	  }

	  export interface Level {
		id: number;
		phonetic_feature: string;
		correct_pairs: string[][];
		distractors: string[];
	  }
  
	  interface LevelsModule {
		levels: Level[];
	  }
  
	  interface RouteParams {
		id: string;
	  }
  
	  interface Method {
		id: string;
		titleKey: string;
		descKey: string;
		imageSrc: string;
	  }
	  
	  interface Product {
		id: string;
		name: string;
		title: string;
		description: string;
		price: number;
		discountPercentage: number;
		rating: number;
		stock: number;
		brand: string;
		category: string;
		thumbnail: string;
		images: string[];
	  }
	}
	// Declare the YT namespace if it does not exist
	namespace YT {
		class Player {
			constructor(containerId: string, options: PlayerOptions);
			// Other methods...
			loadVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
			// Add other missing methods as necessary
		  }
		// Possible states for a YouTube player
		enum PlayerState {
		  UNSTARTED = -1,
		  ENDED = 0,
		  PLAYING = 1,
		  PAUSED = 2,
		  BUFFERING = 3,
		  CUED = 5,
		}
	
		// Event types for the YouTube player
		interface PlayerEvent {
		  target: Player;
		  data: any;
		}
	
		// Player options for initializing a new YouTube player
		interface PlayerOptions {
		  height?: string;
		  width?: string;
		  videoId?: string;
		  playerVars?: PlayerVars;
		  events?: PlayerEvents;
		}
	
		// Variable configurations for the YouTube player
		interface PlayerVars {
		  autoplay?: 0 | 1;
		  cc_load_policy?: 1;
		  controls?: 0 | 1;
		  loop?: 0 | 1;
		  playsinline?: 0 | 1;
		  // Add more player variables as needed
		}
	
		// Event handlers for the YouTube player
		interface PlayerEvents {
		  onReady?: (event: PlayerEvent) => void;
		  onStateChange?: (event: PlayerEvent) => void;
		  // Add more event handlers as needed
		}
	
		// The YouTube player object
		class Player {
		  constructor(containerId: string, options: PlayerOptions);
	
		  // Player control methods
		  playVideo(): void;
		  pauseVideo(): void;
		  stopVideo(): void;
		  // Add more player methods as needed
	
		  // Example: Getting player state
		  getPlayerState(): PlayerState;
		}
	  }
  }
  
  export {};
  
