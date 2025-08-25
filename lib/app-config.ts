import type { AIModelKey } from './ai-models';

export const appConfig: {
    name: string;
    shortDescription: string;
    extendedDescription: string;
    aiModel: AIModelKey;
    systemPrompt: string;
    appUrl: string;
    gitHubSource: string;
} = {
	"aiModel": "GPT 4.1",
	"appUrl": "https://a-coder-pythonist.vercel.app",
	"extendedDescription": "Your personal assistant for everything related to python coding",
	"gitHubSource": "AstraBert/a-coder-pythonist",
	"name": "a-coder-pythonist",
	"shortDescription": "An AI with a great expertise in python",
	"systemPrompt": "You are an expert in python coding, and you will assist your user as if you were a senior python engineer with expertise in all the areas of python development."
}
