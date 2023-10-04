const nav = document.getElementById("navigation");
nav.innerHTML = " <a href='http://127.0.0.1:3000/discovery_piscine/rush1/landingpage.html'>Home</a> <a href='https://www.asc-aqua.org/wp-content/uploads/2022/12/ASC-SDG-Report-2022-1.pdf'>News</a> <div class='dropdown'> <button class='dropbtn'>UN goals</button> <div class='dropdown-content'> <a href='https://sdgs.un.org/goals'>UN goals website</a> <a href='https://sdgs.un.org/goals/goal4'>Education</a> <a href='https://sdgs.un.org/goals/goal10'>Reduced Inequalites</a> </div></div><a><button class='language' onclick='english()'>English</button></a><a><button class='language' onclick='chinese()'>中文</button></a>";
// using constant variable to inject code into specific id
const belief = document.getElementById("believe");
belief.innerHTML = "<h2 class='fineprint' id='believe'>What I believe in:</h2>";

const div = document.getElementById("myDiv");
div.innerHTML = "<h2><b>Introduction</b></h2> Growing up, I have heard a lot about justice and ethics. As a child, I simply accepted whatever what was told to me about these subjects, without thinking much about it, however the older I have gotten, and the more that is available online, the more I have been forced to think about the status of a so-called global peace in the world, and the steps we take to keep that peace. I think that justice, peace and security, is truly the most important thing to strive for, as without it the world cannot collaboratively resolve other massive issues such as global warming, poverty and resource insecurity."
"The purpose of this website is to not only demonstrate the skills I have gained throughout my time at 42, but to create a solution to a problem related to the UN goals. As I very passionately believe in many of these goals, I will strive to create an effective solution related to one or more of these objectives, using this website as a supporting tool to reach out to people about these issues and collaborate effectively.<br><br>";

const div2 = document.getElementById("myDiv2");
div2.innerHTML = "<br><br><h2>Contents:</h2><h6>Introduction:</h6><a href='#myDiv3'><h6>Peace, Justice, Security</h6></a><a href='#myDiv4'><h6>Nunga Court</h6></a><a href='#myDiv5'><h6>Why Bring them up?</h6></a> <a href = 'mailto:abc@example.com?subject = Feedback&body = Message'>Got an Issue? Send feedback!</a>";

const div3 = document.getElementById("myDiv3");
div3.innerHTML = "<h2><b>How is Australia working towards peace, justice, and security?</b></h2><p>In an effort to achieve these goals, Australia has made many notable achievements by establishing laws, policies and institutions, for example the Australian Nunga courts.<br><br><br></p>";

const div4 = document.getElementById("myDiv4");
div4.innerHTML = "<h2><b>The South Australian Nunga Courts</b></h2><p>These courts are designed to provide a culturally appropriate sentencing process for Aboriginal and Torres Strait Islander peoples, and to engage participants in their sentencing process in an effort to combat the over-representation seen in the prison system, and reduce deaths in custody. This is done through a more informal manner, aiming to speedily provide a resolution and appropriate reparations (LSC, 2022).<br><br><br></p>"

const div5 = document.getElementById("myDiv5");
div5.innerHTML = " <h2><b>Why Bring Them Up?</b></h2> <p>The reason this is brought up is that it is an extremely overlooked function of the legal system, especially in periods such as <b>NAIDOC</b> week, this aspect of the judicial system is never mentioned or taught in schools. During these periods however, as a part of learning about the history and culture of Australia’s cultures, we should address the issues many face today, and by raising public awareness of institutions such as the courts and other helpful institutions, it could greatly increase public awareness of these issues, and help them be more present and visible in the eyes of governmental departments, such as the state. This could serve to increase funding, government support and in light of contemporary issues such as the native voice to parliament, these are important topics that should be addressed.</p> <p>Therefore, as a public service act I've created a prototype of an interactive map highlighting every Aborginal Court in SA, to help raise awareness, with some info about each one's functions, details, and how it helps the public.";

const button = document.getElementById("myBtn");
button.innerHTML = "About me:<button id='myBtn></button>";

const modals = document.getElementById("modalstuff");
modals.innerHTML = "<span class='close'>&times;</span> <p>Hi! I’m 448219R.<br> I’m a student in Year 11 as of publication (or lack thereof), who has an interest in reading, gaming, and various other ‘geeky’ interests, such as Dungeons and Dragons, anime, and reading.<br> During my time at 42, I’ve been accumulating skills which are being used to build this very website you’re on!<br> My aim is to spread a message about the problem of a lack of justice and accountability in this world, that without treatment will severely harm all of humanity as it spreads, most notably in the west. </p>";

