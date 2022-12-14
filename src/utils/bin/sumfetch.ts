import config from '../../../config.json';
`
                                                        
                                 sumfetch: summary display for camelCase                        
                                -----------                        
                  ,,__           ABOUT                                              
        ..  ..   / o._)          <b style=background-color:green;>${config.name}</b>                        
       /--'/--\  \-'||           <u><a href="${config.location}" target="_blank">Born and Raised, Madras, India</a></u>                       
      /        \_/ / |           <u><a href="${config.resume_url}" target="_blank">Resume</a></u>                       
    .'\  \__\  __.'.'           爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>                       
      )\ |  )\ |                -----------                       
     // \\ // \\                 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>                      
    ||_  \\|_  \\_               <u><a href="${config.social.medium}" target="_blank">My Articles</a></u>                              
    '--' '--'' '--'              <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>                         
                                 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>                        
                                -----------                        
                                -----------               
                                 CONTACT                    
                                 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>             
                                 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>                
                                 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>           
                                -----------                        
`

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'bigCamel') {
    
    return `                                                  
                         MMMMMMM                     MMMMMMMMMMMMMM            sumfetch: summary display for camelCase
                      MMMMMMMMMMMM                MMMMMMMMMMMMMMMMMMM         -----------
                    MMMMMMMMMMMMMMMM                MMMMMMMMMMMMMMMMM          ABOUT
               MMMMMMMMMMMMMMMMMMMMMM              MMMMMMMMMMMMM   MM          <b style=background-color:green;>${config.name}</b>
            MMMMMMMMMMMMMMMMMMMMMMMMMMM            MMMMMMMMMMM                 <u><a href="${config.location}" target="_blank">Born and Raised, Madras, India</a></u>
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM        MMMMMMMMMMMM                  <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM    MMMMMMMMMMMMM                  爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                   -----------
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                      <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                    <u><a href="${config.social.medium}" target="_blank">My Articles</a></u> 
       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                          <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                              <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                                 -----------
    MMMMMMMM  MMMMMMMM  MMMMMMMMMMMMMMMMMMMM                                  -----------
   MMMMM  M   MMMMMMM       MNMMMMMMMMMMMMMM                                   CONTACT 
 MMMMM  MMMM  MMMMMM          MMMMM  MMMMMM                                    <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
MMMMMM  MMM  MMMMMM           MMMMM   MMMMM                                    <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
MMMMM     M  MMMMM            MMMM     MMMM                                    <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
MMMM        MMMMM           MMMMMM      MMMMM                                 -----------
 MMM       MMMMMMM          NMMMMM      MMMMM
 MM         MMMM             MMMM         MMM
MMMM         MMMM           MMMM           MM
 MMM          MMM           MMM            MMM
 MMMM         MMMM         MMM              MMM
 MMMMM         MMM        MMMM               MMM
   MMMMMM      MMMM        MMMM              MMMMMM
      MMM       MMMMM       MMMM              MMMMMM
                  CAMELCASE                        MMMMM 
         

`;
  } 
  else if (config.ascii === 'smallCamel') {
    return `
                                                        
                                 sumfetch: summary display for camelCase                        
                                -----------                        
                  ,,__           ABOUT                                              
        ..  ..   / o._)          <b style=background-color:green;>${config.name}</b>                        
       /--'/--\  \-'||           <u><a href="${config.location}" target="_blank">Born and Raised, Madras, India</a></u>                       
      /        \_/ / |           <u><a href="${config.resume_url}" target="_blank">Resume</a></u>                       
    .'\  \__\  __.'.'           爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>                       
      )\ |  )\ |                -----------                       
     // \\ // \\                 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>                      
    ||_  \\|_  \\_               <u><a href="${config.social.medium}" target="_blank">My Articles</a></u>                              
    '--' '--'' '--'              <u><a href="${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>                         
                                 <u><a href="${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>                        
                                -----------                        
                                -----------               
                                 CONTACT                    
                                 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>             
                                 <u><a href="${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>                
                                 <u><a href="${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>           
                                -----------                        
`
  }
  else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch - summary display for camelCase
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > C A M E L C A S E      ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
  }
};

export default sumfetch;
