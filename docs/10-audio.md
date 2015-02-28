# Audio

提供了音乐、音效的基本设置功能

```js
			var soundEnabled = {
				effect: 1,
				music: 1
			}
			
			var musicButton = cc.Button.create('res/button_music.png', {
				xy: [300, 200]
			});
			
			this.delegate(musicButton, 'click', function(){
				cc.audioManager.playEffect('res/menu_click.mp3')
				soundEnabled.music = !soundEnabled.music;
				cc.audioManager.setEnable(soundEnabled);
				soundEnabled.music ? cc.ungray(musicButton) : cc.gray(musicButton);              				
			});
			this.addChild(musicButton);
			
			var effectButton = cc.Button.create('res/button_sound.png', {
				xy: [500, 200]
			});

			this.delegate(effectButton, 'click', function(){
				cc.audioManager.playEffect('res/menu_click.mp3')
				soundEnabled.effect = !soundEnabled.effect;
				cc.audioManager.setEnable(soundEnabled);
				soundEnabled.effect ? cc.ungray(effectButton) : cc.gray(effectButton);              				
			});
			this.addChild(effectButton);
```