function chinese() {
  div.innerHTML = "<h2><b>介绍</b></h2> 在成长过程中，我听过很多关于正义和道德的话题。小时候，我只是简单地接受了关于这些主题的任何内容，没有多想，但是我年纪越大，网上可用的东西越多，我就越被迫考虑世界上所谓的全球和平，以及我们为维护这种和平所采取的步骤。我认为正义、和平与安全确实是最重要的奋斗目标，因为没有它，世界就无法合作解决全球变暖、贫困和资源不安全等其他重大问题。";
  div2.innerHTML = "<br><br><h2>内容:</h2><br><a href='#myDiv3'><h6>和平、正义、安全</h6></a><a href='#myDiv4'><h6>Nunga 法庭</h6></a><a href='#myDiv5'><h6>为什么要提起他们？</h6></a> <a href = 'mailto:abc@example.com?subject = Feedback&body = Message'>有问题吗？发送反馈！</a>";
  div3.innerHTML = "<h2><b>澳大利亚如何致力于和平、正义和安全</b></h2><p>为了实现这些目标，澳大利亚通过制定法律、政策和机构，例如澳大利亚的 Nunga 法院，取得了许多显著成就。<br><br><br></p>";
  div4.innerHTML = "<h2><b>南澳大利亚 Nunga 法院</b></h2><p>这些法院旨在为原住民和托雷斯海峡岛民提供文化上适当的量刑程序，并让参与者参与他们的量刑过程，以努力解决监狱系统中的过度代表问题，并减少拘留期间的死亡人数。这是通过更非正式的方式完成的，旨在迅速提供解决方案和适当的赔偿（LSC，2022）。<br><br><br></p>";
  div5.innerHTML = "<h2><b>为什么要提起他们？</b></h2> <p>之所以提出这一点，是因为它是法律系统的一个极度被忽视的功能，尤其是在 <b>NAIDOC</b> 周等时期，学校从未提及或教授过司法系统的这一方面。然而，在这些时期，作为了解澳大利亚文化历史和文化的一部分，我们应该解决当今许多人面临的问题，通过提高公众对法院和其他有益机构等机构的认识，可以大大提高公众认识这些问题，并帮助它们在政府部门（例如国家）的眼中更加突出和可见。这可能有助于增加资金、政府支持，并且鉴于当代问题（例如议会的本土声音），这些都是应该解决的重要话题</p> <p>因此，作为一项公共服务行为，我创建了一个交互式地图原型，其中突出显示了南澳大利亚州的每个土著法院，以帮助提高认识，并提供有关每个法院的功能、详细信息及其如何帮助公众的一些信息。";
  button.innerHTML = "关于我:<button id='myBtn></button>";
  modals.innerHTML = "<span class='close'>&times;</span> <p>你好！我是 448219R.<br> 在出版时我是一名 11 年级的学生（或没有），他对阅读、游戏和其他各种“极客”兴趣感兴趣，例如龙与地下城、动漫和阅读。<br>在我的学习期间在 42 岁的时候，我一直在积累技能，这些技能正被用来构建你正在访问的这个网站！<br>我的目标是传播一个关于这个世界上缺乏正义和问责制的问题的信息，如果没有治疗在蔓延时将严重伤害全人类，尤其是在西方。 </p>";
  nav.innerHTML = " <a href='http://127.0.0.1:3000/discovery_piscine/rush1/landingpage.html'>家</a> <a href='https://www.asc-aqua.org/wp-content/uploads/2022/12/ASC-SDG-Report-2022-1.pdf'>消息</a> <div class='dropdown'> <button class='dropbtn'>目标</button> <div class='dropdown-content'> <a href='https://sdgs.un.org/goals'>UN goals website</a> <a href='https://sdgs.un.org/goals/goal4'>Education</a> <a href='https://sdgs.un.org/goals/goal10'>Reduced Inequalites</a> </div></div><a><button class='language' onclick='english()'>English</button></a><a><button class='language' onclick='chinese()'>中文</button></a>";
  belief.innerHTML = "<h2 class='fineprint' id='believe'>我相信什么:</h2>";
}

