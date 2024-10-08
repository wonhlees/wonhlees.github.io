
var $g_jsonData = null;

function loadData() {
    $.getJSON('./assets/data.json', function (data) {
        $g_jsonData = data;
    });
}


function addProEx(idx, jsonData) {
    var title = jsonData.title;
    var company_name = jsonData.company_name;
    var period = jsonData.period;
    var role = jsonData.role;
    var projects = jsonData.projects;
    var state = jsonData.state;
    var loc = jsonData.loc;

    var $div_content = $("<div class='content "+ state +"'></div>");
    $div_content.append('<p>' + title + ", " + period + '</p>');
    $div_content.append('<p class="white-space"><i class="fas fa-building"></i> ' + company_name + '</p>');
    
    if (!!role) {
        $div_content.append('<p class="white-space"><i class="fas fa-keyboard"></i> ' + role + '</p>');
    }

    $.each(projects, function (idx, project) {
        $div_content.append('<p class="deeper-white-space"><i class="fas fa-check"></i> ' + project + '</p>');
    });

    var $div_line_l = $("<div class='line-l'></div>");
    var $div_line_r = $("<div class='line-r'></div>");

    var $div_line_loc = null;
    if (loc == "l") {
        $div_line_loc = $div_line_l;

        $div_line_l.append($div_content);
        $div_line_l.append('<div class="link-line"></div>');
        $div_line_r.addClass('line-e');
    }
    else {
        $div_line_loc = $div_line_r;

        $div_line_r.append('<div class="link-line"></div>');
        $div_line_r.append($div_content);
        $div_line_l.addClass('line-e');
    }

    $div_line_loc.append();

    var $div_line = $("<div class='line'></div>");
    $div_line.append($div_line_l);
    $div_line.append($div_line_r);

    $('#pro-ex').append($div_line);
}

function addAcademicEx(idx, jsonData) {
    var title = jsonData.title;
    var period = jsonData.period;
    var name = jsonData.name;
    var place = jsonData.place;
    var instructor = jsonData.instructor;
    var details = jsonData.details;
    var loc = jsonData.loc;

    var $div_content = $("<div class='content'></div>");
    $div_content.append('<p>' + title + ", " + period + '</p>');

    if (!!name) {
        $div_content.append("<p class='white-space'><i class='fas fa-university'></i> " + name + "</p>");
    }

    if (!!place) {
        $div_content.append("<p class='white-space'><i class='fas fa-map-marker'></i> " + place + "</p>");
    }

    if (!!instructor) {
        $div_content.append("<p class='white-space'><i class='fas fa-book'></i> " + instructor + "</p>");
    }

    $.each(details, function (idx, detail) {
        $div_content.append('<p class="deeper-white-space"><i>- ' + detail + '</i></p>');
    });

    var $div_line_l = $("<div class='line-l'></div>");
    var $div_line_r = $("<div class='line-r'></div>");

    var $div_line_loc = null;
    if (loc == "l") {
        $div_line_loc = $div_line_l;

        $div_line_l.append($div_content);
        $div_line_l.append('<div class="link-line"></div>');
        $div_line_r.addClass('line-e');
    }
    else {
        $div_line_loc = $div_line_r;

        $div_line_r.append('<div class="link-line"></div>');
        $div_line_r.append($div_content);
        $div_line_l.addClass('line-e');
    }

    $div_line_loc.append();

    var $div_line = $("<div class='line'></div>");
    $div_line.append($div_line_l);
    $div_line.append($div_line_r);

    $('#academic-ex').append($div_line);
}

