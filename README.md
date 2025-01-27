##### workshop-task-5

# Workshop 5 : Data and Visualisation

[Website Link] https://josephinepark.github.io/workshop-task-5/

- A dropdown menu : allow users to select different types of beverages. Once a beverage is selected, the user can check the amount I have drunk over the past week.

## Task
[] Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.<Br>
[] Experiemnt with different ways to present the data, e.g. using text, images, shapes, or colours.

## Notes from the workshop video

CSV files
- microsoft excel file...

## Progress (Experimentation and problem solving)
<img width="484" alt="image" src="https://github.com/user-attachments/assets/4cec0121-f56f-4aca-9f08-dbea0d3b9d3d" /><br>
for this workshop task, I made my own chart form excel and made it as a csv file. I have made a chart, how much beverages I have drunk over a week.
<br>
<br>
https://p5js.org/reference/p5/p5.Table/ <br>
<br>
<img width="931" alt="image" src="https://github.com/user-attachments/assets/b90d8eec-94c5-4695-85ce-1eff8f9ce444" /><br>
<br>
<img width="932" alt="image" src="https://github.com/user-attachments/assets/a62ad521-99a5-4604-942e-efa679f249f4" />
<br>
<Br>
from the workshop, I have learnt how to make a table and load images based on my chart as a cvs file. 
At first, I considered displaying the entire chart in a table format to show all beverage information at once. However, I realized that presenting everything on one screen could make the screen too cluttered and overwhelming for the user. This led me to think about a more intuitive and user-friendly way to present the data.
During this process, I recalled using a dropdown menu in a previous workshop when working with emojis. I thought that incorporating a dropdown would be a great solution, allowing users to select a specific beverage and view its corresponding details easily.
Instead of just displaying numerical data, I decided that when a beverage was selected, an image representing the amount consumed would appear. This approach would make the information easier to understand and provide a more engaging visual experience for users.
<br>
<br>
<img width="347" alt="image" src="https://github.com/user-attachments/assets/8e78843c-88d9-4c62-ab87-209607278370" />
<br>
<Br>
before I start, I have followed the workshop video and tried eveything in the same way and then started my work. Firstly, I have found some related photos from the internet. (water, juice, coffee, soft drink, and milk) Then I have uploaded the images and made the codes with preload() annd setup() function. I have worked based on the workshop video so I have learnt how to make the numbers which is the weeeklabel for my project. 
<Br>
<Br>
<img width="305" alt="image" src="https://github.com/user-attachments/assets/4cf8a6f5-e8df-4e64-9de8-140820b1260c" />
<Br>
<Br>
To place the 'week' in the right side next to the numbers, I have changed the numbers and finally placed into the right place where I meant to be.  
<Br>
<Br>
To figure out how to make a dropdown element, I have watched several tutorials, previous workshops and p5.js documentation and followed.
Then I have asked chatgpt for an help to get the overall format for this. 
<br>
<Br>
My prompt : p5 checkbox -> I meant select with 5 options

(result)
Here's an example of using a dropdown (select) element in p5.js with 5 options to choose from:
<br>
<Br>
<img width="245" alt="image" src="https://github.com/user-attachments/assets/0f7c91d0-af9e-4d76-8809-53da57a21c1c" />
<br>
<br>
According to the tutorials and the answer from the chatgpt, I have made functions for each drinks. After completing one function of the drinks, what I need to do was to copy and paste the same codes and change the name of it.
<img width="353" alt="image" src="https://github.com/user-attachments/assets/fbe57553-7a09-4bb2-862d-31737c681927" />
<br>
<Br>
For the draw function, I got some help from my friend. By this, I have learnt how to use if and else if. I also leant that I can only use else if or else after if. 
<Br>
<Br>
<img width="253" alt="image" src="https://github.com/user-attachments/assets/71256650-3770-4e7f-a695-5cdab86c79d8" />
<Br>
<Br>
Through this workshop, I learned and realized many things. One of the most important aspects of coding is spelling checks and proper use of parentheses. During the project, I also asked for help from my professor; I found that most of the issues stemmed from spelling mistakes or incorrect brackets usage.
This experience made me realize that even small mistakes can lead to significant consequences in programming. It taught me the importance of taking my time and carefully checking my code step by step.
In particular, I recognized how crucial it is to verify the spelling of variables and function names accurately and to pay close attention to the correct placement of parentheses. To improve in this area, I plan to actively utilize debugging tools and develop a habit of reviewing my code line by line in the future.


## codes

<img width="203" alt="image" src="https://github.com/user-attachments/assets/2cb8e790-cece-46d4-9d99-018c3d0f9786" />
<img width="125" alt="image" src="https://github.com/user-attachments/assets/f7fed294-d651-4902-a5fe-0a82841b8537" />
<img width="346" alt="image" src="https://github.com/user-attachments/assets/14568c52-6b3a-4c4a-b1ff-689c1d69378f" />
<img width="346" alt="image" src="https://github.com/user-attachments/assets/6edc9a24-6715-41ea-9aff-b257906e9cc3" />
<img width="350" alt="image" src="https://github.com/user-attachments/assets/7cb97215-bce6-4aae-acd8-d10478806bd2" />




## Future Development

If I further develop this workshop, I would like to add more vibrancy to my current chart, which feels a bit plain. Due to limited time, I couldn't focus much on the design aspect. As a result, all the beverages are displayed within simple rectangular frames, and the background is just a solid colour.

Moving forward, I plan to enhance the visual appeal by incorporating beverage icons to make the design more engaging. Additionally, I will work on improving the chart layout to enhance the user experience, ensuring that the information is presented in a more intuitive and visually appealing way. These improvements will help make the data more engaging and easier to understand for users.

## Reference / other sources that helped me

https://p5js.org/reference/p5/p5.Table/

- Table (p5.js documentation)
<br>
<br>
https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r

- introduction to data and API's in javascript tutorial
<br>
<br>
https://p5js.org/reference/p5.Table/getRowCount/

- getRowCount() (p5.js documentation)
<br>
<br>
https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=5

- working with data tutorial
<br>
<br>
https://www.youtube.com/watch?v=y_UQdH3Zt2s

- p5.js working with basic data + csv files
<br>
<br>
