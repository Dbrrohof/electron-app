const Config = require('electron-config');
const dialog = require('electron').remote.dialog 
var fs = require('fs')
const config = new Config()


const openFile = function () {
	let upload = dialog.showOpenDialog({
		title: 'Upload an image to the app',
		buttonLabel: 'Upload XD',
		properties: [ 'openFile' ],
		filters: [
		    {name: 'Cock i ti\'s røv', extensions: ['jpg', 'png', 'gif']},
		  ]
	});

	if (!upload) { return; }

	fs.createReadStream(upload[0]).pipe(fs.createWriteStream('img/image.jpg'));

	location.reload(true)
}

var cfg = config.get('user')

$('#btn').on('click', save)

function save() {

	$('.alert').fadeTo("fast", 1);

	var name = $('#name').val();
	var age = $('#age').val();
	var gender = $('#gender').val();

	config.set('user', {
		name: name,
		age: age,
		gender: gender
	});

	setTimeout(function() {
	    $('.alert').fadeTo('fast', 0);
	}, 2000); // <-- time in milliseconds	
}

if (cfg != undefined) {
	console.log(cfg.name)
	$('#name').attr("value", cfg.name)
	$('#age').attr("value", cfg.age)
	$('#gender').val(cfg.gender)
	$('#image').val(cfg.image)
}

document.getElementById("profile-pic").appendChild(img_create('img/image.jpg'))

function img_create(src, alt, title) {
    var img = document.createElement('img');
    img.src = src;
    img.setAttribute('id', 'profile-image');
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}

$('#upload').on('click', openFile)