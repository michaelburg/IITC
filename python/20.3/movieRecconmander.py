import re
import json

def formatInput(text,isName=False,isRate=False):
    word=input(text)
    word=re.sub(' +', ' ',word)
    if isRate:
        while True:
            try:
                return float(word)
            except ValueError:
                print('input invalid, lets try again')
                word=input(text)
    while len(word)==0:
        print('input invalid, lets try again')
        word=input(text)

    word= word.lower()
    word=re.sub('[^0-9a-zA-Z ]+', '', word)
    if isName:
        word=re.sub('[^a-zA-Z ]+', '', word)
    word=word.capitalize()
    return word
def getWatcherHis(name, history, movies_to_watch):
    try:
        return history[name]
    except KeyError:
        return []

Watched_movies = {"matrix": 9.0, "Thor love and thunder": 8.3, "green book": 8.3, "her": 8.1,
"the evil dead": 7.8, "forrest gump": 9.2, "life aquatic": 9.5, "life of bryan": 7.9, "first blood": 8.9}
history=json.load(open(r"C:\IITC\python\20.3\history.txt"))
# print(movies_to_watch)
name=formatInput('enter your name: ',True)
movies_to_watch={}
movies_to_watch[name]=getWatcherHis(name,history,movies_to_watch)


while True:
    # print(movies_to_watch)
    selection=formatInput("Enter a name of a movie you've recently watched,'cu” to change user or “q” to quit: ")
    if selection=='Q':
        break
    if selection=='Cu':
        name=formatInput('Please enter your name: ',True)
        movies_to_watch[name]=getWatcherHis(name,history,movies_to_watch)
    else:
        if selection in Watched_movies:
            print("I've watched that movie as well i rate it "+str(Watched_movies[selection]))
            user_rate=formatInput("what's your rating between 1 and 10? ",isRate=True)
            if abs(user_rate-Watched_movies[selection])<=2:
                print("wow we have similar taste:")
            else:
                print("Well i guess we will agree to disagree :)")
        else:
            user_rate=formatInput("I haven't watched that one yet, how would you rate it on a scale from 1 to 10? ",isRate=True)
            if user_rate>=7:
                movies_to_watch[name].append({selection:user_rate})
            else:
                print('Well my minimum is 7 so guess we wont be watching this one soon :)')

print(movies_to_watch)
if len(movies_to_watch)==1:#one user
    if movies_to_watch[next(iter(movies_to_watch))]==[]:#no movies added
        print('Well we had one user today going by the name '+next(iter(movies_to_watch))+ 'and nothing was added to movies_to_watch')
    else:#added movies
        print('Well we had one user today going by the name ' +next(iter(movies_to_watch))+ ' and these were added to movies_to_watch:'+str(movies_to_watch[next(iter(movies_to_watch))]))
else:#more than one user
    if movies_to_watch[next(iter(movies_to_watch))]==[]:#no movies added
        print('Well we had '+str(len(movies_to_watch.keys()))+' users today going by the names: '+ ' ,'.join(list(movies_to_watch.keys())) +' and nothing was added to movies_to_watch')
    else:#added movies
        print('Well we had '+str(len(movies_to_watch.keys()))+' users today going by the names: '+ ' ,'.join(list(movies_to_watch.keys())) +' and these were added to movies_to_watch '+str(movies_to_watch))
movies_to_watch={k:v for k,v in movies_to_watch.items() if v != []}
json.dump(movies_to_watch, open(r"C:\IITC\python\20.3\history.txt",'w'))