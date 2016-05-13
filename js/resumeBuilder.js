var bio = {
    "name": "Douglas Clarke",
    "role": "Web Developer",
    "contacts": {
        "mobile": "240-925-0388",
        "email": "clarke.doug248@gmail.com",
        "github": "https://github.com/SuperDoug92",
        "linkedIn": "https://www.linkedin.com/in/douglas-clarke-a1615532",
        "stack_overflow": "http://stackoverflow.com/users/4525451/doug-clarke",
        "location": "Alexandria, VA"
    },
    "biopic": "images/hiking.jpg",
    "welcomeMessage": "Hello",
    "skills": ["skill1", "skill2"]
};
bio.display = function() {

    var role = HTMLheaderRole.replace("%data%", bio.role);
    var name = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(name + role);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var linkIn = HTMLcontactGeneric.replace("%data%", bio.contacts.linkedIn);
    linkIn = linkIn.replace("%contact%", "LinkedIn");
    var stack_overflow = HTMLcontactGeneric.replace("%data%", bio.contacts.stack_overflow);
    stack_overflow = stack_overflow.replace("%contact%", "Stack Overflow");
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    var contactConcat = mobile + email + github + location;
    $("#topContacts").append(contactConcat);
    $("#footerContacts").append(contactConcat);
};
bio.display();

var work = {
    "jobs": [{
        "title": "Sustainment Cost Estimator",
        "employer": "US Navy",
        "years": "August 2012- February 2014",
        "location": "Arlington, VA",
        "description": "I learned the in's and out's of Sustainment Cost Estimating while supporting JSF, DoD's biggest program ever!" +
            "I also rebuilt our manpower module and used VBA to mimic JOIN and UNION queries found in SQL databases for use in Excel."
    }, {
        "title": "Master Scheduler",
        "employer": "US Navy",
        "years": "March 2014 - Present",
        "location": "Patuxent River, MD",
        "description": "I became a master of Microsoft project while acting as lead scheduler on 3 schedules supporting training aircraft PMA" +
            "I also built a pretty awesome VBA project which automated two-thirds of my team leads job!"
    }]
};
work.display = function() {
    for (var i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedJob_title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].years);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var location = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var work_info = formattedEmployer + location + formattedJob_title + formattedDates + formattedDescription;
        $(".work-entry:last").append(work_info);
    }
};
work.display();

var education = {
    "schools": [{
        "name": "Udacity",
        "dates": "2016",
        "location": "Online Program",
        "degree": "Nanodegree",
        "majors": ["Front-End Web Developer"],
        "url": ""
    }, {
        "name": "BLOC",
        "dates": "2015",
        "location": "Online Program",
        "degree": "non-degree program",
        "majors": ["Rails Web Development"],
        'url': ''
    }, {
        "name": "UMBC",
        "dates": "2007-2012",
        "location": "Baltimore, MD",
        "degree": "BS",
        "majors": ["Financial Economics"],
        'url': ''
    }],
    "onlineCourses": [{
        "title": "Course",
        "school": "Udacity",
        "date": "today",
        "url": ""
    }]
};
education.display = function() {
    for (var i in education.schools) {
        $("#education").append(HTMLschoolStart);
        var name = HTMLschoolName.replace("%data%", education.schools[i].name);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var location = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var majors = "";
        education.schools[i].majors.forEach(function(major) {
            majors += HTMLschoolMajor.replace("%data%", major);
        });
        var school_info = name + location + degree + dates + majors;
        $(".education-entry:last").append(school_info);
    }
    education.onlineCourses.forEach(function(course) {
        var title = HTMLonlineTitle.replace("%data%", course.title);
        var school = HTMLonlineSchool.replace("%data%", course.school);
        var date = HTMLonlineDates.replace("%data%", course.date);
        var url = HTMLonlineURL.replace("%data%", course.url);
        var onlineConcat = title + school + date + url;
        $(".education-entry:last").append(onlineConcat);
    });
};
education.display();


var projects = [{
    "title": "Portfolio",
    "description": "portfolio template to display projects",
    "images": ["http://placekitten.com/200/300", "http://placekitten.com/200/300"],
    "dates": "April 2015"
}, {
    "title": "Online Resume",
    "description": "interactive resume",
    "images": ["http://placekitten.com/200/300", "http://placekitten.com/200/300"],
    "dates": "April 2015"
}];
projects.display = function() {
    projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var proj_title = HTMLprojectTitle.replace("%data%", project.title);
        var proj_dates = HTMLprojectDates.replace("%data%", project.dates);
        var proj_description = HTMLprojectDescription.replace("%data%", project.description);
        var proj_info = proj_title + proj_dates + proj_description;
        project.images.forEach(function(image) {
            var proj_image = HTMLprojectImage.replace("%data%", image);
            proj_info += proj_image;
        });
        $(".project-entry:last").append(proj_info);
    });
};
projects.display();

// display_work();
// $("#main").append(internationalizeButton);

// function internationalize_name(full_name){
//   var split_name = full_name.split(" ");
//   var int_name = split_name[0].slice(0,1).toUpperCase()+ split_name[0].slice(1) + " " + split_name[1].toUpperCase();
//   return int_name;
// }

$("#mapDiv").append(googleMap);
