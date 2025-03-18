import axios from 'axios';

const API_KEY = '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'; // Replace with your actual API key

export const getAIResponse = async (question) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a fitness coach assistant. Provide helpful, accurate, and concise fitness advice.' },
          { role: 'user', content: question }
        ],
        max_tokens: 500,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    );
    
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'Sorry, I could not process your request at this time.';
  }
}; 