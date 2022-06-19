import pandas as pd
""" pip install pandas """

cars = {'Brand': ['Honda Civic', 'Toyota Corolla', 'Ford Focus', 'Audi A4'],
        'Price': [32000, 35000, 37000, 45000]
        }

df = pd.DataFrame(cars, columns=['Brand', 'Price'])

print(df)

""" pip install openpyxl  """

df.to_excel(r'C:\Users\praje\Desktop\raj819.xlsx', index=True, header=False)
