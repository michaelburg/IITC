import requests
import  random
import json
import msvcrt
import time
def valid_answer():
    timeout = 5
    start_time = time.time()
    input = ''
    print("You have 5 seconds to answer!")
    while True:
        if msvcrt.kbhit():
            char = msvcrt.getche()
            if ord(char) == 13:  # Enter key pressed
                break
            else:
                input += char.decode()
        if (time.time() - start_time) > timeout:
            break
    if input:
        return input.upper()
    else:
        print("\nTime's up!")
        return None
def get_q_api(difficulty,num):
    api_url='https://opentdb.com/api.php?amount='+str(num)+'&difficulty='+difficulty+'&type=multiple'
    response = requests.get(api_url)
    data = response.json()
    quiz_dict={}
    for d in data['results']:
        d['incorrect_answers'].append(d['correct_answer'])
        random.shuffle(d['incorrect_answers'])
        quiz_dict[d['question']]={}
        choise=['A','B','C','D']
        for i in range(4):
            quiz_dict[d['question']][choise[i]]=d['incorrect_answers'][i]
            if d['incorrect_answers'][i]==d['correct_answer']:
                quiz_dict[d['question']]['Correct Answer']=choise[i]
    return quiz_dict

api_url='https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'


with open(r'C:\IITC\python\2.4\questions.txt', 'r', encoding='utf-8') as file:
    quiz_dict = json.load(file)
print("""Welcome to the Python Quiz Game!
You will be presented with multiple-choice questions. Enter the letter
corresponding to your answer.""")
difficulty_input=int(input("""celect difficulty level(1-3):
      1. easy
      2.medium
      3. hard
      """))
if difficulty_input==1:
    difficulty='easy'
if difficulty_input==2:
    difficulty='medium'
if difficulty_input==3:
    difficulty='hard'
num_Q=int(input("how many questions would you like?: "))
quiz_dict=get_q_api(difficulty,num_Q)
score=0
for quiz in quiz_dict:
    print(quiz)
    for answer in ['A','B','C','D']:
        print(answer+') '+quiz_dict[quiz][answer])
    submit=valid_answer()
    if quiz_dict[quiz]['Correct Answer']==submit:
        print('Correct')
        score+=1
    else:
        print('wrong')
    try:
        quiz_dict[quiz]['user answer']=quiz_dict[quiz][submit]
    except KeyError:
        quiz_dict[quiz]['user answer']='None'

print("Quiz complete! You scored "+str(score)+" out of "+str(len(quiz_dict))+".")

for quiz in quiz_dict:
    print('Q: '+quiz)
    print('your A: '+quiz_dict[quiz]['user answer'])
    print('correct A: '+quiz_dict[quiz][quiz_dict[quiz]['Correct Answer']])
print('Thank you for playing!')
