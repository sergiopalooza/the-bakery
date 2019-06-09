const { default: SlippiGame } = require('slp-parser-js');
const _ = require('lodash');
const game = new SlippiGame("test.slp");

// Get game settings – stage, characters, etc
// const settings = game.getSettings();
// console.log(settings);

// Get metadata - start time, platform played on, etc
// const metadata = game.getMetadata();
// console.log(metadata);

// Get computed stats - openings / kill, conversions, etc
const stats = game.getStats();
const combos = _.map(stats.combos, ({startFrame, endFrame})=>{
  return {
    startFrame,
    endFrame,
    path: "/Users/sergioflores/Dropbox/dev/the-bakery/test.slp"
  }
});

const dolphinInput = {
  mode: "queue",
  queue: combos
}

console.log(JSON.stringify(dolphinInput));


// Get frames – animation state, inputs, etc
// This is used to compute your own stats or get more frame-specific info (advanced)
// const frames = game.getFrames();
// console.log(frames[0].players); // Print frame when timer starts counting down

