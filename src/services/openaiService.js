import axios from 'axios';

// Only use environment variable, no fallback
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const getAIResponse = async (question) => {
  try {
    // Check if API key is valid
    if (!API_KEY) {
      console.error('API key not found in environment variables');
      return 'API key not configured. Please add your API key to the environment variables.';
    }

    // Use the Claude API endpoint
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-3-sonnet-20240229',
        max_tokens: 500,
        messages: [
          { role: 'user', content: question }
        ],
        system: 'You are a fitness coach assistant. Provide helpful, accurate, and concise fitness advice.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          'anthropic-version': '2023-06-01'
        }
      }
    );
    
    return response.data.content[0].text;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    
    // More detailed error message
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      
      if (error.response.status === 401) {
        return 'Authentication error: Please check your API key.';
      } else if (error.response.status === 429) {
        return 'Rate limit exceeded: Too many requests to the API.';
      }
    } else if (error.request) {
      return 'Network error: Could not connect to the API.';
    }
    
    return 'Sorry, I could not process your request at this time.';
  }
}; 