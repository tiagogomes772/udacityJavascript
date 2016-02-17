var work = {
	"jobs" : [
		{
			"employer" : "Camara Municipal de Trancoso",
			"title" : "Internship",
			"location" : "Trancoso",
			"dates" : "2013",
			"description" : "Helpdesk"
		},
		{
			"employer" : "ULisboa",
			"title" : "Monitor",
			"location" : "Lisboa",
			"dates" : "2014",
			"description" : "Teaching kids programming skils"
		}
	]
};

var projects = {
	"projects": [{
		"title": "Excel",
		"dates": "2015",
		"description": "Create Excel in java",
		"images": []
	}, 
	{
		"title": "Frogger",
		"dates": "2015",
		"description": "Create a game similar frogger",
		"images": [
			"https://upload.wikimedia.org/wikipedia/en/c/cd/Frogger_game_arcade.png",
			"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSohUqTLlcay96qFQ_3QXYCbKL8d0gmKLzbrh47_wZfNHwfIPv4"
		]
	}]
};

var bio ={
	"name": "Tiago Gomes",
	"role": "Student",
	"welcome_message": "Welcome to my interative resume, my name is Tiago and i hope you like my resume",
	"contacts": {
		"mail": "tiagogomes772@gmail.com",
		"phone": "967793038",
		"location": "Trancoso"
	},
	"skills": ["Javascript", "Java", "Python", "OO" , "C", "C++", "Fast Learning"],
	"picture" : "images/fry.jpg"
};

var education ={
	"schools" : [
		{
			"name" : "Instituto Superior Tecnico",
			"location" : "Lisboa",
			"degree" : "Bachelor",
			"major" : ["Computer Science"],
			"dates" : "2012-2015",
			"url" : "http://tecnico.ulisboa.pt/"
		},
		{
			"name" : "Instituto Superior Tecnico",
			"location" : "Lisboa",
			"degree" : "master's",
			"major" : ["Software Engineering", "Intelligent Systems"],
			"dates" : "2012-2015",
			"url" : "http://tecnico.ulisboa.pt/"
		}
	],
	"onlineCourses" :[
		{
			"title" : "Javascript Basics",
			"School" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
		},
		{
			"title" : "BootStrap Introdution",
			"School" : "EDX",
			"dates" : "2015",
			"url" : "https://courses.edx.org/courses/course-v1:Microsoft+DEV203x+2015_T2/info"
		}
	]
};


// Replace the information of Helper.js

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedMail = HTMLemail.replace("%data%", bio.contacts.mail);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);

//Display the information in the respective
//div for a better organization

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedPhone);
$("#topContacts").append(formattedMail);
$("#header").append(formattedPic);
$("#header").append(formattedMessage);
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}


function displayWork(){
	for(key in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();



function inName(){
	var name = bio.name;
	var namearray = name.trim().split(" ");
	namearray[1] = namearray[1].toUpperCase();
	namearray[0] = namearray[0][0].toUpperCase() + namearray[0].slice(1).toLowerCase();
	return namearray[0] + " " + namearray[1];
}

$("#main").append(internationalizeButton);


projects.display = function(){
	for(key in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
		$(".project-entry:last").append(formattedDescription);
		if( projects.projects[key].images.length > 0){
			for(image in projects.projects[key].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function(){
	$("#education").append(HTMLschoolStart);
	for(key in education.schools){
		var formattedName = HTMLschoolName.replace("%data%", education.schools[key].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[key].location);
		$(".education-entry:last").append(formattedLocation);
		if(education.schools[key].major.length > 0){
			for(ed in education.schools[key].major){
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[key].major[ed]);
				$(".education-entry:last").append(formattedMajor);
			}	
		}
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for(key in education.onlineCourses){
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[key].School);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[key].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url);
		$(".education-entry:last").append(formattedURL);
	}
}

education.display();

$("#mapDiv").append(googleMap);