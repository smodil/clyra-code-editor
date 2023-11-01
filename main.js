// API CLYRA CODE EDITOR WRITTN BY OPERATING SYSTE 2023

function code(){
  var code = "code()";
  return code;
}

function run(run_arg){
  
  if (run_arg === "code()"){
    
    var code = document.getElementById("code").value;
    document.getElementById("out").innerHTML = code;
    
  }
  
}


const ClyraCodeEditor = {
  
  setDefaultCode(CODE){
    
    document.getElementById("code").innerHTML = CODE;
    run(code());
    
  }
  
}

function BoxShadow(x, y, blur, color) {

  var box_shadow_build = "box-shadow: " + x + "px " + y + "px " + blur + "px " + color;

  return box_shadow_build;

  console.log("text shadow was created with success");

}

function TextShadow(x, y, blur, color){
  
  var text_shadow_build = "text-shadow: " + x + "px " + y + "px " + blur + "px " + color;
  
  return text_shadow_build;
  
  console.log("text shadow was created with success");
  
}



function TextColor(ColorName){
  
  var text_color_build = "color: " + ColorName;
  
  return text_color_build;
  
  console.log("text Color was setted to " + ColorName);
  
}
function BackgroundColor(ColorName){
  var bg_color_build = "background-color: " + ColorName;
  return bg_color_build;
  console.log("background Color was setted to " + ColorName);
  
}

function Cursor(_cursor){
  
  var cursor = _cursor;
  return cursor;
  
}

const ClyraCodeEditorTheme = {
  
  TitleBar(ARGS){
    document.getElementById("style").innerHTML += "<style>nav{" + ARGS + ";}</style>";
  },
  
  CodeEditorPanel(ARGS){
    document.getElementById("style").innerHTML += "<style>#code{" + ARGS + ";}</style>";
  },
  
  EditorWindow(ARGS) {
    document.getElementById("style").innerHTML += "<style>body{" + ARGS + ";}</style>";
  },
  
  Button(ARGS) {
    document.getElementById("style").innerHTML += "<style>button{" + ARGS + ";}</style>";
  },
  Button_Hover(ARGS) {
    document.getElementById("style").innerHTML += "<style>button:hover{" + ARGS + ";}</style>";
  },
  Button_Press(ARGS) {
    document.getElementById("style").innerHTML += "<style>button:active{" + ARGS + ";}</style>";
  },
  Button_Pressed(ARGS) {
    document.getElementById("style").innerHTML += "<style>button:focus{" + ARGS + ";}</style>";
  }
  
}

function ClyraThemeInfo(Name_theme = "Unknown", ThemeDeveloper = "Unknown"){
  
    document.getElementById("themeInfo").innerHTML = "Theme Name : " + Name_theme + ", Theme Developer : " + ThemeDeveloper;
  
  
}


// test

// var theme = ClyraCodeEditorTheme;
// theme.TitleBar(BackgroundColor("Black"));
// theme.TitleBar(TextColor("Red"));
// theme.TitleBar(TextShadow(0, 0, 5, "red"));
// theme.TitleBar(BoxShadow(3, 3, 10, "red"));
// // theme.TitleBar(Cursor("progress"));

// theme.CodeEditorPanel(BackgroundColor("black"));
// theme.CodeEditorPanel(TextColor("red"));
// theme.CodeEditorPanel(TextShadow(0, 0, 5, "red"));
// theme.EditorWindow(BackgroundColor("black"));
// theme.Button_Hover(BackgroundColor("darkred"));
// theme.Button_Press(BackgroundColor("orangered"));
// theme.Button_Pressed(BackgroundColor("orange"));

// theme.Button(BackgroundColor("red"));
// var code_ = ClyraCodeEditor;
// code_.setDefaultCode("Thanks for using this theme!!!! 2023 Copyright(c) operatingSyste");

// ClyraThemeInfo()

function setTheme() {

  var themeName = prompt("Please enter your theme name : ");

  document.getElementById("th_l").innerHTML = '<script src="/themes/' + themeName + '.js"></script>';

}