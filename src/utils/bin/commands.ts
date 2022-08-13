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
Type <b style="color:#00ccff;">'sumfetch'</b> to display summary.
Type <b style="color:#00ccff;">'readSomething'</b> to read my work!
Type <b style="color:#00ccff;">'socialWork'</b> for info on community service [Looking for collab]
<b>Type <b style="color:#00ccff;">'windmill'</b> or <b style="color:#00ccff;">'chocolate'</b> or <b style="color:#00ccff;">'music'</b> or <b style="color:#00ccff;">'blood'</b> for my project in a snippet</b>
Type <b style="color:#00ccff;">'currentWork'</b> for... well my current project!
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
<b style="color:#ff3399;">1. Python [Django, general OOPS, API consumption, Pandas, Matplotlib]</b>
<b style="color:#ff3399;">2. dotnet core 6 MVC with entity framework</b>
<b style="color:#ff3399;">3. Flutter dart [basic]</b>
<b style="color:#ff3399;">4. I have 2 doggos and one cat. Tom, Jerry, Noorie.</b>
<b style="color:#ff3399;">5. I brag that i got accepted into GitHub CoPilots Beta batch.</b>
<b style="color:#ff3399;">6. I love playing dota2.</b>
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
          * Total Blood Donations made - 30+
          * Team Size - 25+
       `;
};
export const music = async (args: string[]): Promise<string> => {
  return `<b style="background-color:green;color:black;">Muzik247 Pvt. Ltd. : </b>
        * Description - Made a series of softwares which aided in the data collection and storage process

        * Also currently working on spotify audio features to group music
          by mood and understand the music markets of regions of India.

        * Tools used - Python Tkinter, Youtube data v3 API's, 
          OAuth2, pandas, Spotipy
        * Team size: 4

        * Manager: Ruchika Gupta: +918056012500
  
  
       `;
};
export const windmill = async (args: string[]): Promise<string> => {
  return `<b style="background-color:green;color:black;">Texonic Pvt. Ltd. :</b> 
        * Description - Worked on analysis 11 year old data to provide insights of 600-800KWH WEG performance
                        Which allowed us to predict the performance of the machine in the future
                        And seek clarification from the AMC contractors. 
        * Tools used - Python pandas, numpy, matplotlib, plotly
        * Team size: 1
        * 
        * Manager: Naveen Bhandari: +919840068000
  
  
       `;
};
export const chocolate = async (args: string[]): Promise<string> => {
  return `<b style="background-color:green;color:black;">Kocoatrait Pvt. Ltd. :</b> 
        * Description - Built a series of machine prototypes ranging from:
                        1. <u><a href="https://github.com/munzzz5/temperaturemonitor">Environment monitoring system</a></u>
                        2. Husk removal machine 
                        3. Internal Company Sofwares for Marketing. 
  
                        for India's First Chocolate Taster <u><a href="https://www.linkedin.com/in/beantobar/">L. Nitin Chordia</a></u> 
        * Tools used - Python pandas, numpy, matplotlib, plotly
        * Team size: 1
        * Manager: L. Nitin Chordia: +919600064846
  
  
       `;
};

export const currentwork = async (args: string[]): Promise<string> => {
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
export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};
export const ls = async (args: string[]): Promise<string> => {
  return `
  listing what I want:
  1. Songs - Ali Gatie, Hasan Raheem, and Daftpunk, Parudeesa (Malayalam song), Trance (movie) songs
  2. I play football and badminton sometimes 
  3. I'm an active person at home and don't like going out much.
  4. I love dota2 -  <u><a href="https://s.team/p/cnnq-gffd/BWJPVJWQ" target="_blank">DaiMachaDai</a></u>

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
Type <b style="background-color:purple; color:black;">'about' </b>for small relevant info on me.
Type <b style="background-color:purple; color:black;">'resume' </b>to go to my resume.
Type <b style="background-color:purple; color:black;">'sumfetch'</b> to display summary.
Type <b style="background-color:purple; color:black;">'readSomething'</b> to read my work!
Type <b style="background-color:purple; color:black;">'socialWork'</b> for info on community service [Looking for collab]
<b>Type <b style="background-color:purple; color:black;">'windmill' </b>or <b style="background-color:purple; color:black;">'chocolate'</b> or <b style="background-color:purple; color:black;">'music'</b> or <b style="background-color:purple; color:black;">'blood'</b> for my project in a snippet</b>
Type <b style="background-color:purple; color:black;">'currentWork'</b> for... well my current project!
Type <b style="background-color:purple; color:black;">'repo'</b> or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
Type<b style="background-color:purple; color:black;"> 'weather [city]' </b>for the weather.
`;
};