function addEdu(idx, jsonData) {
    var degree_name = jsonData.degree_name;
    var school = jsonData.school;
    var period = jsonData.period;
    var lab = jsonData.lab;
    var loc = jsonData.loc;
    var detail = jsonData.detail;

    var $div_content = $("<div class='content'></div>");
    $div_content.append('<p>' + degree_name + ", " + period + '</p>');
    $div_content.append('<p class="white-space"><i class="fas fa-university"></i> ' + school + '</p>');
    if (!!lab) {
        $div_content.append('<p class="white-space"><i class="fas fa-desktop"></i> ' + lab + '</p>');
    }
    if (!!detail) {
        $div_content.append('<p class="edu-detail">' + detail + '</p>');
    }

    var $div_line_l = $("<div class='line-l'></div>");
    var $div_line_r = $("<div class='line-r'></div>");

    var $div_line_loc = null;
    if (loc == "l") {
        $div_line_loc = $div_line_l;

        $div_line_l.append($div_content);
        $div_line_l.append('<div class="link-line"></div>');
        $div_line_r.addClass('line-e');
    }
    else {
        $div_line_loc = $div_line_r;

        $div_line_r.append('<div class="link-line"></div>');
        $div_line_r.append($div_content);
        $div_line_l.addClass('line-e');
    }

    $div_line_loc.append();

    var $div_line = $('<div class="line"></div>');
    $div_line.append($div_line_l);
    $div_line.append($div_line_r);

    $('#edu').append($div_line);
}

function addOpenSrc(idx, jsonData) {
    var img_name = jsonData.img_name;
    
    var $div_logo = $('<div class="open-src-logo"><img src="./assets/' + img_name + '"></div>');
    $('#open-src-content').append($div_logo);
}

function addTechStack(idx, jsonData) {
    var img_name = jsonData.img_name;
    
    var $div_logo = $('<div class="tech-stack-logo"><img src="./assets/' + img_name + '"></div>');
    $('#tech-stack-content').append($div_logo);
}

function addPaper(id, jsonData) {
    var author = jsonData.author;
    var title = jsonData.title;
    var journal = jsonData.journal;
    var link = jsonData.link;
    
    var $div_paper = $('<div class="paper"></div>');
    $div_paper.append($('<p>' + author + '</p>'));
    if (link !== undefined && link !== "") {
        $div_paper.append($('<p class="title"><a target="_blank" href="' + link + '">"' + title + '"</a></p>'));
    }
    else {
        $div_paper.append($('<p class="title">"' + title + '"</p>'));
    }
    $div_paper.append($('<p class="journal">' + journal + '</p>'));

    $(id).append($div_paper);
}
function addInternationalJournal(idx, jsonData) {
    addPaper('#inter_jnl', jsonData);
}
function addDomesticJournal(idx, jsonData) {
    addPaper('#dome_jnl', jsonData);
}
function addConference(idx, jsonData) {
    addPaper('#conf', jsonData);
}

function addPatent(id, jsonData) {
    var author = jsonData.author;
    var title = jsonData.title;
    var date = jsonData.date;
    var link = jsonData.link;
    
    var $div_patent = $('<div class="patent"></div>');
    $div_patent.append($('<p>' + author + '</p>'));
    if (link !== undefined && link !== "") {
        $div_patent.append($('<p class="title"><a target="_blank" href="' + link + '">"' + title + '"</a></p>'));
    }
    else {
        $div_patent.append($('<p class="title">"' + title + '"</p>'));
    }
    $div_patent.append($('<p>' + date + '</p>'));

    $(id).append($div_patent);
}
function addInternationalPatent(idx, jsonData) {
    addPatent('#inter_pat', jsonData);
}
function addDomesticPatent(idx, jsonData) {
    addPatent('#dome_pat', jsonData);
}

function addAwards(id, jsonData) {
    var text = jsonData;
    $('#awards').append($('<div class="award"><p>' + text + '</p></div>'))
}


function renderData() {
    if ($g_jsonData == null) {
        setTimeout(renderData, 500);
        return;
    }

    $('body').removeClass('hidden');

    $.each($g_jsonData.pro_ex, addProEx);
    $.each($g_jsonData.academic_ex, addAcademicEx);
    $.each($g_jsonData.edu, addEdu);
    $.each($g_jsonData.open_src, addOpenSrc);
    $.each($g_jsonData.tech_stack, addTechStack);
    $.each($g_jsonData.inter_jnl, addInternationalJournal);
    $.each($g_jsonData.dome_jnl, addDomesticJournal);
    $.each($g_jsonData.conf, addConference);
    $.each($g_jsonData.inter_pat, addInternationalPatent);
    $.each($g_jsonData.dome_pat, addDomesticPatent);
    $.each($g_jsonData.awards, addAwards);
}