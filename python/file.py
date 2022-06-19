# with open('./../../../../Documents/test.txt') as file_object:
#     contents = file_object.read()
# print(contents.rstrip())
# for line in file_object:
#     print(line)
# for line in file_object:
#     print(line.rstrip())

filename = './../../../../Documents/test.txt'
# with open(filename, 'w') as file_object:
#     file_object.write("programming life")
#     file_object.write("I love creating new games.")

with open(filename, 'a') as file_object:
    file_object.write("I also love finding meaning in large datasets.\n")
    file_object.write("I love creating apps that can run in a browser.\n")
