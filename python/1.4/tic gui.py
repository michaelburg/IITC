import tkinter as tk
from tkinter import messagebox

def on_click(row, col):
    global turn
    if grid[row][col]==0:
        if turn%2==0:
            buttons[row][col].config(text='X', fg='blue')
            grid[row][col] = 'X'
        else:
            buttons[row][col].config(text='O', fg='red')
            grid[row][col] = 'O'
        if turn>3:
            if check_winner(row,col):
                disable_butn()
                messagebox.showinfo("Winner", f"Player {grid[row][col]} wins!")
                root.destroy()

            elif turn==8:
                disable_butn()
                messagebox.showinfo('tie',"its a tie")
                root.destroy()
    
        turn+=1
def disable_butn():
    for butn in buttons:
        for b in butn:
            b.config(state=tk.DISABLED)


def check_winner(row, col):
    if grid[row][0]==grid[row][1] and grid[row][0]==grid[row][2]:###row 1
        buttons[row][0].config(bg='green')
        buttons[row][1].config(bg='green')
        buttons[row][2].config(bg='green')
        return True
    if grid[0][col]==grid[1][col] and grid[1][col]==grid[2][col]:###col 1
        buttons[0][col].config(bg='green')
        buttons[1][col].config(bg='green')
        buttons[2][col].config(bg='green')
        return True
    if row==col:
        if grid[0][0]==grid[1][1] and grid[0][0]==grid[2][2]:###left to right
            buttons[0][0].config(bg='green')
            buttons[1][1].config(bg='green')
            buttons[2][2].config(bg='green')  
            return True
    if (row==0 and col==2) or (row==1 and col==1) or (row==2 and col==0):
        if grid[0][2]==grid[1][1] and grid[0][2]==grid[2][0]:###right to left
            buttons[0][2].config(bg='green')
            buttons[1][1].config(bg='green')
            buttons[2][0].config(bg='green') 
            return True
    return False

        
root = tk.Tk()
root.title('Tic Tac Toe')
turn=0
grid = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]
buttons = [[None, None, None],
           [None, None, None],
           [None, None, None]]

for i in range(3):
    for j in range(3):
        buttons[i][j] = tk.Button(root, height=3, width=6, font=('Arial', 20),
                                command=lambda row=i, col=j: on_click(row, col))
        buttons[i][j].grid(row=i, column=j)
root.mainloop()
