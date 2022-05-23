#include <iostream>
using namespace std;

struct node {
  int x;
  node *next;
};

int main()
{
  node *first;
  node *conduct;
  
  first = new node;
  first->next = NULL;
  first->x = 1;
  conduct = first;
  
  if ( conduct != NULL ) {
    while ( conduct->next != NULL)
      conduct = conduct->next;
  }
  
  // Creates a node at the end of the list
  conduct->next = new node;  
  conduct = conduct->next;
  conduct->next = NULL;
  conduct->x = 2;  
  conduct = first;
  
  
  //Creates a node at the first
  conduct = new node;
  conduct->x = 0;
  conduct->next = first;
  first = conduct;

  //Makes sure there is a place to start
  	if ( conduct != NULL ) {
	  while ( conduct->next != NULL ) {
	    cout<< conduct->x<<"\n";
	    conduct = conduct->next;
	  }
	  cout<< conduct->x;
	}
}
  

