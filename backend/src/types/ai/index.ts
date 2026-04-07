export type LLMProvider = 'openai' | 'gemini' | 'ollama';

export interface AIEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
}

export interface AIResponse {
  events: AIEvent[];
  report: string;
}
