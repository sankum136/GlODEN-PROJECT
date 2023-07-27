
		// NOW I CLICK album-poster TO GET CURRENT SONG ID
		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
			//console.log(dataSwitchId);

			// and now i use aplayer switch function see
			ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

			// aplayer play function
			// when i click any song to play
			ap.play();

			// click to slideUp player see
			$("#aplayer").addClass('showPlayer');
		});

		const ap = new APlayer({
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: [
		    {
		        name: 'Bigiluma',
		        artist: 'Artist Name ar rahman',
		        url: 'source1/ellaappugazhum_OWhrH3Gm.mp3',
			    cover: 'img/img/ar-rahman-birthday-special-5-things-that-will-surprise-you-about-this-icon.jpg'
		    },
			{
		        name: 'top songs',  // SONG NAME
		        artist: 'Artist Name:Ilayaraja', //ARTIST NAME
		        url: 'source1/Ilayaraja BGM - Love BGM.mp3', // PATH NAME AND SONG URL
		        cover: 'img/img/PTwcK02s_400x400.jpg' // COVER IMAGE
		    },
			{
				name: 'yuvan songs',
				artist: 'Artist Name:Yuvan_Shankar_Raja',
				url: 'source1/Seval_Kodi.mp3',
				cover: 'img/img/Yuvan_Shankar_Raja_Fanart.jpg',
			},
			{
				name: 'top songs',
				artist: 'Artist Name:Harris jayaraj',
				url: 'source1/Harris_Jayaraj_Hits_Vol_2__Jukebox___Melody_Songs___Love_Songs___Tamil_Hits___Tamil_Songs___Non_Stop(128k)-723.MP3',
				cover: 'img/img/download.jpg',
			},
			{
				name: 'anirudh songs:anirudh',
				artist: 'Artist Name:anirudh ravichander',
				url: 'source1/Why_This_Kolaveri_Di.mp3',
				cover: 'img/img/download (2).jpg',
			},
			{
				name: 'Spb songs',
				artist: 'Artist Name:SPB',
				url: 'source1/Oruvan-Oruvan-Mudhalali.mp3',
				cover: 'img/img/spb.png',
			},
			{
				name: 'Shreya Ghoshal songs',
				artist: 'Artist Name:Shreya Ghoshal',
				url: 'source1/Munbe-Vaa-En-Vaa.mp3',
				cover: 'img/img/download (3).jpg',
			},
			{
				name: 'K. J Yesudas',
				artist: 'Artist Name:K. J Yesudas',
				url: 'source1/Kanne__Kalaimane.mp3',
				cover: 'img/img/images (2).jpg',
			},
			{
				name: 'K. J Yesudas',
				artist: 'Artist Name:K. J Yesudas',
				url: 'source1/Kanne__Kalaimane.mp3',
				cover: 'img/img/images (2).jpg',
			},
		

		    ]
		});