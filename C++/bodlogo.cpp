#include <iostream>
using namespace std;

int main()
{
	int n,i2,i1;
	float total = 0.0;
	cin >> n;
	for(i1 = 1; i1<=n; i1++) {
		float fact = 1.0; 
		float pow = 1.0;
		for(i2=1; i2<=i1; i2++) {
			fact = fact * i2;
			pow += 2 * i2;
		}
		float res = pow / fact;
		total += res;
	}
	cout << total;
}


#include <iostream>

using namespace std;

int main()
{
	int n,i2,i1;
	float total = 0.0;
	cin >> n;
	for(i1 = 1; i1<=n; i1++) {
		float fact = 1.0; 
		float pow = 1.0;
		for(i2=1; i2<=i1; i2++) {
			fact = fact * i2;
			pow = pow * 2;
		}
		float res = pow / fact;
		total += res;
	}
	cout << total;
}
