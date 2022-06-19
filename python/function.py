# def greet_user():
#     print("Hello!")
# greet_user()

# def greet_user(name):
#     print("Hello! " + name.title() + "!")


# greet_user('Shinee')

#       """Display information about a pet."""
# def describe_pet(animal_type, pet_name):
#     print("\nI have a " + animal_type + ".")
#     print("My " + animal_type + "'s name is " + pet_name.title() + ".")


# describe_pet('Dog', 'xyz')

#       """Display information about a pet."""

# def describe_pet(animal_type, pet_name):
#     print("\nI have a " + animal_type + ".")
#     print("My " + animal_type + "'s name is " + pet_name.title() + ".")


# describe_pet('Dog', 'xyz')
# describe_pet(pet_name='harry', animal_type='hamster')
# describe_pet(animal_type='hamster', pet_name='harry')
# describe_pet(pet_name='harry', animal_type='hamster')

#       """Display information about a pet."""
# def describe_pet(pet_name, animal_type='dog'):
#     print("\nI have a " + animal_type + ".")
#     print("My " + animal_type + "'s name is " + pet_name.title() + ".")


# describe_pet(pet_name='willie')

#       """Return a full name, neatly formatted."""
# def get_formatted_name(first_name, middle_name, last_name):
#     full_name = first_name + ' ' + middle_name + ' ' + last_name
#     return full_name.title()


# musician = get_formatted_name('john', 'lee', 'hooker')
# print(musician)

#       """Return a full name, neatly formatted."""
# def get_formatted_name(first_name, last_name, middle_name=''):
#     if middle_name:
#         full_name = first_name + ' ' + middle_name + ' ' + last_name
#     else:
#         full_name = first_name + ' ' + last_name

#     return full_name.title()


# musician = get_formatted_name('john', 'hooker', 'Lee')
# print(musician)

# musician = get_formatted_name('john', 'hooker')
# print(musician)


def formattedName(firstNm, lastNm, middleNm=''):
    if middleNm:
        fullNm = firstNm + ' ' + middleNm + ' ' + lastNm
    else:
        fullNm = firstNm + ' ' + lastNm

    return fullNm.title()


programmist = formattedName(firstNm='Shinee', lastNm='Enh')
print(programmist)
