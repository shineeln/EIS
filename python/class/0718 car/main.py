from electricCar import ElectricCar

"""  This is Main """
my_used_car = ElectricCar('tesla', 'model s', 2016)
print(my_used_car.get_descriptive_name())

my_used_car.update_odometer(23500)
my_used_car.read_odometer()

my_used_car.increment_odometer(100)
my_used_car.read_odometer()
