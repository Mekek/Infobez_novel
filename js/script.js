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
	'alarm': 'alarm-clock-digital.mp3',
	'notification': 'iphone_message.mp3',
	'door': 'door.mp3',
	'iphone_ringtone': 'iphone_call.mp3',
	'mortal_kombat': 'mortal_kombat.mp3',
	'click': 'click.mp3',
	'glitch': 'glitch.mp3',
	'rewind': 'rewind.mp3',
	'fanfare': 'fanfare.mp3'

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'restart': 'restart.png',
    'morning_room': '1.png',
	'alarm': '2.png', 
	'waking_up': '3.png', 
	'picking_phone': '4.png',
	'phone_flash': '5.png', 
	'astonishment': '7.png',
	'packing_a_backpack': '8-1.png',
	'pochita': '9.png',
	'walking_1': '10.png', 
	'walking_2': '11.png',
	'found_flash_drive': 'found_flash_drive.png',
	'flash_drive': 'flash_drive.png',
	'notebook_turned_on': 'notebook_turned_on.png',
	'plugging_in': 'plugging_in.png',
	'laptop_broken': 'laptop_broken.png', 
	'laptop_blocked': 'laptop_blocked.png',
	'blocking_reaction': '13.png',
	'arriving_to_school': 'arriving_to_school.png',
	'came_to_teacher': 'came_to_teacher.png',
	'return_book': 'return_book.png',
	'came_to_teacher_2': 'came_to_teacher_2.png',
	'showing_flash': 'showing_flash.png',
	'teacher_explanation': 'teacher_explanation.png',
	'teacher_explanation_2': 'teacher_explanation_2.png',
	'task_1_completed': 'task_1_completed.png',
	'skip_flash_drive': 'skip_flash_drive.png',
	'loop_realizing': '22.png',
	'angry_packing': 'angry_packing.png',
	'playing_games': 'playing_games.png',
	'game_message': 'game_message.png',
	'enter_data_form': 'enter_data_form.png',
	'prize_scam_explanation': '28.png',
	'prize_scam_joke': '29.png',
	'saw_message': '30.png',
	'new_message': 'new_message.png',
	'cute_girl': 'cute_girl.png',
	'deepfake': 'deepfake.png',
	'search_photo': '32.png',
	'woman_meme': 'woman_meme.png',
	'woman_meme_reaction': '33.png',
	'woman_explanation': '31.png',
	'homework': 'homework.png',
	'gosuslugi': 'gosuslugi.png',
	'playing_games_2': 'playing_games_2.png',
	'game_chat': 'game_chat.png',
	'remote_access_hacked': 'remote_access_hacked.png',
	'researching': 'researching.png',
	'researching_2': 'researching_2.png',
	'correct_choice_4': 'correct_choice_4.png',
	'playing_games_choice': 'playing_games_choice.png',
	'packing_backpack_2': 'packing_backpack_2.png',
	'farewell': 'farewell.png',
	'sasha_scared': 'sasha_scared.png',
	'disturbance': 'disturbance.png',
	'block_gamer': 'block_gamer.png',
	'mom_check_phone': 'mom_check_phone.png',
	'mom_check_phone_2': 'mom_check_phone_2.png',
	'phone_call_incoming': 'phone_call_incoming.png',
	'phone_call_incoming_1': 'phone_call_incoming_1.png',
	'mom_brought_food': 'mom_brought_food.png',
	'tech_support_fail': 'tech_support_fail.png',
	'linux_response': 'linux_response.png',
	'linux_response_2': 'linux_response_2.png',
	'tech_support_explanation': 'tech_support_explanation.png',
	'correct_choice_5': 'correct_choice_5.png',
	'gosuslugi_letter': 'gosuslugi_letter.png',
	'fishing_reaction': 'fishing_reaction.png',
	'gosuslugi_site': 'gosuslugi_site.png',
	'gosuslugi_enter': 'gosuslugi_enter.png',
	'misha_preparing_to_eat': 'misha_preparing_to_eat.png',
	'mark_spam': 'mark_spam.png',
	'gosuslugi_explanation': 'gosuslugi_explanation.png',
	'evening_home': 'evening_home.png',
	'mom_phone_on_table': 'mom_phone_on_table.png',
	'misha_answer_mom_phone': 'misha_answer_mom_phone.png',
	'misha_allo': 'misha_allo.png',
	'sber_misha_reaction': 'sber_misha_reaction.png',
	'sms_code_received': 'sms_code_received.png',
	'code_dictation': 'code_dictation.png',
	'mom_fail_reaction': 'mom_fail_reaction.png',
	'misha_recall': 'misha_recall.png',
	'misha_meet_mom': 'misha_meet_mom.png',
	'rules_1': 'rules_1.png',
	'rules_2': 'rules_2.png',
	'rules_3': 'rules_3.png',
	'qr': 'qr.png',
	'morning_window': 'morning_window.png',
	'walking_to_mom': 'walking_to_mom.png',
	'evening_in_room': 'evening_in_room.png',
	'achievements': 'achievements.png'
	
});


