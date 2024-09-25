const natural = require('natural');
const TfIdf = natural.TfIdf; // Creating an instance of the TF-IDF algorithm for natural language processing tf = measueres the freq of words in document and idf = measueres the rarity of words across document furthermore the score is calculated as tf-idf= tf*idf

// array of video objects with id and description
const videos = [
  { id: 1, description: 'Action' },
  { id: 2, description: 'drama ' },
  { id: 3, description: 'romance and comedy' },
  { id: 4, description: 'Action' },
  { id: 5, description: 'thriller' },
];

// Function to get recommendations based on a video description
function getRecommendations(videoDescription, videos) {
    console.log('Getting recommendations');
  // this is to create an instance of the TfIdf algorithm to calculate the similarity between the video description and all other video descriptions
  const algorithm = new TfIdf();  
  // to add all video descriptions to the TfIdf instance, which will be used to calculate the similarity scores
  videos.forEach(video => algorithm.addDocument(video.description));

  
  // Calculate similarity scores
  const scores = [];
  algorithm.tfidfs(videoDescription, (i, measure) => {    scores.push({ id: videos[i].id, score: measure });  });

  // sort the scores in descending order
  scores.sort((a, b) => b.score - a.score);  
        return scores;
}

// test run
const videoDescription = 'Action';
const recommendations = getRecommendations(videoDescription, videos);

console.log('Recommendations:', recommendations);
