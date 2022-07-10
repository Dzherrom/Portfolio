import random
def generate_password():
    mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m','n','o','p','r','r','s','t','u','v','w','x','y','z']
    sym = ['!', '#','$','%','&','/','*']
    num = ['1','2','3','4','5','6','7','8','9','0']
    
    char = mayus + minus + sym + num
    password = []
    
    for i in range(15):
        char_random = random.choice(char)
        password.append(char_random)
        
    password = "".join(password)
    return password
    
def run():
   password = generate_password()
   print('Your new password is: ' + password)
   
if __name__ == '__main__':
    run()