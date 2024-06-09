alert("Welcome to the Mobile Phone Recommender");
let budget = prompt("What is Your Budget(low/medium/high): ","low");
let os = prompt("Which operating system do you prefer?(android/ios): ","ios");
let camera = prompt("What camera quality do you need?(basic/moderate/high): ","basic");
let battery = prompt("How important is battery life to you?(short/average/long): ","short");
let screen = prompt("What screen size do you prefer? (small/medium/large): ", "small");

if (budget == 'low' && os == 'ios' && camera == 'basic' && battery == 'short' &&  screen == 'small') 
  {
  document.write('Based on your preference, we recommend the following mobile phone: <br>');
  document.write('<br><b>- Apple iphone 4</b> <br><br>- <b>Price:</b> 1500Rs <br>-  <b>Operating System:</b> IOS <br>- <b>Camera Quality:</b> Single 5MP <br>- <b>Battery Life:</b> Up to 8 Hours talk time <br>- <b>Screen Size:</b> 4 inches');
  document.write('<br><br>Enjoy Your New Mobile Phone!!')
}

else if (budget == 'low' && os == 'android' && camera == 'basic' && battery == 'short' && screen == 'small') {
  document.write('Based on your preference, we recommend the following mobile phone: <br>');
  document.write('<br><b>- Xiaomi A1+ </b> <br><br>- <b>Price:</b> 1500Rs <br>-  <b>Operating System:</b> Android <br>- <b>Camera Quality:</b> Double 8MP <br>- <b>Battery Life:</b> Up to 16 Hours talk time <br>- <b>Screen Size:</b> 6.7 inches');
  document.write('<br><br>Enjoy Your New Mobile Phone!!')
}
else if (budget == 'medium' && os == 'ios' && camera == 'moderate' && battery == 'average' && screen == 'medium') {
  document.write('Based on your preference, we recommend the following mobile phone: <br>');
  document.write('<br><b>- iphone 5 </b> <br><br>- <b>Price:</b> 20000Rs <br>-  <b>Operating System:</b> ios <br>- <b>Camera Quality:</b> Single 5MP <br>- <b>Battery Life:</b> Up to 8 Hours talk time <br>- <b>Screen Size:</b> 5 inches');
  document.write('<br><br>Enjoy Your New Mobile Phone!!')
}

else {
  alert('Please Enter Correct !!! Suggestion !!! ');
}
