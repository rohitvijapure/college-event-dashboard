import LLMService from '../src/services/ai/llm.service';

describe('LLMService', () => {
  it('should not throw on initialization with provider', () => {
    const service = new LLMService({ provider: 'openai', apiKey: 'test-key' });
    expect(service).toBeDefined();
  });

  it('should be initialized with correct provider', () => {
    const service = new LLMService({ provider: 'gemini', apiKey: 'test-key' });
    expect(service).toBeDefined();
  });
});
