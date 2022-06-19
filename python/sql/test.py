import mysql.connector
import datetime
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="stock"
)
mycursor = mydb.cursor()
#mycursor.execute("CREATE DATABASE stock")
#mycursor.execute("CREATE table users(userID int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_name char(30) NOT NULL , user_company char(30) NOT NULL , user_phone int(8) NOT NULL)")
#mycursor.execute("CREATE table products(produc_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY, name char(20) NOT NULL , brand char(30) NOT NULL , description char(40) NOT NULL)")
#mycursor.execute('CREATE TABLE buy_list(produc_ID int , buy_date date NOT NULL, quantity int(5) NOT NULL, FOREIGN KEY (produc_ID) REFERENCES products(produc_ID))')
#mycursor.execute('CREATE TABLE sale_list(produc_ID int , sale_date date NOT NULL, quantity int(5) NOT NULL, FOREIGN KEY (produc_ID) REFERENCES products(produc_ID))')


def menuDisplay():
    print('=============================')
    print('= Inventory Management Menu =')
    print('=============================')
    print('(11) Add New users')
    print('(12) Delete users')
    print('(13) Show user list')
    print('(21) Create new products')
    print('(22) Delete products')
    print('(23) Show product list')
    print('(24) Buy products')
    print('(25) Show buy_list')
    print('(26) Sale products')
    print('(27) Show sale_list')
    print('(9) Quit')
    CHOICE = int(input("Enter choice: "))
    menuSelection(CHOICE)


def menuSelection(CHOICE):
    if CHOICE == 11:

        print("+++ Add new users +++")
        #		(11) Add New users
        #users(user_ID, user_name, user_company, user_phone)
        user_name = input("Enter new user name here: ")
        user_company = input("Enter new user company here: ")
        user_phone = int(input("Enter new user phone here: "))
        sql = "INSERT INTO users (user_name, user_company, user_phone) VALUES (%s, %s, %s)"
        val = (user_name, user_company, user_phone)
        mycursor.execute(sql, val)
        mydb.commit()
        print("New USER has added")
        choose()

    elif CHOICE == 12:

        print("+++ Delete user by name +++")
        # (2) Delete users by name
        user_name = input("Enter name here: ")
        sql = "DELETE FROM users WHERE name = %s"
        val = (user_name, )
        mycursor.execute(sql, val)
        mydb.commit()
        print("user has deleted")
        choose()

    elif CHOICE == 13:

        # (3) Show users
        mycursor.execute("SELECT * FROM users")
        myresult = mycursor.fetchall()
        for x in myresult:
            print(x)
        choose()

    elif CHOICE == 21:

        #      Create new products
        # products(produc_ID, name, brand, description)
        print("+++ Create new users +++")
        pro_name = input("Enter product name here: ")
        pro_brand = input("Enter product brand here: ")
        pro_description = input("Enter product quantity here: ")
        sql = "INSERT INTO products (name, brand, description) VALUES (%s, %s, %s)"
        val = (pro_name, pro_brand, pro_description)
        mycursor.execute(sql, val)
        mydb.commit()
        print("New product has added")
        choose()

    elif CHOICE == 22:

        print("+++ Delete product by name +++")
        # (2) Delete users by name
        name = input("Enter name here: ")
        sql = "DELETE FROM product WHERE name = %s"
        val = (name, )
        mycursor.execute(sql, val)
        mydb.commit()
        print("Product has deleted")
        choose()

    elif CHOICE == 23:
        #			(7) Show product list
        mycursor.execute("SELECT * FROM products")
        myresult = mycursor.fetchall()
        for x in myresult:
            print(x)
        choose()

    elif CHOICE == 24:
        #      (5) Buy products
        # buy_list(produc_ID, order_date, quantity)
        print("+++ Buy products here +++")
        produc_ID = int(input("Enter product_ID here: "))
        order_date = input("Enter date here: ")
        quantity = int(input("Enter quantity here: "))

        sql = "INSERT INTO buy_list(produc_ID, order_date, quantity) VALUES (%s, %s, %s)"
        val = (produc_ID, order_date, quantity)
        mycursor.execute(sql, val)
        mydb.commit()

        print("You have bought product")
        choose()

    elif CHOICE == 25:
        #			(7) Show product list
        val = mycursor.execute("SELECT SUM(Quantity) FROM buy_list")

        mycursor.execute(sql, val)
        myresult = mycursor.fetchall()
        for x in myresult:
            print(x)
        choose()

    elif CHOICE == 26:
        #           SALE products
        # sale_list(produc_ID, sale_date, quantity)

        print("+++ SALE products here +++")
        produc_ID = int(input("Enter product_ID here: "))
        sale_date = input("Enter date here: ")
        quantity = int(input("Enter quantity here: "))

        sql = "INSERT INTO buy_list(produc_ID, order_date, quantity) VALUES (%s, %s, %s)"
        val = (produc_ID, sale_date, quantity)

        mycursor.execute(sql, val)
        mydb.commit()

        print("You have SOLD product")
        choose()

    elif CHOICE == 27:
        #			(27) Sale product list
        mycursor.execute("SELECT * FROM sale_list")
        myresult = mycursor.fetchall()
        for x in myresult:
            print(x)
        choose()

    elif CHOICE == 9:
        exit()
    else:
        print("Wrong answer. Enter again")
        choose()


def choose():
    choose = input('Enter Y to continue or Q to exit: ')
    choose = choose.lower()

    if choose == 'y':
        menuDisplay()
    elif choose == 'q':
        exit()
    else:
        menuDisplay()


menuDisplay()
