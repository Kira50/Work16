alert('Hello, world!');
			function moveon() {
				var answer = confirm("Ready to moveon?");
				if (answer) window.location = "https://yandex.ru/";
			}
			moveon();
			setTimeout(moveon, 6000);