{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();
    //player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    helper.playPauseAndUpdate(nextSong);
    //player.playPause(nextSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });


setInterval( () => {
  if (player.playState !== 'playing') { return; }
  const currentTime = player.getTime();
  const duration = player.getDuration();
  const percent = (currentTime / duration) * 100;
  $('#time-control .current-time').text( currentTime );
  $('#time-control input').val(percent);
//  $('#time-control .total-time').text( duration );
}, 1000);


  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex == -1) {
      return;
      //previousSongIndex = album.songs.length - 1;
    }

    const previousSong = album.songs[previousSongIndex];
    helper.playPauseAndUpdate(previousSong);
    //player.playPause(previousSong);
  });

}
