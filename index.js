const Config = require('electron-config');
const config = new Config()
var fs = require('fs')
const {shell} = require('electron')

//shell.openExternal('https://github.com')

// $('.click-link').on('click', function() {
// 	console.log(this.id)
// })

var cfg = config.get('user')

document.getElementById('welcome-text').innerHTML = "Welcome, " + cfg.name +"!";

$('#add-site').on('click', addSite)

function addSite() {
	fs.readFile('cache.config/pass.json', 'utf8', (err, data) => {
		if (data.length == 0) {return}
		data = JSON.parse(atob(data))
		length = Object.keys(data).length
		name = "pass"+length

		if ($('#website').val().slice(0,4) != "www.") {
			let old = $('#website').val()
			$('#website').val("www."+old)
		}

		var $items = $('#website, #username,#pass')
		var obj1 = {}
		var obj = {}

		$items.each(function() {
		    obj[this.id] = $(this).val()
		})

		obj1[name] = obj

		$.extend(data, obj1)

		fs.writeFile('cache.config/pass.json', btoa(JSON.stringify(data)), 'utf8', function () {
			printSites()
			document.getElementById('website').value = ""
			document.getElementById('username').value = ""
			document.getElementById('pass').value = ""
		})
	});
}

function printSites() {
	$('div[id*=pass-instance]').remove()
	fs.readFile('cache.config/pass.json', 'utf8', (err, data) => {
		json = JSON.parse(atob(data))
		$.each(json, function(i) {
		  var div = document.createElement('div')
		  div.setAttribute('id', 'pass-instance')
		  div.innerHTML = '<p class="website-instance">URL: <span onclick="reply_click(\''+json[i].website+'\')" class="click-link">'+json[i].website+'</span> , PASS: '+json[i].pass+'</p>'
		  $('.main-content').append(div)
		});
	});

	// $.getJSON("cache.config/pass.json", function(json) {
	// 	$.each(json, function(i) {
	// 	  var div = document.createElement('div')
	// 	  div.setAttribute('id', 'pass-instance')
	// 	  div.innerHTML = '<p class="website-instance">URL: <span onclick="reply_click(\''+json[i].website+'\')" class="click-link">'+json[i].website+'</span> , PASS: '+json[i].pass+'</p>'
	// 	  $('.main-content').append(div)
	// 	});
	// });	
}

printSites()

function reply_click(link)
{
    shell.openExternal(link)

}