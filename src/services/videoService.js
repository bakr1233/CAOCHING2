import axios from 'axios';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

export class ExerciseAnalyzer {
  constructor() {
    this.detector = null;
    this.isAnalyzing = false;
  }

  async initialize() {
    const model = poseDetection.SupportedModels.BlazePose;
    const detectorConfig = {
      runtime: 'tfjs',
      modelType: 'full'
    };
    this.detector = await poseDetection.createDetector(model, detectorConfig);
  }

  async analyzePose(video) {
    const poses = await this.detector.estimatePoses(video);
    return poses[0]; // Return the first detected pose
  }

  async getFeedback(exerciseData) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a professional fitness trainer analyzing exercise form.'
            },
            {
              role: 'user',
              content: `Analyze this exercise form data: ${JSON.stringify(exerciseData)}`
            }
          ]
        },
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error getting feedback:', error);
      return 'Unable to analyze exercise form at this time.';
    }
  }
} 