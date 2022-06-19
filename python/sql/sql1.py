import mysql.connector  # import python module

# create DB using connect method
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password=""
)

mycursor = mydb.cursor()

mycursor.execute("use test")   # use database
sql = "INSERT INTO shinee (id, name, address) VALUES (%s, %s, %s)"
val = (2, "Shinee", "Test address")

mycursor.execute(sql, val)
mydb.commit()
#  pip install mysql-connector-python
