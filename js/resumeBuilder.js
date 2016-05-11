var bio = {
  "name":"Douglas Clarke",
  "role":"Web Developer",
  "contacts":{
    "phone":"240-925-0388",
    "email":"clarke.doug248@gmail.com",
    "github":"https://github.com/SuperDoug92",
    "linkedIn":"https://www.linkedin.com/in/douglas-clarke-a1615532",
    "stack_overflow":"http://stackoverflow.com/users/4525451/doug-clarke",
    "location":"Alexandria, VA"
  },
  "pictureURL":"",
  "welcome-message":"Hello",
  "skills":["skill1","skill2"]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
if (bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  for (i in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}

var work = {
  "jobs":[
  {
    "job_title":"Sustainment Cost Estimator",
    "employer":"US Navy",
    "years":"August 2012- February 2014",
    "location":"Arlington, VA",
    "description":"I learned the in's and out's of Sustainment Cost Estimating while supporting JSF, DoD's biggest program ever! \
    I also rebuilt our manpower module and used VBA to mimic JOIN and UNION queries found in SQL databases for use in Excel."
  },
  {
    "job_title":"Master Scheduler",
    "employer":"US Navy",
    "years":"March 2014 - Present",
    "location":"Patuxent River, MD",
    "description":"I became a master of Microsoft project while acting as lead scheduler on 3 schedules supporting training aircraft PMA.\
    I also built a pretty awesome VBA project which automated two-thirds of my team leads job!"
  }]
}
work.display = function (){
    for (i in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedJob_title = HTMLworkTitle.replace("%data%",work.jobs[i].job_title);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].years);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
      var work_info = formattedEmployer + formattedJob_title + formattedDates + formattedDescription;
      $(".work-entry:last").append(work_info);
    }
}
work.display();

var education = {
  "schools":[
    {
      "school_name":"UMBC",
      "years_attended":"2007-2012",
      "location":"Baltimore, MD",
      "degree":"BS",
      "major":"Financial Economics"
    }],
  "online-programs":[
    {
      "school_name":"BLOC",
      "years_attended":"2015",
      "location":"Online",
      "degree":"none",
      "major":"Back End Web Development"
    }
  ]

}

var project = {
  "projects":[
    {
      "title":"Portfolio",
      "description":"portfolio template to display projects",
      "images":[],
      "dates":"April 2015"
    },
    {
      "title":"Online Resume",
      "description":"interactive resume",
      "images":[],
      "dates":"April 2015"
    }
  ]
}
project.display = function(){
  for (i in project.projects){
    $("#projects").append(HTMLprojectStart);
    var proj_title = HTMLprojectTitle.replace("%data%", project.projects[i].title);
    var proj_dates = HTMLprojectDates.replace("%data%",project.projects[i].dates);
    var proj_description = HTMLprojectDescription.replace("%data%",project.projects[i].description);
    var proj_info = proj_title + proj_dates + proj_description;
    for (j in project.projects[i].images){
      var proj_image = HTMLprojectImage.replace("%data%",project.projects[i].image[j]);
      proj_info += + proj_image;
    }
    $(".project-entry:last").append(proj_info);
  }
}
project.display();



// display_work();
// $("#main").append(internationalizeButton);

function internationalize_name(full_name){
  var split_name = full_name.split(" ");
  var int_name = split_name[0].slice(0,1).toUpperCase()+ split_name[0].slice(1) + " " + split_name[1].toUpperCase();
  return int_name;
}

$("#mapDiv").append(googleMap);
