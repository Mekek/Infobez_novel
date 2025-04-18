/* global monogatari */


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'school': 'school_1.png'
});


// Define the Characters
monogatari.characters({
    misha: {
        name: 'Алиса',
        color: '#ff69b4'
    },
    sasha: {
        name: 'Саша',
        color: '#3e8600'
    }
});





monogatari.script({
    'Start': [
        'show scene rgb(0, 0, 0) with fadeIn duration 10 s',
        'a: Привет! Меня зовут Алиса.',
        'b: А я Борис. Рад познакомиться!',
        'a: Хочешь отправиться в приключение?',
        {
			'Choice': {
				'Dialog': 'b: Что ты выберешь, игрок?',
				'Yes': {
					'Text': 'Да, конечно!',
					'Do': 'jump adventure'
				},
				'No': {
					'Text': 'Нет, мне лень.',
					'Do': 'end'
				}
			}
		}		
    ],

    'adventure': [
        'show scene school with fadeIn duration 20s',
        'b: Мы пришли в школу.',
        'a: Тут как-то... страшно.',
        'jump day_1'
    ],

	'day_1': [
		'show scene rgb(0, 0, 0)',
        'b: Мы пришли в школу.',
        'a: Тут как-то... страшно.',
        'end'
    ]

});

