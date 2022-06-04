# import matplotlib.pyplot as plt
# import numpy as np

# xpoints = np.array([0, 6])
# ypoints = np.array([0, 250])

# plt.plot(xpoints, ypoints)
# plt.show()

import matplotlib.pyplot as plt
import numpy as np

# plot 1:
x = np.array([11, 19, 21, 23, 23, 20, 19])
y = np.array([11, 19, 21, 23, 23, 20, 19])

plt.subplot(1, 2, 1)
plt.plot(x, y)

# plot 2:
x = np.array([0, 1, 4, 3])
y = np.array([3, 10, 6, 10])

plt.subplot(1, 2, 2)
plt.plot(x, y)

plt.show()


# import matplotlib.pyplot as plt
# import numpy as np

# x = np.array(["A", "B", "C", "D"])
# y = np.array([3, 8, 1, 10])
# plt.bar(x, y)

# plt.show()


# import matplotlib.pyplot as plt
# import numpy as np

# x = np.array(["Sunday", "Monday", "Tuesday",
#               "Wednesday", "Thursday", "Friday", "Saturday"])
# y = np.array([11, 19, 21, 23, 23, 20, 19])
# plt.subplot(1, 2, 1)
# plt.plot(x, y)

# # plot 2:
# x = np.array([0, 1, 4, 3])
# y = np.array([3, 10, 6, 10])

# plt.subplot(1, 2, 2)
# plt.plot(x, y)

# plt.show()
