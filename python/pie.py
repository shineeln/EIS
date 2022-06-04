import matplotlib.pyplot as plt
import numpy as np
y = np.array([35, 25, 25, 15])
mylabels = ["Apples", "Bananas", "Cherries", "Dates"]
myexplode = [0.2, 0, 0, 0]
mycolors = ["black", "hotpink", "b", "#4CBF50"]
plt.pie(y, labels=mylabels, colors=mycolors, explode=myexplode, shadow=True)
plt.legend(title="Four Fruits:")
plt.show()
