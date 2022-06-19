import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password=""
)


mycursor = mydb.cursor()

mycursor.execute("use test")
Choice = int(input("Select your choice:"))

if Choice == 1:
    user_name = input("Enter your user name:")
    user_password = input("Enter your address:")
    sql = "INSERT INTO shinee(name,address)  VALUES (%s,%s)"
    val = (user_name, user_password)
    mycursor.execute(sql, val)

    mydb.commit()
elif Choice == 2:
    user_name = input("What do you want to delete:")
    sql = "DELETE FROM shinee WHERE name = %s"
    val = (user_name, )
    mycursor.execute(sql, val)
    mydb.commit()
elif Choice == 3:
    mycursor.execute("Drop table shinee")
elif Choice == 4:
    sql = "CREATE TABLE shinee(name VARCHAR(255), address VARCHAR(255))"
    mycursor.execute(sql)
    mydb.commit()
