from pyangelo import *
from random import randint

# Rules-Based Tic-Tac-Toe for the classroom
# You are X, the computer is O.
# The computer follows a list of rules IN ORDER.
# It tries rule 1 first. If that doesn't apply, it tries rule 2. And so on.
# ---- The rules the computer uses, in order ----
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
    position = choose_random_pos(centreBias = 0.5)
    while not is_empty(position):
        position = choose_random_pos(centreBias = 0.5)
    print("Computer rule: Take a random square.")
    return position   
    
def choose_random_pos(centreBias = 0.5):
    position = randint(0, int(8 * (1 + centreBias)))
    if position > 8:
        position = 4
    return position

# global variables
bottom = 200
left = 60
xPos = 0
yPos = 0
xMargin = 10
yMargin = 15
alpha = 1

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
    
def getMoveFromCoord(row, col):
    return row * 3 + col
    
def convertMousePosToCoord(x, y):
    if x < left or x > left + 3 * (size + borderWidth) or y < bottom or y > bottom + 3 * (size + borderWidth):
        return None
        
    row = 2 - ((y - bottom) // (size + borderWidth))
    col = (x - left) // (size + borderWidth)
    return row, col
    
def show_title():
    clearScreen(BLACK)
    drawText(f"Tic-Tac-Toe", left + 20, bottom + 3 * (size + borderWidth) + 20, f"30px Arial", WHITE)
    show_board()
    drawText(f"I am O, you are X", left + 20, bottom - 60, f"20px Arial", YELLOW)
    drawText(f"Can you beat me?", left + 20, bottom - 90, f"20px Arial", GREEN)
    drawText(f"Click to Play!", left + 40, bottom - 160, f"24px Arial", WHITE)
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

def drawWinner(a, b, c, winner):
    row, col = getCoord(a)
    drawText(f"{winner}", left + xMargin + col * (size + borderWidth), bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", GREEN)        
    row, col = getCoord(b)
    drawText(f"{winner}", left + xMargin + col * (size + borderWidth), bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", GREEN)        
    row, col = getCoord(c)
    drawText(f"{winner}", left + xMargin + col * (size + borderWidth), bottom + yMargin + (2 - row) * (size + borderWidth), f"{size}px Arial", GREEN)        

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
    global xPos, yPos, alpha
    isPlayerTurn = False
    
    while True:
        clearScreen(BLACK)
        show_board()       
        alpha -= 0.0005
        if alpha < 0:
            alpha = 1
            
        mousePos = getMousePosition()
        boardPos = convertMousePosToCoord(mousePos[0], mousePos[1])
        if boardPos is not None:
            yPos, xPos = boardPos[0], boardPos[1]
            drawRect(left + xPos * (size + borderWidth), bottom + ((2-yPos) * (size + borderWidth)), (size + borderWidth), (size + borderWidth), 2, 255, 128, 0, alpha)

        if isPlayerTurn:
            
            mousePos = getMouseDownPosition()
            if mousePos is None:
                continue
            boardPos = convertMousePosToCoord(mousePos[0], mousePos[1])
            if boardPos is None:
                continue
            yPos, xPos = boardPos[0], boardPos[1]
            move = getMoveFromCoord(yPos, xPos)
            
            if not is_empty(move):
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
    
    drawText(f"Click to Play Again", left, bottom - 120, f"24px Arial", WHITE)
    refresh()

    while getMouseDownPosition() is None:
        continue
    reset_board()
        
show_title()

while getMouseDownPosition() is None:
    continue

while True:
    play()