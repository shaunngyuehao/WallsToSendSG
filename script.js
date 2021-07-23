document.getElementById("about").addEventListener("click", goToAboutPage);
document.getElementById("list").addEventListener("click", goToListPage);
document.getElementById("map").addEventListener("click", goToMapPage);

function goToAboutPage() {
    document.location.href = 'index.html'
};

function goToListPage() {
    document.location.href = 'list.html'
};

function goToMapPage() {
    document.location.href = 'map.html'
};

var purposeColl = document.getElementsByClassName("purposeOpen");
var a;

for (a = 0; a < purposeColl.length; a++) {
  purposeColl[a].addEventListener("click", function() {
    this.classList.toggle("active");
    var purposeClick = this.nextElementSibling;
    if (purposeClick.style.maxHeight) {
        purposeClick.style.maxHeight = null;
    } else {
        purposeClick.style.maxHeight = purposeClick.scrollHeight + "px";
    }
  });
}

var motivationColl = document.getElementsByClassName("motivationOpen");
var b;

for (b = 0; b < motivationColl.length; b++) {
  motivationColl[b].addEventListener("click", function() {
    this.classList.toggle("active");
    var motivationClick = this.nextElementSibling;
    if (motivationClick.style.maxHeight) {
        motivationClick.style.maxHeight = null;
    } else {
        motivationClick.style.maxHeight = motivationClick.scrollHeight + "px";
    }
  });
}

var aboutMeColl = document.getElementsByClassName("aboutMeOpen");
var c;

for (c = 0; c < aboutMeColl.length; c++) {
  aboutMeColl[c].addEventListener("click", function() {
    this.classList.toggle("active");
    var aboutMeClick = this.nextElementSibling;
    if (aboutMeClick.style.maxHeight) {
        aboutMeClick.style.maxHeight = null;
    } else {
        aboutMeClick.style.maxHeight = aboutMeClick.scrollHeight + "px";
    }
  });
}

var contactMeColl = document.getElementsByClassName("contactMeOpen");
var d;

for (d = 0; d < contactMeColl.length; d++) {
  contactMeColl[d].addEventListener("click", function() {
    this.classList.toggle("active");
    var contactMeClick = this.nextElementSibling;
    if (contactMeClick.style.maxHeight) {
        contactMeClick.style.maxHeight = null;
    } else {
        contactMeClick.style.maxHeight = contactMeClick.scrollHeight + "px";
    }
  });
}

// data of all rock gyms
class Gym {
    constructor(name, coords, location, region, dayPrice, fivePrice, tenPrice, seasonPrice, studentPrice, wallTypes, facilities, rating, boards, website, socials) {
        this.name = name;
        this.coords = coords;
        this.location = location;
        this.region = region;
        this.dayPrice = dayPrice;
        this.fivePrice = fivePrice;
        this.tenPrice = tenPrice;
        this.seasonPrice = seasonPrice;
        this.studentPrice = studentPrice;
        this.wallTypes = wallTypes;
        this.facilities = facilities;
        this.rating = rating;
        this.boards = boards;
        this.website = website;
        this.socials = socials;
    } 
}

var gym1 = new Gym("Boulder World", {lat: 1.319109, lng: 103.8948135}, "SingPost Centre, 10 Eunos Rd 8, #01-205, 408600", "Central", 25, [24, 6], [20, 12], [90, 100], [18, 17], ["B"], "Showers, Gym, Locker", [4.6, 190], "Moon, Kilter", "https://www.picktime.com/566fe29b-2e46-4a73-ad85-c16bfc64b34b", ["https://www.facebook.com/boulderworldsg/", "https://www.instagram.com/boulderworldsg/?hl=en]"]);
var gym2 = new Gym("Boulder +", {lat: 1.3097326, lng: 103.8639387}, "Aperia Mall, 12 Kallang Ave, #03-17, 339511", "Central", 24, null, [18, 12], null, [16, 18], ["B"], "Gym, Workspace", [4.7, 118], null, "https://app.rockgympro.com/b/widget/?a=calendar&&widget_guid=f33c8b7f0916487d9af58088967aa62d&random=60f89ca11c9bf&iframeid=&mode=p", ["https://www.facebook.com/boulderPlusClimbing/", "https://www.instagram.com/boulder_plus/?hl=en"]);
var gym3 = new Gym("Z-Vertigo Boulder Gym", {lat: 1.3431115, lng: 103.7760782}, "Bukit Timah Shopping Centre, 170 Upper Bukit Timah Rd, #B2-20B, 588179", "Central", 15, null, [12, 6], [100, 0], null, ["B"], null, [4.9, 59], null, "https://www.picktime.com/ZVbooking", ["https://www.facebook.com/zvertigoboulder/", "https://www.instagram.com/zvertigobouldergym/?hl=en"]);


