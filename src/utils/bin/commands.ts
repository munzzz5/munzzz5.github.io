// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 2 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type <b style="color:#00ccff;">'sumfetch'</b> to display summary.
Type <b style="color:#00ccff;">'about'</b> for small relevant info on me.
Type <b style="color:#00ccff;">'resume'</b> to go to my resume.
Type <b style="color:#00ccff;">'current'</b> for... well my current project!
<b>Type <b style="color:#00ccff;">'windmill'</b> or <b style="color:#00ccff;">'chocolate'</b> or <b style="color:#00ccff;">'music'</b> or <b style="color:#00ccff;">'blood'</b> for my project in a snippet</b>
Type <b style="color:#00ccff;">'sumfetch'</b> to display summary.
Type <b style="color:#00ccff;">'readSomething'</b> to read my work!
Type <b style="color:#00ccff;">'socialWork'</b> for info on community service [Looking for collab]
Type <b style="color:#00ccff;">'komplete'</b>for my project "komplete" with Anurag Atulya and Paritosh Sapre.
Type <b style="color:#00ccff;">'repo'</b> or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
Type <b style="color:#00ccff;">'weather city'</b> for the weather.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};
export const readsomething = async (args: string[]): Promise<string> => {
  window.open(`${config.social.mediumArticle2}`);
  return 'Opening Medium article';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `
<b style="background-color:yellow; color:black; ">Hi, I am ${config.name}.</b> 
Welcome to my website!
I'm a developer with skills in:
<b style="color:#ff3399;">1. Working on my finance and strategy at Carnegie Mellon University, Pittsburgh.</b>
<b style="color:#ff3399;">2. Python: Django, Pandas, Visualisations | Project titles: "Artist performance indicators for odia industry",</br> "Energy allocation algorithm for many to many generator and consumer optimized on price",</br> "Reports on demographic patterns of movie release in Odisha", </br> "Automated event triggers for new patterns in new OR old content based on views, likes or comments"</b>
<b style="color:#ff3399;">3. dotnet core 6 MVC with entity framework | Project title: <a href="https://github.com/munzzz5/issue_v2">"Issue Management System"</a></b>
<b style="color:#ff3399;">4. Flutter dart [basic] (type "komplete")</b>
<b style="color:#ff3399;">5. I have 2 doggos and one cat. Tom, Jerry, Noorie.</b>
<b style="color:#ff3399;">6. I love playing dota 2.</b>
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};


export const blood = async (args: string[]): Promise<string> => {
  return `<b style="background-color:green;color:black;">Community Service Experience : </b>
          * Youth Red Cross Member - Managed blood donations,
                              and awareness/material donation based events for
                              betterment of the community in the vicinity.
          * Technical Work - <u><a href="https://github.com/munzzz5/BloodDonation">Android App for BloodManagementSystem (BMS)</a></u>
          * Total Blood Donations arranged - 500+
          * Total Blood Donations made - 25+
          * Team Size - 25+
       `;
};
export const music = async (args: string[]): Promise<string> => {
  return `<b style="background-color:green;color:black;">Muzik247 Pvt. Ltd. : </b>
        
        * Description - Planned the creation of data pipelines and managed the team to account for system robustness and storage forecasting to support pipelines. </br>Created triggers for particular patterns and thresholds in real time performance of content, to strategize for further promotion efficiently. 
  
        * Tools used - Python pandas & searborn, Youtube data v3 API's, Linux shell scripts and cron jobs

        * Team size: 4

        * Role: Leadership
        * -----------------------------------------
        * Description - designed a software to create spotify playlist based on audio features

        * Tools used - Python Tkinter, Youtube data v3 API's, 
          OAuth2, pandas, Spotipy
        * Team size: 4

        * Manager: Ruchika Gupta: +918056012500

       `;
};
export const windmill = async (args: string[]): Promise<string> => {
  return `<b style="background-color:green;color:black;">Texonic Pvt. Ltd. :</b> 
        * Description - Managed a team to design and develop energy allocation software to optimally allocate energy to our clients based on consumption need and other client specific factors</br>Reported on asset life patterns and seasonal patterns of windmills
        * Tools used - Python pandas, numpy, matplotlib, plotly
        * Team size: 1
        * 
        * Manager: Naveen Bhandari: +919840068000
  
  
       `;
};
export const chocolate = async (args: string[]): Promise<string> => {
  return `<b style="background-color:green;color:black;">Kocoatrait Pvt. Ltd. :</b> 
        * Description - Built machine prototypes:
                        1. <u><a href="https://github.com/munzzz5/temperaturemonitor">Environment monitoring system</a></u>
                        2. Husk removal variable agitator machine 
                        3. Temperature decline capturing to test various storage mediums and conclude on the best one
                        
  
                        for India's First Chocolate Taster <u><a href="https://www.linkedin.com/in/beantobar/">L. Nitin Chordia</a></u> 
        * Tools used - Python pandas, numpy, matplotlib, plotly
        * Team size: 1
        * Manager: L. Nitin Chordia: +919600064846
  
  
       `;
};
export const komplete = async (args: string[]): Promise<string> => {
  return `
  <b style="background-color:green;color:black;">Komplete : </b>
        * Description - Developing an environment which rewards and forms a habit of productivity
                        and helps understand your subsconscious habits  
                        and give the data back to you in a meaningful format, rather than the status quo rn :P
        * Tools used - NLP (Spacy, HuggingFaceModels), Django, Flutter, Firebase
        * Team size: 2
        * Manager: <u><a href="mailto:${config.email}">Me</a></u>
  
  
       `;
};
export const current = async (args: string[]): Promise<string> => {
  return `
   <b style="background-color:green;color:black;">Carnegie Mellon University</b>
   * Title - <u><a href="https://engineering-innovation-management.cmu.edu/">Master in Engineering & Technology Innovation Management</a></u>
   * Description - to manage accelerated innovation and sustain it in a meaningful way using tools that are industry specific and agnostic
   * Why I chose this - I've been trying many ideas and would to see them to fruition, this course gives me a taste for:</br>1)Conceptually and financially validate an idea</br>2) Plan and strategize to take decision which either for gain or avoid risks
   
  `;
};
export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};
export const ls = async (args: string[]): Promise<string> => {
  return `
  listing most current me:
  1. MS - Engineering & Technology Innovation Management at Carnegie Mellon University
  2. Songs - <u><a href="https://music.youtube.com/playlist?list=LRYRExIbJ03RpHkVuIuFQq14TEzqVXCfNzwqK">Close your eyes and let me take you on a journey</a></u>
  3. I play football and badminton sometimes
  4. I love dota 2 -  <u><a href="https://s.team/p/cnnq-gffd/BWJPVJWQ" target="_blank">DaiMachaDai</a></u>
  5. I have 3 Hearts Tom, Jerry and Noorie (2 doggos 1 cat)

  `;
};
export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `<b style="  color:#66ff33  ;">
    Oo    o          o                                                               
   o  O   O          O                                                                
  O    o  o          o                                                                
 oOooOoOo o          O                                                                
 o      O O  o  .oOo OoOo. .oOoO' O   o                                               
 O      o OoO   Ooo. o   o O   o  o   O                                               
 o      O o  O     O o   O o   O  O   o                                               
 O.     O O   o OoO' O   o OoO'o   OoOO                                               
                                      o                                               
                                    OoO'                                               
  .oO        .oOOOo.                         o   .oOOOo.                           Oo.  
 .O         .O     o                         O  .O     o                             o. 
 O          o                                o  o                                     o 
 o          o                                O  o                                     O 
 O          o          .oOoO'  oOOoOO. .oOo. o  o         .oOoO' .oOo  .oOo.          o 
 o          O          O   o   O  o  o OooO' O  O         O   o   Ooo. OooO'          O 
 O          o     .o   o   O   o  O  O O     o   o     .o o   O      O O              o 
  o          OoooO'    OoO'o   O  o  o  OoO' Oo   OoooO'   OoO'o  OoO'  OoO'         O' 
   Oo                                                                             oO'  
                                                                                       
</b>
<b style="background-color:white; color:black;"> TYPE THE COMMANDS IN THE PROMPT </b>
Type <b style="background-color:purple; color:black;">'help'</b> to see the list of available commands.
Type <b style="background-color:purple; color:black;">'current'</b> for... well my current project!
Type <b style="background-color:purple; color:black;">'sumfetch'</b> to display summary.
Type <b style="background-color:purple; color:black;">'about' </b>for small relevant info on me.
Type <b style="background-color:purple; color:black;">'resume' </b>to go to my resume.
<b>Type <b style="background-color:purple; color:black;">'windmill' </b>or <b style="background-color:purple; color:black;">'chocolate'</b> or <b style="background-color:purple; color:black;">'music'</b> or <b style="background-color:purple; color:black;">'blood'</b> for my project in a snippet</b>
Type <b style="background-color:purple; color:black;">'socialWork'</b> for info on community service [Looking for collab]
Type<b style="background-color:purple; color:black;"> 'komplete' </b>for my project "komplete" with Anurag Atulya and Paritosh Sapre.
Type <b style="background-color:purple; color:black;">'readSomething'</b> to read my work!
Type <b style="background-color:purple; color:black;">'repo'</b> or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
Type<b style="background-color:purple; color:black;"> 'weather [city]' </b>for the weather.
`;
};
