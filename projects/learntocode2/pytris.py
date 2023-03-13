# adapted from:
# https://www.techwithtim.net/tutorials/game-development-with-python/tetris-pygame/tutorial-4/
from pyangelo import *
from csinsc import playSound
import random

# GLOBALS VARS
#s_width = 800
#s_height = 700
s_width = 320
s_height = 480
play_width = 200  # meaning 300 // 10 = 30 width per block
play_height = 400  # meaning 600 // 20 = 30 height per block
block_size = 20

top_left_x = (s_width - play_width) // 2
top_left_y = s_height - play_height

fontSize = 30
fontFamily = "monospace"
font = str(fontSize) + "px " + fontFamily
scoreFont = str(fontSize/2) + "px " + fontFamily
instructionsFont = str(fontSize * 0.65) + "px " + fontFamily

#playSound("samples/music/Eliminator_in_game.mp3", True)
playSound("samples/music/Final_Countdown_2.mp3", False)


# SHAPE FORMATS

S = [['.....',
      '.....',
      '..00.',
      '.00..',
      '.....'],
     ['.....',
      '..0..',
      '..00.',
      '...0.',
      '.....']]

Z = [['.....',
      '.....',
      '.00..',
      '..00.',
      '.....'],
     ['.....',
      '..0..',
      '.00..',
      '.0...',
      '.....']]

I = [['..0..',
      '..0..',
      '..0..',
      '..0..',
      '.....'],
     ['.....',
      '0000.',
      '.....',
      '.....',
      '.....']]

O = [['.....',
      '.....',
      '.00..',
      '.00..',
      '.....']]

J = [['.....',
      '.0...',
      '.000.',
      '.....',
      '.....'],
     ['.....',
      '..00.',
      '..0..',
      '..0..',
      '.....'],
     ['.....',
      '.....',
      '.000.',
      '...0.',
      '.....'],
     ['.....',
      '..0..',
      '..0..',
      '.00..',
      '.....']]

L = [['.....',
      '...0.',
      '.000.',
      '.....',
      '.....'],
     ['.....',
      '..0..',
      '..0..',
      '..00.',
      '.....'],
     ['.....',
      '.....',
      '.000.',
      '.0...',
      '.....'],
     ['.....',
      '.00..',
      '..0..',
      '..0..',
      '.....']]

T = [['.....',
      '..0..',
      '.000.',
      '.....',
      '.....'],
     ['.....',
      '..0..',
      '..00.',
      '..0..',
      '.....'],
     ['.....',
      '.....',
      '.000.',
      '..0..',
      '.....'],
     ['.....',
      '..0..',
      '.00..',
      '..0..',
      '.....']]

shapes = [S, Z, I, O, J, L, T]
#shape_colors = [(0, 1.0, 0), (1.0, 0, 0), (0, 1.0, 1.0), (1.0, 1.0, 0), (1.0, 0.6, 0), (0, 0, 1.0), (0.5, 0, 0.5)]
shape_colors = [GREEN, RED, YELLOW, BLUE, RED, GREEN, YELLOW]
# index 0 - 6 represent shape

class Piece(object):  # *
    def __init__(self, x, y, shape):
        self.x = x
        self.y = y
        self.shape = shape
        self.color = shape_colors[shapes.index(shape)]
        self.rotation = 0


def create_grid(locked_pos={}):  # *
    grid = [[BLACK for _ in range(10)] for _ in range(20)]

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if (j, i) in locked_pos:
                c = locked_pos[(j,i)]
                grid[i][j] = c
    return grid


def convert_shape_format(shape):
    positions = []
    format = shape.shape[shape.rotation % len(shape.shape)]

    for i, line in enumerate(format):
        row = list(line)
        for j, column in enumerate(row):
            if column == '0':
                positions.append((shape.x + j, shape.y + i))

    for i, pos in enumerate(positions):
        positions[i] = (pos[0] - 2, pos[1] - 4)

    return positions


def is_hidden_shape(shape):
    formatted = convert_shape_format(shape)
    for pos in formatted:
        if pos[1] >= 0:
            return False
    return True

def valid_space(shape, grid):
    accepted_pos = [[(j, i) for j in range(10) if grid[i][j] == BLACK] for i in range(20)]
    accepted_pos = [j for sub in accepted_pos for j in sub]

    formatted = convert_shape_format(shape)

    for pos in formatted:
        if pos not in accepted_pos:
            if pos[1] > -1:
                return False
    return True

def check_lost(positions):
    for pos in positions:
        x, y = pos
        if y < 1:
            return True
    return False

def get_shape():
    return Piece(5, 0, random.choice(shapes))
    
def clear_rows(grid, locked):
    inc = 0
    for i in range(len(grid)-1, -1, -1):
        row = grid[i]
        if BLACK not in row:
            inc += 1
            ind = i
            for j in range(len(row)):
                try:
                    del locked[(j,i)]
                except:
                    continue

    if inc > 0:
        for key in sorted(list(locked), key=lambda x: x[1])[::-1]:
            x, y = key
            if y < ind:
                newKey = (x, y + inc)
                locked[newKey] = locked.pop(key)

    return inc    

def draw_next_shape(shape):
    sx = 247
    sy = 240
    
    if shape.shape == O:
        sx += 8
        sy -= 20
    elif shape.shape == S or shape.shape == Z:
        sy -= 20
    elif shape.shape == I:
        sy += 20
    
    format = shape.shape[shape.rotation % len(shape.shape)]

    for i, line in enumerate(format):
        row = list(line)
        for j, column in enumerate(row):
            if column == '0':
                fillRect(sx + j*block_size, s_height - (sy + i*block_size), block_size, block_size, shape.color)
                #drawRect(sx + j*block_size, s_height - (sy + i*block_size), block_size, block_size, 1, shape.color) #grid[i][j][0], grid[i][j][1], grid[i][j][2])
                #pygame.draw.rect(surface, shape.color, (sx + j*block_size, sy + i*block_size, block_size, block_size), 0)

    #surface.blit(label, (sx + 10, sy - 30))