function hasMultipass(gymn) {
    if (gymn.fivePrice != null && gymn.tenPrice != null) {
        return '<p id="multiPass">' + "<b>Multipass:</b> $" + gymn.tenPrice[0] + " (Ten, "
        + gymn.tenPrice[1] + " months), $" + gymn.fivePrice[0] + " (Five, " + 
        gymn.fivePrice[1] + " months)" + '</p>';
    }

    else if (gymn.fivePrice == null && gymn.tenPrice != null) {
        return '<p id="multiPass">' + "<b>Multipass:</b> $" + gymn.tenPrice[0] + " (Ten, "
        + gymn.tenPrice[1] + " months)" + '</p>';
    }

    else {
        return '<p id="multiPass">' + "No multipass available" + '</p>'
    };
};

function hasStudentpass(gymn) {
    if (gymn.studentPrice !=null) {
        return '<p id="student">' + "<b>Student Pass:</b> $" + gymn.studentPrice[0] + 
        " (≤ " + gymn.studentPrice[1] + " years old)" + '</p>'
    }

    else {
        return '<p id="student">' + "No student pass available" + '</p>'
    };
};

function hasSeasonpass(gymn) {
    if (gymn.seasonPrice !=null) {
        return '<p id="season">' + "<b>Season Pass:</b> $" + gymn.seasonPrice[0] + " (Monthly), $" + gymn.seasonPrice[1] + " (Initiation)" + '</p>'
    }

    else {
        return '<p id="season">' + "No season pass currently available" + '</p>'
    };
};

function whatWall (gymn) {
    var wallContent = '<p id="wall">' + "<b>Walls:</b> " + "Boulder";
    
    if (gymn.wallTypes.includes("T")) {
        const T = ", Top Rope";
        const TS = wallContent + T;
        wallContent = TS;
    }
    
    else {};

    if (gymn.wallTypes.includes("L")) {
        const L = ", Lead";
        const LS = wallContent + L;
        wallContent = LS;
    }

    else {};

    const P = '</p>';
    PS = wallContent + P;
    wallContent = PS;

    return wallContent;
};

function hasFacilities (gymn) {
    if (gymn.facilities !=null) {
        return '<p id="facilities">' + "<b>Facilities:</b> " + gymn.facilities + '</p>'
    }

    else {
        return '<p id="facilities">' + "No additional facilities" + '</p>'
    };
};

function hasBoards (gymn) {
    if (gymn.boards !=null) {
        return '<p id="boards">' + "<b>Boards:</b> " + gymn.boards + '</p>'
    }

    else {
        return '<p id="boards">' + "No boards" + '</p>'
    }; 
};

function myMap() {

    const map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {lat: 1.357, lng: 103.825535},
        zoom: 11.8,
      });

    for (var i = 1; i < 4; i++) {
        const gym = "gym";
        var gymNum = gym.concat(i.toString());
        
        const marker = new google.maps.Marker({
            position: this[gymNum].coords,
            map: map,
        });
        
        const contentString =
            '<div id="content">' +
                '<h1 id="name">' + this[gymNum].name + '</h1>' 
                + '<a href="' + this[gymNum].website + '">' + "Book your slot" + '</a>'
                + '<a href="' + this[gymNum].socials[0] + '">' + '<img src="fb.png" style="width:25px;height:25px;float:right"/>' + '</a>'
                + '<a href="' + this[gymNum].socials[1] + '">' + '<img src="ig.png" style="width:25px;height:25px;float:right"/>' + '</a>' + '<br>'
                + '<p id="location">' + "<b>Location:</b> " + this[gymNum].location + '</p>'
                + hasMultipass(this[gymNum]) 
                + '<p id="day">' + "<b>Day Pass:</b> $" + this[gymNum].dayPrice + '</p>'
                + hasStudentpass(this[gymNum])
                + hasSeasonpass(this[gymNum]) 
                + whatWall(this[gymNum])
                + hasFacilities(this[gymNum])
                + hasBoards(this[gymNum])
                + '<p id="rating">' + "<b>Google Rating:</b> " + this[gymNum].rating[0] 
                + " (" + this[gymNum].rating[1] + " reviews)" + '</p>'
            + '</div>';
        
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            pixelOffset: (400,500),
        });

        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
        });
    };
};

//search in map
var gymNames = [];

for (var i = 1; i < 4; i++) {
    const gym = "gym";
    var gymNum = gym.concat(i.toString());
    gymNames.push("<li onclick='openInfo(" + this[gymNum].name + ")'>" + this[gymNum].name + "</li>");
};

function openInfo(gymn) {

}

function filterGyms(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
};
  
function filterNow () {
    var input = document.getElementById("gymSearch").value;
    var filteredGyms = filterGyms(gymNames, input);
    var searchList = "";
    for (var i = 0; i < filteredGyms.length; i++) {
        searchList += filteredGyms[i];
    };
    document.getElementById("searchUl").innerHTML = searchList; 
};

gymSearch = document.getElementById("gymSearch");

gymSearch.addEventListener('keyup', filterNow);

function resetBox () {
    var input = document.getElementById("gymSearch").value;
    if (input == "") {
        document.getElementById("searchUl").innerHTML = "";
    }
    else {};
};

gymSearch.addEventListener('keyup', resetBox);

