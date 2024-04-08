import pyautogui
import mouse
import threading
import keyboard
def play():
    y=650
    X=[1330,1460,1610,1750]
    count={1:0,2:0,3:0,4:0}
    while True:
        colors={}
        # x, y = pyautogui.position()
        # print(x,y)
    #     px = pyautogui.pixel(x, y)
        for i in range(4):
            colors[i]=pyautogui.pixel(X[i],y)[0]
        min_key = min(colors, key=colors.get)
        mouse.move(X[min_key],y+50, absolute=True)
        mouse.click()
        count[i+1]+=1
        print(count)

t = threading.Thread(target=play)
t.daemon = True
t.start()

while True:
    if keyboard. is_pressed('b'):
        break

