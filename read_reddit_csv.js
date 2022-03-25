

function read_data(){
    var file = $.get("data/reddit_wsb.csv")
    var reader = new FileReader();
    content = reader.readAsText(file);
    console.log(content)
}
