
const projectId = 'unique-well-404204';

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Instantiates a client
const translate = new Translate({projectId});

async function quickStart() {
  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

quickStart();