def draw_window(grid, score=0):
    clearScreen(0, 0, 0, 1)
    drawText('Score: ' + str(score), 20, s_height - 10, scoreFont, WHITE)
    drawText('Hi-Score: ' + str(high_score), s_width - 150, s_height - 10, scoreFont, WHITE)
    drawText('Next:', 265, 260, scoreFont, WHITE)

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            fillRect(top_left_x + j*block_size, s_height - (top_left_y + i*block_size), block_size, block_size, grid[i][j]) #grid[i][j][0], grid[i][j][1], grid[i][j][2])
    drawRect(top_left_x, block_size, play_width, play_height, 1, WHITE)

def play_game():  # *
    global state, high_score
    last_score = 0
    locked_positions = {}
    grid = create_grid(locked_positions)

    change_piece = False
    playing = True
    
    current_piece = get_shape()
    next_piece = get_shape()

    fall_time = 0
    fall_speed = 0.4
    move_key_delay = 0
    rotate_key_delay = 0
    down_key_delay = 0

    level_time = 0
    score = 0

    can_move = True
    can_rotate = True
    can_down = True

    while playing:
        grid = create_grid(locked_positions)
        rawTime = timeElapsed()
        fall_time += rawTime
        level_time += rawTime
        move_key_delay += rawTime
        rotate_key_delay += rawTime
        down_key_delay += rawTime
        
        if down_key_delay > 0.03:
            down_key_delay = True
            can_down = True
        if move_key_delay > 0.09:
            move_key_delay = 0
            can_move = True
        if rotate_key_delay > 0.13:
            rotate_key_delay = 0
            can_rotate = True            

        if level_time > 10:
            level_time = 0
            fall_speed -= 0.005

        if fall_time > fall_speed:
            fall_time = 0
            current_piece.y += 1
            if not(valid_space(current_piece, grid)) and current_piece.y > 0:
                current_piece.y -= 1
                change_piece = True

        if isKeyPressed('Escape'):
            playing = False
            state = "intro"
            playSound("samples/music/Final_Countdown_2.mp3", False)
            
        # can't manipulate hidden shapes
        if not is_hidden_shape(current_piece):
            if isKeyPressed('a') and can_move:
                current_piece.x -= 1
                if not(valid_space(current_piece, grid)):
                    current_piece.x += 1
                else:
                    can_move = False
                    move_key_delay = 0
            elif isKeyPressed('d') and can_move:
                current_piece.x += 1
                if not(valid_space(current_piece, grid)):
                    current_piece.x -= 1
                else:
                    can_move = False   
                    move_key_delay = 0
            else:
                if isKeyReleased('a') or isKeyReleased('d'):
                    can_move = True

            if isKeyPressed('s') and can_down:
                current_piece.y += 1
                if not(valid_space(current_piece, grid)):
                    current_piece.y -= 1
                else:
                    can_down = False
                    down_key_delay = 0
            else:
                if isKeyReleased('s'):
                    can_down = True                    

                    
            if isKeyPressed('w') and can_rotate:
                current_piece.rotation += 1
                if not(valid_space(current_piece, grid)):
                    current_piece.rotation -= 1
                else:
                    can_rotate = False
                    rotate_key_delay = 0                
            else:
                if isKeyReleased('w'):
                    can_rotate = True

        shape_pos = convert_shape_format(current_piece)

        for i in range(len(shape_pos)):
            x, y = shape_pos[i]
            if y > -1:
                grid[y][x] = current_piece.color

        if change_piece:
            for pos in shape_pos:
                p = (pos[0], pos[1])
                locked_positions[p] = current_piece.color
            current_piece = next_piece
            next_piece = get_shape()
            change_piece = False
            
            rows_cleared = clear_rows(grid, locked_positions)
            if rows_cleared < 4:
                score += rows_cleared * 10
            else:
                # a tetris!
                score += 100
                
            if score > high_score:
                high_score = score                

        draw_window(grid, score)
        draw_next_shape(next_piece)
        
        if check_lost(locked_positions):
            playing = False
            state = "lost"

run = True
state = "intro"
high_score = 0
while run:
    if state == "intro":
        clearScreen(0, 0, 0, 1)
        drawText(">>> PYTRIS! <<<", 40, s_height * 0.75, font, WHITE)
        
        drawText("Controls:", 115, 250, instructionsFont, WHITE)
        
        drawText("🗘", 145, 200, font, RED)
        drawText("  W  ", 120, 175, font, GREEN)
        drawText("A S D", 120, 145, font, GREEN)
        drawText("🢘      🢚", 87, 142, font, RED)
        drawText("    🢛", 87, 117, font, RED)
        
        drawText("[SPACE] to start!", 70, 80, instructionsFont, WHITE)
        drawText("Music ©️ 1989 Jereon Tel", 68, 40, scoreFont, WHITE)

        if isKeyPressed(' '):
           playSound("samples/music/Eliminator_in_game.mp3", True)
           state = "game"
    elif state == "game":
        play_game()
    elif state == "lost":
        drawText("YOU LOST!", s_width / 3.4, s_height * 0.9, font, WHITE)  
        refresh()
        sleep(3)
        state = "intro"
        playSound("samples/music/Final_Countdown_2.mp3", False)