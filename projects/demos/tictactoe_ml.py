from pyangelo import *
from random import randint, random, choice

num_training_games = 500

# All 8 ways to win: 3 rows, 3 columns, 2 diagonals
LINES = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),   # rows
    (0, 3, 6), (1, 4, 7), (2, 5, 8),   # columns
    (0, 4, 8), (2, 4, 6),              # diagonals
]

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

board = [" "] * 9

values = {}

def check_winner_train(board):
    for a, b, c in LINES:
        if board[a] != " " and board[a] == board[b] == board[c]:
            return board[a]
    if " " not in board:
        return "draw"
    return None
    
def empty_squares_with_board(board):
    return [i for i, s in enumerate(board) if s == " "]

def get_value(state, player):
    key = (state, player)
    if key not in values:
        values[key] = 0.5
    return values[key]

def computer_move(board, player, explore_chance):
    """Pick a move. Sometimes explore (random), usually pick the best-looking one."""
    moves = empty_squares_with_board(board)
    if random() < explore_chance:
        return choice(moves), True   # exploring
    # Otherwise: try every legal move, pick the one leading to the best-looking state
    best_move, best_value = None, -1
    for m in moves:
        board[m] = player
        v = get_value(tuple(board), player)
        board[m] = " "
        if v > best_value:
            best_value, best_move = v, m
    return best_move, False

def train(num_games=20000, learning_rate=0.2, explore_chance=0.2):
    """The AI plays itself. After each game, it updates its opinions."""
    for game in range(num_games):
        board = [" "] * 9
        history = {"X": [], "O": []}  # states each player visited
        player = "X"

        while True:
            move, exploring = computer_move(board, player, explore_chance)
            board[move] = player
            history[player].append(tuple(board))
            if check_winner_train(board): break
            player = "O" if player == "X" else "X"

        # Game over — figure out the reward for each player
        winner = check_winner_train(board)
        for p in ["X", "O"]:
            if winner == p:        reward = 1.0
            elif winner == "draw": reward = 0.5
            else:                  reward = 0.0

            # Walk backwards through the states this player visited and
            # nudge each one's value toward the reward.
            # This is the heart of RL: "states that led to a win become more attractive".
            target = reward
            for state in reversed(history[p]):
                key = (state, p)
                old = values.get(key, 0.5)
                new = old + learning_rate * (target - old)
                values[key] = new
                target = new   # the next state back is judged by what came after it

        if (game) % 100 == 0:
            wr = win_rate_vs_random(200)
            show_training_screen(game, wr)

def win_rate_vs_random(num_games):
    """Test how well the AI does against a player making random moves."""
    wins = 0
    for _ in range(num_games):
        board = [" "] * 9
        player = "X"   # AI is X
        while True:
            if player == "X":
                move, _ = computer_move(board, "X", explore_chance=0.0)
            else:
                move = choice(empty_squares_with_board(board))
            board[move] = player
            w = check_winner_train(board)
            if w:
                if w == "X": wins += 1
                break
            player = "O" if player == "X" else "X"
    return wins / num_games

def show_training_screen(games = None, winRate = None):
    clearScreen(BLACK)
    drawText(f"Tic-Tac-Toe", left + 20, bottom + 3 * (size + borderWidth) + 20, f"30px Arial", WHITE)    
    drawText(f"Training the AI by self-play...", left - 20, bottom + 1 * (size + borderWidth) + 20, f"20px Arial", WHITE)
    drawText(f"Watch the win rate climb.", left, bottom + 10, f"20px Arial", WHITE)
    if games is not None and winRate is not None:
        drawText(f"After {games:5d} games of play vs self:", left - 40, bottom - 50, f"20px Arial", WHITE)
        drawText(f"win rate vs random = {winRate:.0%}", left - 10, bottom - 70, f"20px Arial", WHITE)
    refresh() 
    
def reset_board():
    global board
    board = [" "] * 9

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
            choice, _ = computer_move(board, "X", explore_chance=0.0)
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

    while getMouseDownPosition() is None:
        continue
    reset_board()

show_training_screen()
train(num_games = num_training_games)
show_training_screen()
drawText(f"Training complete!", left + 10, bottom - 130, f"24px Arial", GREEN)
drawText(f"Press [Enter] to Play..", left, bottom - 160, f"24px Arial", WHITE)
refresh()
while getMouseDownPosition() is None:
    continue
while True:
    play()