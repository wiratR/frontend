// App.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, CheckBox, Button } from 'react-native';

const App: React.FC = () => {
  const [questionSet, setQuestionSet] = useState<{
    question: string;
    answers: { label: string; selected: boolean }[];
    correctAnswer: string;
  }[]>([]);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    // Randomize questions on component mount
    randomizeQuestions();
  }, []);

  const randomizeQuestions = () => {
    // Array of questions with their answers
    const questions = [
      {
        question: "เมืองหลวงของประเทศไทย?",  //1
        answers: [
          { label: "กรุงเทพมหานคร", selected: false },
          { label: "ลอนดอน", selected: false },
          { label: "ย่างกุ้ง", selected: false },
          { label: "พนมเปญ", selected: false },
        ],
        correctAnswer: "กรุงเทพมหานคร",
      },
      {
        question: "ดอยอินทนนท์ อยู่จังหวัดอะไร?", //2
        answers: [
          { label: "เชียงใหม่", selected: false },
          { label: "เชียงราย", selected: false },
          { label: "พะเยา", selected: false },
          { label: "น่าน", selected: false },
        ],
        correctAnswer: "เชียงใหม่",
      },
      {
        question: "อวัยวะใดมีขนาด ใหญ่ที่สุด?", //3
        answers: [
          { label: "ตับ", selected: false },
          { label: "สมอง", selected: false },
          { label: "ปอด", selected: false },
          { label: "ผิวหนัง", selected: false },
        ],
        correctAnswer: "ผิวหนัง",
      },
      {
        question: "แม่น้ำใดที่ยาว ที่สุดในประเทศไทย?", //4
        answers: [
          { label: "เจ้าพระยา", selected: false },
          { label: "ชี", selected: false },
          { label: "ปิง", selected: false },
          { label: "น่าน", selected: false },
        ],
        correctAnswer: "ชี",
      },
      {
        question: "เกาะใดเป็นเกาะที่ใหญ่ที่สุด ในประเทศไทย?", //5
        answers: [
          { label: "เกาะสมุย", selected: false },
          { label: "เกาะช้าง", selected: false },
          { label: "ภูเก็ต", selected: false },
          { label: "เกาะพีพี", selected: false },
        ],
        correctAnswer: "ภูเก็ต",
      },
      {
        question: "อุทยานเเห่งชาติใด เป็นบ้านของ น้ำตกสูงสุดของประเทศไทย?", //6
        answers: [
          { label: "อุทยานเเห่งชาติเชาสก", selected: false },
          { label: "อุทยานเเห่งชาติเอราวัน", selected: false },
          { label: "อุทยานเเห่งชาติเขาใหญ่", selected: false },
          { label: "อุทยานเเห่งชาติดอยอินทนนท์", selected: false },
        ],
        correctAnswer: "อุทยานเเห่งชาติดอยอินทนนท์",
      },
      {
        question: "ทะเลใดที่ประเทษไทย ไม่มีฝั่ง?", //7
        answers: [
          { label: "ทะเลอันดามัน", selected: false },
          { label: "ทะเลจีนใต้", selected: false },
          { label: "อ่าวไทย", selected: false },
          { label: "ทะเลเซลาบัน", selected: false },
        ],
        correctAnswer: "ทะเลเซลาบัน",
      },
      {
        question: "หนึ่งโหล มีกี่ชึ้น?", //8
        answers: [
          { label: "6", selected: false },
          { label: "9", selected: false },
          { label: "10", selected: false },
          { label: "12", selected: false },
        ],
        correctAnswer: "12",
      },
      {
        question: "หนึ่งบาท เท่ากับกี่สตางค์?", //9
        answers: [
          { label: "10", selected: false },
          { label: "100", selected: false },
          { label: "10,000", selected: false },
          { label: "1,000", selected: false },
        ],
        correctAnswer: "100",
      },
      {
        question: "1วา เท่ากับกี่เมตร?", //10
        answers: [
          { label: "1", selected: false },
          { label: "2", selected: false },
          { label: "3", selected: false },
          { label: "4", selected: false },
        ],
        correctAnswer: "2",
      },
      {
        question: "หนึ่งลิตร เท่ากับกี่มิลลิลิตร?", //11
        answers: [
          { label: "10", selected: false },
          { label: "100", selected: false },
          { label: "1,000", selected: false },
          { label: "10,000", selected: false },
        ],
        correctAnswer: "1,000",
      },
      {
        question: "สัตว์ ประจำชาตื ของประเทศไทย?", //12
        answers: [
          { label: "ควาย", selected: false },
          { label: "ช้าง", selected: false },
          { label: "เสือ", selected: false },
          { label: "งู", selected: false },
        ],
        correctAnswer: "ช้าง",
      },
      {
        question: "จังหวัดที่มี อำเภอมากที่สุดในประเทษไทย?", //13
        answers: [
          { label: "นครราชสีมา", selected: false },
          { label: "นครศรีธรรมราช", selected: false },
          { label: "เชียงใหม่", selected: false },
          { label: "อุบลราชธานี", selected: false },
        ],
        correctAnswer: "นครราชสีมา",
      },
      {
        question: "ยาบ้า เป็นยาเสพติดประเภทใด?", //14
        answers: [
          { label: "กดประสาท", selected: false },
          { label: "กระตุ้นประสาท", selected: false },
          { label: "หลอนประสาท", selected: false },
          { label: "ออกฤทธิ์ผสมผสาน", selected: false },
        ],
        correctAnswer: "กระตุ้นประสาท",
      },
      {
        question: "ก๊าซต่อไปนี้ ติดไฟได้ ยกเว้น ขอใด?", //15
        answers: [
          { label: "มีเทรน", selected: false },
          { label: "โพรเพน", selected: false },
          { label: "ไฮโดรเจน", selected: false },
          { label: "ออกซิเจน", selected: false },
        ],
        correctAnswer: "ออกซิเจน",
      },
      {
        question: "ถ้าเมื่อวานคือวันจันทร์ แล้ววันพรุ่งนี้คือวันอะไร?", //16
        answers: [
          { label: "อังคาร", selected: false },
          { label: "พุธ", selected: false },
          { label: "พฤหัส", selected: false },
          { label: "ไม่มีข้อถูก", selected: false },
        ],
        correctAnswer: "พุธ",
      },
      {
        question: "สัตว์ ในข้อใดต่างจากพวก?", //17
        answers: [
          { label: "งู", selected: false },
          { label: "ไก่", selected: false },
          { label: "กิ้งก่า", selected: false },
          { label: "จระเข้", selected: false },
        ],
        correctAnswer: "ไก่",
      },
      {
        question: "สัตว์ในข้อใดไม่ใช่สัตว์เลี้ยงลูกด้วยนม?", //18
        answers: [
          { label: "วัว", selected: false },
          { label: "ช้าง", selected: false },
          { label: "โลมา", selected: false },
          { label: "นกกระจอกเทศ", selected: false },
        ],
        correctAnswer: "นกกระจอกเทศ",
      },
      {
        question: "โหนกบนหลังอูฐ มีไว้เพื่ออะไร?", //19
        answers: [
          { label: "ช่วยในการทรงตัว", selected: false },
          { label: "สะสมอาหาร", selected: false },
          { label: "อบอุ่นร่างกาน", selected: false },
          { label: "ช่วยย่อยอาหาร", selected: false },
        ],
        correctAnswer: "สะสมอาหาร",
      },
      {
        question: "พืชใบเลี้ยงคู่ มีระบบรากแบบใด?", //20
        answers: [
          { label: "รากแขนง", selected: false },
          { label: "รากฝอย", selected: false },
          { label: "รากแก้ว", selected: false },
          { label: "ไม่่มีข้อถูก", selected: false },
        ],
        correctAnswer: "รากแก้ว",
      },
      // Add more questions...
    ];

    // Randomize the order of questions
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    // Select the first 20 questions
    const selectedQuestions = shuffledQuestions.slice(0, 20);
    // Shuffle the order of answers for each question
    selectedQuestions.forEach(question => {
      question.answers = question.answers.sort(() => Math.random() - 0.5);
    });
    // Update the state with the selected questions
    setQuestionSet(selectedQuestions);
    // Reset the score
    setScore(null);
  };

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const updatedQuestions = [...questionSet];
    updatedQuestions[questionIndex].answers.forEach((answer, index) => {
      if (index === answerIndex) {
        answer.selected = !answer.selected;
      } else {
        answer.selected = false;
      }
    });
    setQuestionSet(updatedQuestions);
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questionSet.forEach(question => {
      const selectedAnswer = question.answers.find(answer => answer.selected);
      if (selectedAnswer && selectedAnswer.label === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questionSet.map((questionData, questionIndex) => (
        <View key={questionIndex} style={styles.questionContainer}>
          <Text style={styles.questionText}>{questionData.question}</Text>
          {questionData.answers.map((answer, answerIndex) => (
            <View key={answerIndex} style={styles.answerContainer}>
              <CheckBox
                value={answer.selected}
                onValueChange={() => handleAnswerChange(questionIndex, answerIndex)}
              />
              <Text style={styles.answerLabel}>{answer.label}</Text>
            </View>
          ))}
        </View>
      ))}
      <Button title="ส่งคำตอบ" onPress={handleSubmit} />
      {score !== null && <Text style={styles.scoreText}>Score: {score} / {questionSet.length}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
