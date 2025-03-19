# Vimeo Video Player with Playback Resume

This project integrates the Vimeo Player API to track and save video playback progress. It saves the current playback time to `localStorage` and resumes from the last watched position when the page is reloaded.

##  Features
- Embeds a Vimeo video using an `<iframe>`.
- Tracks video playback time using the Vimeo Player API.
- Saves playback progress to `localStorage` every 2 seconds.
- Resumes playback from the saved time on page reload.

##  Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

##  Dependencies
The project uses:
- [`@vimeo/player`](https://www.npmjs.com/package/@vimeo/player) – For Vimeo video control.
- [`lodash.throttle`](https://www.npmjs.com/package/lodash.throttle) – To limit how often playback time is saved.


##  Usage
1. Open `video.html` in a browser.
2. Play the video and pause at any point.
3. Reload the page—the video will resume from the last saved position.



