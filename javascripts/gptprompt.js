const form = document.querySelector('form');
const promptInput = document.querySelector('#prompt');
const responseDiv = document.querySelector('#response');

const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const prompt = promptInput.value;
  const maxTokens = 50; // Set the max number of tokens to generate
  const temperature = 0.5; // Set the sampling temperature
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Replace with the appropriate API endpoint for your chosen model
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };
  
  const data = {
    prompt: prompt,
    max_tokens: maxTokens,
    temperature: temperature
  };
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  }).then(response => response.json());
  
  const answer = response.choices[0].text;
  responseDiv.innerHTML = answer;
});