function english() {
  div.innerHTML = "<h2><b>Introduction</b></h2> Growing up, I have heard a lot about justice and ethics. As a child, I simply accepted whatever what was told to me about these subjects, without thinking much about it, however the older I have gotten, and the more that is available online, the more I have been forced to think about the status of a so-called global peace in the world, and the steps we take to keep that peace. I think that justice, peace and security, is truly the most important thing to strive for, as without it the world cannot collaboratively resolve other massive issues such as global warming, poverty and resource insecurity."
  "The purpose of this website is to not only demonstrate the skills I have gained throughout my time at 42, but to create a solution to a problem related to the UN goals. As I very passionately believe in many of these goals, I will strive to create an effective solution related to one or more of these objectives, using this website as a supporting tool to reach out to people about these issues and collaborate effectively.";
  div2.innerHTML = "<br><br><h2>Contents:</h2><h6>Introduction:</h6><a href='#myDiv3'><h6>Peace, Justice, Security</h6></a><a href='#myDiv4'><h6>Nunga Court</h6></a><a href='#myDiv5'><h6>Why Bring them up?</h6></a> <a href = 'mailto:abc@example.com?subject = Feedback&body = Message'>Got an Issue? Send feedback!</a>";
  div3.innerHTML = "<h2><b>How is Australia working towards peace, justice, and security?</b></h2><p>In an effort to achieve these goals, Australia has made many notable achievements by establishing laws, policies and institutions, for example the Australian Nunga courts.<br><br><br></p>";
  div4.innerHTML = "<h2><b>The South Australian Nunga Courts</b></h2><p>These courts are designed to provide a culturally appropriate sentencing process for Aboriginal and Torres Strait Islander peoples, and to engage participants in their sentencing process in an effort to combat the over-representation seen in the prison system, and reduce deaths in custody. This is done through a more informal manner, aiming to speedily provide a resolution and appropriate reparations (LSC, 2022).<br><br><br></p>";
  div5.innerHTML = " <h2><b>Why Bring Them Up?</b></h2> <p>The reason this is brought up is that it is an extremely overlooked function of the legal system, especially in periods such as <b>NAIDOC</b> week, this aspect of the judicial system is never mentioned or taught in schools. During these periods however, as a part of learning about the history and culture of Australia’s cultures, we should address the issues many face today, and by raising public awareness of institutions such as the courts and other helpful institutions, it could greatly increase public awareness of these issues, and help them be more present and visible in the eyes of governmental departments, such as the state. This could serve to increase funding, government support and in light of contemporary issues such as the native voice to parliament, these are important topics that should be addressed.</p> <p>Therefore, as a public service act I've created a prototype of an interactive map highlighting every Aborginal Court in SA, to help raise awareness, with some info about each one's functions, details, and how it helps the public.";
  button.innerHTML = "About me:<button id='myBtn>About me:</button>";
  modals.innerHTML = "<span class='close'>&times;</span> <p>Hi! I’m 448219R.<br> I’m a student in Year 11 as of publication (or lack thereof), who has an interest in reading, gaming, and various other ‘geeky’ interests, such as Dungeons and Dragons, anime, and reading.<br> During my time at 42, I’ve been accumulating skills which are being used to build this very website you’re on!<br> My aim is to spread a message about the problem of a lack of justice and accountability in this world, that without treatment will severely harm all of humanity as it spreads, most notably in the west. </p>";
  nav.innerHTML = " <a href='http://127.0.0.1:3000/discovery_piscine/rush1/landingpage.html'>Home</a> <a href='https://www.asc-aqua.org/wp-content/uploads/2022/12/ASC-SDG-Report-2022-1.pdf'>News</a> <div class='dropdown'> <button class='dropbtn'>UN goals</button> <div class='dropdown-content'> <a href='https://sdgs.un.org/goals'>UN goals website</a> <a href='https://sdgs.un.org/goals/goal4'>Education</a> <a href='https://sdgs.un.org/goals/goal10'>Reduced Inequalites</a> </div></div><a><button class='language' onclick='english()'>English</button></a><a><button class='language' onclick='chinese()'>中文</button></a>";
  belief.innerHTML = "<h2 class='fineprint' id='believe'>What I believe in:</h2>";
}

// searching for modal
var modal = document.getElementById("myModal");

// about me button
var btn = document.getElementById("myBtn");

// close button
var span = document.getElementsByClassName("close")[0];

// opening the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// x button
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal2 = document.getElementById("modal");

// Get the button that opens the modal
var btn2 = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

