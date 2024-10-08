function getTelegramID()
{
    const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
	return userId.toString();
}

function Vibrate()
{
	if (/Android/i.test(navigator.userAgent))
	{
		window.navigator.vibrate(100);
	}
}


function TMAdsInit()
{
	const appData = {
		app_key: "3aa98091e263b3bb4e2ec04dfb25390f",
		init_data: window.Telegram.WebApp.initData,
		init_data_unsafe: window.Telegram.WebApp.initDataUnsafe,
		debug_mode: false
	};
	
	TMAds.init(appData);
	//TMAds.init('3aa98091e263b3bb4e2ec04dfb25390f');
	gameInstance.SendMessage('TMAdsController', 'OnTMadsInit');
}

function TMAdsBannerShow(str)
{
	TMAds.show(str);
}

function TMAdsBannerHide(str)
{
	TMAds.hide();
}

function TMAdsCheckInterstitialAd()
{
	TMAds.checkInterstitialAd()
	.then(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnInterstitialReady','true');
	})
	.catch(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnInterstitialReady','false');
	});
}

function TMAdsShowInterstitialAd()
{
	TMAds.showInterstitialAd()
	.then(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnInterstitialResult','true');
	})
	.catch(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnInterstitialResult','false');
	});
}

function TMAdsCheckRewardedAd()
{
	TMAds.checkRewardedAd()
	.then(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnIsRewardedReady','true');
	})
	.catch(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnIsRewardedReady','false');
	});
}

function TMAdsShowRewardedAd()
{
	TMAds.showRewardedAd()
	.then(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnIsRewardedResult','true');
	})
	.catch(()=>{
		gameInstance.SendMessage('TMAdsController', 'OnIsRewardedResult','false');
	});
}
