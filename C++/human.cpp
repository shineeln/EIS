#include<graphics.h>

int main()
{
  initwindow(800,800);
  
   // ellipse ---> ellipse(location x, location y, start angle, end angle, radius from x axis, radius from y axis);
   // line ---> x1, y1, x2, y2 line(150, 150, 450, 150);
   // circle ---> circle(x, y, radius); (x, y) is center of the circle.'radius' is the Radius of the circle.
   // arc ---> 
   
  
   //for head
   ellipse(320,95,360,0,25,20);
   line(298,85,341,85);
   circle(310,90,2);
   circle(330,90,2);
   arc(320,100,200,-20,10);
//   line(400,85,341,85);
//   line(550,85,341,85);

   //for neck
   line(313,115,313,125);
   line(328,115,328,125);
   //For centre part
   arc(320,225,72,107,100);
   line(290,129,290,200);
   line(350,129,350,200);
   line(290,193,350,193);
   line(290,200,350,200);

   //for legs
   line(290,200,285,280);
   line(320,225,305,280);
   line(322,225,335,280);
   line(350,200,355,280);

   //for right hand
   line(290,129,255,165);
   line(255,165,290,200);
   line(290,149,275,165);
   line(275,165,290,182);
   
   //for left hand
   line(350,129,385,165);
   line(385,165,350,200);
   line(350,149,365,165);
   line(365,165,350,182);

	// Coloring White
    setfillstyle(SOLID_FILL, WHITE);
    floodfill(285, 355, 15);
    	
   //for shoes
   line(285,280,275,287);
   line(275,287,305,287);
   line(305,280,305,287);
   line(335,280,335,287);
   line(335,287,365,287);
   line(355,280,365,287);
   
   //Printing message for user
   //outtextxy(10, 10 + 10, "Hi, My name is Shinee");

   getch();
   
   closegraph();
   
   return 0;
}
