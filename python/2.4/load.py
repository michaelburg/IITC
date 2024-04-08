import requests
import  random
api_url='https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'
response = requests.get(api_url)
if response.status_code == 200:
    print("Request was successful.")
data = response.json()
quiz_dict={}
for d in data['results']:
    d['incorrect_answers'].append(d['correct_answer'])
    random.shuffle(d['incorrect_answers'])
    quiz_dict[d['question']]={}
    print(d['incorrect_answers'])
    choise=['A','B','C','D']
    for i in range(4):
        quiz_dict[d['question']][choise[i]]=d['incorrect_answers'][i]
        if d['incorrect_answers'][i]==d['correct_answer']:
            quiz_dict[d['question']]['correct_answer']=choise[i]
print(quiz_dict)
