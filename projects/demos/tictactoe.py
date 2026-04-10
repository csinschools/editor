from pyangelo import *
from random import randint

def computer_move():
    # Rule 1: If I can win this turn, WIN.
    move = find_two_in_a_row("O")
    if move is not None:
        print("Computer rule: WIN the game!")
        return move

    # Rule 2: If the player could win next turn, BLOCK them.
    move = find_two_in_a_row("X")
    if move is not None:
        print("Computer rule: BLOCK the player.")
        return move

    # Rule 3: Make a fork (create two winning threats at once).
    move = find_fork("O")
    if move is not None:
        print("Computer rule: Make a FORK (two threats at once).")
        return move

    # Rule 4: Block the player's fork.
    move = find_fork("X")
    if move is not None:
        print("Computer rule: Block the player's FORK.")
        return move
        
    # Rule 5: Take a corner opposite the player, if free.
    opposite_corners = [(0, 8), (2, 6), (8, 0), (6, 2)]
    for corner, opposite in opposite_corners:
        if board[corner] == "X" and is_empty(opposite):
            print("Computer rule: Take the OPPOSITE CORNER to X.")
            return opposite   
            
    # Rule 6: Take a corner opposite me, if free.
    opposite_corners = [(0, 8), (2, 6), (8, 0), (6, 2)]
    for corner, opposite in opposite_corners:
        if board[corner] == "O" and is_empty(opposite):
            print("Computer rule: Take the OPPOSITE CORNER to O.")
            return opposite                
        
    # Rule 7: Take a random position which is not occupied - prefer centre
    position = choose_random_pos(centreBias = 1.0)
    while not is_empty(position):
        position = choose_random_pos(centreBias = 1.0)
    print("Computer rule: Take a random square.")
    return position   
    
def choose_random_pos(centreBias = 0.5):
    position = randint(0, int(8 * (1 + centreBias)))
    if position > 8:
        position = 4
    return position


bottom = 200
left = 60
xPos = 0
yPos = 0
xMargin = 10
yMargin = 15

size = 60
borderWidth = 10

repeatKeyTimer = 0.2
timer = 0

board = [" "] * 9

def reset_board():
    global board
    board = [" "] * 9

# All 8 ways to win: 3 rows, 3 columns, 2 diagonals
LINES = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),   # rows
    (0, 3, 6), (1, 4, 7), (2, 5, 8),   # columns
    (0, 4, 8), (2, 4, 6),              # diagonals
]

def getCoord(pos):
    row = pos // 3
    col = pos % 3
    return row, col
    
def show_title():
    clearScreen(BLACK)
    drawText(f"Tic-Tac-Toe", left + 20, bottom + 3 * (size + borderWidth) + 20, f"30px Arial", WHITE)
    show_board()
    drawText(f"I am O, you are X", left + 20, bottom - 60, f"20px Arial", YELLOW)
    drawText(f"Can you beat me?", left + 20, bottom - 90, f"20px Arial", GREEN)
    drawText(f"Use WASD or Arrow Keys to move", left - 50, bottom - 120, f"20px Arial", WHITE)
    drawText(f"Press [Enter] to Play!", left, bottom - 160, f"24px Arial", WHITE)
    refresh()

