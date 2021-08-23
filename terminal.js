const resPath = './assets/test.pdf';

$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Welcome to this portfolio.');
    },
    list: function(){
        this.echo('hello <name>, about, github, resume, contact, projects')
    },
    github: function(){
        window.open("https://www.github.com/dhruv-sundararaman");
    },
    resume: function(){
        window.open(resPath);
    },
    about: function(){
        this.echo("Computer Science student at University of Illinois at Urbana Champaign" +
                  "\nI enjoy exploring new ideas and places, cooking, dancing, and gaming.");
    },
    contact: function(){
        this.echo("dhruv.sundar2003@gmail.com");
    },
    projects: function(){
        this.echo("demos coming soon...")
    }
},
{
    greetings: 'Welcome to Dhruv\'s Portfolio!' +
               '\nType "list" for possible commands...'    
});



