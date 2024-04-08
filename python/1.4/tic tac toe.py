import tkinter as tk
from tkinter import messagebox

def print_tic_tac_toe(grid):
    print("\\n")
    print("\\t     |     |")
    print("\\t  {}  |  {}  |  {}".format(grid[0][0], grid[0][1], grid[0][2]))
    print('\\t_____|_____|_____')
    print("\\t     |     |")
    print("\\t  {}  |  {}  |  {}".format(grid[1][0], grid[1][1], grid[1][2]))
    print('\\t_____|_____|_____')
    print("\\t     |     |")
    print("\\t  {}  |  {}  |  {}".format(grid[2][0], grid[2][1], grid[2][2]))
    print("\\t     |     |")
    print("\\n")

# Initialize the grid with numbers 1-9
def place_action(grid,action,row,column):
    while True:
        row,column=get_cell_index()
        if not is_cell_taken(grid,row,column):
            grid[row][column]=action
            break

def is_cell_taken(grid,row,column):
    return grid[row][column]=='X' or grid[row][column]=='O'

def print_grid(grid):
    for g in grid:
        print(g)

def get_cell_index():
    while True:
        try:
            cell=int(input('select cell: '))
            if cell>0 and cell<10:
                if cell%3==0:
                    row=int(cell/3)-1
                else:
                    row=int(cell/3)
                column=cell%3-1
                return row,column
            else:
                print('enter cell in range 1-9')
        except ValueError:
            print('enter valid input')

def win(grid,row,column):
    if grid['row'][0]==grid['row'][1] and grid['row'][0]==grid['row'][2]:###row 1
        return True
    if grid[0]['column']==grid[1]['column'] and grid[1]['column']==grid[2]['column']:###column 1
        return True
    if row==column:
        if grid[0][0]==grid[1][1] and grid[0][0]==grid[2][2]:###left to right
            return True
    if (row==0 and column==2) or (row==1 and column==1) or (row==2 and column==0):
        if grid[0][2]==grid[1][1] and grid[0][2]==grid[2][0]:###right to left
            return True
    return False

def new_game():
    grid = [['1','2','3'],['4','5','6'],['7','8','9']]
    print_tic_tac_toe(grid)
    for turn in range(9):
        if turn%2==0:
            print('X turn')
            action='X'
        else:
            print('O turn')
            action='O'
        while True:
            row,column=get_cell_index()
            if not is_cell_taken(grid,row,column):
                grid[row][column]=action
                break
            else:
                print('taken cell')
        if turn>3:
            if win(grid,row,column):
                print(action+' won')
                print_tic_tac_toe(grid)
                break
            else:
                if turn==8:
                    print('it a tie')
                    break


        if action=='X' or action=='O':
            print_tic_tac_toe(grid)
        else:
            break

def on_click(turn,row, col):
    if turn=='X':
        buttons[row][col].config(text='X', fg='blue')
        state[row][col] = 'X'
    else:
        buttons[row][col].config(text='O', fg='red')
        state[row][col] = 'O'
        

root = tk.Tk()
root.title('Tic Tac Toe')
state = [[0, 0, 0],
         [0, 0, 0],
         [0, 0, 0]]
buttons = [[None, None, None],
           [None, None, None],
           [None, None, None]]

for i in range(3):
    for j in range(3):
        buttons[i][j] = tk.Button(root, height=3, width=6, font=('Arial', 20),
                                   command=lambda row=i, col=j: on_click("x",row, col))
        buttons[i][j].grid(row=i, column=j)
root.mainloop()




# new_game()