def show_board():
    for row in range(3):
        a, b, c = board[row * 3 : row * 3 + 3]
        
        drawText(f"{a}", left + xMargin, bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", WHITE)
        drawText(f"{b}", left + xMargin +  size + borderWidth, bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", WHITE)
        drawText(f"{c}", left + xMargin + 2 * (size + borderWidth), bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", WHITE)
        
        drawLine(left, bottom + (size + borderWidth), left + 3 * (size + borderWidth), bottom + (size + borderWidth), 3, WHITE)
        drawLine(left, bottom + 2 * (size + borderWidth), left + 3 * (size + borderWidth), bottom + 2 * (size + borderWidth), 3, WHITE)
        drawLine(left + (size + borderWidth), bottom + 3 * (size + borderWidth), left + (size + borderWidth), bottom, 3, WHITE)
        drawLine(left + 2 * (size + borderWidth), bottom + 3 * (size + borderWidth), left + 2 * (size + borderWidth), bottom, 3, WHITE)
        #drawLine(left, bottom + (size + borderWidth), left + 3 * (size + borderWidth), bottom + (size + borderWidth), 3, WHITE)

def drawWinner(a, b, c, winner):
    row, col = getCoord(a)
    drawText(f"{winner}", left + xMargin + col * (size + borderWidth), bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", GREEN)        
    row, col = getCoord(b)
    drawText(f"{winner}", left + xMargin + col * (size + borderWidth), bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", GREEN)        
    row, col = getCoord(c)
    drawText(f"{winner}", left + xMargin + col * (size + borderWidth), bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", GREEN)        

def getMove():
    global timer, xPos, yPos

    delta = timeElapsed()
    
    timer -= delta
    
    if isKeyPressed('Enter'):
        return (xPos) + ((2 - yPos) * 3)

    if timer <= 0:
        if isKeyPressed('d') or isKeyPressed('ArrowRight'):
            xPos +=1
            timer = repeatKeyTimer
        elif isKeyPressed('a') or isKeyPressed('ArrowLeft'):
            xPos -=1  
            timer = repeatKeyTimer
        elif isKeyPressed('s') or isKeyPressed('ArrowDown'):
            yPos -=1
            timer = repeatKeyTimer
        elif isKeyPressed('w') or isKeyPressed('ArrowUp'):
            yPos +=1      
            timer = repeatKeyTimer
        else:
            timer = 0
    else:
        if not (isKeyPressed('d') or isKeyPressed('a') or isKeyPressed('s') or isKeyPressed('w') or isKeyPressed('ArrowRight') or isKeyPressed('ArrowLeft') or isKeyPressed('ArrowUp') or isKeyPressed('ArrowDown')):
            timer = 0
        
    if xPos > 2:
        xPos = 0
    if xPos < 0:
        xPos = 2
    if yPos > 2:
        yPos = 0
    if yPos < 0:
        yPos = 2
        
    drawRect(left + xPos * (size + borderWidth), bottom + (yPos * (size + borderWidth)), (size + borderWidth), (size + borderWidth), 2, RED)
    
    return -1

# Rules-Based Tic-Tac-Toe for the classroom
# You are X, the computer is O.
# The computer follows a list of rules IN ORDER.
# It tries rule 1 first. If that doesn't apply, it tries rule 2. And so on.

def is_empty(square):
    return board[square] == " "

def empty_squares():
    return [i for i in range(9) if is_empty(i)]

def check_winner():
    for a, b, c in LINES:
        if board[a] != " " and board[a] == board[b] == board[c]:
            return board[a], a, b, c
    if not empty_squares():
        return "draw", -1, -1, -1
    return None

# ---- The rules the computer uses, in order ----

def find_two_in_a_row(player):
    """Return a square where 'player' already has 2 in a line and the 3rd is empty."""
    for a, b, c in LINES:
        line = [board[a], board[b], board[c]]
        squares = [a, b, c]
        if line.count(player) == 2 and line.count(" ") == 1:
            return squares[line.index(" ")]
    return None

def find_fork(player):
    """A 'fork' is a move that creates TWO ways to win at once.
    The opponent can only block one, so next turn we win."""
    for square in empty_squares():
        board[square] = player
        threats = 0
        for a, b, c in LINES:
            line = [board[a], board[b], board[c]]
            if line.count(player) == 2 and line.count(" ") == 1:
                threats += 1
        board[square] = " "
        if threats >= 2:
            return square
    return None

            
def play():
    isPlayerTurn = False
    
    while True:
        clearScreen(BLACK)
        show_board()
        
        if isPlayerTurn:
            move = getMove()
            if move < 0:
                continue
            
            if not is_empty(move):
                #print("That square is not available.")
                continue
            
            print("Move:", move)
            board[move] = "X"
            if check_winner(): 
                break
            
        else:
            # Computer's turn
            choice = computer_move()
            board[choice] = "O"
            print(f"Computer plays square {choice + 1}.")
            if check_winner(): 
                break
        
        isPlayerTurn = not isPlayerTurn

    show_board()
    result, a, b, c = check_winner()
            
    if result == "draw":
        print("It's a draw!")
        drawText("It's a draw!", left - 10, bottom - 80, f"{size - 10}px Arial", YELLOW)
    else:
        drawWinner(a, b, c, result)
        print(f"{result} wins!")
        drawText(f"{result} wins!", left + 15, bottom - 80, f"{size - 10}px Arial", GREEN)
    
    drawText(f"Press [Enter] to Play Again", left - 35, bottom - 120, f"24px Arial", WHITE)
    refresh()

    while not isKeyReleased('Enter'):
        continue
    
    while True:
        if isKeyPressed('Enter'):
            while not isKeyReleased('Enter'):
                continue
            reset_board()
            break
        
show_title()

while not isKeyPressed('Enter'):
    continue
while not isKeyReleased('Enter'):
    continue

while True:
    play()