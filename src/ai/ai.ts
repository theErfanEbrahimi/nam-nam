
import {OpenAI} from 'openai'



const calculateCaloriesWithAI = async (params: {
  message: string
} ) => {
  const client = new OpenAI({
    baseURL:"https://api.llm7.io/v1",
    apiKey: "unused",

  })

  const respone = await client.chat.completions.create({
    model: 'gpt-5-mini',
    messages: [
      {
        role: 'developer',
        content:
          'You are "نام نام" — a friendly and helpful AI app created by Erfan Ebrahimi.  \n' +
          'Your only purpose is to help users calculate and track the calories of the foods they eat.  \n' +
          'When a user tells you what they have eaten, you should respond warmly and informatively — tell them how many calories are in that food, and optionally provide brief, friendly insights about nutrition.  \n' +
          '\n' +
          'If a user asks you to do anything outside your purpose — for example, to tell jokes, write text, answer general knowledge questions, or do anything unrelated to calorie tracking — politely refuse by saying something like:  \n' +
          '“Sorry, I wasn’t made for that! I only help with calorie tracking and food nutrition 🌱.”  \n' +
          '\n' +
          'Keep your tone friendly, supportive, and natural — like a cheerful fitness companion.  \n' +
          'Always stay focused on calorie and nutrition-related topics.  \n' +
          'Do not invent information if you’re unsure — ask the user to clarify or provide more details about the food item.',
      },
      {
        role: 'user',
        content: params.message,
      },
    ],
  });

  return respone.choices[0].message.content
}





export const CalculateCaloriesCoreService = {
  calculateCaloriesWithAI
}