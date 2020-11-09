import shortid from "shortid";
import shuffle from "../../utils/shuffle";

export function getCategoryNum(category: string): number {
  if (category === "gk") {
    return 9;
  }
  if (category === "sci&nat") {
    return 17;
  }
  if (category === "comp") {
    return 18;
  }
  if (category === "math") {
    return 19;
  }
  if (category === "politics") {
    return 24;
  }
  if (category === "sports") {
    return 21;
  }
  if (category === "geo") {
    return 22;
  }
  if (category === "hist") {
    return 23;
  }
  if (category === "animals") {
    return 27;
  }
  if (category === "vehicles") {
    return 28;
  }
  if (category === "comics") {
    return 29;
  }
  if (category === "cartoon&anim") {
    return 31;
  }
  if (category === "ani&manga") {
    return 31;
  }
  return 9; // returning gk as category
}

// interface QAndAResponse {
//   category: string;
//   type: string; // eg. multiple
//   difficulty: string;
//   question: string;
//   correct_answer: string;
//   incorrect_answers: string[];
// }

// interface Response {
//   response_code: number;
//   results: QAndAResponse[];
// }

// interface Answer {
//   answer: string;
// }

type answerArrType = string[] | { id: string; answer: string }[];

export interface QAndA {
  quizQuestion: string;
  // answersArr: Answer[];
  answersArr: answerArrType;
  correctAnswer: string;
}

export async function getQAndA(
  category: string,
  difficulty: string
): Promise<QAndA> {
  const categoryNum = getCategoryNum(category);
  const url = `https://opentdb.com/api.php?amount=1&category=${categoryNum}&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(url);
  const data = await response.json();

  let quizQuestion: string = data.results[0].question.replace(/&quot;/g, '\\"');

  let answersArr: answerArrType = data["results"][0]["incorrect_answers"];
  answersArr.push(data["results"][0]["correct_answer"]);
  answersArr = shuffle(answersArr); // Shuffling the answerArr

  // Generating id: {id, answer}
  for (let i = 0; i < answersArr.length; i++) {
    answersArr[i] = {
      id: shortid.generate(),
      answer: answersArr[i] as string,
    };
  }

  let correctAnswer = data["results"][0]["correct_answer"];

  return {
    quizQuestion: quizQuestion,
    answersArr: answersArr,
    correctAnswer: correctAnswer,
  };
}
