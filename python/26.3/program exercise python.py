
def update(item,action,amount,inventory):
    if action=='add':
        inventory[item]+=amount
    if action=='remove':
        inventory[item]-=amount
    print('Updated inventory: ',inventory)

def convert_num_item(text):
    while True:
        try:
            item=int(input(text))
            if item==1:
                return 'food'
            if item==2:
                return 'pants'
            if item==3:
                return 'shirts'
            if item==4:     
                return 'toys'
            print('please enter valid number')
        except ValueError:
            print('pleas enter number item')

def convert_num_action(text):
    while True:
        try:
            action=int(input(text))
            if action==1:
                return 'add'
            if action==2:
                return 'remove'
            print('please enter valid number')
        except ValueError:
            print('pleas enter number action')

def is_amount_valid(text,action,inventory):
    while True:
        try:
            amount=int(input(text))
            if action=='remove' and inventory[item]-amount<0:
                print('you have less than asked to reduse, you have '+str(inventory[item])+', you asked to remove: '+str(amount))
            else:
                return amount
        except ValueError:
            print('please enter a number')

def is_repet_valid(text):
    while True:
        repet=input(text)
        if repet=='n' or repet=='y':
            return repet
        print('please enter y/n')

inventory={'food':0, 'pants':0, 'shirts':0, 'toys':0}
while True:
    item=convert_num_item(""" Please input a number for the desired item to update:
    # 1. Food
    # 2. Pants
    # 3. Shirts
    # 4. Toys
                          """)

    action=convert_num_action(""" Please input the number for action:
    # 1. Add
    # 2. Remove
                 """
    )
    amount=is_amount_valid(""" Please input the number of items to
    # (remove or add should be printed according to previous selection): """,action,inventory)
    update(item,action,amount,inventory)

    repet=is_repet_valid("Do you want to modify another item? (y/n):  ")
    
    if repet=='n':
        print('ok bye')
        break