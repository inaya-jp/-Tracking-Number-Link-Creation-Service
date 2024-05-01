
/*--------------------------------------------------------------------------
	
	Script Name : Social Button Script
	Author      : FIRSTSTEP - Motohiro Tani
	Author URL  : https://www.1-firststep.com
	Create Date : 2015/11/24
	Version     : 3.0.1
	Last Update : 2020/12/11
	
--------------------------------------------------------------------------*/


function social_button() {
	
	/* var url   = encodeURI( location.href ); */
	var url   = "https://www.trackings.jp/";


	var twitter_url   = "https://www.trackings.jp/?utm_source=twitter&utm_medium=shared";
	var facebook_url   = "https://www.trackings.jp/?utm_source=faceboock&utm_medium=shared";
	var hatena_url   = "https://www.trackings.jp/?utm_source=hatena&utm_medium=shared";
	var pocket_url   = "https://www.trackings.jp/?utm_source=pocket&utm_medium=shared";
	var line_url   = "https://www.trackings.jp/?utm_source=line&utm_medium=shared";

	var title = encodeURI( document.title );
	
	
	var social_button = document.querySelectorAll( '.social-button' );
	
	
	if ( social_button.length == 0 ) {
		return;
	}
	
	
	social_button.forEach(function( li ) {
		
		if ( li.querySelector( '.twitter-tweet a' ) != null ) {
			li.querySelector( '.twitter-tweet a' ).setAttribute( 'href', '//twitter.com/share?text=' + title + '&url=' + encodeURIComponent(twitter_url) );
		}
		
		if ( li.querySelector( '.facebook-share a' ) != null ) {
			li.querySelector( '.facebook-share a' ).setAttribute( 'href', '//www.facebook.com/sharer.php?t=' + title + '&u=' + encodeURIComponent(facebook_url) );
		}
		
		if ( li.querySelector( '.hatena-bookmark a' ) != null ) {
			li.querySelector( '.hatena-bookmark a' ).setAttribute( 'href', '//b.hatena.ne.jp/add?mode=confirm&title=' + title + '&url=' + encodeURIComponent(hatena_url) );
		}
		
		if ( li.querySelector( '.pocket-save a' ) != null ) {
			li.querySelector( '.pocket-save a' ).setAttribute( 'href', 'http://getpocket.com/edit?title=' + title + '&url=' + encodeURIComponent(pocket_url) );
		}
		
		if ( li.querySelector( '.line-send a' ) != null ) {
			li.querySelector( '.line-send a' ).setAttribute( 'href', '//social-plugins.line.me/lineit/share?url=' + encodeURIComponent(line_url) );
		}
		
	});
	
}




if ( document.readyState == 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', function() {
		social_button();
	}, false );
} else {
	social_button();
}