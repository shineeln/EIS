import mysql.connector
import datetime
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="python"
)
mycursor = mydb.cursor()
# mycursor.execute("CREATE DATABASE python")
mycursor.execute("CREATE table users(userID int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_name char(30) NOT NULL, user_company char(30) NOT NULL, user_phone int(8) NOT NULL)")
