document.getElementById("about").addEventListener("click", goToAboutPage);
document.getElementById("beta").addEventListener("click", goToBetaPage);
document.getElementById("map").addEventListener("click", goToMapPage);

function goToAboutPage() {
    document.location.href = 'index.html'
};

function goToBetaPage() {
    document.location.href = 'beta.html'
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
    constructor(name, coords, location, region, dayPrice, fivePrice, tenPrice, twentyPrice, thirtyPrice, seasonPrice, studentPrice, promo, wallTypes, facilities, rating, boards, website, socials) {
        this.name = name;
        this.coords = coords;
        this.location = location;
        this.region = region;
        this.dayPrice = dayPrice;
        this.fivePrice = fivePrice;
        this.tenPrice = tenPrice;
        this.twentyPrice = twentyPrice;
        this.thirtyPrice = thirtyPrice;
        this.seasonPrice = seasonPrice;
        this.studentPrice = studentPrice;
        this.promo = promo;
        this.wallTypes = wallTypes;
        this.facilities = facilities;
        this.rating = rating;
        this.boards = boards;
        this.website = website;
        this.socials = socials;
    } 
}

var gym1 = new Gym("Boulder World", {lat: 1.319109, lng: 103.8948135}, "SingPost Centre, 10 Eunos Rd 8, #01-205, 408600", "Central", 25, [24, 6], [20, 12], null, null, [90, 100, "Waitlist"], [18, 17], null, ["B"], "Showers, Gym, Lockers", [4.6, 190], "Moon, Kilter", "https://www.picktime.com/566fe29b-2e46-4a73-ad85-c16bfc64b34b", ["https://www.facebook.com/boulderworldsg/", "https://www.instagram.com/boulderworldsg/?hl=en]"]);
var gym2 = new Gym("Boulder +", {lat: 1.3097326, lng: 103.8639387}, "Aperia Mall, 12 Kallang Ave, #03-17, 339511", "Central", 24, null, [18, 12], null, null, null, [16, 18], null, ["B"], "Gym, Workspace", [4.7, 118], null, "https://app.rockgympro.com/b/widget/?a=calendar&&widget_guid=f33c8b7f0916487d9af58088967aa62d&random=60f89ca11c9bf&iframeid=&mode=p", ["https://www.facebook.com/boulderPlusClimbing/", "https://www.instagram.com/boulder_plus/?hl=en"]);
var gym3 = new Gym("Z-Vertigo Boulder Gym", {lat: 1.3431115, lng: 103.7760782}, "Bukit Timah Shopping Centre, 170 Upper Bukit Timah Rd, #B2-20B, 588179", "Central", 15, null, [12, 6], null, null, [100, 0, "No Waitlist"], null, null, ["B"], null, [4.9, 59], null, "https://www.picktime.com/ZVbooking", ["https://www.facebook.com/zvertigoboulder/", "https://www.instagram.com/zvertigobouldergym/?hl=en"]);
var gym4 = new Gym("BFF Climb", {lat: 1.336791, lng: 103.7836817}, "Link@896, 896 Dunearn Rd, #02-01D, 589472", "Central", 22, [19, 12], [17, 12], null, null, [80, 100, "Waitlist"], null, null, ["B"], null, [4.7, 85], "Kilter", "https://bffclimb.com/book-boulderzone/", ["https://www.facebook.com/bffclimb/", "https://www.instagram.com/bffclimb.boulderzone/?hl=en"]);
var gym5 = new Gym("Climb Central Funan", {lat: 1.2911354, lng: 103.8501524}, "Funan Mall, 107 North Bridge Rd, #B2-19/21, 179105", "Central", 22, [18, 6], [16, 6], null, null, [70, 100, "Waitlist"], [18, 17], null, ["B", "T", "L"], "Lockers", [4.4, 131], "Kilter", "https://www.climbcentral.sg/timeslot/ccf", ["https://www.facebook.com/ClimbCentral/", "https://www.instagram.com/climbcentral/?hl=en"]);
var gym6 = new Gym("Climb Central Stadium", {lat: 1.3027084, lng: 103.8735211}, "Kallang Wave Mall, 1 Stadium Place, #B1-01, 397628", "Central", 22, [18, 6], [16, 6], null, null, [65, 100, "Waitlist"], [18, 17], null, ["B", "T", "L"], "Lockers", [4.2, 181], null, "https://www.climbcentral.sg/timeslot/ccsh", ["https://www.facebook.com/ClimbCentral/", "https://www.instagram.com/climbcentral/?hl=en"]);
var gym7 = new Gym("Climb Central Novena", {lat: 1.3205123, lng: 103.8438004}, "Velocity, 238 Thomson Rd, #03-23/25, 307683", "Central", 22, [18, 6], [16, 6], null, null, [60, 100, "Waitlist"], [18, 17], null, ["B", "T", "L"], "Lockers", [4.3, 85], null, "https://www.climbcentral.sg/timeslot/ccn", ["https://www.facebook.com/ClimbCentral/", "https://www.instagram.com/climbcentral/?hl=en"]);
var gym8 = new Gym("Boulder Movement Downtown", {lat: 1.2780668, lng: 103.849209}, "Downtown Gallery, 6A Shenton Way, #B1-03, 068815", "Central", 35, [27, 3], null, null, null, [118, 98, "No Waitlist"], null, "$59 for 3 day passes for first-time customers", ["B"], "Showers, Lockers", [4.7, 137], null, "https://www.boulderm.com/register", ["https://www.facebook.com/BoulderMovementSG/", "https://www.instagram.com/bouldermovementsg/?hl=en"]);
var gym9 = new Gym("Boulder Movement Rochor", {lat: 1.3050631, lng: 103.8514261}, "Tekka Place, 2 Serangoon Rd, #02-12, 218227", "Central", 35, [27, 3], null, null, null, [118, 98, "No Waitlist"], null, "$59 for 3 day passes for first-time customers", ["B"], "Showers, Lockers", [5.0, 5], "Kilter", "https://www.boulderm.com/register", ["https://www.facebook.com/BoulderMovementSG/", "https://www.instagram.com/bouldermovementsg/?hl=en"]);
var gym10 = new Gym("Boulder Movement Tai Seng", {lat: 1.3050631, lng: 103.8514261}, "18 Tai Seng, 18 Tai Seng St, #01-09, 539775", "Northeast", 35, [27, 3], null, null, null, [118, 98, "No Waitlist"], null, "$59 for 3 day passes for first-time customers", ["B"], null, [4.9, 40], null, "https://www.boulderm.com/register", ["https://www.facebook.com/BoulderMovementSG/", "https://www.instagram.com/bouldermovementsg/?hl=en"]);
var gym11 = new Gym("Kinetics Climbing", {lat: 1.3146288, lng: 103.8573479}, "511 Serangoon Rd, 218153", "Central", 19, [17, 12], [15, 12], null, null, [80, 40, "No Waitlist"], [15, 21], null, ["B", "T", "L"], "Showers", [4.8, 447], null, "https://www.kineticsclimbing.com.sg/simpl-e-schedule", ["https://facebook.com/KineticsClimbing/", "https://www.instagram.com/kineticsclimbing/?hl=en"]);
var gym12 = new Gym("Ground Up Climbing", {lat: 1.3158251, lng: 103.8561832}, "CSC@Tessensohn, 60 Tessensohn Road, Level 2, 217664", "Central", 22, [20, 6], [18, 6], null, null, [80, 0, "No Waitlist"], [15, 17], "Youth multipass prices available", ["B", "T", "L"], "Ninja Gym", [4.5, 150], null, "https://gu.gymmasteronline.com/portal/login?session=eyJsYW5ndWFnZSI6ImVuIn0.YPssdw.Sz9fLUY1N3AluPQsgJfmdtCAmcw", ["https://www.facebook.com/groundupsg/", "https://www.instagram.com/groundupsg/?hl=en"]);
var gym13 = new Gym("OYEYO Boulder Home", {lat: 1.3072248, lng: 103.8467282}, "148 Mackenzie Rd, 228724", "Central", 18, [16, 6], [14, 6], [12, 12], null, null, null, "Buy Ten Multipass => 2 passes free, Twenty Multipass => 3 passes free", ["B"], null, [4.7, 98], null, "https://www.picktime.com/oyy", ["https://www.facebook.com/oyeyoboulderhome/", "https://www.instagram.com/oyeyoboulderhome/?hl=en"]);
var gym14 = new Gym("T-Hall SG", {lat: 1.3047412, lng: 103.8622189}, "464 Crawford Ln, #01-464, 190464", "Central", 25, [21, 6], [19.50, 6], null, null, [90, 60, "No Waitlist"], [16, 21], "$60 membership for lower prices", ["B", "T", "L"], "Augmented Wall", [4.4, 54], null, "https://www.picktime.com/THALLSG", ["https://www.facebook.com/thallsingapore/", "https://www.instagram.com/thall.sg/"]);
var gym15 = new Gym("Upwall Climbing", {lat: 1.3759059, lng: 103.9558119}, "E!Hub @ Downtown East, 1 Pasir Ris Close, #01-105, 519599", "East", 20, null, [16, 6], null, null, null, null, "$12 off-peak entry", ["B", "T", "L"], null, [4.4, 17], null, "https://www.picktime.com/upwallclimbing", ["https://www.facebook.com/upwallclimbing/", "https://www.instagram.com/upwallclimbing/?hl=en"]);
var gym16 = new Gym("The Rock School Tampines Hub", {lat: 1.354028, lng: 103.9403211}, "Our Tampines Hub, 1 Tampines Walk, #02-81, 528523", "East", 19, [16, 3], [15, 6], null, [13, 12], [59, 80, "Waitlist"], [17, 18], "$10 membership for lower prices", ["B", "T", "L"], null, [4.6, 139], null, "https://www.therockschool.sg/entry-pass/", ["https://www.facebook.com/therockschool.sg/", "https://www.instagram.com/therockschool/"]);
var gym17 = new Gym("Boulder Planet", {lat: 1.4420175, lng: 103.8250677}, "Sembawang Shopping Centre, 604 Sembawang Road, #B1-22/23, 758459", "North", 30, [25, 6], [22, 6], null, null, null, [18, 18], null, ["B"], "Showers, Lockers", [5.0, 13], null, "https://www.boulderplanet.sg/bookings", ["https://www.facebook.com/boulderplanetsg", "https://www.instagram.com/boulderplanet.sg/"]);
var gym18 = new Gym("Fitbloc", {lat: 1.2878135, lng: 103.7904914}, "The Oasis, 87 Science Park Dr, #03-02, 118260", "West", 24, null, [18, 12], null, null, [120, 100, "Waitlist"], null, "$60 for 3 passes for first-timers", ["B", "T"], "Showers, Gym, Lockers, Sauna, Pool", [4.8, 104], "Moon", "https://fitbloc.com/booking/", ["https://www.facebook.com/fitbloc", "https://www.instagram.com/fitbloc"]);
var gym19 = new Gym("Lighthouse Climbing", {lat: 1.274982, lng: 103.7943433}, "44 Pasir Panjang Road #B-02, 118504", "West", 24, [22, 6], [20, 12], null, null, [100, 100, "Waitlist"], [18, 18], null, ["B"], null, [4.7, 50], "Kilter, Tension", "https://www.lighthouseclimbing.com/", ["https://www.facebook.com/lighthouseclimbing/", "https://www.instagram.com/lighthouse.climbing/?hl=en"]);

