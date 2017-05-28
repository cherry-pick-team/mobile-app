import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ScrollView} from 'react-native';
import SongInfo from './SongInfo';
import SongLyrics from './SongLyrics';
import {primaryColor} from '../../shared/vars';

export const Song = ({song}) => (
	<View style={styles.container}>
		<SongLyrics song={song}/>
		<View style={styles.songInfo}>
			<SongInfo song={song}/>
		</View>
	</View>
);

Song.propTypes = {
	song: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: primaryColor
	},
	songInfo: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	}
});

export default Song;