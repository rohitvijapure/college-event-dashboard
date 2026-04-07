import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import { LLMProvider, AIResponse } from '../../types/ai';

export interface LLMOptions {
  provider: LLMProvider;
  apiKey?: string;
  baseUrl?: string;
}

class LLMService {
  private provider: LLMProvider;
  private client: any;

  constructor(options: LLMOptions) {
    this.provider = options.provider;
    if (this.provider === 'openai') {
      this.client = new OpenAI({ apiKey: options.apiKey });
    } else if (this.provider === 'gemini') {
      this.client = new GoogleGenerativeAI(options.apiKey || '');
    } else if (this.provider === 'ollama') {
      this.client = axios.create({ baseURL: options.baseUrl || 'http://localhost:11434' });
    }
  }

  async generateStructuredEvents(text: string): Promise<AIResponse> {
    const prompt = `Extract all upcoming academic, social, and deadline events from the following text. 
    Return ONLY a JSON object with the following structure:
    {
      "events": [
        { "title": "Event Name", "date": "YYYY-MM-DD", "time": "HH:mm", "location": "Location String", "summary": "One sentence summary" }
      ],
      "report": "A comprehensive summary of the overall event landscape"
    }
    
    Text: ${text}`;

    if (this.provider === 'openai') {
      const response = await this.client.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      });
      return JSON.parse(response.choices[0].message.content || '{}');
    }

    if (this.provider === 'gemini') {
      const model = this.client.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(prompt);
      const textResponse = result.response.text();
      // Simple cleanup for markdown JSON blocks
      const jsonText = textResponse.replace(/```json|```/g, '').trim();
      return JSON.parse(jsonText);
    }

    if (this.provider === 'ollama') {
      const response = await this.client.post('/api/generate', {
        model: 'llama3',
        prompt: prompt,
        format: 'json',
        stream: false,
      });
      return JSON.parse(response.data.prompt || response.data.response);
    }

    throw new Error('Unsupported LLM Provider');
  }
}

export default LLMService;
