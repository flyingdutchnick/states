'use strict';

var juke = angular.module('juke', ['ui.router'])

juke.config(function($stateProvider) {
	$stateProvider.state('albums', {
		url : '/albums',
		templateUrl: '/albums.html',
		resolve: {
			albums: function(AlbumFactory){
				return AlbumFactory.fetchAll()
			}
		},
		controller: 'AlbumsCtrl'
	});
	$stateProvider.state('artists', {
		url: '/artists',
		templateUrl: '/artists.html',
		resolve: {
			artists: function(ArtistFactory){
				return ArtistFactory.fetchAll()
			}
		},
		controller: 'ArtistsCtrl'
	});
	$stateProvider.state('album', {
		url: '/album/:id',
		templateUrl: '/album.html',
		controller: 'AlbumCtrl'
	});
	$stateProvider.state('artist', {
		url: '/artist/:id',
		templateUrl: '/artist.html',
		controller: 'ArtistCtrl'
	});
	$stateProvider.state('artist.albums', {
		url: '/artist/:id/albums',
		templateUrl: '/artistAlbums.html',
		controller: 'ArtistCtrl'
	});
	$stateProvider.state('artist.songs', {
		url: '/artist/:id/songs',
		templateUrl: '/artistSongs.html',
		controller: 'ArtistCtrl'
	});

})