// Define the Characters
monogatari.characters({
    misha: {
        name: 'Миша',
        color: '#ff6d17'
    },
    sasha: {
        name: 'Саша',
        color: '#3e8600'
    },
	levi: {
		name: 'Леви Аккерманович',
		color: '#9a9a9a'
	},
	baby: {
		name: 'Baby_Candy_17',
		color: '#fe5d8b'
	},
	proGamer2025: {
		name: 'proGamer2025',
		color: '#ffd966'
	},
	bankTechSupport: {
		name: 'Техподдержка Microsoft',
		color: '#23c0fa'
	},
	mom: {
		name: 'Мама',
		color: '#92cbff'
	},
	security: {
		name: 'Служба безопасности  банка',
		color: '#7bb960'
	}

});





monogatari.script({
	'Start': [
		'show scene morning_window',
		'centered Это обычное утро.',
		'show scene morning_room with fadeIn',
		'centered Почти...',
		'show scene alarm with fadeIn',
		'play sound alarm',
		'Прозвенел будильник.',
		'stop sound alarm',
		'show scene waking_up with fadeIn',
		'misha: Суббота! Можно было бы поспать. Но... учебник.',
		'show scene picking_phone with fadeIn',
		'Он тянется к телефону, экран вспыхивает необычно ярким светом.',
		'play sound notification',
		'show scene phone_flash with fadeIn',
		'Появляется сообщение: «Добро пожаловать в Цифровую Петлю. Пройди испытания. Ошибки будут перезапускать день.»',
		'show scene astonishment with fadeIn',
		'misha: Это шутка? Или я опять не выключил вайфай на ночь и какая-то игра мне спам шлет?',
		'show scene loop_realizing with fadeIn',
		'Он откладывает телефон, потом задумчиво смотрит на экран. Пожимает плечами.',
		'show scene packing_a_backpack with fadeIn',
		'misha: Ладно, все равно собирался сходить в школу – отдать учебник информатики Леви Аккермановичу. А потом к Саше, погонять пару каток.',
		'Он кладет ноутбук в рюкзак и выходит из комнаты.',
		'show scene pochita with fadeIn',
		'misha: Пока, дружок!',
		'play sound door',
		'show scene rgb(0, 0, 0) with fadeIn',
		'centered Казалось бы — обычный день... Но что-то подсказывало Мише, что сегодня все пойдет не по плану.',
		'jump Park'
	],
	'Restart': [
		'show scene restart with fadeIn duration 10s',
		'play sound rewind',
		'centered Перезагрузка...',
		'show scene alarm with fadeIn',
		'play sound alarm',
		'Прозвенел будильник... Снова???',
		'show scene waking_up with fadeIn',
		'misha: Снова? Где-то я уже это видел.',
		'show scene picking_phone with fadeIn',
		'Он берет телефон, экран вспыхивает необычно ярким светом.',
		'play sound notification',
		'show scene phone_flash with fadeIn',
		'На экране телефона появляется сообщение: «Перезагрузка завершена. Давай по-новой...»',
		'show scene astonishment with fadeIn',
		'misha: Это пранк? Неужели я застрял во временной петле!?',
		'show scene loop_realizing with fadeIn',
		'Он откладывает телефон и садится.',
		'show scene angry_packing with fadeIn',
		'misha: Ладно, попробую снова. Сначала дойду до школы, а потом пойду к Саше.',
		'Он кладет ноутбук в рюкзак и выходит из комнаты.',
		'show scene pochita with fadeIn',
		'misha: Пока, дружок!',
		'play sound door',
		'show scene rgb(0, 0, 0) with fadeIn',
		'jump Park'
	],

	'Park': [
		'show scene walking_1 with fadeIn duration 5s',
		'Школа находится совсем близко, нужно лишь пройти через парк.',
		'show scene walking_2 with fadeIn duration 5s',
		'По пути в школу, в парке, Миша замечает что-то блестящее на дорожке.',
		'show scene flash_drive with fadeIn',
		'На асфальте лежит новенькая USB-флешка черного цвета.',
		'show scene found_flash_drive with fadeIn',
		'Как только Миша замечает флешку, все вокруг резко меняется. Дружелюбное солнечное утро в момент перестает казаться таковым.',
		'misha: Флешка? Просто так лежит?',
		'show scene flash_drive with fadeIn',
		{
			'Choice': {
				'Dialog': 'Хмм... Интересно, что на ней...',
				'PlugIn': {
					'Text': 'Вставить флешку в ноутбук прямо сейчас',
					'Do': 'jump PlugFlashDriveIn'
				},
				'GiveToTeacher': {
					'Text': 'Показать флешку учителю информатики',
					'Do': 'jump GiveToTeacher'
				},
				'SkipFlashDrive': {
					'Text': 'Пройти мимо.',
					'Do': 'jump SkipFlashDrive'
				}
			}
		}
	],
	'PlugFlashDriveIn': [
		'show scene notebook_turned_on',
		'Миша осмотрелся и увидел поблизости скамейку. Он сел на неё и достал ноутбук.',
		'show scene plugging_in',
		'Он вставил флешку.',
		'show scene laptop_broken',
		'play sound glitch',
		'Вдруг экран начинает мерцать, словно новогодняя ёлка.',
		'show scene laptop_blocked',
		'Появилась надпись: «Данные устройства были зашифрованы, для расшифровки переведите 100$ на биткойн-кошелёк.»',
		'show scene blocking_reaction',
		'misha: АААА! Да вы издеваетесь?! Только не это!',
		'jump Restart'
	],

	'GiveToTeacher': [
		'show scene found_flash_drive',
		'misha: Лучше покажу учителю. Кто знает, что там внутри...',
		'Миша положил флешку в карман и продолжил свой путь к школе.',
		'show scene arriving_to_school',
		'misha: А вот и школа! Зашли и вышли, приключение на 15 минут.',
		'show scene came_to_teacher',
		'misha: Доброе утро, Леви Аккерманович!',
		'show scene return_book',
		'levi: Привет, Миша. Возврат учебника?',
		'show scene showing_flash',
		'misha: Да, и вот ещё... я нашёл флешку в парке. Решил не проверять, что на ней, это показалось небезопасным.',
		'show scene teacher_explanation',
		'levi: Молодец, что не стал вставлять её в компьютер. Это очень опасно! На таких флешках часто бывают вирусы-шифровальщики, которые блокируют все данные на компьютере и требуют выкуп. Я передам её специалистам.',
		'show scene teacher_explanation_2',
		'levi: Запомни золотое правило: НИКОГДА не подключай к своим устройствам непроверенные носители данных. Даже если они выглядят безобидно.',
		'show scene task_1_completed',
		'misha: Быстро управился!',
		'jump SashaHouse'
	],
	'SkipFlashDrive': [
		'show scene found_flash_drive',
		'misha: Не хочу наживать неприятности. Пойду своей дорогой.',
		'show scene skip_flash_drive',
		'Миша продолжил свой путь к школе.',
		'show scene arriving_to_school',
		'misha: А вот и школа! Зашли и вышли — приключение на 15 минут.',
		'show scene came_to_teacher',
		'misha: Доброе утро, Леви Аккерманович!',
		'show scene return_book',
		'levi: Привет, Миша. Возврат учебника?',
		'misha: Да, возвращаю в целости и сохранности.',
		'show scene came_to_teacher_2',
		'levi: Спасибо!',
		'show scene task_1_completed',
		'misha: Быстро управился!',
		'jump SashaHouse'
	],

	'SashaHouse': [
		'show scene rgb(0, 0, 0) with fadeIn duration 10s',
		'centered Некоторое время спустя...',
		'show scene playing_games',
		'Миша и Саша запускают игру на компьютере. Во время загрузки всплывает яркое окно.',
		'show scene game_message',
		'«ПОЗДРАВЛЯЕМ! ТЫ ВЫИГРАЛ iPhone 27 Ultra Pro Max! Для получения приза введи свои данные. Осталось всего 3 приза!»',
		'show scene prize_scam_explanation',
		'misha: iPhone 27 Ultra Pro Max? Серьёзно? Да кому я нужен? iPhone 27 ещё даже не вышел :)',
		'show scene enter_data_form',
		{
			'Choice': {
				'Dialog': 'Как поступить?',
				'EnterPersonalData': {
					'Text': 'Ввести данные — вдруг повезло?',
					'Do': 'jump EnterPersonalData'
				},
				'CheckSite': {
					'Text': 'Проверить сайт — это точно официальный конкурс?',
					'Do': 'jump CheckSite'
				}
				}
		}
	],

	'EnterPersonalData': [
		'Миша вводит свои данные в форму. Злоумышленники вносят его данные в базу и начинают ежеминутно звонить с рекламой, а на почту приходит спам. Семья получает SMS о микрозаймах на его имя.',
		'jump Restart'
	],

	'CheckSite': [
		'misha: Так, давай проверим этот сайт. Хмм... Браузер пишет, что соединение незащищённое. Домен какой-то странный: prize-winner-iphone.xyz. Это даже не apple.com! Пфф, фейк фейковый.',
		'show scene prize_scam_explanation',
		'sasha: А ты как понял?',
		'misha: Смотри: во-первых, официальные конкурсы проводятся на официальных сайтах. Во-вторых, они никогда не просят сразу все данные. В-третьих, обрати внимание на наличие безопасного соединения. Если соединение безопасное, то в адресной строке должен находиться символ замочка, а также должно быть написано <span style="color:red">https</span> вместо <span style="color:red">http</span>.',
		'show scene prize_scam_joke',
		'misha: В любом случае, мой сяоми — топ за свои деньги)',
		'jump CandyBaby'
	],
	'CandyBaby': [
		'show scene rgb(0, 0, 0) with fadeIn duration 10s',
		'show scene homework',
		'Выиграв пару каток, ребята решили сделать домашку.',
		'show scene new_message',
		'play sound notification',
		'Неожиданно Мише приходит сообщение от незнакомого профиля...',
		'show scene saw_message',
		'baby: Привет! Я видела тебя в школе, ты такой милый... давай познакомимся? Пришли больше своих фото!',
		'show scene cute_girl',
		'На фото профиля — красивая девушка, явно модельной внешности.',
		{
			'Choice': {
				'Dialog': 'Как поступить?',
				'SendPhoto': {
					'Text': 'Обрадоваться и отправить своё фото — наконец-то повезло!',
					'Do': 'jump SendPhoto'
				},
				'CheckProfilePhoto': {
					'Text': 'Проверить фото через поиск по картинкам в браузере',
					'Do': 'jump CheckProfilePhoto'
				},
				'AnswerByMeme': {
					'Text': 'Ответить мемом: «АААААА, ЖЕНЩИНА!»',
					'Do': 'jump AnswerByMeme'
				}
			}
		}
	],
	'SendPhoto': [
		'show scene saw_message',
		'Миша отправляет своё селфи и продолжает общение.',
		'show scene deepfake',
		'Через десять минут он обнаруживает, что в школьный чат скинули deepfake-видео, где он танцует под песню Сигма-бой.',
		'jump Restart'
	],

	'CheckProfilePhoto': [
		'show scene search_photo',
		'misha: Так-так, давай проверим, кто ты на самом деле...',
		'misha: Ага! То же самое фото у 483 профилей. Да это даже не человек, а стоковое фото модели!',
		'Он блокирует профиль и сообщает о нем как о мошенническом.',
		'show scene prize_scam_explanation',
		'misha: Такие фейковые аккаунты создают, чтобы выманить личные фото или данные.',
		'misha: Потом их используют для шантажа или создания deepfake — это когда твое лицо вставляют в видео с неприятным содержанием.',
		'show scene rgb(0, 0, 0) with fadeIn duration 10s',
		'jump RemoteAccess'
	],

	'AnswerByMeme': [
		'show scene woman_meme',
		'Миша скинул в чат мем.',
		'show scene woman_meme_reaction',
		'Быстро приходит ответ с явным раздражением.',
		'baby: Я просто хотела познакомиться... Может, фото скинешь? Я тебе потом ещё своих пришлю...',
		'show scene woman_explanation',
		'misha: Странно она реагирует. Обычная девчонка обиделась бы на такой мем или посмеялась. А эта настойчиво продолжает выпрашивать фото.',
		'show scene search_photo',
		'Миша проверяет фото профиля через поиск по картинкам в браузере.',
		'misha: Так и знал! Это фейк! Фото используется в сотнях профилей.',
		'Миша блокирует аккаунт и сообщает о нём как о мошенническом.',
		'show scene woman_explanation',
		'misha: Даже шутливый ответ может помочь распознать мошенника — по его реакции. Настоящий человек отреагирует естественно, а мошенник будет упорно добиваться своей цели.',
		'show scene rgb(0, 0, 0) with fadeIn duration 10s',
		'Очередной урок усвоен, что же будет дальше?',
		'jump RemoteAccess'
	],

	// === СЦЕНА 4: УДАЛЁННЫЙ ДОСТУП ===

	'RemoteAccess': [
		'show scene rgb(0, 0, 0)',
		'Наконец, Миша и Саша покончили с домашкой.',
		'play sound mortal_kombat',
		'show scene playing_games_2 with fadeIn',
		'После этого Миша и Саша решили поиграть в онлайн-игры.',
		'show scene game_chat with fadeIn',
		'Чат игры:',
		'proGamer2025: Привет! Хочешь крутые скины и оружие? Скачай программу AnyAdmin, я тебе всё бесплатно настрою! Просто дай мне ID и пароль от программы.',
		'show scene playing_games_choice',
		'stop sound mortal_kombat',
		'sasha: Вау! Давай попробуем!',
		{
			'Choice': {
				'Dialog': 'Что сделать?',
				'DownloadAndSend': {
					'Text': 'Скачать программу и передать ID с паролем',
					'Do': 'jump RemoteHacked'
				},
				'GoogleIt': {
					'Text': 'Поискать информацию о программе в интернете',
					'Do': 'jump RemoteSafe'
				}
			}
		}
	],

	'RemoteHacked': [
		'show scene remote_access_hacked with fadeIn',
		'Миша скачивает программу и передаёт данные.',
		'Через несколько минут курсор начинает сам двигаться по экрану.',
		'Открываются папки, затем браузер с сохранёнными паролями.',
		'С банковской карты родителей списываются деньги.',
		'jump Restart'
	],

	'RemoteSafe': [
		'show scene researching with fadeIn',
		'misha: Давай проверим, о какой программе идет речь, мало ли что...',
		'show scene researching_2 with fadeIn',
		'misha: Так, AnyAdmin... О, это программа для удалённого доступа к компьютеру!',
		'misha: Если я дам ему ID и пароль, он сможет управлять моим компьютером как будто сидит за ним!',
		'show scene sasha_scared',
		'sasha: Ого, это же опасно!',
		'show scene disturbance',
		'misha: Ещё как! Он сможет видеть все наши файлы, украсть пароли, зайти в социальные сети и даже банковские приложения родителей, если они сохранены.',
		'show scene block_gamer',
		'Миша блокирует пользователя в игре и сообщает о нём администрации.',
		'show scene correct_choice_4 with fadeIn',
		'centered Правильный выбор!',
		'show scene packing_backpack_2',
		'misha: Ладно, Саш, мне пора.',
		'sasha: Уже уходишь?',
		'misha: Ага, мама сказала не задерживаться.',
		'sasha: Окей, я тебя провожу.',
		'show scene farewell',
		'sasha: До встречи в школе!',
		'misha: Да, пока!',
		'play sound door',
		'jump bankTechSupportCall' 
	],

	// === СЦЕНА 5: ЗВОНОК ИЗ «ТЕХПОДДЕРЖКИ» ===

	'bankTechSupportCall': [
		'show scene rgb(0, 0, 0)',
		'centered Миша вернулся домой. Он был озадачен, никогда в течение одного дня у него не было столько странных событий.',
		'mom: Миша, ужин готов!',
		'show scene mom_brought_food with fadeIn',
		'Мама зашла в комнату к Мише и принесла ужин, который выглядел очень аппетитно.',
		'show scene misha_preparing_to_eat with fadeIn',
		'Миша поблагодарил маму за ужин и включил на компьютере стрим любимой игры.',
		'play sound iphone_ringtone',
		'show scene phone_call_incoming with fadeIn',
		'Однако, его прервал звонок от незнакомого номера.',
		'show scene phone_call_incoming_1 with fadeIn',
		'stop sound iphone_ringtone',
		'Миша недовольно взял трубку.',
		'bankTechSupport: Добрый день. Это служба техподдержки Microsoft. Мы обнаружили, что ваш компьютер заражён опасным вирусом. Он пока не активен, но скоро может привести к потере всех данных. Нам нужен ваш пароль для доступа к системе, чтобы устранить проблему удалённо.',
		{
			'Choice': {
				'Dialog': 'Что сделать?',
				'GivePassword': {
					'Text': 'Диктовать пароль – нужно срочно спасти компьютер!',
					'Do': 'jump bankTechSupportFail'
				},
				'AskParents': {
					'Text': '«Я сначала родителей спрошу»',
					'Do': 'jump bankTechSupportSafe'
				},
				'LinuxJoke': {
					'Text': '«Я на Linux. До свидания»',
					'Do': 'jump bankTechSupportLinux'
				}
			}
		}
	],

	'bankTechSupportFail': [
		'Миша диктует пароль.',
		'show scene tech_support_fail',
		'Неожиданно он обнаруживает, что все его аккаунты взломаны, а экран компьютера заполнен мемами и стикерами.',
		'jump Restart'
	],

	'bankTechSupportSafe': [
		'misha: Знаете, я сначала родителей спрошу. Они мне компьютер покупали и следят за его обслуживанием.',
		'bankTechSupport: Но это срочно! Через 30 минут вирус активируется и повредит все ваши данные!',
		'misha: Тем более надо спросить родителей. Они всё равно дома.',
		'Звонок резко обрывается.',
		'show scene mom_check_phone',
		'Миша показывает телефон маме.',
		'mom: Сынок, это точно мошенники. Microsoft никогда не звонит таким образом. Это называется вишинг — телефонное мошенничество. Хорошо, что ты сначала спросил меня.',
		'misha: Получается, настоящая поддержка всегда даёт время подумать и не торопит с решениями?',
		'show scene mom_check_phone',
		'mom: Именно! Срочность — главный признак мошенников. Они не хотят, чтобы ты успел обдумать ситуацию или посоветоваться.',
		'jump Gosuslugi'
	],

	'bankTechSupportLinux': [
		'show scene linux_response',
		'misha: Я на Linux. До свидания.',
		'Пауза на другом конце.',
		'bankTechSupport: Он... он свой...',
		'show scene linux_response_2',
		'Звонок обрывается.',
		'show scene tech_support_explanation',
		'Миша пишет Саше, чтобы рассказать о произошедшем.',
		'sasha: А что это было в итоге?',
		'misha: Это называется вишинг – телефонное мошенничество. Они звонят и пытаются выманить пароли или заставить установить вредоносное ПО. Microsoft никогда не звонит пользователям сама и не просит пароли по телефону.',
		'sasha: А причём тут Linux?',
		'misha: Это была проверка. Microsoft обслуживает Windows, а Linux – другая операционная система. Настоящий специалист знал бы эту разницу!',
		'show scene correct_choice_5 with fadeIn',
		'jump Gosuslugi'
	],

	// Сцена 6: Письмо от Госуслуг
	'Gosuslugi': [
		'show scene rgb(0, 0, 0)',
		'centered Миша решил проверить электронную почту.',
		'show scene gosuslugi_letter with fadeIn',
		'В папке входящих новое письмо с пометкой <span style="color:red">СРОЧНО</span>.',
		'centered <b>Электронная почта:</b>',
		'centered <b>Отправитель:</b> gosuslugi-security@gosulug1.ru',
		'centered <b>Тема:</b> ВНИМАНИЕ! Подтвердите вход в Госуслуги, иначе ваш аккаунт будет заблокирован!',
		'centered Уважаемый пользователь! Мы обнаружили подозрительную активность в вашем аккаунте на портале Госуслуг.',
		'centered Если это не вы входили в систему, срочно перейдите по ссылке и подтвердите свои данные.',
		'centered В противном случае ваш аккаунт будет заблокирован в течение 24 часов!',
		'show scene gosuslugi with fadeIn',
		'misha: Ой, что-то с Госуслугами... Мама говорила, что там все мои документы. Надо срочно проверить!',
		{
			'Choice': {
				'GosuslugiEnter': {
					'Text': 'Быстро перейти по ссылке и ввести логин с паролем',
					'Do': 'jump GosuslugiEnter'
				},
				'GosuslugiCheck': {
					'Text': 'Внимательно проверить адрес отправителя и адрес ссылки',
					'Do': 'jump GosuslugiCheck'
				}
			}
		} 
	],

	'GosuslugiEnter': [
		// 'play sound click', // click sound
		'Миша кликает на кнопку и попадает на сайт, очень похожий на Госуслуги.',
		'show scene gosuslugi_enter',
		'Он вводит логин и пароль...',
		'Через пару часов выясняется, что от его имени подали заявление на кредит в 300 тысяч рублей.',
		'Также злоумышленники получили доступ к его медицинским и личным данным.',
		'jump Restart'
	],

	'GosuslugiCheck': [
		'misha: Так, а что у нас с адресом?',
		'misha: «gosuslugi-security@gosulug1.ru»... Стоп-стоп-стоп! Это же неправильно написано — «gosulug1», а не «gosuslugi»!',
		'misha: И вообще, адрес Госуслуг должен заканчиваться на «gosuslugi.ru».',
		'show scene gosuslugi_site',
		'Он наводит курсор на кнопку в письме, не нажимая.',
		'Рядом с кнопкой появился настоящий адрес ссылки: http://fake-gosuslugi.site/steal_data.php',
		'show scene fishing_reaction',
		'misha: Ого! Да это же фишинг!',
		'misha: Пытаются украсть данные от Госуслуг. А потом могут оформить кредит или получить доступ к моим документам!',
		'show scene mark_spam',
		'Миша отмечает письмо как спам и удаляет его.',
		'show scene gosuslugi_explanation',
		'misha: Надо запомнить: государственные сервисы никогда не присылают таких писем с требованием "срочно ввести данные".',
		'misha: А перед тем как куда-то вводить пароли, всегда нужно проверять адрес сайта.',
		'centered Правильный выбор!',
		'jump SMScodeScam'
	],

	// === СЦЕНА 7: ВЫМАНИВАНИЕ SMS-КОДА ===

	'SMScodeScam': [
		'show scene evening_home with fadeIn',
		'centered Вечер. Миша смотрит фильм.',
		'play sound iphone_ringtone',
		'Звонит телефон мамы, лежащий на столе.',
		'show scene mom_phone_on_table with fadeIn',
		'mom: Миша, можешь ответить? Я готовлю и не могу подойти к телефону!',
		'stop sound iphone_ringtone',
		'show scene misha_answer_mom_phone',
		'Миша берет трубку.',
		'show scene misha_allo',
		'misha: Алло?',
		'security: Добрый вечер. Это служба безопасности Сбербанка. В данный момент с вашей карты пытаются списать 50 тысяч рублей. Это вы проводите операцию?',
		'show scene sber_misha_reaction',
		'misha: Нет! Не я!',
		'security: Для отмены операции нам нужен код подтверждения, который сейчас придет на ваш телефон. Продиктуйте его, пожалуйста, быстрее!',
		'show scene sms_code_received with fadeIn',
		'centered На телефон мамы приходит СМС с кодом.',
		{
			'Choice': {
				'Dialog': 'Что сделать?',
				'GiveSMSCode': {
					'Text': 'Быстро продиктовать код — нужно спасти мамины деньги!',
					'Do': 'jump SMScodeFail'
				},
				'CallMom': {
					'Text': 'Позвать маму',
					'Do': 'jump SMScodeCallMom'
				},
				'CallBankYourself': {
					'Text': 'Сказать, что перезвонишь сами по официальному номеру банка',
					'Do': 'jump SMScodeSafe'
				}
			}
		}
	],

	'SMScodeFail': [
		'show scene code_dictation',
		'misha: Код... 5875.',
		'show scene mom_fail_reaction',
		'Через пару минут мама обнаруживает, что с её счёта пропали все деньги.',
		'jump Restart'
	],

	'SMScodeSafe': [
		'show scene misha_recall',
		'misha: Извините, но я лучше перезвоню вам сам по официальному номеру банка с обратной стороны карты.',
		'security: Нет времени! Деньги сейчас уйдут! Быстрее диктуйте код!',
		'misha: Я всё равно сначала спрошу маму.',
		'show scene walking_to_mom',
		'Миша идет к маме. Звонок резко обрывается.',
		'jump SMScodeCallMom'
	],

	'SMScodeCallMom': [
		'show scene misha_meet_mom with fadeIn',
		'misha: Мама!',
		'mom: Что случилось?',
		'misha: Звонили из банка, говорили, что с твоей карты пытаются снять деньги. Требовали продиктовать код из СМС.',
		'mom: Это точно мошенники! Этот код — для входа в банк. Если бы ты его продиктовал, они бы украли все деньги.',
		'misha: Но номер был похож на банковский...',
		'mom: Сейчас мошенники могут подменять номера, чтобы выглядело как официальный звонок банка. Поэтому всегда надо перезванивать самим по номеру с обратной стороны карты или из приложения.',
		'show scene correct_choice_6 with fadeIn',
		'jump Final'
	],
	'Final': [
		'show scene rgb(0, 0, 0)',
		'centered Наконец-то день подошел к концу.',
		'show scene evening_in_room with fadeIn',
		' Миша решил, что ему пора отдохнуть от всего, что произошло сегодня.',
		'show scene rgb(0, 0, 0)',
		'Наконец, он отправился спать.',
		'show scene morning_window',
		'centered Утро.',
		'show scene alarm with fadeIn',
		'play sound alarm',
		'Прозвенел будильник.',
		'show scene waking_up with fadeIn',
		'Проснувшись, Миша почувствовал, что что-то изменилось.',
		'show scene picking_phone with fadeIn',
		'play sound notification',
		'show scene phone_flash',
		'Он берет телефон и видит новое уведомление: «Поздравляем. Цикл завершён. Вы прошли все испытания.»',
		'show scene achievements',
		'play sound fanfare',
		'Поздравляем!',
		'show scene rules_1',
		'Давай повторим',
		'show scene rules_2',
		'Давай повторим',
		'show scene rules_3',
		'Давай повторим',
		'show scene rgb(0, 0, 0)',
		'centered Спасибо за прохождение нашей новеллы!',
		'show scene qr',
		'Опрос',
		'end'	
	]

});

