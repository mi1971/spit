var DateFormats = {
    short: "DD MMMM YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
};

UI.registerHelper("formatDate", function(datetime, format) {
    if (moment) {
        f = DateFormats[format];
        return moment(datetime).format(f);
    }
    else {
        return datetime;
    }
});

UI.registerHelper("selectedMatching", function(str1, str1) {
    if (str1 == str2)
        return "selected"
    else
        return "";
});