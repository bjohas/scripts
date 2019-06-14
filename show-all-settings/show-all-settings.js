function showAllSettings() {
  var x = document.getElementsByClassName("_board_settings_link");
  if (x) {
    var settings = x[0];
    var url = settings.href;
    url = url.replace("settings","");
    addSetting(settings,url,"automation_rules","A");
    addSetting(settings,url,"powerups","P");
    addSetting(settings,url,"workflow","W");
    addSetting(settings,url,"card_template","C");
    addSetting(settings,url,"card_types","T");
  }
};

function addSetting(insertionPt,uu,ext,letter) {
  var el = document.createElement('a');
  el.innerHTML = letter;
  el.classList.add('kt-right-pane-element');
  el.classList.add('_board_settings_link');
  el.href = uu + ext;
  insertionPt.parentNode.insertBefore(el, insertionPt.nextSibling);
};