function hasMultipass(gymn) {
    if (gymn.fivePrice != null && gymn.tenPrice != null && gymn.twentyPrice == null  && gymn.thirtyPrice == null) {
        return '<p id="multiPass">' + "<b>Multipass:</b> $" + gymn.tenPrice[0] + " (Ten, "
        + gymn.tenPrice[1] + " months), $" + gymn.fivePrice[0] + " (Five, " + 
        gymn.fivePrice[1] + " months)" + '</p>';
    }

    else if (gymn.fivePrice == null && gymn.tenPrice != null && gymn.twentyPrice == null  && gymn.thirtyPrice == null) {
        return '<p id="multiPass">' + "<b>Multipass:</b> $" + gymn.tenPrice[0] + " (Ten, "
        + gymn.tenPrice[1] + " months)" + '</p>';
    }

    else if (gymn.fivePrice != null && gymn.tenPrice == null && gymn.twentyPrice == null  && gymn.thirtyPrice == null) {
        return '<p id="multiPass">' + "<b>Multipass:</b> $" + gymn.fivePrice[0] + " (Five, "
        + gymn.fivePrice[1] + " months)" + '</p>';
    }

    else if (gymn.fivePrice != null && gymn.tenPrice != null && gymn.twentyPrice != null  && gymn.thirtyPrice == null) {
        return '<p id="multiPass">' + "<b>Multipass:</b> $" + gymn.twentyPrice[0] + " (Twenty, " + 
        gymn.twentyPrice[1] + " months), $" + gymn.tenPrice[0] + " (Ten, "
        + gymn.tenPrice[1] + " months), $" + gymn.fivePrice[0] + " (Five, " + 
        gymn.fivePrice[1] + " months)" +'</p>';
    }

    else if (gymn.fivePrice != null && gymn.tenPrice != null && gymn.twentyPrice == null && gymn.thirtyPrice != null) {
        return '<p id="multiPass">' + "<b>Multipass:</b> $" + gymn.thirtyPrice[0] + " (Thirty, " + 
        gymn.thirtyPrice[1] + " months), $" + gymn.tenPrice[0] + " (Ten, "
        + gymn.tenPrice[1] + " months), $" + gymn.fivePrice[0] + " (Five, " + 
        gymn.fivePrice[1] + " months)" +'</p>';
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
    if (gymn.seasonPrice != null) {
        return '<p id="season">' + "<b>Season Pass:</b> $" + gymn.seasonPrice[0] + " (Monthly), $" + gymn.seasonPrice[1] + " (Initiation), " + gymn.seasonPrice[2] + '</p>'
    }

    else {
        return '<p id="season">' + "No season pass currently available" + '</p>'
    };
};

function hasPromo(gymn) {
    if (gymn.promo != null) {
        return '<p id="promo">' + "<b>Promotion:</b> " + gymn.promo + '</p>'
    }

    else {
        return '<p id="promo">' + "No promotions available." + '</p>'
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

    for (var i = 1; i < 20; i++) {
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
                + hasPromo(this[gymNum])
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

for (var i = 1; i < 20; i++) {
    const gym = "gym";
    var gymNum = gym.concat(i.toString());
    gymNames.push("<li onclick='openInfo(" + i + ")'>" + this[gymNum].name + "</li>");
};

function openInfo(i) {
    const gym = "gym";
    var gymNum = gym.concat(i.toString());
    
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {lat: 1.357, lng: 103.825535},
        zoom: 11.8,
      });

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
            + hasPromo(this[gymNum])
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

//filter dropdown

var filterColl = document.getElementsByClassName("filterDrop");
var e;

for (e = 0; e < filterColl.length; e++) {
  filterColl[e].addEventListener("click", function() {
    this.classList.toggle("active");
    var filterClick = this.nextElementSibling;
    if (filterClick.style.maxHeight) {
        filterClick.style.maxHeight = null;
    } else {
        filterClick.style.maxHeight = filterClick.scrollHeight + "px";
    }
  });
};

//sort dropdown

var sortColl = document.getElementsByClassName("sortDrop");
var f;

for (f = 0; f < filterColl.length; f++) {
  sortColl[f].addEventListener("click", function() {
    this.classList.toggle("active");
    var sortClick = this.nextElementSibling;
    if (sortClick.style.maxHeight) {
        sortClick.style.maxHeight = null;
    } else {
        sortClick.style.maxHeight = sortClick.scrollHeight + "px";
    }
  });
};

//filter display markers and info

var filt1 = [];
var filt2 = [];
var filt3 = [];
var filt4 = [];
var filt5 = [];
var filt6 = [];
var filt7 = [];
var filt7e1 = [];
var filt7e2 = [];
var filt7e3 = [];
var filt7e4 = [];
var filt7e5 = [];
var filt7e6 = [];
var filt7e7 = [];
var filt8 = [];
var filtGyms = []; 

function filterFn() {
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {lat: 1.357, lng: 103.825535},
        zoom: 11.8,
      });

    filt1 = [];
    filt2 = [];
    filt3 = [];
    filt4 = [];
    filt5 = [];
    filt6 = [];
    filt7 = [];
    filt8 = [];
    filtGyms = []; 

    if (document.getElementById("stuCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].studentPrice != null) {
                filt1.push(gymNum);
            };
        }
    };

    if (document.getElementById("d26Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].dayPrice <= 26) {
                filt2.push(gymNum);
            };
        };
    };

    if (document.getElementById("d24Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].dayPrice <= 24) {
                filt2.push(gymNum);
            };
        };
    };

    if (document.getElementById("d22Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].dayPrice <= 22) {
                filt2.push(gymNum);
            };
        };
    };

    if (document.getElementById("d20Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].dayPrice <= 20) {
                filt2.push(gymNum);
            };
        };
    };

    if (document.getElementById("d18Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].dayPrice <= 18) {
                filt2.push(gymNum);
            };
        };
    };

    if (document.getElementById("m20Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].tenPrice != null) {
                if (this[gymNum].tenPrice[0] <= 20) {
                    filt3.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("m18Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].tenPrice != null) {
                if (this[gymNum].tenPrice[0] <= 18) {
                    filt3.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("m16Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].tenPrice != null) {
                if (this[gymNum].tenPrice[0] <= 16) {
                    filt3.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("m14Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].tenPrice != null) {
                if (this[gymNum].tenPrice[0] <= 14) {
                    filt3.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("m12Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].tenPrice != null) {
                if (this[gymNum].tenPrice[0] <= 12) {
                    filt3.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("s120Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].seasonPrice != null) {
                if (this[gymNum].seasonPrice[0] <= 120) {
                    filt4.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("s100Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].seasonPrice != null) {
                if (this[gymNum].seasonPrice[0] <= 100) {
                    filt4.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("s80Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].seasonPrice != null) {
                if (this[gymNum].seasonPrice[0] <= 80) {
                    filt4.push(gymNum);
                };
            };
        };
    };

    if (document.getElementById("s60Check").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].seasonPrice != null) {
                if (this[gymNum].seasonPrice[0] <= 60) {
                    filt4.push(gymNum);
                };
            };
        };
    };
    
    if (document.getElementById("bouCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].wallTypes == "B") {
                filt5.push(gymNum);
            };
        };
    }; 

    if (document.getElementById("topCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].wallTypes.includes("T") == true && this[gymNum].wallTypes.includes("L") == false) {
                filt5.push(gymNum);
            };
        };
    }; 

    if (document.getElementById("leaCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].wallTypes.includes("T") == true && this[gymNum].wallTypes.includes("L") == true) {
                filt5.push(gymNum);
            };
        };
    }; 

    if (document.getElementById("mooCheck").checked == true && document.getElementById("kilCheck").checked == true && document.getElementById("tenCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].boards != null) {
                if (this[gymNum].boards.includes("Moon") == true && this[gymNum].boards.includes("Kilter") == true && this[gymNum].boards.includes("Tension") == true) {
                    filt6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("mooCheck").checked == true && document.getElementById("kilCheck").checked == true && document.getElementById("tenCheck").checked == false) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].boards != null) {
                if (this[gymNum].boards.includes("Moon") == true && this[gymNum].boards.includes("Kilter") == true) {
                    filt6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("mooCheck").checked == true && document.getElementById("kilCheck").checked == false && document.getElementById("tenCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].boards != null) {
                if (this[gymNum].boards.includes("Moon") == true && this[gymNum].boards.includes("Tension") == true) {
                    filt6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("mooCheck").checked == true && document.getElementById("kilCheck").checked == false && document.getElementById("tenCheck").checked == false) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].boards != null) {
                if (this[gymNum].boards.includes("Moon") == true) {
                    filt6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("mooCheck").checked == false && document.getElementById("kilCheck").checked == true && document.getElementById("tenCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].boards != null) {
                if (this[gymNum].boards.includes("Kilter") == true && this[gymNum].boards.includes("Tension") == true) {
                    filt6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("mooCheck").checked == false && document.getElementById("kilCheck").checked == true && document.getElementById("tenCheck").checked == false) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].boards != null) {
                if (this[gymNum].boards.includes("Kilter") == true) {
                    filt6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("mooCheck").checked == false && document.getElementById("kilCheck").checked == false && document.getElementById("tenCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].boards != null) {
                if (this[gymNum].boards.includes("Tension") == true) {
                    filt6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("shoCheck").checked == true) { 
        filt7e1 = [];
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].facilities != null) {
                if (this[gymNum].facilities.includes("Showers") == true) {
                    filt7e1.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("gymCheck").checked == true) { 
        filt7e2 = [];
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].facilities != null) {
                if (this[gymNum].facilities.includes("Gym") == true) {
                    filt7e2.push(gymNum);
                };
            };
        };
    }; 
    
    if (document.getElementById("locCheck").checked == true) { 
        filt7e3 = [];
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].facilities != null) {
                if (this[gymNum].facilities.includes("Lockers") == true) {
                    filt7e3.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("worCheck").checked == true) { 
        filt7e4 = [];
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].facilities != null) {
                if (this[gymNum].facilities.includes("Workspace") == true) {
                    filt7e4.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("sauCheck").checked == true) { 
        filt7e5 = [];
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].facilities != null) {
                if (this[gymNum].facilities.includes("Sauna") == true) {
                    filt7e5.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("pooCheck").checked == true) { 
        filt7e6 = [];
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].facilities != null) {
                if (this[gymNum].facilities.includes("Pool") == true) {
                    filt7e6.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("ninCheck").checked == true) { 
        filt7e7 = [];
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].facilities != null) {
                if (this[gymNum].facilities.includes("Ninja Gym") == true) {
                    filt7e7.push(gymNum);
                };
            };
        };
    }; 

    if (document.getElementById("cenCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].region == "Central") {
                filt8.push(gymNum);
            };
        }
    };

    if (document.getElementById("wesCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].region == "West") {
                filt8.push(gymNum);
            };
        }
    };

    if (document.getElementById("norCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].region == "North") {
                filt8.push(gymNum);
            };
        }
    };

    if (document.getElementById("noreCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].region == "Northeast") {
                filt8.push(gymNum);
            };
        }
    };

    if (document.getElementById("easCheck").checked == true) { 
        for (var i = 1; i < 20; i++) {
            const gym = "gym";
            var gymNum = gym.concat(i.toString());
            if (this[gymNum].region == "East") {
                filt8.push(gymNum);
            };
        }
    };

    for (var i = 1; i < 8; i++) {
        const filt7e = "filt7e";
        var filt7eNum = filt7e.concat(i.toString()); 
        if (this[filt7eNum].length != 0 && filt7.length == 0) {
            filt7 = this[filt7eNum];
        };

        if (this[filt7eNum].length != 0 && filt7.length != 0) {
            filt7 = getArray7Intersection(this[filt7eNum]);
        };
    };

    for (var i = 1; i < 9; i++) {
        const filt = "filt";
        var filtNum = filt.concat(i.toString()); 
        if (this[filtNum].length != 0 && filtGyms.length == 0) {
            filtGyms = this[filtNum];
        };

        if (this[filtNum].length != 0 && filtGyms.length != 0) {
            filtGyms = getArraysIntersection(this[filtNum]);
        };
    };

    for (var i = 0; i < filtGyms.length; i++) {
        const marker = new google.maps.Marker({
            position: this[filtGyms[i]].coords,
            map: map,
        });
        
        const contentString =
            '<div id="content">' +
                '<h1 id="name">' + this[filtGyms[i]].name + '</h1>' 
                + '<a href="' + this[filtGyms[i]].website + '">' + "Book your slot" + '</a>'
                + '<a href="' + this[filtGyms[i]].socials[0] + '">' + '<img src="fb.png" style="width:25px;height:25px;float:right"/>' + '</a>'
                + '<a href="' + this[filtGyms[i]].socials[1] + '">' + '<img src="ig.png" style="width:25px;height:25px;float:right"/>' + '</a>' + '<br>'
                + '<p id="location">' + "<b>Location:</b> " + this[filtGyms[i]].location + '</p>'
                + hasMultipass(this[filtGyms[i]]) 
                + '<p id="day">' + "<b>Day Pass:</b> $" + this[filtGyms[i]].dayPrice + '</p>'
                + hasStudentpass(this[filtGyms[i]])
                + hasSeasonpass(this[filtGyms[i]]) 
                + hasPromo(this[filtGyms[i]])
                + whatWall(this[filtGyms[i]])
                + hasFacilities(this[filtGyms[i]])
                + hasBoards(this[filtGyms[i]])
                + '<p id="rating">' + "<b>Google Rating:</b> " + this[filtGyms[i]].rating[0] 
                + " (" + this[filtGyms[i]].rating[1] + " reviews)" + '</p>'
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

    if (unchecked("stuCheck") && unchecked("d26Check") && unchecked("d24Check") && unchecked("d22Check")
    && unchecked("d20Check") && unchecked("d18Check") && unchecked("m20Check") && unchecked("m18Check") 
    && unchecked("m16Check") && unchecked("m14Check") && unchecked("m12Check") && unchecked("s120Check") 
    && unchecked("s100Check") && unchecked("s80Check") && unchecked("s60Check") && unchecked("bouCheck")
    && unchecked("topCheck") && unchecked("leaCheck") && unchecked("mooCheck") && unchecked("kilCheck")
    && unchecked("tenCheck") && unchecked("shoCheck") && unchecked("gymCheck") && unchecked("locCheck")
    && unchecked("worCheck") && unchecked("sauCheck") && unchecked("pooCheck") && unchecked("ninCheck")
    && unchecked("cenCheck") && unchecked("wesCheck") && unchecked("norCheck") && unchecked("noreCheck")
    && unchecked("easCheck")) {
        myMap();
    }      
};

function getArraysIntersection(a1) {
    return filtGyms.filter(function(n) { return a1.indexOf(n) !== -1;});
};

function getArray7Intersection(a1) {
    return filt7.filter(function(n) { return a1.indexOf(n) !== -1;});
};

function unchecked(checkId) {
    return document.getElementById(checkId).checked == false;
};

document.getElementById("d26Check").addEventListener("click", () => {
    document.getElementById("d24Check").checked = false;
    document.getElementById("d22Check").checked = false;
    document.getElementById("d20Check").checked = false;
    document.getElementById("d18Check").checked = false;
});

document.getElementById("d24Check").addEventListener("click", () => {
    document.getElementById("d26Check").checked = false;
    document.getElementById("d22Check").checked = false;
    document.getElementById("d20Check").checked = false;
    document.getElementById("d18Check").checked = false;
});

document.getElementById("d22Check").addEventListener("click", () => {
    document.getElementById("d26Check").checked = false;
    document.getElementById("d24Check").checked = false;
    document.getElementById("d20Check").checked = false;
    document.getElementById("d18Check").checked = false;
});

document.getElementById("d20Check").addEventListener("click", () => {
    document.getElementById("d26Check").checked = false;
    document.getElementById("d24Check").checked = false;
    document.getElementById("d22Check").checked = false;
    document.getElementById("d18Check").checked = false;
});

document.getElementById("d18Check").addEventListener("click", () => {
    document.getElementById("d26Check").checked = false;
    document.getElementById("d24Check").checked = false;
    document.getElementById("d22Check").checked = false;
    document.getElementById("d20Check").checked = false;
});

document.getElementById("m20Check").addEventListener("click", () => {
    document.getElementById("m18Check").checked = false;
    document.getElementById("m16Check").checked = false;
    document.getElementById("m14Check").checked = false;
    document.getElementById("m12Check").checked = false;
});

document.getElementById("m18Check").addEventListener("click", () => {
    document.getElementById("m20Check").checked = false;
    document.getElementById("m16Check").checked = false;
    document.getElementById("m14Check").checked = false;
    document.getElementById("m12Check").checked = false;
});

document.getElementById("m16Check").addEventListener("click", () => {
    document.getElementById("m20Check").checked = false;
    document.getElementById("m18Check").checked = false;
    document.getElementById("m14Check").checked = false;
    document.getElementById("m12Check").checked = false;
});

document.getElementById("m14Check").addEventListener("click", () => {
    document.getElementById("m20Check").checked = false;
    document.getElementById("m18Check").checked = false;
    document.getElementById("m16Check").checked = false;
    document.getElementById("m12Check").checked = false;
});

document.getElementById("m12Check").addEventListener("click", () => {
    document.getElementById("m20Check").checked = false;
    document.getElementById("m18Check").checked = false;
    document.getElementById("m16Check").checked = false;
    document.getElementById("m14Check").checked = false;
});

document.getElementById("s120Check").addEventListener("click", () => {
    document.getElementById("s100Check").checked = false;
    document.getElementById("s80Check").checked = false;
    document.getElementById("s60Check").checked = false;
});

document.getElementById("s100Check").addEventListener("click", () => {
    document.getElementById("s120Check").checked = false;
    document.getElementById("s80Check").checked = false;
    document.getElementById("s60Check").checked = false;
});

document.getElementById("s80Check").addEventListener("click", () => {
    document.getElementById("s120Check").checked = false;
    document.getElementById("s100Check").checked = false;
    document.getElementById("s60Check").checked = false;
});

document.getElementById("s60Check").addEventListener("click", () => {
    document.getElementById("s120Check").checked = false;
    document.getElementById("s100Check").checked = false;
    document.getElementById("s80Check").checked = false;
});

document.getElementById("bouCheck").addEventListener("click", () => {
    document.getElementById("topCheck").checked = false;
    document.getElementById("leaCheck").checked = false;
});

document.getElementById("topCheck").addEventListener("click", () => {
    document.getElementById("bouCheck").checked = false;
    document.getElementById("leaCheck").checked = false;
});

document.getElementById("leaCheck").addEventListener("click", () => {
    document.getElementById("bouCheck").checked = false;
    document.getElementById("topCheck").checked = false;
});

document.getElementById("cenCheck").addEventListener("click", () => {
    document.getElementById("wesCheck").checked = false;
    document.getElementById("norCheck").checked = false;
    document.getElementById("noreCheck").checked = false;
    document.getElementById("easCheck").checked = false;
});

document.getElementById("wesCheck").addEventListener("click", () => {
    document.getElementById("cenCheck").checked = false;
    document.getElementById("norCheck").checked = false;
    document.getElementById("noreCheck").checked = false;
    document.getElementById("easCheck").checked = false;
});

document.getElementById("norCheck").addEventListener("click", () => {
    document.getElementById("cenCheck").checked = false;
    document.getElementById("wesCheck").checked = false;
    document.getElementById("noreCheck").checked = false;
    document.getElementById("easCheck").checked = false;
});

document.getElementById("noreCheck").addEventListener("click", () => {
    document.getElementById("cenCheck").checked = false;
    document.getElementById("wesCheck").checked = false;
    document.getElementById("norCheck").checked = false;
    document.getElementById("easCheck").checked = false;
});

document.getElementById("easCheck").addEventListener("click", () => {
    document.getElementById("cenCheck").checked = false;
    document.getElementById("wesCheck").checked = false;
    document.getElementById("norCheck").checked = false;
    document.getElementById("noreCheck").checked = false;
});

// sort gyms in map
var customMarkers = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png', 
'seven.png', 'eight.png', 'nine.png', 'ten.png', 'eleven.png', 'twelve.png', 'thirteen.png', 
'fourteen.png', 'fifteen.png', 'sixteen.png', 'seventeen.png', 'eighteen.png', 'nineteen.png'];

var gymSort = [];
function populateGymSort () {
    for (var i = 1; i < 20; i++) {
        const gym = "gym";
        var gymNum = gym.concat(i.toString());
        gymSort.push(gymNum);
    };
};
populateGymSort();

function sortFn () {
    gymSort = [];
    populateGymSort();

    if (!(unchecked("stuCheck") && unchecked("d26Check") && unchecked("d24Check") && unchecked("d22Check")
    && unchecked("d20Check") && unchecked("d18Check") && unchecked("m20Check") && unchecked("m18Check") 
    && unchecked("m16Check") && unchecked("m14Check") && unchecked("m12Check") && unchecked("s120Check") 
    && unchecked("s100Check") && unchecked("s80Check") && unchecked("s60Check") && unchecked("bouCheck")
    && unchecked("topCheck") && unchecked("leaCheck") && unchecked("mooCheck") && unchecked("kilCheck")
    && unchecked("tenCheck") && unchecked("shoCheck") && unchecked("gymCheck") && unchecked("locCheck")
    && unchecked("worCheck") && unchecked("sauCheck") && unchecked("pooCheck") && unchecked("ninCheck")
    && unchecked("cenCheck") && unchecked("wesCheck") && unchecked("norCheck") && unchecked("noreCheck")
    && unchecked("easCheck"))) {
        gymSort = filtGyms;
    };


    if (document.getElementById("dayBut").checked == true) {
        gymSort.sort( 
            function (a, b) {
                if (this[a].dayPrice < this[b].dayPrice)
                    return -1;
                if (this[a].dayPrice > this[b].dayPrice)
                    return 1;
                return 0;
            }
        );
    };

    if (document.getElementById("mulBut").checked == true) {
        for (var i = 0; i < gymSort.length; i++) {
            if (this[gymSort[i]].tenPrice == null) {
                gymSort.splice(i, 1);
            };
            
        };

        gymSort.splice(7, 1);

        gymSort.sort( 
            function (a, b) {
                if (this[a].tenPrice[0] < this[b].tenPrice[0])
                    return -1;
                if (this[a].tenPrice[0] > this[b].tenPrice[0])
                    return 1;
                return 0;
            }
        );
    };

    if (document.getElementById("seaBut").checked == true) {
        for (var i = 0; i < gymSort.length; i++) {
            if (this[gymSort[i]].seasonPrice == null) {
                gymSort.splice(i, 1);
            };
        };
        
        gymSort.sort( 
            function (a, b) {
                if (this[a].seasonPrice[0] < this[b].seasonPrice[0])
                    return -1;
                if (this[a].seasonPrice[0] > this[b].seasonPrice[0])
                    return 1;
                return 0;
            }
        );
    };

    if (document.getElementById("stuBut").checked == true) {
        for (var i = 0; i < gymSort.length; i++) {
            if (this[gymSort[i]].studentPrice == null) {
                gymSort.splice(i, 1);
            };
        };

        gymSort.splice(2, 1);
        gymSort.splice(5, 1);

        gymSort.sort( 
            function (a, b) {
                if (this[a].studentPrice[0] < this[b].studentPrice[0])
                    return -1;
                if (this[a].studentPrice[0] > this[b].studentPrice[0])
                    return 1;
                return 0;
            }
        );
    }; 

    if (document.getElementById("ratBut").checked == true) {
        gymSort.sort( 
            function (a, b) {
                if (this[a].rating[0] < this[b].rating[0])
                    return 1;
                if (this[a].rating[0] > this[b].rating[0])
                    return -1;
                if (this[a].rating[0] == this[b].rating[0] && this[a].rating[1] > this[b].rating[1])
                    return 1;
                return -1;
            }
        );
    };

    const map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {lat: 1.357, lng: 103.825535},
        zoom: 11.8,
      });

    for (var i = 0; i < gymSort.length; i++) {
        const marker = "marker";
        var markerNum = marker.concat(i.toString());
        markerNum = new google.maps.Marker({
            position: this[gymSort[i]].coords,
            map: map,
            icon: customMarkers[i],
        });
        
        const contentString =
            '<div id="content">' +
                '<h1 id="name">' + this[gymSort[i]].name + '</h1>' 
                + '<a href="' + this[gymSort[i]].website + '">' + "Book your slot" + '</a>'
                + '<a href="' + this[gymSort[i]].socials[0] + '">' + '<img src="fb.png" style="width:25px;height:25px;float:right"/>' + '</a>'
                + '<a href="' + this[gymSort[i]].socials[1] + '">' + '<img src="ig.png" style="width:25px;height:25px;float:right"/>' + '</a>' + '<br>'
                + '<p id="location">' + "<b>Location:</b> " + this[gymSort[i]].location + '</p>'
                + hasMultipass(this[gymSort[i]]) 
                + '<p id="day">' + "<b>Day Pass:</b> $" + this[gymSort[i]].dayPrice + '</p>'
                + hasStudentpass(this[gymSort[i]])
                + hasSeasonpass(this[gymSort[i]]) 
                + hasPromo(this[gymSort[i]])
                + whatWall(this[gymSort[i]])
                + hasFacilities(this[gymSort[i]])
                + hasBoards(this[gymSort[i]])
                + '<p id="rating">' + "<b>Google Rating:</b> " + this[gymSort[i]].rating[0] 
                + " (" + this[gymSort[i]].rating[1] + " reviews)" + '</p>'
            + '</div>';
        
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            pixelOffset: (400,500),
        });

        markerNum.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
        });
    };
}; 