import { chromium } from 'playwright';
import { AIResponse } from '../../types/ai';
import LLMService from '../ai/llm.service';

class ScraperService {
  async scrapeCollegeEvents(url: string): Promise<AIResponse> {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // Extract main content, avoiding nav/footer noise
      const content = await page.evaluate(() => {
        const selectorsToIgnore = ['nav', 'footer', 'header', 'script', 'style'];
        const body = document.body.cloneNode(true) as HTMLElement;
        
        selectorsToIgnore.forEach(selector => {
          body.querySelectorAll(selector).forEach(el => el.remove());
        });
        
        return body.innerText;
      });

      const llm = new LLMService({
        provider: (process.env.LLM_PROVIDER as any) || 'openai',
        apiKey: process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY,
        baseUrl: process.env.OLLAMA_BASE_URL,
      });

      return await llm.generateStructuredEvents(content);
    } finally {
      await browser.close();
    }
  }
}

export default new ScraperService();
